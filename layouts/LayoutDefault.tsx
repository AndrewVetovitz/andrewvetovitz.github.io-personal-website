import "./style.css";

import "./tailwind.css";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

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
