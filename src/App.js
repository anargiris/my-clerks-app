import "./App.css";
import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import Paginator from "./components/Paginator";

function App() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

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
    <div className="min-h-screen font-Inter py-10 flex flex-col gap-5">
      <h1 className="text-5xl text-blue-700 font-bold text-center mb-5">
        My Clerks App
      </h1>
      {people.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <UserList people={people} loading={loading} />
      )}
      <Paginator page={page} setPage={setPage} />
    </div>
  );
}

export default App;
