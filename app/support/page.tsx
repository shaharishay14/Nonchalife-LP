import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";
import PageHeader from "@/components/legal/PageHeader";
import { CONTACT_EMAIL } from "@/lib/config";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/support",
  "Support",
  "Something not working in Nonchalife? Email us and we’ll get back to you.",
);

const answers = [
  { q: "I didn’t get my sign-in code.", a: "Check spam, wait a minute, then ask for a new one. Codes work once." },
  {
    q: "My reminders aren’t showing.",
    a: "Open iPhone Settings, then Notifications, then Nonchalife, and make sure notifications are on.",
  },
  {
    q: "Is it free?",
    a: "Free to download and use, with up to 3 active habits. Nonchalife Plus unlocks unlimited habits, the Pomodoro timer and Trophies. You can pick monthly, yearly or a one-time Lifetime purchase.",
  },
  {
    q: "How do I cancel Plus?",
    a: "Open iPhone Settings, tap your name, then Subscriptions, then Nonchalife. Cancel there. Deleting your account does not cancel it.",
  },
  {
    q: "How do I restore my purchase?",
    a: "Open Nonchalife, go to the Plus screen and tap Restore purchases. Use the same Apple account you bought with.",
  },
  {
    q: "Can I get a refund?",
    a: "Apple handles refunds. Request one at reportaproblem.apple.com. We can’t issue refunds ourselves.",
  },
  {
    q: "How do I delete my account?",
    a: "In the app, open You and choose delete account, or email us. This does not cancel a subscription, so cancel that first in iPhone Settings.",
  },
];

export default function SupportPage() {
  const mailto = `mailto:${CONTACT_EMAIL}`;

  return (
    <>
      <PageHeader
        badge="Support"
        title={["Support"]}
        intro="Something not working? Email us and we’ll get back to you."
      />
      <div className="mx-auto flex max-w-[1440px] flex-col px-6 pt-12 pb-16 desk:px-24 desk:pt-16 desk:pb-24">
        <section
          aria-label="Email us"
          className="flex flex-col items-start gap-8 rounded-[40px] bg-lime p-7 desk:flex-row desk:items-center desk:justify-between desk:gap-12 desk:rounded-[48px] desk:px-16 desk:py-14"
        >
          <div className="flex min-w-0 flex-col">
            <span className="text-[17px] font-semibold">Email us</span>
            <a
              href={mailto}
              className="mt-3 break-all font-display transition-opacity hover:opacity-75 text-[clamp(26px,3.9vw,56px)] font-extrabold leading-none tracking-[-0.045em]"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <a
            href={mailto}
            className="flex h-16 shrink-0 items-center gap-2.5 self-stretch rounded-full bg-ink px-8 text-lg font-semibold text-bg transition hover:bg-night2 active:scale-[0.97] max-desk:justify-center desk:self-auto"
          >
            Send an email
            <ArrowRight size={20} />
          </a>
        </section>

        <h2 className="mt-16 font-display text-[40px] font-extrabold leading-none tracking-[-0.045em] desk:mt-[72px] desk:text-5xl">
          Quick answers
        </h2>
        <div className="mt-7 grid gap-6 md:grid-cols-2">
          {answers.map(({ q, a }) => (
            <div
              key={q}
              className="flex flex-col gap-3 rounded-card border border-line bg-card p-7 desk:min-h-[200px] desk:p-9"
            >
              <h3 className="font-display text-2xl font-extrabold leading-[1.1] tracking-[-0.03em] desk:text-[26px]">
                {q}
              </h3>
              <p className="text-[17px] leading-[1.55] text-body">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
