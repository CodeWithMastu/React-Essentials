import { Fragment } from "react"; // React hooks

import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <Fragment>
      <Header></Header> {/*Can also be written as: <Header />*/}
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment> //Or better still, write it like this: <>No need for them divs</>
  );
}

export default App;
