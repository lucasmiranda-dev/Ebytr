const { getAlldata } = require('../services/index');

module.exports = async (_req, res, next) => {
  try {
    const getAll = await getAlldata();

    return res.status(200).json(getAll);
  } catch (error) {
    next(error);
  }
};
