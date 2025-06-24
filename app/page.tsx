'use client';
import { cn } from '@/lib/utils';


export default function HomePage() {
  return (
    <main className={cn(`flex flex-col items-center p-8`)}>
      <h1 className={cn(`text-3xl font-bold`)}>메인 페이지</h1>
    </main>
  );
}