import React, { useEffect, useState } from "react";
import * as S from "./styles";

const PlaceBoard = ({
  player,
  locationInBoard,
  changeNextPlayer,
  flagBoardSimulationFunction,
  gameOver,
  restart,
  setStopRestart,
}) => {
  const [flagged, setFlagged] = useState({ busy: false, flag: "" });

  const flagBoard = () => {
    if (!flagged.busy && !gameOver) {
      setFlagged({ ...flagged, busy: true, flag: player.flag });
      flagBoardSimulationFunction(locationInBoard);
      changeNextPlayer();
    }
  };

  useEffect(() => {
    if (restart) {
      setFlagged({ ...flagged, busy: false, flag: "" });
      setStopRestart((value) => !value);
    }
  }, [restart]);

  return (
    <>
      <S.Container onClick={flagBoard} className="drac-text-white">
        <S.Flagged
          className={
            flagged.flag === "x" ? "drac-text-green" : "drac-text-yellow"
          }
        >
          {flagged.flag}
        </S.Flagged>
      </S.Container>
    </>
  );
};

export default PlaceBoard;
