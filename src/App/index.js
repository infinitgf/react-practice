import "./App.css";
import Header from "./Header";
import UseEffectTimer from "./UseEffectTimer";
import UseState from "./UseState";
import UseStateObj from "./UseStateObj";
import UseContextTheme from "./UseContextTheme";
import UseRefSpy from "./UseRefSpy";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="appContainer">
        <section id="useState">
          <div className="exercises">
            <UseState />
          </div>
        </section>
        <section id="useStateObj">
          <div className="exercises">
            <UseStateObj />
          </div>
        </section>
        <section id="useEffectTimer">
          <div className="exercises">
            <UseEffectTimer />
          </div>
        </section>
        <section id="useContextTheme">
          <div className="exercises">
            <UseContextTheme />
          </div>
        </section>
        <section id="useRefSpy">
          <div className="exercises">
            <UseRefSpy />
          </div>
        </section>
      </main>
    </div>
  );
}
