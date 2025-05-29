export function Link({
  href,
  children,
  overrideClassName,
  download,
  supressDefaultStyles,
}: {
  href: string;
  children: React.ReactNode;
  overrideClassName?: string;
  download?: string;
  supressDefaultStyles?: boolean;
}) {
  if (supressDefaultStyles) {
    return (
      <a href={href} download={download}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      download={download}
      className={overrideClassName ?? "text-blue-600 dark:text-blue-500 hover:underline"}
    >
      {children}
    </a>
  );
}
