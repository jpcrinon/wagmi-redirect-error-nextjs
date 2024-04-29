import Connect from "@/components/Connect";
import styles from "./page.module.css";
import { redirectAction } from "@/actions/actions";

export default function Home() {
  return (
    <main className={styles["main"]}>
      <form action={redirectAction}>
        <button type="submit">Redirect</button>
      </form>

      <Connect />
    </main>
  );
}
