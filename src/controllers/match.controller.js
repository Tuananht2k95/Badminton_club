import MatchService from "../services/match.service.js";

class MatchController {
  static matchService = new MatchService();

  async store(req, res) {
    const newMatch = await MatchController.matchService.store(req.body);

    return res.status(200).json(newMatch);
  }
}

export default MatchController;
