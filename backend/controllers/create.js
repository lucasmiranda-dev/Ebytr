const { createData } = require('../services/index');
const { success } = require('../utils/dictionary/statusCode');

// codigo inspirado na aula https://github.dev/tryber/sd-013-c-live-lectures/tree/review/27

module.exports = async (req, res, next) => {
  try {
    const { title, notes, priority } = req.body;

    const newData = await createData(title, notes, priority);

    return res.status(success).json(newData);
  } catch (error) {
    console.log(`POST CREATEDATA -> ${error.message}`);
    return next(error);
  }
};
