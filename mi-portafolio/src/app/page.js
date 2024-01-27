import Image from "next/image";
import styles from "./page.module.css";
import Profile from "./components/Profile";
import Facts from "./components/Facts";
import Division from "./components/Division";
import Project from "./components/Project";
import ButtonD from "./components/ButtonD";
export default function Home() {
  return (
    <div className={styles.main}>
      <div>
        <Profile/>
      </div>
      <div>
        <Facts/>
      </div>
      <div>
        <Division/>
      </div>
      <div>
        <Project/>
      </div>
    </div>
  );
}