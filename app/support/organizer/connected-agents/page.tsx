import Link from "next/link"
import type { ReactNode } from "react"
import { Container } from "@/components/ui/container"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { generateSEO } from "@/lib/seo"

const pagePath = "/support/organizer/connected-agents"
const mcpUrl = "https://mcp.multiticketing.com/mcp"
const linkClass = "text-primary underline underline-offset-4 hover:no-underline"

export const metadata = generateSEO({
  title: "Build your Agenda with your AI app",
  description:
    "Connect Claude or ChatGPT to MultiTicketing through its MCP server so your AI app can build and edit the Agenda of the Events you choose.",
  url: pagePath,
  keywords: ["MCP", "Claude", "ChatGPT", "connector", "Connected Agent", "Agenda", "Multiticketing", "m3t"],
})

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  )
}

function H3({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h3 id={id} className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h3>
  )
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 leading-7">{children}</p>
}

function Ul({ children }: { children: ReactNode }) {
  return <ul className="my-6 list-disc space-y-2 pl-6 leading-7">{children}</ul>
}

function Ol({ children }: { children: ReactNode }) {
  return <ol className="my-6 list-decimal space-y-2 pl-6 leading-7">{children}</ol>
}

function Code({ children }: { children: ReactNode }) {
  return <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm [overflow-wrap:anywhere]">{children}</code>
}

const takeBackRows = [
  {
    did: "Changed a field",
    undo: "Puts back the earlier value if the field still holds what the agent wrote",
  },
  {
    did: "Created a row",
    undo: "Removes it if every field still holds what the agent wrote and it carries nothing (no bookings, check-ins, reviews or questions; a Room with no Sessions)",
  },
  {
    did: "Removed a row",
    undo: "Puts it back with the same id and its links, unless that would now make a twin",
  },
  {
    did: "Canceled or restored a Session",
    undo: "Flips the status back if it is still as the agent left it",
  },
  {
    did: "Created a Tag",
    undo: "Leaves it",
  },
]

export default function ConnectedAgentsSupportPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background py-12 text-foreground">
      <Container size="sm">
        <p className="text-sm text-muted-foreground">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          {" · "}
          <Link href="/support/organizer" className={linkClass}>
            Organizer support
          </Link>
          {" · "}
          <Link href="/legal/organizer/privacy-policy" className={linkClass}>
            Organizer privacy policy
          </Link>
        </p>

        <h1 className="mt-6 scroll-m-20 text-3xl font-semibold tracking-tight">Build your Agenda with your AI app</h1>
        <p className="text-sm text-muted-foreground">Last updated: November 12, 2026</p>

        <P>
          MultiTicketing lets your own AI app build and edit the <strong>Agenda</strong> of the Events you choose: Rooms,
          Sessions, Speakers and Tags, and nothing else. The app connects to MultiTicketing&apos;s MCP server at{" "}
          <Code>{mcpUrl}</Code>. You sign in, say which Events it may work on, and from then on the app is a{" "}
          <strong>Connected Agent</strong>: it acts as you, on those Events only.
        </P>

        <H2 id="what-it-can-do">What a Connected Agent can and cannot do</H2>
        <Ul>
          <li>
            It reads an Event&apos;s Agenda: its days, time zone, Rooms, Tags, Tiers, Sessions and Speakers, with how many
            bookings and check-ins each Session has.
          </li>
          <li>
            At &ldquo;Read and change the Agenda&rdquo; it creates and changes Rooms, Sessions and Speakers, puts Tags and
            existing Tiers on Sessions, cancels and restores Sessions, and removes a Session nobody booked, a Room with no
            Sessions in it, or a Speaker.
          </li>
          <li>
            It writes a whole programme in one call, which lands completely or not at all. It reports every{" "}
            <strong>Room clash</strong> (two Sessions in one Room at once) and every refused row, row by row.
          </li>
          <li>At &ldquo;Only read the Agenda&rdquo; it reads and changes nothing.</li>
          <li>
            It cannot remove a Session that has bookings, check-ins, reviews or questions. That is refused, and it may
            cancel the Session instead.
          </li>
          <li>
            It never moves or un-schedules a Session that is Live, and never changes an Event that has ended (it can still
            read one).
          </li>
          <li>
            It never sets a Speaker&apos;s picture, and never touches people, invitations, messages, sponsors or reports.
          </li>
          <li>
            A second run of a corrected file changes only what changed. Nothing is removed because it was left out of the
            file.
          </li>
          <li>
            It reaches only the Events you named, and only while your role there still lets you connect an AI app and see
            the Agenda. It changes the Agenda only where your role lets you manage it. If your role there changes, the
            agent loses what your role lost at once.
          </li>
          <li>
            Every write is recorded as an <strong>Agent Change</strong>, which anyone who can manage the Event&apos;s
            Agenda can review and take back in the admin console.
          </li>
        </Ul>
        <P>
          Your AI app reads your file itself. MultiTicketing never sees the file, only what the app writes. What the app
          does with the Agenda it reads is your Organization&apos;s responsibility, as the Agent Declaration says.
        </P>

        <H2 id="who-can-connect">Who can connect</H2>
        <P>
          You need a MultiTicketing account that is an Organization Admin or Owner, with at least one Event in that
          Organization. You can only name an Event where your role lets you connect an AI app and see its Agenda.
        </P>

        <H2 id="which-apps">Which AI apps can connect</H2>
        <P>Claude and ChatGPT can connect. Other AI apps can&apos;t yet.</P>
        <Ul>
          <li>
            <strong>Claude</strong>: a free Claude account is enough. MultiTicketing is in Claude&apos;s directory under the
            name M3T. On a Claude Team or Enterprise plan, an Owner of your Claude organization may need to allow it first;
            then you choose Connect.
          </li>
          <li>
            <strong>ChatGPT</strong>: a Business, Enterprise or Edu workspace whose admin adds it, on the web only, not in
            the phone app.
          </li>
        </Ul>

        <H2 id="connecting">Connecting</H2>
        <P>
          The admin console&apos;s Account page has a &ldquo;Build an Agenda with your AI app&rdquo; card with the address
          to paste, a Copy button and the steps for each app. The Agenda page of an Event links to it for anyone who may
          connect an agent there.
        </P>

        <H3 id="in-claude">In Claude</H3>
        <Ol>
          <li>
            Open Customize, then Connectors, and find M3T in the directory. The Add to Claude button on the Account page
            opens its listing.
          </li>
          <li>
            Choose Connect. MultiTicketing opens: sign in, tick the Events Claude may work on, and connect.
          </li>
          <li>
            In a chat, turn M3T on from the + menu, attach your file and ask Claude to build the Agenda.
          </li>
        </Ol>

        <H3 id="in-chatgpt">In ChatGPT</H3>
        <Ol>
          <li>On chatgpt.com, open Plugins, choose + and then Add custom MCP server.</li>
          <li>
            Name it MultiTicketing, paste <Code>{mcpUrl}</Code>, choose OAuth, accept the warning and choose Create as a
            plugin.
          </li>
          <li>
            Install the plugin. MultiTicketing opens: sign in, tick the Events ChatGPT may work on, and connect.
          </li>
          <li>
            In a chat, type @, pick MultiTicketing, attach your file and ask ChatGPT to build the Agenda. It asks you
            before each change.
          </li>
        </Ol>

        <H3 id="consent-screen">The consent screen</H3>
        <P>
          The screen MultiTicketing opens shows which app is asking and where you will be sent back, who you are signed in
          as, and the Events you may name to it, grouped by Organization. Ended Events are folded at the bottom: the app
          can only read those.
        </P>
        <P>
          You tick the Events, choose &ldquo;Read and change the Agenda&rdquo; or &ldquo;Only read the Agenda&rdquo;, and
          tick the <strong>Agent Declaration</strong>. The declaration states that you chose this app yourself, on behalf
          of the Organization of those Events, and that the Organization is responsible for what the app does with the
          Agenda&apos;s data. It is stored, word for word, with your Connected Agent.
        </P>

        <H2 id="example-prompts">Example prompts</H2>
        <P>Once it is connected, ask it for example:</P>
        <Ul>
          <li>&ldquo;Build the Agenda of my Event from this spreadsheet: its Rooms, Sessions and Speakers.&rdquo;</li>
          <li>
            &ldquo;I corrected the PDF timetable. Update the Agenda to match it and tell me every Room clash.&rdquo;
          </li>
          <li>
            &ldquo;Compare the Agenda in MultiTicketing with this document and list what differs, without changing
            anything.&rdquo;
          </li>
        </Ul>

        <H2 id="managing">Managing your Connected Agents</H2>
        <P>
          The Account page lists every AI app you connected: its Events, whether it may change the Agenda or only read it,
          when it was connected and last used, and its status. A Connected Agent unused for 30 days ends by itself
          (&ldquo;Unused for 30 days&rdquo;). Each use pushes that day out.
        </P>
        <P>Each one has its own page, where you can:</P>
        <Ul>
          <li>
            switch it between &ldquo;Read and change&rdquo; and &ldquo;Only read&rdquo;, effective on its next call, with
            no new declaration;
          </li>
          <li>remove one Event from it, effective at once (removing the last one disconnects it);</li>
          <li>add Events, under a new Agent Declaration naming only those;</li>
          <li>read every Agent Declaration you made for it, in the language you made it in;</li>
          <li>disconnect it: its next call fails and the app asks you to connect again.</li>
        </Ul>
        <P>
          An Event you no longer may connect an agent to, or whose Agenda you no longer may see, reads &ldquo;Out of reach:
          no longer allowed&rdquo;. The agent cannot touch it until your role allows it again. What an agent wrote stays
          after it is disconnected, on each Event&apos;s Agent Changes page.
        </P>

        <H2 id="organization-view">The Organization&apos;s view</H2>
        <P>
          Members who manage an Organization&apos;s members see every Connected Agent that touches the Organization&apos;s
          Events on its &ldquo;Connected Agents&rdquo; page, beside Members. For each one they see who connected it, the AI
          app, this Organization&apos;s Events only, its status, the date of its latest Agent Declaration and its last use.
        </P>
        <P>
          They can <strong>cut off</strong> a Connected Agent: it loses every one of the Organization&apos;s Events at
          once, and goes on working on any other Organization&apos;s Events it names. Its person is not told; they see the
          Events gone on their Account page.
        </P>

        <H2 id="taking-back">Reviewing and taking back an agent&apos;s work</H2>
        <P>
          Each Event&apos;s Agenda page links to its <strong>Agent Changes</strong> once there are any. The list shows
          every Agent Change, newest first: what it did (&ldquo;Created 60 Sessions · Changed 9 Sessions&rdquo;), when,
          the AI app, who connected it, and whether it was taken back. The edit page of a Session, Room or Speaker an agent
          wrote says which Agent Change last wrote it.
        </P>
        <P>
          Opening an Agent Change shows every row it wrote, field by field: what the field held before, what the agent
          wrote, and what it holds now. Before you take it back, the page forecasts what &ldquo;Would go back&rdquo; and
          what &ldquo;Would be left alone&rdquo;, and why.
        </P>
        <P>Taking back restores only what still stands exactly as the agent left it:</P>
        <div className="my-6 rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">What the Agent Change did</TableHead>
                <TableHead>What taking back does</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {takeBackRows.map((row) => (
                <TableRow key={row.did}>
                  <TableCell className="align-top font-medium whitespace-normal">{row.did}</TableCell>
                  <TableCell className="align-top whitespace-normal">{row.undo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <P>Anything else is left alone for a person to look at, for one of five reasons:</P>
        <Ul>
          <li>the Session holds bookings, check-ins, reviews or questions;</li>
          <li>it was changed by hand since;</li>
          <li>a later Agent Change wrote it again (take that one back first);</li>
          <li>it was already removed by hand;</li>
          <li>a Room the agent created still has Sessions in it.</li>
        </Ul>
        <P>
          Nothing is canceled or moved on the system&apos;s own judgement. A take-back happens at once and completely. The
          Agent Change then reads &ldquo;Taken back&rdquo;, &ldquo;Taken back in part&rdquo; or &ldquo;Nothing could be
          taken back&rdquo;, with what went back and what was left alone. A taken-back Agent Change cannot be put back,
          other than by asking the agent again. Several ticked on the list are taken back newest first, so a later one
          never blocks an earlier one.
        </P>
        <P>
          Anyone who can manage the Event&apos;s Agenda can take back any Agent Change; anyone who can see the Agenda can
          read them. The agent itself can take back only its own Agent Changes, and nothing on an Event that has ended.
        </P>

        <H2 id="limits">Limits</H2>
        <P>So that one busy agent cannot slow down an Event for its Attendees:</P>
        <Ul>
          <li>a Connected Agent makes at most 30 calls a minute and 300 an hour, 2 at a time;</li>
          <li>
            an Event takes at most 60 agent writes and 2,000 rows written an hour, across every agent, one write at a time;
          </li>
          <li>one call carries at most 1 MiB and runs at most 30 seconds; a document holds at most 200 rows.</li>
        </Ul>
        <P>
          A refused call writes nothing, and the agent is told which limit and when it clears. What people do in the admin
          console never counts.
        </P>

        <H2 id="privacy">Privacy</H2>
        <P>
          How MultiTicketing processes personal data is set out in the{" "}
          <Link href="/legal/organizer/privacy-policy" className={linkClass}>
            Privacy Policy
          </Link>
          .
        </P>

        <H2 id="support">Support</H2>
        <P>
          Write to{" "}
          <a href="mailto:info@redplanettribe.org" className={linkClass}>
            info@redplanettribe.org
          </a>
          .
        </P>
      </Container>
    </main>
  )
}
