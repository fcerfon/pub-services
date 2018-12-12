function getPubs() {
    var pubs = require('../mocks/pubs.json');
    return pubs;
}

function getOpenPubs(date) {

    var moment = require('moment');
    moment().locale('fr');

    var date = date || moment().format();
    var openDays = [];
    var openHours = {};
    var day = '';
    var hour = 12;
    var pubs = require('../mocks/pubs.json');

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