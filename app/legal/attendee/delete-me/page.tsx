import Link from "next/link"
import { Container } from "@/components/ui/container"
import { generateSEO } from "@/lib/seo"

const pagePath = "/legal/attendee/delete-me"

export const metadata = generateSEO({
  title: "Delete your attendee data",
  description:
    "How to completely delete your personal information from the Multiticketing attendee app using Delete account in the avatar menu.",
  url: pagePath,
  keywords: ["delete account", "attendee", "privacy", "Multiticketing", "m3t"],
})

export default function AttendeeDeleteMePage() {
  return (
    <main id="main-content" className="min-h-screen bg-background py-12 text-foreground">
      <Container size="sm" className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          <Link href="/" className="text-primary underline underline-offset-4 hover:no-underline">
            Home
          </Link>
          {" · "}
          <Link
            href="/legal/attendee/privacy-policy"
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            Attendee privacy policy
          </Link>
          {" · "}
          <Link
            href="/legal/attendee/privacy-choices"
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            Privacy choices
          </Link>
        </p>

        <h1 className="mt-6 scroll-m-20 text-3xl font-semibold tracking-tight">Delete your attendee data</h1>
        <p className="text-sm text-muted-foreground">Last updated: March 24, 2026</p>

        <p className="mt-6 leading-7">
          You can <strong>completely delete</strong> all personal information we hold about you in connection with the{" "}
          <strong>Multiticketing attendee app</strong>. Account deletion removes your attendee profile and associated data
          from our systems for that app, subject to any limited retention we may be required to keep by law.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">How to delete your account</h2>
        <p className="leading-7">
          Deletion is available <strong>only inside the app</strong>. We do not complete full account deletion from this
          website or by email request alone—you need to be signed in and use the in-app control.
        </p>
        <ol className="my-6 list-decimal pl-6 leading-7">
          <li>Open the <strong>Multiticketing attendee</strong> app on your device.</li>
          <li>
            Tap your <strong>profile picture or avatar</strong> to open the account menu.
          </li>
          <li>
            In that menu, tap <strong>Delete account</strong> and follow the prompts to confirm.
          </li>
        </ol>
        <p className="leading-7">
          If you have questions about privacy or this process, see our{" "}
          <Link href="/legal/attendee/privacy-policy" className="text-primary underline underline-offset-4 hover:no-underline">
            Attendee App Privacy Policy
          </Link>{" "}
          or email{" "}
          <a href="mailto:info@redplanettribe.org" className="text-primary underline underline-offset-4 hover:no-underline">
            info@redplanettribe.org
          </a>
          .
        </p>
      </Container>
    </main>
  )
}
