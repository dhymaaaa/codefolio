import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <Main />
    </div>
  );
}

