import { PrivacyPolicyPage, privacyPolicyMetadata } from "@/components/legal/privacy-policy-page"

export const metadata = privacyPolicyMetadata("attendee", "en")

export default function AttendeePrivacyPolicyPage() {
  return <PrivacyPolicyPage app="attendee" lang="en" />
}
