import { useState } from "react";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [count, setCount] = useState(0);
  const getQuotes = async () => {
    try {
      const res = await fetch("https://api.quotable.io/quotes/random");
      const data = await res.json();
      // console.log(data);
      // console.log(data[0].author);
      // console.log(data[0].content);
      const randomQuote = data[0];
      console.log(randomQuote);
      setQuote(randomQuote.content);
      setAuthor(randomQuote.author);
      setCount((c) => c + 1);
    } catch {
      console.error("Error fetching quotes", error);
    }
  };
  return (
    <>
      <h1>{quote}</h1>
      <p>
        <strong>Autor:</strong>
        {author}
      </p>
      <button onClick={getQuotes}>New Quotes</button>
      <p>
        You have read <strong>{count}</strong>quotes
      </p>
    </>
  );
};
export default App;
