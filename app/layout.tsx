import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="max-w-[1500px] mx-auto px-10">{children}</body>
    </html>
  );
}
