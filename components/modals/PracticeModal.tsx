'use client';

import { usePracticeModal } from '@/store/usePracticeModal';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import Image from 'next/image';
import { Button } from '../ui/button';

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className='max-w-md'>
        <DialogHeader>
          <div className='flex items-center justify-center w-full mb-5'>
            <Image src='/heart.svg' alt='Heart' height={100} width={100} />
          </div>
          <DialogTitle className='text-center font-bold text-2xl'>
            Practice lesson
          </DialogTitle>
          <DialogDescription className='text-center text-base'>
            Use practice lessons to regain hearts and points. You cannot loose
            hearts or points in practice lessons.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='mb-4'>
          <div className='w-full flex flex-col gap-y-4 focus:outline-none'>
            <Button
              variant='primary'
              className='w-full focus:outline-none'
              size='lg'
              onClick={close}>
              I understand
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
