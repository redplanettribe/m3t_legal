import type { ReactNode } from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { generateSEO } from "@/lib/seo"

const policyPath = "/legal/organizer/privacy-policy"

export const metadata = generateSEO({
  title: "Organizer App Privacy Policy",
  description:
    "How RedPlanetTribe handles name and email for the Multiticketing organizer app—check-in, flow, and deliverables during events; no payments.",
  url: policyPath,
  keywords: ["privacy", "organizer", "Multiticketing", "m3t"],
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

export default function OrganizerPrivacyPolicyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background py-12 text-foreground">
      <Container size="sm" className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          <Link href="/" className="text-primary underline underline-offset-4 hover:no-underline">
            Home
          </Link>
        </p>

        <h1 className="mt-6 scroll-m-20 text-3xl font-semibold tracking-tight">Organizer App Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last updated: March 22, 2026</p>

        <p className="mt-6 leading-7">
          This policy describes how <strong>RedPlanetTribe</strong> (“we”, “us”) handles personal information when you use
          the <strong>organizer application</strong> for <strong>Multiticketing (m3t)</strong>—the on-site and
          operational experience where staff <strong>check attendees in</strong> to an event and its sessions,{" "}
          <strong>control attendee flow</strong>, and manage <strong>deliverables</strong> during the event according to
          each event&apos;s configuration. Learn more about the system at{" "}
          <ExternalLink href="https://multiticketing.com/">multiticketing.com</ExternalLink>. Events are created and managed
          using <ExternalLink href="https://manager.multiticketing.com/">M3T Admin</ExternalLink> (
          <span className="whitespace-nowrap">manager.multiticketing.com</span>). The organizer app is{" "}
          <strong>currently free to use</strong>. We <strong>do not</strong> collect, process, or store payment card or
          payment account details in the organizer app—we do not operate payments there.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Information we collect</h2>
        <ul className="my-6 list-disc pl-6 leading-7">
          <li>
            <strong>Name</strong> — to identify your organizer or staff account in the context of the events you help run.
          </li>
          <li>
            <strong>Email address</strong> — to create and maintain your account, support sign-in and permissions tied to
            your role, and send operational messages about the service when needed.
          </li>
        </ul>
        <p className="leading-7">
          When you use the app over the internet, standard technical information (for example, IP address, device or
          browser type, and timestamps) may be processed automatically by our hosting and networking infrastructure as part
          of delivering the service and keeping it secure.
        </p>
        <p className="leading-7">
          While you operate an event, the app may display or process <strong>attendee information</strong> (such as names,
          emails, registration or check-in status, and session participation) strictly as needed to run check-in, flow, and
          deliverables. That processing happens under the event&apos;s setup and the agreements between organizers and
          attendees; attendees are informed through the attendee experience and related policies.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">How we use information</h2>
        <p className="leading-7">We use the information above to:</p>
        <ul className="my-6 list-disc pl-6 leading-7">
          <li>Provide the organizer app and your access to events you are authorized to manage</li>
          <li>Support check-in to events and sessions, flow control, and in-event deliverables as configured</li>
          <li>Communicate with you about the service or your events where appropriate</li>
          <li>Maintain security, troubleshoot issues, and comply with applicable law</li>
        </ul>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Sharing</h2>
        <p className="leading-7">
          Your <strong>name and email</strong> as an organizer or staff user may be visible to other members of the same
          event team or account, depending on how the event owner configures access—so they can coordinate operations during
          the event.
        </p>
        <p className="leading-7">
          When attendees use the attendee app, they agree that the event management team may use their email to communicate
          about the event. As a user of the organizer app, you <strong>may not extract, export, scrape, or otherwise pull</strong>{" "}
          attendee email addresses from the platform for unrelated purposes or to build contact lists beyond what the product
          is intended to support. If you obtain someone&apos;s email <strong>through other channels</strong>, any use of that
          information happens <strong>outside this software system</strong> and is between you and that person—not something
          this policy can control.
        </p>
        <p className="leading-7">
          We may also share personal information with <strong>service providers</strong> that host or operate all or part of
          the platform on our behalf, and when <strong>required by law</strong> or to protect the rights, safety, and integrity
          of the service. We do not sell your personal information.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Security and retention</h2>
        <p className="leading-7">
          We take reasonable measures designed to protect personal information. We retain it only as long as needed to
          provide the service, support events you interact with, and meet legal or operational requirements.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Your choices</h2>
        <p className="leading-7">
          You can always request that we <strong>completely delete</strong> your personal data associated with the organizer
          app. You may also be able to access or update some information directly in the app. If you need help deleting your
          data or have other requests, contact us using the email below.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Children</h2>
        <p className="leading-7">
          The service is not directed at children. If you believe a child has provided us personal information, please
          contact us and we will take appropriate steps.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Changes</h2>
        <p className="leading-7">
          We may update this policy from time to time. We will adjust the “Last updated” date when we do. Continued use of
          the app after changes means you accept the updated policy, to the extent permitted by law.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="leading-7">
          For questions, complaints, or suggestions about this policy or our handling of organizer data, email{" "}
          <a href="mailto:info@redplanettribe.org" className="text-primary underline underline-offset-4 hover:no-underline">
            info@redplanettribe.org
          </a>
          .
        </p>
      </Container>
    </main>
  )
}
