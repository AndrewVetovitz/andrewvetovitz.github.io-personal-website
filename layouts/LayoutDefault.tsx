import "./style.css";

import "./tailwind.css";

import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[#F9F7F7]">
        <Header />
      </div>
      <Content>{children}</Content>
      <div className="bg-[#F9F7F7]">
        <Footer />
      </div>
    </div>
  );
}
