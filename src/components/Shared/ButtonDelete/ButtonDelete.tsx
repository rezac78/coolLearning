// components/shared/buttonDelete/buttonDelete.tsx
import React from 'react';
import Button from '../Button/Button';
import { TrashIcon } from "@heroicons/react/24/solid";
interface DeleteButtonProps {
        onDelete: () => void;
}

export default function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <Button IdName="onDelete" className='text-dark-red hover:text-red-900' Click={onDelete} Type={'child'}>
      <TrashIcon width={20} height={20} />
    </Button>
  );
}
