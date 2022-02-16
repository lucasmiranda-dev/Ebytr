const Joi = require('joi');
const { getAll, create, deleteById } = require('../models/index');

// codigo inspirado na aula https://github.dev/tryber/sd-013-c-live-lectures/tree/review/27

const schema = Joi.object({
  title: Joi.string().min(1).required(),
  notes: Joi.string().required(),
  priority: Joi.boolean(),
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

  if (error) throw { status: 400, message: error.message };

  const id = await create(title, notes, priority);

  return { id: id, title, notes, priority };
};

const deleteData = async (id) => {
  const deletedById = await deleteById(id);

  return deletedById;
};

module.exports = { getAlldata, createData, deleteData };
