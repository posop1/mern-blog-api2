import Post from '../models/Post.js';

class PostController {
  async create(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      res.json('asdasd');
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOne(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PostController();
