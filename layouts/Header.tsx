import "./tailwind.css";

import { Link } from "../components/Link";

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
      <div className="flex justify-center gap-x-2 pb-4">
        <Link className="text-2xl" href="/projects/">
          Projects
        </Link>
        <Divider />
        <Link className="text-2xl" href="/about/">
          About
        </Link>
        <Divider />
        <Link className="text-2xl" href="/resume/">
          Resume
        </Link>
      </div>
    </div>
  );
}

export default Header;
