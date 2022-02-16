const { deleteData } = require('../../services/index');
const { noContent } = require('../../utils/dictionary/statusCode');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    await deleteData(id);

    return res.status(noContent).json();
  } catch (error) {
    console.log(`POST DELETEDATA -> ${error.message}`);
    next(error);
  }
};
