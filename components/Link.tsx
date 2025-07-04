export function Link({
  href,
  children,
  download,
  supressDefaultStyles,
  className,
}: {
  href: string;
  children: React.ReactNode;
  download?: string;
  supressDefaultStyles?: boolean;
  className?: string;
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
      className={[className, "text-blue-600 dark:text-blue-500 hover:underline"].join(" ")}
    >
      {children}
    </a>
  );
}
