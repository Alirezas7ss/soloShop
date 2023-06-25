'use client'
import { usePathname } from "next/navigation";
import React from "react";
interface RootLayoutProps {
  children: React.ReactNode;
}
function PermanentLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  return (
    <div>
      {!(
        ["/404", "/professor:path*"].includes(pathname) ||
        pathname.includes("new-password") ||
        pathname.includes("sign-up") ||
        pathname.includes("sign-in")
      ) && <div>{children}</div>}
    </div>
  );
}

export default PermanentLayout;
