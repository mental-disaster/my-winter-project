import "./globals.css";
import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="flex flex-col items-center max-w-[1400px] w-full m-auto">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
