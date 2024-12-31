const App = () => {
  const getQuotes = async () => {
    try {
      const res = await fetch("https://api.quotable.io/quotes/random");
      const data = await res.json();
      console.log(data);
      console.log(data[0].author);
      console.log(data[0].content);
    } catch {
      console.error("Error fetching quotes", error);
    }
  };
  return (
    <>
      <h1>Lets get motivated by reading quotes</h1>
      <button onClick={getQuotes}>New Quotes</button>
    </>
  );
};
export default App;
