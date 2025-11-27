"use client";

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { deleteCustomDataSourceAction } from '@/app/(dashboard)/actions/delete-data-source';
import { Trash2, Loader2 } from 'lucide-react';

interface DeleteDataSourceButtonProps {
  dataSourceId: string;
  dataSourceName: string;
}

export function DeleteDataSourceButton({ dataSourceId, dataSourceName }: DeleteDataSourceButtonProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [showConfirm, setShowConfirm] = useState(false);

  function handleDelete() {
    if (!showConfirm) {
      setShowConfirm(true);
      return;
    }

    startTransition(async () => {
      const result = await deleteCustomDataSourceAction(dataSourceId);
      if (result.success) {
        router.refresh();
      } else {
        alert(result.message);
        setShowConfirm(false);
      }
    });
  }

  if (showConfirm) {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-2">
        <p className="flex-1 text-xs text-red-700">
          Delete "{dataSourceName}"? This will remove all imported records.
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setShowConfirm(false)}
          disabled={pending}
          className="h-7 text-xs"
        >
          Cancel
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={handleDelete}
          disabled={pending}
          className="h-7 border-red-300 bg-red-50 text-xs text-red-700 hover:bg-red-100"
        >
          {pending ? (
            <>
              <Loader2 className="mr-1 h-3 w-3 animate-spin" />
              Deleting...
            </>
          ) : (
            'Delete'
          )}
        </Button>
      </div>
    );
  }

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={handleDelete}
      disabled={pending}
      className="w-full text-xs text-red-600 hover:bg-red-50 hover:text-red-700"
    >
      <Trash2 className="mr-1 h-3 w-3" />
      Delete
    </Button>
  );
}

