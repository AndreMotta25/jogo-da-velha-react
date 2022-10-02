import React, { useEffect, useMemo, useRef, useState } from "react";
import * as S from "./styles";
import PlaceBoard from "../PlaceBoard";
import { Text, Button, Box, Badge } from "dracula-ui";

const Board = () => {
  const player = useMemo(
    () => [
      { name: "player1", flag: "x", score: 0 },
      { name: "player2", flag: "o", score: 0 },
    ],
    []
  );
  const positionsWinners = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3],
  ];
  const [actualPlayer, setActualPlayer] = useState(player[1]);
  const [winner, setWinner] = useState({});
  const [plays, setPlays] = useState(0);

  const [restart, setRestart] = useState(false);
  const [pecas, setPecas] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const stopGame = useRef(false);

  useEffect(() => {
    if (plays === 9 && !winner.name) {
      setWinner({ name: "empate", flag: "Deu velha" });
      stopGame.current = true;
    }
  }, [plays]);

  function changeNextPlayer() {
    verifyWinner();
    if (!stopGame.current) {
      if (actualPlayer === player[1]) setActualPlayer(player[0]);
      else setActualPlayer(player[1]);
    }
  }

  function verifyWinner() {
    for (const listOfPositions of positionsWinners) {
      let contadorBola = 0;
      let contadorX = 0;
      for (const position of listOfPositions) {
        if (pecas[position - 1] === "x") contadorX++;
        else if (pecas[position - 1] === "o") contadorBola++;
      }
      if (contadorBola === 3 || contadorX === 3) {
        setWinner(actualPlayer);
        actualPlayer.score++;
        stopGame.current = true;
        break;
      }
    }
    setPlays((play) => play + 1);
  }

  function flagBoardSimulation(position) {
    pecas[position - 1] = actualPlayer.flag;
    console.log(pecas);
  }

  function restartGame() {
    stopGame.current = false;
    setRestart((value) => !value);
    setPecas([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    setWinner({});
    setPlays(0);
  }

  return (
    <>
      <Box m="md">
        <Badge m="md" variant="outline" color="green">
          <Text color="green">X: {player[0].score}</Text>
        </Badge>
        <Badge m="md" variant="outline" color="green">
          <Text color="green">O: {player[1].score}</Text>
        </Badge>
      </Box>
      <Text color="green">Player Atual: {actualPlayer.flag}</Text>
      <S.Container className="drac-text-white">
        {pecas.map((elem, indice) => (
          <PlaceBoard
            key={indice}
            player={actualPlayer}
            changeNextPlayer={changeNextPlayer}
            locationInBoard={elem}
            flagBoardSimulationFunction={flagBoardSimulation}
            gameOver={stopGame.current}
            restart={restart}
            setStopRestart={setRestart}
          />
        ))}
      </S.Container>
      {winner.name && <Text color="green">Vencedor: {winner.flag}</Text>}
      {stopGame.current && (
        <Button m="md" onClick={restartGame}>
          Recomeçar
        </Button>
      )}
    </>
  );
};

export default Board;
