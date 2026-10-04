import { PrivacyPolicyPage, privacyPolicyMetadata } from "@/components/legal/privacy-policy-page"

export const metadata = privacyPolicyMetadata("attendee", "es")

export default function AttendeePrivacyPolicyEsPage() {
  return <PrivacyPolicyPage app="attendee" lang="es" />
}
