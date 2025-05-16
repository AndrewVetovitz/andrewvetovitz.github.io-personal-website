import "./tailwind.css";

import { Link } from "../components/Link";
import { Title } from "../components/Title";

function Header() {
  return (
    <div className="flex flex-col py-[10px] m-auto">
      <div className="flex justify-center py-4">
        <Title className="text-5xl font-Allan">
          <Link href="/" overrideClassName="font-Allan">
            Andrew Vetovitz
          </Link>
        </Title>
      </div>
      <div id="header" className="flex justify-center gap-x-2 pb-4">
        <Title className="text-2xl">
          <Link href="/projects/">Projects</Link>
        </Title>
        <Title className="text-2xl select-none"> • </Title>
        <Title className="text-2xl">
          <Link href="/about/">About</Link>
        </Title>
        <Title className="text-2xl select-none"> • </Title>
        <Title className="text-2xl">
          <Link href="/resume/">Resume</Link>
        </Title>
      </div>
    </div>
  );
}

export default Header;
