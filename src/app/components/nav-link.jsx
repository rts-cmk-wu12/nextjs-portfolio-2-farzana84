"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, className, children, ...props }) {
  const path = usePathname();

  const isActive = path === href;
  const activeStyle = isActive ? "  text-active" : " ";

  return (
    <Link href={href} className={className + activeStyle} {...props}>
      {children}
    </Link>
  );
}
