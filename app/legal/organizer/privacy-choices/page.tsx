import Link from "next/link"
import { Container } from "@/components/ui/container"
import { generateSEO } from "@/lib/seo"

const pagePath = "/legal/organizer/privacy-choices"

export const metadata = generateSEO({
  title: "Organizer App Privacy Choices",
  description:
    "Your privacy choices in the Multiticketing (m3t) organizer app: access/update details, delete your data, and team access/permissions.",
  url: pagePath,
  keywords: ["privacy choices", "organizer", "delete account", "Multiticketing", "m3t"],
})

export default function OrganizerPrivacyChoicesPage() {
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
        </p>

        <h1 className="mt-6 scroll-m-20 text-3xl font-semibold tracking-tight">Organizer App Privacy Choices</h1>
        <p className="text-sm text-muted-foreground">Last updated: March 25, 2026</p>

        <p className="mt-6 leading-7">
          Multiticketing (m3t) helps event teams run complex programs—check-in, flow control, and deliverables during the
          event. This page summarizes the privacy choices available to you in the <strong>organizer app</strong>.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Your choices</h2>
        <ul className="my-6 list-disc pl-6 leading-7">
          <li>
            <strong>Access and update your profile</strong> — you may be able to view and edit your account information
            directly in the organizer app.
          </li>
          <li>
            <strong>Completely delete your data</strong> — you can delete your organizer account and associated data using the
            in-app delete control. See{" "}
            <Link href="/legal/organizer/delete-me" className="text-primary underline underline-offset-4 hover:no-underline">
              Delete your data
            </Link>
            .
          </li>
          <li>
            <strong>Security and technical data</strong> — standard technical information (like IP address and timestamps)
            may be processed to deliver and secure the service.
          </li>
        </ul>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Need help?</h2>
        <p className="leading-7">
          For details on what we collect and why, read the{" "}
          <Link
            href="/legal/organizer/privacy-policy"
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            Organizer App Privacy Policy
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
