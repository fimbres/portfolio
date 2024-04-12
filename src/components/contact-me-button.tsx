
import { isModalOpen } from '@/stores/modal-store';
import { useStore } from '@nanostores/react';

import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface ContactMeButtonProps {
  type?: "link" | "primary";
}

export const ContactMeButton: React.FC<ContactMeButtonProps> = ({ type = "link" }) => {
  const $isModalOpen = useStore(isModalOpen);

  return (
    <Button variant={type} onClick={() => isModalOpen.set(!$isModalOpen)} size="lg" className={cn(type === "primary" && "w-full")}>Contact Me</Button>
  )
}
