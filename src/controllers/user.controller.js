import User from '../models/User.js';

class UserController {
  async register(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async login(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getMe(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new UserController();
