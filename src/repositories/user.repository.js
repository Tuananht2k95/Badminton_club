import BaseRepository from "./base.repository.js";
import { User } from "../models/user.model.js";

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  async bulkUpdateElo(data = []) {
    //data =[{id, elo}]
    if (!data || data.length === 0) return null;

    const operations = data.map((item) => ({
      updateOne: {
        filter: { _id: item.id },
        update: { $set: { elo: item.elo } },
      },
    }));

    return await this.getModel().bulkWrite(operations, { ordered: false });
  }
}

export default UserRepository;
