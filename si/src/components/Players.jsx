import React from "react";
import Player from "./Player";

const Players = (props) => {
  const { playerData, loading, query, length } = props;
  return (
    <>
      <h1 className="my-5">
        {query && length === 0
          ? `No result for the query "${query}"`
          : length === 0 || query === ""
          ? "All Players"
          : `Results for the query "${query}"`}
      </h1>
      {loading && <h3>Loading....</h3>}
      {query && length === 0
        ? ""
        : !loading && (
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
              {playerData.map((player) => {
                return (
                  <div key={player.Id} className="col">
                    <Player player={player} />
                  </div>
                );
              })}
            </div>
          )}
    </>
  );
};

export default Players;
