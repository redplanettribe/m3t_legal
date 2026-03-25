import type { ReactNode } from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { generateSEO } from "@/lib/seo"

const pagePath = "/legal/attendee/terms-and-conditions"

export const metadata = generateSEO({
  title: "Attendee App Terms & Conditions",
  description:
    "Terms for using the Multiticketing (m3t) attendee app—account email, optional name fields, identifiers for sessions/events and deliverables, and consent to platform communications and organizer contact.",
  url: pagePath,
  keywords: ["terms", "conditions", "attendee", "Multiticketing", "m3t"],
})

function ExternalLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <a href={href} rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:no-underline">
      {children}
    </a>
  )
}

export default function AttendeeTermsAndConditionsPage() {
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
        </p>

        <h1 className="mt-6 scroll-m-20 text-3xl font-semibold tracking-tight">Attendee App Terms &amp; Conditions</h1>
        <p className="text-sm text-muted-foreground">Last updated: March 25, 2026</p>

        <p className="mt-6 leading-7">
          These Terms &amp; Conditions (“Terms”) govern your use of the <strong>Multiticketing (m3t)</strong>{" "}
          <strong>attendee application</strong> operated by <strong>RedPlanetTribe</strong> (“we”, “us”). The attendee app is
          the experience where you view and register for events and sessions configured by organizers through our tools. Learn
          more at <ExternalLink href="https://multiticketing.com/">multiticketing.com</ExternalLink>. By accessing or using the
          attendee app, you agree to these Terms.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Account information</h2>
        <p className="leading-7">To use the attendee app, we may store the following information for your account:</p>
        <ul className="my-6 list-disc pl-6 leading-7">
          <li>
            <strong>Email address</strong> — a mandatory field that must be verifiable, used for your account and platform
            communications.
          </li>
          <li>
            <strong>Name</strong> — optional.
          </li>
          <li>
            <strong>Last name</strong> — optional.
          </li>
        </ul>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Identifiers, registrations, and deliverables</h2>
        <p className="leading-7">
          We use a <strong>user identifier</strong> to keep track of the sessions and events you register for through the
          attendee app. We also use your identifier to keep track of <strong>event deliverables</strong> associated with your
          registrations (for example, items or access granted based on your participation), as configured by the event
          organizers.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Communications and organizer access</h2>
        <p className="leading-7">
          When you access this platform, you consent to your email being used for <strong>platform communications</strong>{" "}
          related to the service and the events you interact with.
        </p>
        <p className="leading-7">
          When you register for an event, the event organizers and their event management team have access to your{" "}
          <strong>email address</strong> (and any optional name fields you provide). They may reach out to you regarding event
          logistics or other event-related messages. By using the attendee app and registering for events, you consent to event
          organizers having access to your email for these purposes.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Sharing</h2>
        <p className="leading-7">
          We do not share your personal data with third parties. The primary recipients of your attendee information within
          the platform are (a) you and (b) the organizers of events you register for, as described above.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Privacy</h2>
        <p className="leading-7">
          For more detail about how we handle personal information in the attendee app, see our{" "}
          <Link href="/legal/attendee/privacy-policy" className="text-primary underline underline-offset-4 hover:no-underline">
            Attendee App Privacy Policy
          </Link>
          .
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Changes</h2>
        <p className="leading-7">
          We may update these Terms from time to time. We will update the “Last updated” date when we do. Continued use of the
          attendee app after changes means you accept the updated Terms, to the extent permitted by law.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="leading-7">
          For questions about these Terms, contact{" "}
          <a href="mailto:info@redplanettribe.org" className="text-primary underline underline-offset-4 hover:no-underline">
            info@redplanettribe.org
          </a>
          .
        </p>
      </Container>
    </main>
  )
}

