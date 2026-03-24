import Link from "next/link"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO()

const linkClass =
  "text-primary underline underline-offset-4 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

export default function HomePage() {
  return (
    <main id="main-content" className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="max-w-xl text-center text-2xl font-semibold leading-tight text-foreground">
        Legal documents for the Multiticketing software system
      </h1>
      <p className="mt-3 max-w-lg text-center text-muted-foreground leading-relaxed">
        This site hosts policies and other legal documents for{" "}
        <strong>Multiticketing (m3t)</strong>—the open-source event management platform behind{" "}
        <a
          href="https://multiticketing.com/"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:no-underline"
        >
          multiticketing.com
        </a>
        .
      </p>

      <nav aria-label="Legal" className="mt-10 w-full max-w-xs space-y-6 text-left">
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-foreground">Attendee App</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            <li>
              <Link href="/legal/attendee/privacy-policy/" className={linkClass}>
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/legal/attendee/delete-me/" className={linkClass}>
                Delete your data
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-foreground">Organizer App</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            <li>
              <Link href="/legal/organizer/privacy-policy/" className={linkClass}>
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/legal/organizer/delete-me/" className={linkClass}>
                Delete your data
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  )
}
