export default function ProjectLayout({
  children,
  sheet,
}: Readonly<{
  children: React.ReactNode
  sheet: React.ReactNode
}>) {
  return (
    <>
      {children}
      {sheet}
    </>
  )
}
