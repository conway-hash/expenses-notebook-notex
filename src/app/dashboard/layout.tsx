"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState<string>('shadow-[inset_0px_200px_400px_-70px_rgba(168,162,158,0.7)]');

  useEffect(() => {
    const colorMap: Record<string, string> = {
      '/dashboard/stats/electricity': 'shadow-[inset_0px_200px_400px_-70px_rgba(250,204,21,0.7)]',
      '/dashboard/stats/gas': 'shadow-[inset_0px_200px_400px_-70px_rgba(255,80,80,0.7)]',
      '/dashboard/stats/water': 'shadow-[inset_0px_200px_400px_-70px_rgba(56,189,248,0.7)]',
    };

    setBgColor(colorMap[pathname] || 'shadow-[inset_0px_200px_400px_-70px_rgba(168,162,158,0.7)]');
  }, [pathname]);

  return (
    <section>
      <div className={`${bgColor} transition-shadow duration-500 fixed top-0 left-0 w-dvw h-dvh z-[-1]`}></div>
      {children}
    </section>
  );
}
