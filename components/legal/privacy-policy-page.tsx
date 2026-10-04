import type { ReactNode } from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { generateSEO } from "@/lib/seo"
import { privacyPolicies, type PrivacyPolicyBlock, type PrivacyPolicyLang } from "@/content/privacy-policy"

export type PrivacyPolicyApp = "attendee" | "organizer"

const linkClass = "text-primary underline underline-offset-4 hover:no-underline"

const ui = {
  en: {
    locale: "en-US",
    home: "Home",
    privacyChoices: "Privacy choices",
    otherLanguage: "Leer en español",
    otherLanguageLang: "es",
    contents: "Contents",
    version: (version: string) => `Version ${version}`,
    effective: (date: string) => `Effective ${date}`,
    description:
      "How FUNDACION REDPLANETTRIBE processes personal data of clients, users, and participants of the Multiticketing (m3t) platform.",
  },
  es: {
    locale: "es-EC",
    home: "Inicio",
    privacyChoices: "Opciones de privacidad",
    otherLanguage: "Read in English",
    otherLanguageLang: "en",
    contents: "Contenido",
    version: (version: string) => `Versión ${version}`,
    effective: (date: string) => `Vigente desde el ${date}`,
    description:
      "Cómo FUNDACION REDPLANETTRIBE trata los datos personales de clientes, usuarios y participantes de la plataforma Multiticketing (m3t).",
  },
} as const

export function privacyPolicyPath(app: PrivacyPolicyApp, lang: PrivacyPolicyLang) {
  return lang === "en" ? `/legal/${app}/privacy-policy/` : `/legal/${app}/privacy-policy/${lang}/`
}

export function privacyPolicyMetadata(app: PrivacyPolicyApp, lang: PrivacyPolicyLang) {
  const policy = privacyPolicies[lang]
  return generateSEO({
    title: policy.title,
    description: ui[lang].description,
    url: privacyPolicyPath(app, lang),
    keywords: ["privacy", "privacidad", "datos personales", app, "Multiticketing", "m3t"],
  })
}

function formatDate(isoDate: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${isoDate}T00:00:00Z`))
}

const emailPattern = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/

/** Renders plain policy text, turning email addresses into mailto links. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(emailPattern).map((part, index) =>
        index % 2 === 1 ? (
          <a key={index} href={`mailto:${part}`} className={linkClass}>
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  )
}

function sectionId(number: string) {
  return `section-${number.replaceAll(".", "-")}`
}

function PolicyBlock({ block }: { block: PrivacyPolicyBlock }): ReactNode {
  switch (block.type) {
    case "section":
      return (
        <h2
          id={sectionId(block.number)}
          className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
        >
          {block.number}. {block.title}
        </h2>
      )
    case "subsection":
      return (
        <h3 id={sectionId(block.number)} className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          {block.number}. {block.title}
        </h3>
      )
    case "paragraph":
      return (
        <p className="leading-7">
          {block.number && <strong>{block.number}. </strong>}
          <RichText text={block.text} />
        </p>
      )
    case "list":
      return (
        <ul className="my-6 list-disc pl-6 leading-7">
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      )
  }
}

export function PrivacyPolicyPage({ app, lang }: { app: PrivacyPolicyApp; lang: PrivacyPolicyLang }) {
  const policy = privacyPolicies[lang]
  const t = ui[lang]
  const otherLang = t.otherLanguageLang
  const sections = policy.blocks.filter(
    (block): block is Extract<PrivacyPolicyBlock, { type: "section" }> => block.type === "section",
  )

  return (
    <main id="main-content" lang={lang} className="min-h-screen bg-background py-12 text-foreground">
      <Container size="sm" className="prose prose-neutral dark:prose-invert">
        <p className="text-sm text-muted-foreground">
          <Link href="/" className={linkClass}>
            {t.home}
          </Link>
          {" · "}
          <Link href={`/legal/${app}/privacy-choices/`} className={linkClass}>
            {t.privacyChoices}
          </Link>
          {" · "}
          <Link href={privacyPolicyPath(app, otherLang)} hrefLang={otherLang} lang={otherLang} className={linkClass}>
            {t.otherLanguage}
          </Link>
        </p>

        <h1 className="mt-6 scroll-m-20 text-3xl font-semibold tracking-tight">{policy.title}</h1>
        <p className="text-sm text-muted-foreground">
          {t.version(policy.version)} · {t.effective(formatDate(policy.effectiveDate, t.locale))}
        </p>

        <nav aria-labelledby="policy-contents" className="mt-8 rounded-lg border p-6">
          <p id="policy-contents" className="!mb-3 font-semibold tracking-tight">
            {t.contents}
          </p>
          <ol className="!mb-0 list-none !pl-0 text-sm leading-6">
            {sections.map((section) => (
              <li key={section.number} className="!mb-1">
                <a href={`#${sectionId(section.number)}`} className={linkClass}>
                  {section.number}. {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {policy.blocks.map((block, index) => (
          <PolicyBlock key={index} block={block} />
        ))}
      </Container>
    </main>
  )
}
