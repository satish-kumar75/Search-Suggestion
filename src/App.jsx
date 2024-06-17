import "./App.css";
import Autocomplete from "./components/AutoComplete";

function App() {
  // const staticData = [
  //   "apple",
  //   "banana",
  //   "berrl",
  //   "orange",
  //   "grape",
  //   "mango",
  //   "melon",
  //   "berry",
  //   "peach",
  //   "cherry",
  //   "plum",
  // ];

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzE0ZGVjODZiZjYxY2IyZGI2NjE0ZmVlN2JlOTgzYyIsInN1YiI6IjY2MWMxOTc1MzM5NmI5MDE2NDk2MTRmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pb5Z3BfhCNCxAWJf8HX5MQbR2-UMN0x7lhmh8Xsb9bA",
    },
  };

  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.results;
  };

  return (
    <div>
      <h1>Autocomplete / Typeahead</h1>

      <Autocomplete
        placeholder={"Enter Recipe"}
        // staticData={staticData}
        fetchSuggestions={fetchSuggestions}
        dataKey={"title"}
        customLoading={<>Loading Recipes..</>}
        onSelect={(res) => console.log(res)}
        caching={true}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
        customStyles={{}}
      />
    </div>
  );
}

export default App;
