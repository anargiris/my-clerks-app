import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);

  const getPeople = async (page) => {
    fetch(`https://randomuser.me/api/?results=3&page=${page}`)
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
  };

  useEffect(() => {
    getPeople();
  }, [page]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-7xl">My Clerk App</h1>
        {people && (
          <div>
            <br />
            {people.map((p, i) => (
              <div key={i}>
                {p.name.first} {p.name.last}
              </div>
            ))}
          </div>
        )}
        <div>
          <button
            type="button"
            onClick={() => setPage(page + 1)}
            className="bg-cyan-700 text-cyan-100 px-4 py-2 border-md my-10 text-2xl"
          >
            LOAD MORE PEOPLE
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
