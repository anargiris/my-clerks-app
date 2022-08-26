import "./App.css";
import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import Paginator from "./components/Paginator";
import ColorSelector from "./components/ColorSelector";

function App() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getSavedCardColor = () => {
    const cardColor = localStorage.getItem("cardColor") ?? "gray-200";
    return cardColor;
  };
  const [cardColor, setCardColor] = useState(getSavedCardColor());

  const getPeople = async () => {
    setLoading(true);
    await fetch(`https://randomuser.me/api/?results=3&page=${page}&seed=abc`)
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
    setLoading(false);
  };

  useEffect(() => {
    getPeople();
  }, [page]);

  return (
    <div className="min-h-screen font-Inter py-10 flex flex-col gap-10">
      <h1 className="text-5xl text-blue-700 font-semibold text-center mb-5">
        My Clerks App
      </h1>
      <ColorSelector cardColor={cardColor} setCardColor={setCardColor} />
      {people.length === 0 ? (
        <div className="text-center">Fetching people data...</div>
      ) : (
        <UserList people={people} loading={loading} cardColor={cardColor} />
      )}
      <Paginator page={page} setPage={setPage} loading={loading} />
    </div>
  );
}

export default App;
