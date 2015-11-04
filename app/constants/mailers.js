var rootUrl = require('../../config/environments/'+process.env.NODE_ENV).rootUrl;
var companyName = require('../../config/environments/'+process.env.NODE_ENV).companyName;

module.exports = {
  company: companyName,
  updateProfile: rootUrl + '/profile',
  unsubscribe: rootUrl + '/unsubscribe'
}