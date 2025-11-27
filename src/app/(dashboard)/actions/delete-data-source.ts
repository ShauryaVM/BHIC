"use server";

import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function deleteCustomDataSourceAction(dataSourceId: string) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return { success: false, message: 'Authentication required' };
  }
  if (session.user.role !== 'ADMIN') {
    return { success: false, message: 'Admin access required' };
  }

  try {
    // Cascade delete will automatically remove all CustomDataRecord entries
    await prisma.customDataSource.delete({
      where: { id: dataSourceId }
    });

    revalidatePath('/settings/data-sources');
    return { success: true, message: 'Data source deleted successfully' };
  } catch (error) {
    console.error('Failed to delete custom data source:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to delete data source'
    };
  }
}

