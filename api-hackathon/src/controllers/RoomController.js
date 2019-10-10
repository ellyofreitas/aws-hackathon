const Room = require('../model/Room');

module.exports = {
  async index(req, res) {
    const { user_id } = req.headers;
    const rooms = await Room.find({ user: user_id }).populate('audios');
    return res.json(rooms);
  },
  async store(req, res) {
    const { name } = req.body;
    const { user } = req.headers;

    let rooms = await Room.findOne({ name });

    if (!rooms) {
      rooms = await Room.create({ name, user, created_at: Date.now() });
    }

    return res.json(rooms);
  },
  async show(req, res) {
    const { id } = req.params;

    const room = await Room.findById(id);

    if(!room) return res.json({ message: 'Sala invalida' });

    await room.populate('audios').execPopulate();

    return res.json(room);
  }
};
