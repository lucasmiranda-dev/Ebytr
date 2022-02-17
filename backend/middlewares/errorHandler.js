//// codigo inspirado na aula https://github.dev/tryber/sd-013-c-live-lectures/tree/review/27

const errorMiddleware = (err, req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = {
  errorMiddleware,
};
