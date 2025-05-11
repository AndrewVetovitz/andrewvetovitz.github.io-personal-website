export function Link({
  href,
  children,
  overrideClassName,
}: {
  href: string;
  children: string;
  overrideClassName?: string;
}) {
  return (
    <a href={href} className={overrideClassName ?? "text-blue-600 dark:text-blue-500 hover:underline"}>
      {children}
    </a>
  );
}
