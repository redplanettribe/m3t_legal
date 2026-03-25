import Link from "next/link"
import { Container } from "@/components/ui/container"
import { generateSEO } from "@/lib/seo"

const pagePath = "/legal/attendee/privacy-choices"

export const metadata = generateSEO({
  title: "Attendee App Privacy Choices",
  description:
    "Your privacy choices in the Multiticketing (m3t) attendee app: access/update details, delete your data, and communication preferences.",
  url: pagePath,
  keywords: ["privacy choices", "attendee", "delete account", "Multiticketing", "m3t"],
})

export default function AttendeePrivacyChoicesPage() {
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

        <h1 className="mt-6 scroll-m-20 text-3xl font-semibold tracking-tight">Attendee App Privacy Choices</h1>
        <p className="text-sm text-muted-foreground">Last updated: March 25, 2026</p>

        <p className="mt-6 leading-7">
          Multiticketing (m3t) is built to run complex, multi-track events—fast registration, flow control, and digital
          credentials. This page summarizes the privacy choices available to you in the <strong>attendee app</strong>.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Your choices</h2>
        <ul className="my-6 list-disc pl-6 leading-7">
          <li>
            <strong>Access and update your profile</strong> — you may be able to view and edit your account information
            directly in the attendee app (for example, name fields).
          </li>
          <li>
            <strong>Completely delete your data</strong> — you can delete your attendee account and associated data using the
            in-app delete control. See{" "}
            <Link href="/legal/attendee/delete-me" className="text-primary underline underline-offset-4 hover:no-underline">
              Delete your data
            </Link>
            .
          </li>
          <li>
            <strong>Event communications</strong> — when you register for an event, the organizer team may contact you about
            event logistics and operations using the email tied to your registration. This is part of operating the event.
          </li>
          <li>
            <strong>Security and technical data</strong> — standard technical information (like IP address and timestamps)
            may be processed to deliver and secure the service.
          </li>
        </ul>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Need help?</h2>
        <p className="leading-7">
          For details on what we collect and why, read the{" "}
          <Link href="/legal/attendee/privacy-policy" className="text-primary underline underline-offset-4 hover:no-underline">
            Attendee App Privacy Policy
          </Link>
          . For privacy questions or requests that you can’t complete in-app, email{" "}
          <a href="mailto:info@redplanettribe.org" className="text-primary underline underline-offset-4 hover:no-underline">
            info@redplanettribe.org
          </a>
          .
        </p>
      </Container>
    </main>
  )
}
