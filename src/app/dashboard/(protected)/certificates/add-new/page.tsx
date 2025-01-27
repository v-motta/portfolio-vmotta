import { AddNewCertificateForm } from './certificate-form'

export default async function AddNewCertificatePage() {
  return (
    <div className="mx-auto flex w-full flex-col gap-8 md:w-1/2 lg:w-1/3">
      <AddNewCertificateForm />
    </div>
  )
}
