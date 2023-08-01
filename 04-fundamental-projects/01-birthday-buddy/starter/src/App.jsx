import { useState } from "react";
import data from './data'
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  return <>
    <List people={people} />
    <button onClick={() => { setPeople([]) }}>Clear all</button>
  </>;
};
export default App;
