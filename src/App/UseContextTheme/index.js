import { createContext, useContext, useState } from "react";
import "./UseContextTheme.css";

const ThemeContext = createContext(null);

export default function UseContextTheme() {
  const [theme, setTheme] = useState("light");
  const className = "toggle-" + theme;

  return (
    <ThemeContext.Provider value={theme}>
      <label className={className}>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        dark
      </label>
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <div className={className}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
