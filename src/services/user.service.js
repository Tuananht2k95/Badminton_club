import UserRepository from "../repositories/user.repository.js";

class UserService {
  static userRepository = new UserRepository();

  async store(user) {
    const newUser = await UserService.userRepository.store(user);

    return newUser;
  }

  async resetElo() {
    const allUsers = await UserService.userRepository.findAll();
    const updates = [];
    allUsers.forEach((element) => {
      updates.push({
        id: element.id,
        elo: element.gender === 1 ? 1000 : 800,
      });
    });
    return await UserService.userRepository.bulkUpdateElo(updates);
  }

  async getAllName() {
    const allUsers = await UserService.userRepository.findAll();
    const data = new Map(allUsers.map((user) => [user.name, user.id]));

    // allUser.forEach((user) => {
    //   data.push({
    //     id: user._id,
    //     name: user.name,
    //   });
    // });
    console.log(data);

    return allUsers;
  }
}

export default UserService;
