import { useEffect, useRef, useState } from "react";

export function SizeAwareDiv({
  children,
  className,
}: {
  children: ({ height, width }: { height: number; width: number }) => React.ReactElement;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState<{ height: number; width: number } | null>(null);

  useEffect(() => {
    if (ref.current) {
      setSize({ height: ref.current.offsetHeight, width: ref.current.offsetWidth });
    }
  }, [ref.current]);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current && ref.current.offsetHeight > 0 && ref.current.offsetWidth > 0) {
        setSize({ height: ref.current.offsetHeight, width: ref.current.offsetWidth });
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {size ? children(size) : null}
    </div>
  );
}
