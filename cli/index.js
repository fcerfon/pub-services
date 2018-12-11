var pubServices = require('../services/pubs.service');

var openPubs = pubServices.getOpenPubs();
console.log(openPubs);

services: {
    pubServices : pubServices
}