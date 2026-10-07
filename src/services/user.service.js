import UserRepository from "../repositories/user.repository.js";

class UserService {
  static userRepository = new UserRepository();

  async store(user) {
    const newUser = await UserService.userRepository.store(user);

    return newUser;
  }

  async getAll() {
    const allUser = await UserService.userRepository.findAll();

    return allUser;
  }
}

export default UserService;
