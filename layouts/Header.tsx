import "./tailwind.css";

import { Link } from "../components/Link.js";
import { Title } from "../components/Title";

function Header() {
  return (
    <div className={"flex flex-col py-[10px] max-w-5xl m-auto"}>
      <div className={"flex justify-center py-[15px]"}>
        <Title className="text-5xl font-Allan">
          <Link href="/" overrideClassName="font-Allan">
            Andrew Vetovitz
          </Link>
        </Title>
      </div>
      <section id="header" className={"flex justify-center gap-x-2 pb-4"}>
        <Title className="text-2xl">
          <Link href="/projects">Projects</Link>
        </Title>
        <Title className="text-2xl select-none"> • </Title>
        <Title className="text-2xl">
          <Link href="/about">About</Link>
        </Title>
        <Title className="text-2xl select-none"> • </Title>
        <Title className="text-2xl">
          <Link href="/resume">Resume</Link>
        </Title>
      </section>
    </div>
  );
}

export default Header;
