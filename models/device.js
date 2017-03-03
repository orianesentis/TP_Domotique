const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const bookSchema = new Schema({
  name: {type: String, required: true},
  state: {type: String, required: true},
  groups: {type: ObjectId, ref: 'Group'}
});

module.exports = {
  schema: bookSchema,
  model: mongoose.model('Book', bookSchema),
  registry: {
    urlTemplates: {
      self: 'http://127.0.0.1:3000/api/device/{id}',
      relationship: 'http://127.0.0.1:3000/api/device/{ownerId}' +
      '/relationships/{path}'
    }
  }
};
