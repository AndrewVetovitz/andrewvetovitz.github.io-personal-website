export function Text({ children, className = "" }: { children: React.ReactNode; className?: string | undefined }) {
  return <p className={[className, "lg:text-justify font-Montserrat"].join(" ")}>{children}</p>;
}
