import MatchRepository from "../repositories/match.repository.js";
import UserRepository from "../repositories/user.repository.js";
import { calcElo } from "../helper/helper.js";

class MatchService {
  static matchRepository = new MatchRepository();
  static userRepository = new UserRepository();

  async store(matches = []) {
    const idSet = new Set();
    matches.forEach((match) => {
      match.idsTeamA.forEach((id) => idSet.add(id));
      match.idsTeamB.forEach((id) => idSet.add(id));
    });
    const allUsers = await MatchService.userRepository.findManyIds([...idSet]);
    const eloMap = new Map(allUsers.map((user) => [user.id, user.elo]));

    matches.forEach(({ idsTeamA, idsTeamB, whoWin }) => {
      const eloTeamA = idsTeamA.map((id) => eloMap.get(id));
      const eloTeamB = idsTeamB.map((id) => eloMap.get(id));
      const [newEloA, newEloB] = calcElo(eloTeamA, eloTeamB, whoWin);

      for (let index = 0; index < eloTeamA.length; index++) {
        eloMap.set(idsTeamA[index], newEloA[index]);
      }
      for (let index = 0; index < eloTeamB.length; index++) {
        eloMap.set(idsTeamB[index], newEloB[index]);
      }
    });

    const updates = [...eloMap.entries()].map(([id, elo]) => ({
      id,
      elo,
    }));
    return await MatchService.userRepository.bulkUpdateElo(updates);
  }

  async resetElo() {
    const allUsers = await MatchService.userRepository.findAll();
    const updates = [];
    allUsers.forEach((element) => {
      updates.push({
        id: element.id,
        elo: 1000,
      });
    });
    return await MatchService.userRepository.bulkUpdateElo(updates);
  }
}

export default MatchService;
