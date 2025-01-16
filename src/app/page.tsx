import Header from "./sections/Header";
import Main from "./sections/Main";

export default function Home() {
  return (
    <div className="__variable_20b187 group/spotlight relative bg-[#1b1947]">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-2 lg:pb-20">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}

