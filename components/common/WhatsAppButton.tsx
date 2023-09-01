/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function WhatsAppButton() {
  return (
    <Link
      aria-label="Chat on WhatsApp"
      className="fixed right-8 bottom-8 z-[1000] w-[50px] rounded-full shadow-lg"
      href="https://wa.me/919328277388"
    >
      <img alt="Chat on WhatsApp" src="/assets/WhatsAppIcon.svg" />
    </Link>
  );
}

export default WhatsAppButton;
