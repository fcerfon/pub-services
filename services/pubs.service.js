function getPubs() {
    var pubs = require('./pubs.json');
    return pubs;
}

function getOpenPubs(date) {
    var moment = require('moment');
    var date = date || moment().format();
    moment().locale('fr');
    var pubs = require('./pubs.json');
    var openDays = [];
    var openHours = {};
    var day = '';
    var hour = 12;

    pubs.forEach(function (pub, index, array) {
        openDays = pub.openDays;
        openHours = pub.openHours;
        day = moment().format('dddd');
        // TODO: open hours
        if (!openDays.includes(day)) {
            array.splice(index, 1);
        }
    });
    return pubs;
}

module.exports = {
    getPubs : getPubs,
    getOpenPubs : getOpenPubs
};