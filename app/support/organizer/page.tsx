import Link from "next/link"
import { Container } from "@/components/ui/container"
import { generateSEO } from "@/lib/seo"

const pagePath = "/support/organizer"

export const metadata = generateSEO({
  title: "Organizer App Support",
  description:
    "Support for the Multiticketing (m3t) organizer app—help with event access, check-in, flow control, and operational issues.",
  url: pagePath,
  keywords: ["support", "help", "organizer", "Multiticketing", "m3t"],
})

export default function OrganizerSupportPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background py-12 text-foreground">
      <Container size="sm" className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          <Link href="/" className="text-primary underline underline-offset-4 hover:no-underline">
            Home
          </Link>
          {" · "}
          <Link
            href="/legal/organizer/privacy-policy"
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            Organizer privacy policy
          </Link>
          {" · "}
          <Link href="/legal/organizer/delete-me" className="text-primary underline underline-offset-4 hover:no-underline">
            Delete your data
          </Link>
        </p>

        <h1 className="mt-6 scroll-m-20 text-3xl font-semibold tracking-tight">Organizer App Support</h1>
        <p className="text-sm text-muted-foreground">Last updated: March 25, 2026</p>

        <p className="mt-6 leading-7">
          If you need help with the <strong>Multiticketing (m3t) organizer app</strong> (day-of operations, check-in, flow,
          deliverables), email{" "}
          <a href="mailto:info@redplanettribe.org" className="text-primary underline underline-offset-4 hover:no-underline">
            info@redplanettribe.org
          </a>
          .
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">What we can help with</h2>
        <ul className="my-6 list-disc pl-6 leading-7">
          <li>Organizer/staff account access and permissions</li>
          <li>Seeing the right events and sessions (authorization and assignment issues)</li>
          <li>Check-in issues (attendees, sessions, deliverables)</li>
          <li>Flow control behaviors and operational edge cases</li>
          <li>Performance problems or suspected bugs</li>
        </ul>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Before you email (helps us respond faster)
        </h2>
        <p className="leading-7">Please include as many of the following as you can:</p>
        <ul className="my-6 list-disc pl-6 leading-7">
          <li>Your organizer/staff account email</li>
          <li>The event name (and environment if you have multiple: staging/production)</li>
          <li>The exact screen/action where it failed (and what you expected to happen)</li>
          <li>Whether it affects one device or the whole team</li>
          <li>Your device model and OS version</li>
          <li>The approximate time it happened and your time zone</li>
          <li>Photos/screenshots (for example: error states) if you can share them</li>
        </ul>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Event-day urgency</h2>
        <p className="leading-7">
          If this is <strong>blocking an active event</strong>, put <strong>[URGENT]</strong> in the subject line and include
          your event name plus what operation is blocked (for example: “Session check-in failing”).
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Privacy and security</h2>
        <p className="leading-7">
          For how we handle personal information for organizer accounts, see the{" "}
          <Link
            href="/legal/organizer/privacy-policy"
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            Organizer App Privacy Policy
          </Link>
          . If you suspect unauthorized access to an organizer account or you found a security issue, email{" "}
          <a href="mailto:info@redplanettribe.org" className="text-primary underline underline-offset-4 hover:no-underline">
            info@redplanettribe.org
          </a>{" "}
          with “Security” in the subject line.
        </p>
      </Container>
    </main>
  )
}

