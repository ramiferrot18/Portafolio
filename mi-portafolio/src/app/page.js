import Image from "next/image";
import style from "./page.module.css";
import Index from "./pages";

export default function Home() {
  return (
    <main className={style.main}>
      <Index/>
    </main>
  );
}