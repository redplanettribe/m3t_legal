import { PrivacyPolicyPage, privacyPolicyMetadata } from "@/components/legal/privacy-policy-page"

export const metadata = privacyPolicyMetadata("organizer", "en")

export default function OrganizerPrivacyPolicyPage() {
  return <PrivacyPolicyPage app="organizer" lang="en" />
}
