import { AddNewCertificateForm } from './add-new-certificate-form'

export default async function AddNewCertificatePage() {
  const response = await fetch('http://localhost:3000/api/s3/presigned', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  }).then(res => res.json())

  console.log(response)

  return (
    <div className="mx-auto flex w-1/3 flex-col gap-10 py-10">
      <h1 className="text-center font-jet-brains-mono text-2xl">
        Add new certificate
      </h1>

      <AddNewCertificateForm />
    </div>
  )
}
