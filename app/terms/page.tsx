import type { Metadata } from "next";
import Link from "next/link";
import EmailLink from "@/components/legal/EmailLink";
import LegalLayout, { P, type LegalSection } from "@/components/legal/LegalLayout";
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
    id: "data",
    title: "Your data",
    color: "#D6CCFA",
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
    color: "#C4E1F6",
    body: (
      <P>
        We work hard to keep it reliable, but we can’t promise it will always be available or error-free. We’re not
        liable for lost data or missed reminders to the extent the law allows.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes",
    color: "#F2A27C",
    body: <P>We may update the app and these terms. Continuing to use the app means you accept the updated terms.</P>,
  },
  {
    id: "contact",
    title: "Contact",
    color: "#D8F07A",
    body: (
      <div className="flex flex-col gap-3.5">
        <P>
          Questions about these terms? Email <EmailLink />.
        </P>
        {/* PLACEHOLDER: fill in before App Store submission (see SPEC.md, "Flag these"). */}
        <P>Nonchalife is operated by [operating entity]. These terms are governed by the laws of [country].</P>
      </div>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title={["Terms", "of use"]}
      updated="Last updated 29 September 2026"
      intro="The short, plain rules for using Nonchalife."
      sections={sections}
    />
  );
}
