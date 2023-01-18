export default function Header() {
  return (
    <header className="App-header animation">
      <nav>
        <h1>REACT practice</h1>
        <ul>
          <li>
            <a className="App-link" href="#useState">
              <span>01/</span>useState
            </a>
          </li>
          <li>
            <a className="App-link" href="#useStateObjk">
              <span>02/</span>useStateObj
            </a>
          </li>
          <li>
            <a className="App-link" href="#useEffectTimer">
              <span>03/</span>useEffectTimer
            </a>
          </li>
          <li>
            <a className="App-link" href="#useContextTheme">
              <span>04/</span>useContextTheme
            </a>
          </li>
          <li>
            <a className="App-link" href="#useRefSpy">
              <span>05/</span>useRefSpy
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
