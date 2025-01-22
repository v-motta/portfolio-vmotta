export default function CertificateLayout({
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
