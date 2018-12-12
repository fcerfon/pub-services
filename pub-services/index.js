var pubService = require('./services/pubServices');

pubService.getOpenPubs();

module.exports = {
    "services": {
        "pubService" : pubService
    }
}