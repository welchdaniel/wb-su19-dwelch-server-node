const mongoose = require('mongoose');
const widgetSchema = require('./WidgetSchema');
const widgetModel = mongoose.model('WidgetModel', widgetSchema);
module.exports = widgetModel;