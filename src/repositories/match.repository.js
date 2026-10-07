import BaseRepository from "./base.repository.js";
import { Match } from "../models/match.model.js";

class MatchRepository extends BaseRepository {
  constructor() {
    super(Match);
  }
}

export default MatchRepository;
