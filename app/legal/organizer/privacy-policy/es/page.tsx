import { PrivacyPolicyPage, privacyPolicyMetadata } from "@/components/legal/privacy-policy-page"

export const metadata = privacyPolicyMetadata("organizer", "es")

export default function OrganizerPrivacyPolicyEsPage() {
  return <PrivacyPolicyPage app="organizer" lang="es" />
}
