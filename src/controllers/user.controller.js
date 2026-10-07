import UserService from "../services/user.service.js";

class UserController {
  static userService = new UserService();

  async store(req, res) {
    const newUser = await UserController.userService.store(req.body);

    return res.json(newUser);
  }

  async getAll(req, res) {
    const allUser = await UserController.userService.getAll();

    return res.json(allUser);
  }
}

export default UserController;
