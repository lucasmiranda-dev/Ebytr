const { ObjectId } = require('mongodb');
const connect = require('./connections');

const getAll = async () => {
  const connection = await connect();
  const findAll = await connection
    .collection('to-do-collection')
    .find({})
    .toArray();
  return findAll;
};

const create = async (title, notes, priority) => {
  const connection = await connect();
  const { insertedId } = connection.collection('to-do-collection').insertOne({
    title,
    notes,
    priority,
  });

  return insertedId;
};

const updateById = async (id, title, notes, priority) => {
  const connection = await connect();

  await connection
    .collection('to-do-collection')
    .updateOne({ _id: ObjectId(id) }, { $set: { title, notes, priority } });

  return id;
};

const deleteById = async (id) => {
  const connection = await connect();

  await connection
    .collection('to-do-collection')
    .deleteOne({ _id: ObjectId(id) });
};

module.exports = { getAll, create, deleteById, updateById };
