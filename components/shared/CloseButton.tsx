import Link from "next/link";
import { assets } from "@/data/assets";

type CloseButtonProps = {
  href?: string;
};

export function CloseButton({
  href = "/",
}: CloseButtonProps) {
  return (
    <Link
      className="close-button"
      href={href}
      aria-label="Close project"
    >
      <img
        src={assets.icons.close}
        alt=""
      />
    </Link>
  );
}