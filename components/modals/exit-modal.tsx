"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useExitModal } from "@/store/use-exit-modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";

const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false)
  const { isOpen, close } = useExitModal();

  useEffect(() => setIsClient(true), []);

  if(!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image
              src='/mascot_sad.svg'
              alt="mascot"
              height={80}
              width={80}
            />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Wait, don&apos;t go
          </DialogTitle>
          <DialogDescription>
            You&apos;re about to leave the lesson. Are you sure?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              className="w-full"
              size='lg'
              variant="primary"
              onClick={close}
            >
              Keep learning
            </Button>
            <Button
              className="w-full"
              size='lg'
              variant="dangerOutline"
              onClick={() => {
                close();
                router.push('/learn');
              }}
            >
              End session
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ExitModal