// TODO(prakash): Kit (formerly ConvertKit) isn't connected yet. Once you create a Kit
// account and a form for the Resources page:
//   1. Replace KIT_FORM_ID below with your real form ID (Kit dashboard → Grow →
//      Landing Pages & Forms → your form → Embed).
//   2. Verify the endpoint/payload shape against Kit's current API docs — the classic
//      ConvertKit form-submission contract is assumed below but may have changed.
//   3. In Kit, create a tag per checklist (e.g. "resource:iso42001-gap") and a custom
//      field for the score (e.g. "checklist_score") so you can wire a Zapier/Make
//      automation that emails you whenever someone completes a checklist.
export const KIT_FORM_ID = 'REPLACE_WITH_KIT_FORM_ID'

export interface KitSubmission {
  email: string
  tag: string
  fields?: Record<string, string | number>
}

export async function submitToKit({ email, tag, fields }: KitSubmission): Promise<boolean> {
  if (KIT_FORM_ID === 'REPLACE_WITH_KIT_FORM_ID') {
    // Kit isn't wired up yet — don't block the user from getting their report locally.
    return true
  }

  try {
    const response = await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email_address: email,
        tags: [tag],
        fields,
      }),
    })
    return response.ok
  } catch {
    return false
  }
}
