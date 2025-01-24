'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState } from '@/hooks/use-form-state'
import { AlertTriangle, Eye, EyeClosed } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { loginForm } from './action'

export default function LoginPage() {
  const router = useRouter()
  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    loginForm,
    () => router.push('/dashboard')
  )

  const [showPassword, setShowPassword] = useState(false)

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <div className="mx-auto w-96 space-y-16 pt-20">
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Log in failed!</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="space-y-1">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="text" />
            {errors?.email && (
              <p className="font-medium text-red-500 text-xs">
                {errors.email[0]}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <div className="flex items-center gap-2">
              <Input
                id="password"
                name="password"
                type={showPassword ? 'password' : 'text'}
              />

              <Button
                variant="outline"
                size="icon"
                type="button"
                className="border-zinc-400 dark:border-zinc-700"
                onClick={handleShowPassword}
              >
                {showPassword ? <EyeClosed /> : <Eye />}
              </Button>
            </div>
            {errors?.password && (
              <p className="font-medium text-red-500 text-xs">
                {errors.password[0]}
              </p>
            )}
          </div>

          <Button className="w-full" isPending={isPending}>
            Log in
          </Button>
        </div>
      </form>
    </div>
  )
}
