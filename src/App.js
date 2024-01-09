
import { useState } from "react";
import data from "./data.js";
function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
const hadleSubmit = (e) => {
  e.preventDefault();
  console.log("hello React")
}

  return (
    <section className="section-center">
      <h3> tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={hadleSubmit}> 
      <label htmlFor="amount">paragraphs: </label>
      <input type="number" name="amount" id="amount" value={count} />
      </form>
    </section>
  );
}

export default App;
