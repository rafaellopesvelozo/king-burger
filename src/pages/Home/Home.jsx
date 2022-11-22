import Footer from "../../templates/Footer";
import Header from "../../templates/Header";
import Main from "../../templates/Main";

import "./styles.css"

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
