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

const deleteById = async (id) => {
  const connection = await connect();
  const deleted = await connection
    .collection('to-do-collection')
    .deleteOne({ _id: ObjectId(id) });

  return deleted;
};

module.exports = { getAll, create, deleteById };
