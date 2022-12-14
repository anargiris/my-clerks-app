import "./App.css";
import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import Paginator from "./components/Paginator";
import ColorSelector from "./components/ColorSelector";

const getSavedCardColor = () => {
  const persistedCardColor = localStorage.getItem("cardColor") ?? "bg-gray-100";
  return persistedCardColor;
};

function App() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [cardColor, setCardColor] = useState(getSavedCardColor());

  const getPeople = async () => {
    setError(false);
    setLoading(true);
    await fetch(`https://randomuser.me/api/?results=3&page=${page}&seed=abc`)
      .then((res) => res.json())
      .catch(() => setError(true))
      .then((data) => setPeople(data.results));
    setLoading(false);
  };

  useEffect(() => {
    getPeople();
  }, [page]);

  return (
    <div className="min-h-screen font-Inter relative">
      <div className="absolute w-full h-full  bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400 opacity-10"></div>
      <div className="relative z-10 flex flex-col gap-10 py-4">
        <h1 className="text-4xl lg:text-5xl mt-10 text-blue-700 font-semibold text-center">
          My Clerks App
        </h1>
        <ColorSelector cardColor={cardColor} setCardColor={setCardColor} />
        {error ? (
          <>
            <div className="text-center">
              There was an error fetching the data.
            </div>
            <button
              type="button"
              onClick={() => getPeople()}
              className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 w-32 mx-auto rounded-md text-cyan-50"
            >
              Retry
            </button>
          </>
        ) : (
          <>
            {people.length === 0 ? (
              <div className="text-center">Fetching people data...</div>
            ) : (
              <>
                <UserList
                  people={people}
                  loading={loading}
                  cardColor={cardColor}
                />
                <Paginator page={page} setPage={setPage} loading={loading} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
