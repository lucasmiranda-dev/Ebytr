const Joi = require('joi');
const { getAll, create } = require('../models/index');
const { badRequest } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorHandling');

// codigo inspirado na aula https://github.dev/tryber/sd-013-c-live-lectures/tree/review/27

const schema = Joi.object({
  title: Joi.string().min(4).required(),
  notes: Joi.string().required(),
  priority: Joi.string().required(),
});

const getAlldata = async () => {
  const get = await getAll();

  return get;
};

const createData = async (title, notes, priority) => {
  const { error } = schema.validate({
    title,
    notes,
    priority,
  });

  if (error) throw errorConstructor(badRequest, error.message, 'bad request');

  const id = await create(title, notes, priority);

  return { id, title, notes, priority };
};

module.exports = { getAlldata, createData };
