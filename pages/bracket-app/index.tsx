import React, { useState } from "react";

const INITIAL_MATCHES: IMatch[] = [
  {
    round: 4,
    teamA: "Palmeiras",
    teamB: "Flamengo",
    winner: undefined,
  },
  { round: 4, teamA: "Vasco", teamB: "Corinthians", winner: undefined },
  { round: 4, teamA: "Fluminense", teamB: "São Paulo", winner: undefined },
  { round: 4, teamA: "Santos", teamB: "Botafogo", winner: undefined },
];

const index = () => {
  const [matches, setMatches] = useState<IMatch[]>(INITIAL_MATCHES);

  const setWinner = (
    team: string,
    round: number,
    index: number,
    array: IMatch[]
  ) => {
    let updated = matches.map((match, i) => {
      if (i === index) {
        return { ...match, winner: team };
      }
      return match;
    });
    const isOdd = index % 2 === 1;
    const prevMatch = array[index - 1];
    const nextMatch = array[index + 1];

    let newMatch: IMatch = {
      teamA: "",
      teamB: "",
      round: 0,
    };
    if (isOdd) {
      newMatch = {
        teamA: prevMatch.winner || "",
        teamB: team,
        winner: undefined,
        round: round / 2,
      };
    } else {
      newMatch = {
        round: round / 2,
        teamA: team,
        teamB: nextMatch.winner || "",
        winner: undefined,
      };
    }
    const final =
      newMatch.teamA !== "" && newMatch.teamB !== ""
        ? [...updated, newMatch]
        : updated;
    setMatches(final);
  };

  console.log("[matches]", matches);

  const removeWinner = (matchIndex: number, round: number) => {
    const updated = matches.map((match, i) => {
      if (i === matchIndex) {
        return { ...match, winner: undefined };
      }
      if (match.round < round) {
        return { ...match, winner: undefined, teamA: "", teamB: "" };
      }
      return match;
    });
    setMatches(updated);
  };

  // const final = [
  //   ["palxfla", "spxflu", "sanxbot", "vasxco"],
  //   ["palxsp", "sanxco"],
  //   ["palxsan"],
  // ];

  // const input = ["palxfla", "spxflu", "sanxbot", "vasxco"];

  // const output = getAllRounds(matches);

  // console.log(["OUTPUT", output]);

  return (
    <div style={{ display: "flex", gap: "32px" }}>
      {matches.slice(0, 4).map((match, index, array) => {
        return (
          <div key={index}>
            <div>
              <span
                onClick={() =>
                  setWinner(match.teamA, match.round, index, array)
                }
              >
                {match.teamA}
              </span>{" "}
              x{" "}
              <span
                onClick={() =>
                  setWinner(match.teamB, match.round, index, array)
                }
              >
                {match.teamB}
              </span>
            </div>
            <span onClick={() => removeWinner(index, match.round)}>
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
  round: number;
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
