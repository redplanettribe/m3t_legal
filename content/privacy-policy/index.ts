import { privacyPolicyEn } from "./en"
import { privacyPolicyEs } from "./es"
import type { PrivacyPolicyDocument, PrivacyPolicyLang } from "./types"

export type { PrivacyPolicyBlock, PrivacyPolicyDocument, PrivacyPolicyLang } from "./types"

export const privacyPolicies: Record<PrivacyPolicyLang, PrivacyPolicyDocument> = {
  en: privacyPolicyEn,
  es: privacyPolicyEs,
}
