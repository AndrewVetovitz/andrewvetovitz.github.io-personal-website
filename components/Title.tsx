export function Title({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h1 className={className ?? "text-2xl pt-4"}>{children}</h1>;
}
