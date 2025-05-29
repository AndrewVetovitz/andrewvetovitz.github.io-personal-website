export function SubTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={className ?? "text-2xl pt-4"}>{children}</h2>;
}
