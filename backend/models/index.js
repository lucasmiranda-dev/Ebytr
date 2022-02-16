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

  return { id: insertedId };
};

module.exports = { getAll, create };
