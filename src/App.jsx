import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Who from "./components/who/Who";
import Works from "./components/works/Works";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  );
}
