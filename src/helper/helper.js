const K = 64;

const getExpectedScore = (eloA, eloB) => 1 / (1 + 10 ** ((eloB - eloA) / 400));

const splitTeamBonus = (eloP1, eloP2, teamBonus) => {
  const expectedP1 = getExpectedScore(eloP1, eloP2);
  const shareP1 = Math.round((1 - expectedP1) * teamBonus);
  return [eloP1 + shareP1, eloP2 + teamBonus - shareP1];
};

export const calcElo = (
  [eloUserA1, eloUserA2],
  [eloUserB1, eloUserB2],
  whoWin,
) => {
  const eloTeamA = (eloUserA1 + eloUserA2) / 2;
  const eloTeamB = (eloUserB1 + eloUserB2) / 2;

  const expectedA = getExpectedScore(eloTeamA, eloTeamB);
  const actualA = whoWin === "A" ? 1 : 0;

  const eloBonusTeamA = Math.round(K * (actualA - expectedA));
  const eloBonusTeamB = -eloBonusTeamA;

  return [
    splitTeamBonus(eloUserA1, eloUserA2, eloBonusTeamA),
    splitTeamBonus(eloUserB1, eloUserB2, eloBonusTeamB),
  ];
};
