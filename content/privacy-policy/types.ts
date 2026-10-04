export type PrivacyPolicyLang = "en" | "es"

export type PrivacyPolicyBlock =
  | { type: "section"; number: string; title: string }
  | { type: "subsection"; number: string; title: string }
  | { type: "paragraph"; number?: string; text: string }
  | { type: "list"; items: string[] }

export interface PrivacyPolicyDocument {
  lang: PrivacyPolicyLang
  title: string
  version: string
  /** ISO date (YYYY-MM-DD) from which this version applies. */
  effectiveDate: string
  blocks: PrivacyPolicyBlock[]
}
