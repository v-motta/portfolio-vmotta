export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="lg:min-h-[calc(100vh-6rem-4rem)]">{children}</div>
}
