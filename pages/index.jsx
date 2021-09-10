import styles from "../styles/Home.module.css";
import { app } from "../firebase";

import { Header } from "../components/Header";
import { User } from "../components/User";
import { UserProvider } from "../contexts/UserContext";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <UserProvider>
        <User />

        </UserProvider>
      </main>
    </div>
  )
}

export default Home;
