import { AddNewCertificateForm } from './add-new-certificate-form'

export default function AddNewCertificatePage() {
  return (
    <div className="mx-auto flex w-1/3 flex-col gap-10 py-10">
      <h1 className="text-center font-jet-brains-mono text-2xl">
        Add new certificate
      </h1>

      <AddNewCertificateForm />
    </div>
  )
}
