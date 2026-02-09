"use client";

import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Drawer as ShadcnDrawer,
} from "@/components/ui/drawer";

interface CustomDrawerProps {
  title: string;
  children: React.ReactNode;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Drawer({
  title,
  children,
  trigger,
  open,
  onOpenChange,
}: CustomDrawerProps) {
  return (
    <ShadcnDrawer open={open} onOpenChange={onOpenChange} direction="right">
      {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}
      <DrawerContent className="overflow-y-auto max-w-3xl">
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <div className="mt-6 px-4 pb-4">{children}</div>
      </DrawerContent>
    </ShadcnDrawer>
  );
}
