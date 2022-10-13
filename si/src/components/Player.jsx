import React from "react";
import moment from "moment";

const Player = (prop) => {
  const { player } = prop;
  let matchDate = moment(`${player.UpComingMatchesList[0].MDate} UTC`)
    .local(true)
    .format("DD-MM-YYYY h:mm:ss a");
  return (
    <>
      <div className="card h-100">
        <div className="card-header">{`$${+player.Value}m`}</div>
        <img
          src={`./player-images/${player.Id}.jpg`}
          className="card-img-top"
          alt="..."
          onError={(e) => (e.target.src = "./player-images/person.jpg")}
        />
        <div className="card-body">
          <h5 className="card-title">{player.PFName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{player.SkillDesc}</h6>
        </div>
        <div className="card-footer">
          {player.UpComingMatchesList[0].VsCCode ? (
            <>
              <div>Next Match</div>
              <div>{`${player.UpComingMatchesList[0].CCode} vs. ${player.UpComingMatchesList[0].VsCCode}`}</div>
              <p>{matchDate}</p>
            </>
          ) : (
            <div>No Upcoming Matches</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Player;
