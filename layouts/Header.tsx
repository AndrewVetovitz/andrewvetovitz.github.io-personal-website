import "./tailwind.css";

import { Link } from "../components/Link";
import { Title } from "../components/Title";

function Divider() {
  return <div className="text-2xl select-none"> • </div>;
}

function Header() {
  return (
    <div className="flex flex-col py-[10px] m-auto">
      <div className="flex justify-center py-4">
        <div className="text-5xl font-Allan">
          <Link supressDefaultStyles href="/">
            Andrew Vetovitz
          </Link>
        </div>
      </div>
      <ol className="flex justify-center gap-x-2 pb-4">
        <li className="text-2xl">
          <Link href="/projects/">Projects</Link>
        </li>
        <Divider />
        <li className="text-2xl">
          <Link href="/about/">About</Link>
        </li>
        <Divider />
        <li className="text-2xl">
          <Link href="/resume/">Resume</Link>
        </li>
      </ol>
    </div>
  );
}

export default Header;
