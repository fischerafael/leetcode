import React, { useState } from "react";

const INITIAL_MATCHES: IMatch[] = [
  {
    teamA: "Palmeiras",
    teamB: "Flamengo",
    winner: undefined,
  },
  {
    teamA: "Vasco",
    teamB: "Corinthians",
    winner: undefined,
  },
  {
    teamA: "Fluminense",
    teamB: "São Paulo",
    winner: undefined,
  },
  {
    teamA: "Santos",
    teamB: "Botafogo",
    winner: undefined,
  },
];

const index = () => {
  const initialMatchesCount = INITIAL_MATCHES.length;

  const [matches, setMatches] = useState<IMatch[]>(INITIAL_MATCHES);

  const setWinner = (team: string, index: number) => {
    const updated = matches.map((match, i) => {
      if (i === index) {
        return { ...match, winner: team };
      }
      return match;
    });
    setMatches(updated);
  };

  const removeWinner = (matchIndex: number) => {
    const updated = matches.map((match, i) => {
      if (i === matchIndex) {
        return { ...match, winner: undefined };
      }
      return match;
    });
    setMatches(updated);
  };

  const final = [
    ["palxfla", "spxflu", "sanxbot", "vasxco"],
    ["palxsp", "sanxco"],
    ["palxsan"],
  ];

  const input = ["palxfla", "spxflu", "sanxbot", "vasxco"];

  const output = getAllRounds(matches);

  console.log(["OUTPUT", output]);

  return (
    <div style={{ display: "flex", gap: "32px" }}>
      {matches.map((match, index) => {
        return (
          <div key={index}>
            <div>
              <span onClick={() => setWinner(match.teamA, index)}>
                {match.teamA}
              </span>{" "}
              x{" "}
              <span onClick={() => setWinner(match.teamB, index)}>
                {match.teamB}
              </span>
            </div>
            <span onClick={() => removeWinner(index)}>
              Vencedor: {match.winner}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default index;

interface IMatch {
  teamA: string;
  teamB: string;
  winner?: string;
}

const getAllRounds = (matches: IMatch[]) => {
  // const rounds: IMatch[][] = [matches]; // Inicializa com a lista original de partidas
  // while (matches.length > 1) {
  //   const nextRound: IMatch[] = [];
  //   for (let i = 0; i < matches.length; i += 2) {
  //     const mt: IMatch = {
  //       teamA: matches[i].teamA,
  //       teamB: matches[i].teamB,
  //       winner: matches[i].winner,
  //     };
  //     nextRound.push(mt);
  //   }
  //   rounds.push(nextRound);
  //   matches = nextRound.slice(); // Atualiza a lista de partidas para a próxima rodada
  // }
  // return rounds;
};
