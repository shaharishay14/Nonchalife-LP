import type { Metadata } from "next";
import EmailLink from "@/components/legal/EmailLink";
import LegalLayout, { Bullets, Lead, P, type LegalSection } from "@/components/legal/LegalLayout";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/privacy",
  "Privacy policy",
  "What Nonchalife collects, why, and how to delete it. No ads, no tracking.",
);

const sections: LegalSection[] = [
  {
    id: "collect",
    title: "What we collect",
    color: "#D8F07A",
    body: (
      <Bullets
        items={[
          <>
            <Lead>Your email address.</Lead> Used to sign you in with a 6-digit code.
          </>,
          <>
            <Lead>Your habits.</Lead> The habits you create, their schedules and targets, and the days you complete
            them.
          </>,
          <>
            <Lead>Your plan.</Lead> If you buy Plus, we store which plan you have, when it ends and where it came from.
            We also keep purchase event IDs so nothing is counted twice.
          </>,
          <>
            <Lead>Your purchase details.</Lead> Apple tells our purchase provider (RevenueCat) what you bought and when.
            Apple handles payment. We never see your card details.
          </>,
          <>
            <Lead>Basic device data</Lead> needed to schedule your reminders. Reminders are scheduled on your phone.
          </>,
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
      <div className="flex flex-col gap-3.5">
        <P>
          Your account and habits are stored with our database provider (Supabase) on servers in South Korea. A copy is
          kept on your device so reminders work offline. Sign-in emails are sent through an email provider (Resend).
        </P>
        <P>
          Purchases are managed with RevenueCat, in the United States. It receives a random user ID (not your email),
          your purchase details from Apple, and basic technical data, such as your approximate country. This means your
          data can be processed outside your own country.
        </P>
      </div>
    ),
  },
  {
    id: "delete",
    title: "Keeping and deleting",
    color: "#C4E1F6",
    body: (
      <div className="flex flex-col gap-3.5">
        <P>
          We keep your data while your account exists. You can delete your account and all its data from inside the
          app. You can also email us at <EmailLink /> and we’ll delete it.
        </P>
        <P>
          If you delete your account, we also delete your customer record at our purchase provider (RevenueCat) and your
          purchase events on our server. Apple keeps its own payment records, and deleting your account doesn’t cancel
          your subscription.
        </P>
      </div>
    ),
  },
  {
    id: "requests",
    title: "Your requests",
    color: "#F5E49C",
    body: (
      <P>
        You can ask for a copy of your data, a correction, or a deletion. Email <EmailLink />.
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
    color: "#D6CCFA",
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
      updated="Last updated 2 October 2026"
      intro="Nonchalife is a habit tracker for iPhone. This page explains what we collect and why. Short version: we keep only what the app needs to work, and we don’t sell it."
      sections={sections}
    />
  );
}
