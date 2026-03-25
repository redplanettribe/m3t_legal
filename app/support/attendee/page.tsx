import Link from "next/link"
import { Container } from "@/components/ui/container"
import { generateSEO } from "@/lib/seo"

const pagePath = "/support/attendee"

export const metadata = generateSEO({
  title: "Attendee App Support",
  description:
    "Support for the Multiticketing (m3t) attendee app—help with sign-in, joining events, bookings, and account requests.",
  url: pagePath,
  keywords: ["support", "help", "attendee", "Multiticketing", "m3t"],
})

export default function AttendeeSupportPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background py-12 text-foreground">
      <Container size="sm" className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          <Link href="/" className="text-primary underline underline-offset-4 hover:no-underline">
            Home
          </Link>
          {" · "}
          <Link href="/legal/attendee/privacy-policy" className="text-primary underline underline-offset-4 hover:no-underline">
            Attendee privacy policy
          </Link>
          {" · "}
          <Link href="/legal/attendee/delete-me" className="text-primary underline underline-offset-4 hover:no-underline">
            Delete your data
          </Link>
        </p>

        <h1 className="mt-6 scroll-m-20 text-3xl font-semibold tracking-tight">Attendee App Support</h1>
        <p className="text-sm text-muted-foreground">Last updated: March 25, 2026</p>

        <p className="mt-6 leading-7">
          If you need help with the <strong>Multiticketing (m3t) attendee app</strong>, email{" "}
          <a href="mailto:info@redplanettribe.org" className="text-primary underline underline-offset-4 hover:no-underline">
            info@redplanettribe.org
          </a>
          .
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">What we can help with</h2>
        <ul className="my-6 list-disc pl-6 leading-7">
          <li>Sign-in issues and account access</li>
          <li>Joining an event, viewing the agenda, and booking sessions</li>
          <li>Account requests like data access or deletion (where available)</li>
          <li>Suspected bugs, confusing behavior, or accessibility issues</li>
        </ul>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Before you email (helps us respond faster)
        </h2>
        <p className="leading-7">Please include as many of the following as you can:</p>
        <ul className="my-6 list-disc pl-6 leading-7">
          <li>Your account email (the one you used to sign in)</li>
          <li>The event name (and city/date if you know it)</li>
          <li>What you expected to happen vs what happened</li>
          <li>Your device model and OS version</li>
          <li>Screenshots or screen recordings (if comfortable sharing them)</li>
          <li>The approximate time it happened and your time zone</li>
        </ul>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Tickets, refunds, and event-specific questions
        </h2>
        <p className="leading-7">
          Multiticketing helps organizers run events, but <strong>each event is operated by its organizer</strong>. If your
          question is about an event&apos;s policy (for example: entry rules, schedule changes, or refunds), the fastest path
          is usually to contact the <strong>event organizer</strong> directly.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Privacy and security</h2>
        <p className="leading-7">
          For how we handle personal information in the attendee app, see the{" "}
          <Link href="/legal/attendee/privacy-policy" className="text-primary underline underline-offset-4 hover:no-underline">
            Attendee App Privacy Policy
          </Link>
          . If you believe your account may be compromised or you found a security issue, email us at{" "}
          <a href="mailto:info@redplanettribe.org" className="text-primary underline underline-offset-4 hover:no-underline">
            info@redplanettribe.org
          </a>{" "}
          with “Security” in the subject line.
        </p>
      </Container>
    </main>
  )
}

