import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { TextArea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { PageHeader, PageHeaderMeta } from '@/components/layout/page-header';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { INTEGRATION_SETTING_DEFINITIONS, listSecureSettings } from '@/lib/secure-settings';
import { updateSecureSettingAction, updateUserRoleAction } from '@/app/(dashboard)/settings/actions';

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/auth/signin');
  }
  if (session.user.role !== 'ADMIN') {
    redirect('/');
  }

  const [settings, users] = await Promise.all([
    listSecureSettings(),
    prisma.user.findMany({
      orderBy: { role: 'desc' }
    })
  ]);

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Administration"
        title="Settings"
        description="Manage integrations, secrets, and team access."
      >
        <PageHeaderMeta
          items={[
            {
              label: 'Admins',
              value: String(users.filter((user) => user.role === 'ADMIN').length)
            },
            {
              label: 'Managed settings',
              value: String(INTEGRATION_SETTING_DEFINITIONS.length),
              helper: 'Redeploy required after edits'
            }
          ]}
        />
      </PageHeader>

      <Card
        title="Integration credentials"
        description="Values are encrypted at rest. Updating a value does not automatically redeploy—copy it into Netlify/Vercel env vars afterward."
      >
        <div className="space-y-6">
          {settings.map((setting) => (
            <form key={setting.key} action={updateSecureSettingAction} className="space-y-3">
              <input type="hidden" name="key" value={setting.key} />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{setting.label}</p>
                  <p className="text-xs text-slate-500">{setting.description}</p>
                </div>
                <p className="text-xs text-slate-500">
                  {setting.hasValue ? `Stored (${setting.preview ?? '••••'})` : 'Not set'}
                  {setting.updatedAt ? ` · Updated ${setting.updatedAt.toLocaleDateString()}` : ''}
                </p>
              </div>
              {setting.type === 'textarea' ? (
                <TextArea name="value" placeholder={setting.placeholder} rows={4} required />
              ) : (
                <Input name="value" type="text" required placeholder="Enter secret value" />
              )}
              <Button type="submit" size="sm">
                Save value
              </Button>
            </form>
          ))}
          <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 text-xs text-yellow-900">
            <p className="font-semibold">Remember to redeploy</p>
            <p>
              After updating any secret, copy the new value into your hosting provider environment variables (e.g.,
              Netlify/Vercel) and trigger a redeploy so the runtime picks up the change.
            </p>
          </div>
        </div>
      </Card>

      <Card title="Team access" description="Promote or demote accounts. Only admins can see this panel.">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
                <th className="px-2 py-2">Name</th>
                <th className="px-2 py-2">Email</th>
                <th className="px-2 py-2">Role</th>
                <th className="px-2 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-slate-100">
                  <td className="px-2 py-3 font-medium text-slate-900">{user.name ?? 'Unknown'}</td>
                  <td className="px-2 py-3 text-slate-600">{user.email}</td>
                  <td className="px-2 py-3 text-slate-600">{user.role}</td>
                  <td className="px-2 py-3">
                    <form action={updateUserRoleAction} className="flex items-center gap-3">
                      <input type="hidden" name="userId" value={user.id} />
                      <Select name="role" defaultValue={user.role}>
                        <option value="ADMIN">Admin</option>
                        <option value="STAFF">Staff</option>
                      </Select>
                      <Button type="submit" size="sm" variant="secondary">
                        Update
                      </Button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Only users with <span className="font-semibold">ADMIN</span> roles can access this page. Use Google Workspace to
          create new accounts, then promote them here if needed.
        </p>
      </Card>
    </div>
  );
}


