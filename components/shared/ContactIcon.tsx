type ContactIconProps = {
  href: string;
  label: string;
  icon: string;
  hoverIcon: string;
  download?: boolean;
};

export function ContactIcon({
  href,
  label,
  icon,
  hoverIcon,
  download,
}: ContactIconProps) {
  return (
    <a
      className="contact-icon"
      href={href}
      aria-label={label}
      download={download}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noreferrer"}
    >
      <img
        className="contact-icon-default"
        src={icon}
        alt=""
      />

      <img
        className="contact-icon-hover"
        src={hoverIcon}
        alt=""
      />
    </a>
  );
}