import type { ReactNode } from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { generateSEO } from "@/lib/seo"

const pagePath = "/legal/organizer/terms-and-conditions"

export const metadata = generateSEO({
  title: "Organizer App Terms & Conditions",
  description:
    "Terms for using the Multiticketing (m3t) organizer app—operational use during events, account details, attendee data handling expectations, and communications.",
  url: pagePath,
  keywords: ["terms", "conditions", "organizer", "Multiticketing", "m3t"],
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

export default function OrganizerTermsAndConditionsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background py-12 text-foreground">
      <Container size="sm" className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          <Link href="/" className="text-primary underline underline-offset-4 hover:no-underline">
            Home
          </Link>
          {" · "}
          <Link href="/legal/organizer/privacy-policy" className="text-primary underline underline-offset-4 hover:no-underline">
            Organizer privacy policy
          </Link>
          {" · "}
          <Link href="/legal/organizer/privacy-choices" className="text-primary underline underline-offset-4 hover:no-underline">
            Privacy choices
          </Link>
        </p>

        <h1 className="mt-6 scroll-m-20 text-3xl font-semibold tracking-tight">Organizer App Terms &amp; Conditions</h1>
        <p className="text-sm text-muted-foreground">Last updated: March 25, 2026</p>

        <p className="mt-6 leading-7">
          These Terms &amp; Conditions (“Terms”) govern your use of the <strong>Multiticketing (m3t)</strong>{" "}
          <strong>organizer application</strong> operated by <strong>RedPlanetTribe</strong> (“we”, “us”). The organizer app
          is the on-site and operational experience where staff check attendees in to events and sessions, control attendee
          flow, and manage in-event deliverables according to each event’s configuration. Learn more at{" "}
          <ExternalLink href="https://multiticketing.com/">multiticketing.com</ExternalLink>. By accessing or using the
          organizer app, you agree to these Terms.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Account information</h2>
        <p className="leading-7">To use the organizer app, we may store the following information for your account:</p>
        <ul className="my-6 list-disc pl-6 leading-7">
          <li>
            <strong>Name</strong> — to identify your organizer or staff account within the events you help run.
          </li>
          <li>
            <strong>Email address</strong> — to create and maintain your account, support sign-in and permissions tied to your
            role, and send operational messages about the service when needed.
          </li>
        </ul>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Operational use</h2>
        <p className="leading-7">
          The organizer app is intended for event operations, including check-in, attendance status, flow control, and
          deliverables. You are responsible for ensuring that your use of the organizer app (and any actions taken through it)
          complies with applicable laws, your agreements with your attendees, and your event policies.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Attendee data and acceptable use</h2>
        <p className="leading-7">
          While operating an event, the organizer app may display attendee information (such as names, emails, and registration
          or check-in status) as needed to run your event. You agree to use attendee information strictly for legitimate
          event-related purposes.
        </p>
        <p className="leading-7">
          You may not extract, export, scrape, or otherwise pull attendee email addresses from the platform for unrelated
          purposes or to build contact lists beyond what the product is intended to support.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Changes</h2>
        <p className="leading-7">
          We may update these Terms from time to time. We will update the “Last updated” date when we do. Continued use of the
          organizer app after changes means you accept the updated Terms, to the extent permitted by law.
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

