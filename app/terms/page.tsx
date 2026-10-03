import type { Metadata } from "next";
import Link from "next/link";
import EmailLink from "@/components/legal/EmailLink";
import LegalLayout, { Bullets, Lead, P, type LegalSection } from "@/components/legal/LegalLayout";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/terms",
  "Terms of use",
  "The short, plain rules for using Nonchalife.",
);

const sections: LegalSection[] = [
  {
    id: "using",
    title: "Using Nonchalife",
    color: "#D8F07A",
    body: <P>Nonchalife is provided for personal use. Use it lawfully and don’t try to break or misuse the service.</P>,
  },
  {
    id: "account",
    title: "Your account",
    color: "#F5E49C",
    body: <P>You’re responsible for your account and for keeping your email secure.</P>,
  },
  {
    id: "plus",
    title: "Nonchalife Plus",
    color: "#D6CCFA",
    body: (
      <Bullets
        items={[
          <>
            <Lead>Free and Plus.</Lead> The app is free to download and use, with up to 3 active habits. If you already
            have more than 3, you keep them. You just can’t add more. Plus unlocks unlimited habits, the Pomodoro timer
            and Trophies.
          </>,
          <>
            <Lead>Plans.</Lead> Plus comes as a yearly or monthly subscription, or as a one-time Lifetime purchase. Prices
            are shown in the app before you buy.
          </>,
          <>
            <Lead>Auto-renewal.</Lead> Yearly and monthly plans renew on their own unless you cancel at least 24 hours
            before the period ends. Payment is taken through your Apple account.
          </>,
          <>
            <Lead>Cancelling.</Lead> Cancel any time in your iPhone Settings, under your name, then Subscriptions.
            Deleting your Nonchalife account does not cancel it, so cancel first.
          </>,
          <>
            <Lead>Refunds.</Lead> Apple handles payments and refunds. Ask Apple at reportaproblem.apple.com.
          </>,
          <>
            <Lead>Lifetime.</Lead> Pay once and keep Plus for the life of the product. That means as long as Nonchalife
            is offered, not for your lifetime.
          </>,
          <>
            <Lead>Price changes.</Lead> We may change prices for new purchases. If a subscription price goes up, Apple
            will tell you first, and you can cancel before it applies.
          </>,
        ]}
      />
    ),
  },
  {
    id: "data",
    title: "Your data",
    color: "#C4E1F6",
    body: (
      <P>
        Your habits are yours. See the{" "}
        <Link
          href="/privacy"
          className="font-semibold underline underline-offset-[3px] transition-colors hover:text-body"
        >
          Privacy Policy
        </Link>{" "}
        for how we handle them.
      </P>
    ),
  },
  {
    id: "asis",
    title: "The app is provided as is",
    color: "#F2A27C",
    body: (
      <P>
        We work hard to keep it reliable, but we can’t promise it will always be available or error-free. We’re not
        liable for lost data or missed reminders to the extent the law allows.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes and law",
    color: "#D8F07A",
    body: <P>We may update the app and these terms. Continuing to use the app means you accept the updated terms.</P>,
  },
  {
    id: "contact",
    title: "Contact",
    color: "#F5E49C",
    body: (
      <P>
        Questions about these terms? Email <EmailLink />.
      </P>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title={["Terms", "of use"]}
      updated="Last updated 2 October 2026"
      intro="The short, plain rules for using Nonchalife."
      sections={sections}
    />
  );
}
