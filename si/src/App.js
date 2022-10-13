import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Players from "./components/Players";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [playerData, setPlayerData] = useState([]);
  const [searchedPlayer, setSearchedPlayer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const res = await fetch("https://api.npoint.io/20c1afef1661881ddc9c");
      const data = await res.json();
      const playerList = data.playerList;
      playerList.sort((a, b) => {
        return +a.Value - +b.Value;
      });
      setPlayerData(playerList);
      setLoading(false);
    }
    getData();
  }, []);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    function normalized(q) {
      return q
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    }
    let data = playerData.filter(
      (player) =>
        normalized(query) === normalized(player.PFName) ||
        normalized(query) === normalized(player.TName) ||
        normalized(player.PFName).includes(normalized(query)) ||
        normalized(player.TName).includes(normalized(query))
    );
    setSearchedPlayer(data);
  }

  return (
    <main>
      <Navbar
        query={query}
        onChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className="container text-center">
        <Players
          playerData={searchedPlayer.length ? searchedPlayer : playerData}
          loading={loading}
          query={query}
          length={searchedPlayer.length}
        />
      </div>
      <Footer loading={loading} length={searchedPlayer.length} query={query} />
    </main>
  );
}
