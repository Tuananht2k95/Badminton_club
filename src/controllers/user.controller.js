import UserService from "../services/user.service.js";

class UserController {
  static userService = new UserService();

  async store(req, res) {
    const newUser = await UserController.userService.store(req.body);

    return res.json(newUser);
  }

  async resetElo(req, res) {
    const result = await UserController.userService.resetElo();

    return res.status(200).json(result);
  }

  async getAllName(req, res) {
    const allUser = await UserController.userService.getAllName();

    return res.json(allUser);
  }
}

export default UserController;
