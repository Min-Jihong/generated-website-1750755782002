'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';


const navigation = [
  { href: '/', label: '메인 페이지', icon: LucideIcon.Home },
];

export default function Sidebar() {
  return (
    <nav className="flex flex-col h-screen border-r border-gray-200 p-4">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}