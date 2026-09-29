import { CONTACT_EMAIL } from "@/lib/config";

export default function EmailLink() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline underline-offset-[3px]">
      {CONTACT_EMAIL}
    </a>
  );
}
