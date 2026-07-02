import { useState, type FormEvent } from 'react'
import { Download, Loader2, Mail } from 'lucide-react'
import { submitToKit } from '@/config/kit'

interface EmailCaptureFormProps {
  tag: string
  fields?: Record<string, string | number>
  onSuccess: () => void
}

type Status = 'idle' | 'submitting' | 'error'

export function EmailCaptureForm({ tag, fields, onSuccess }: EmailCaptureFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setStatus('submitting')
    const ok = await submitToKit({ email, tag, fields })
    if (ok) {
      onSuccess()
    } else {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
            aria-hidden="true"
          />
          <label htmlFor={`email-${tag}`} className="sr-only">
            Email address
          </label>
          <input
            id={`email-${tag}`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-lg border border-text-muted/20 pl-10 pr-4 py-2.5 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent-light disabled:opacity-60 px-6 py-2.5 text-sm font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 flex-shrink-0"
        >
          {status === 'submitting' ? (
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
          ) : (
            <Download size={16} aria-hidden="true" />
          )}
          Get My PDF Report
        </button>
      </div>
      {status === 'error' && (
        <p className="text-xs text-accent-warm" role="alert">
          Something went wrong — please try again, or email prakash@redprana.com directly.
        </p>
      )}
    </form>
  )
}
