var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
                    name: String,
                    title: String,
                    email: String,
                    phone: String,
                    address: String,
                    company: String,
                  });
ProfileSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Profile', ProfileSchema);
