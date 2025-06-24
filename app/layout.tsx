'use server';
import { MetadataRoute } from 'next/server';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}

export const metadata: MetadataRoute = {
  title: '생성된 웹사이트',
  description: '사용자 요청에 따라 생성된 웹사이트입니다.',
};