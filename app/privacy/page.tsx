import type { Metadata } from "next";
import EmailLink from "@/components/legal/EmailLink";
import LegalLayout, { Bullets, Lead, P, type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = { title: "Privacy policy · Nonchalife" };

const sections: LegalSection[] = [
  {
    id: "collect",
    title: "What we collect",
    color: "#D8F07A",
    body: (
      <Bullets
        items={[
          <><Lead>Your email address.</Lead> Used to sign you in with a 6-digit code.</>,
          <><Lead>Your habits.</Lead> The habits you create, their schedules and targets, and the days you complete them.</>,
          <><Lead>Basic device data</Lead> needed to schedule your reminders. Reminders are scheduled on your phone.</>,
        ]}
      />
    ),
  },
  {
    id: "dont",
    title: "What we don’t do",
    color: "#D8F07A",
    dark: true,
    body: (
      <Bullets
        dark
        items={["We don’t sell your data.", "We don’t show ads.", "We don’t track you across other apps or websites."]}
      />
    ),
  },
  {
    id: "storage",
    title: "Where your data lives",
    color: "#D6CCFA",
    body: (
      <P>
        Your account and habits are stored with our database provider (Supabase) so they’re available on your account. A copy
        is kept on your device so reminders work offline. Sign-in emails are sent through an email delivery provider.
      </P>
    ),
  },
  {
    id: "delete",
    title: "Deleting your data",
    color: "#C4E1F6",
    body: (
      <P>
        You can delete your account and all its data from inside the app. You can also email us at <EmailLink /> and we’ll
        delete it.
      </P>
    ),
  },
  {
    id: "children",
    title: "Children",
    color: "#F2A27C",
    body: <P>Nonchalife isn’t directed at children under 13.</P>,
  },
  {
    id: "changes",
    title: "Changes",
    color: "#D8F07A",
    body: <P>If we change this policy we’ll update the date at the top of this page.</P>,
  },
  {
    id: "contact",
    title: "Contact",
    color: "#F5E49C",
    body: (
      <P>
        Questions? Email <EmailLink />.
      </P>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title={["Privacy", "policy"]}
      updated="Last updated 29 September 2026"
      intro="Nonchalife is a habit tracker for iPhone. This page explains what we collect and why. Short version: we keep only what the app needs to work, and we don’t sell it."
      sections={sections}
    />
  );
}
