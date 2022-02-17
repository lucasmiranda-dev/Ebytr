const { updateData } = require('../../services/index');

module.exports = async (req, res, next) => {
  try {
    const { title, notes, priority } = req.body;
    const { id } = req.params;
    const updatedTaskId = await updateData(id, title, notes, priority);

    return res.status(201).json(updatedTaskId);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};
