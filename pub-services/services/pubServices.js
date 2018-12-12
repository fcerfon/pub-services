function getPubs() {

    var pubsJson = require('../mocks/pubs.json');

    let {Owner, Pub, Beer, OpenHours} = {
        'Owner' : require('../model/Owner').Owner,
        'Pub' : require('../model/Pub').Pub,
        'Beer' : require('../model/Beer').Beer,
        'OpenHours' : require('../model/OpenHours').OpenHours
    }

    var pubs = pubsJson.map(pub => {
        let name = pub.name;
        let owner = new Owner(pub.owner.firstName, pub.owner.lastName, pub.owner.mail);
        let openHours = new OpenHours(pub.openHours.start, pub.openHours.end);
        let beers = pub.beers.map(beer => new Beer(beer.type, beer.name));
        return new Pub(name, owner, pub.openDays, openHours, beers);
    });

    return pubsJson;
}

function getOpenPubs(date) {

    var moment = require('moment');
    moment().locale('fr');

    var date = date || moment().format();
    var openDays = [];
    var openHours = {};
    var day = '';
    var hour = 12;

    day = moment().format('dddd');

    var pubs = getPubs().filter(pub => pub.openDays.includes(day));

    return pubs;
}

module.exports = {
    getPubs : getPubs,
    getOpenPubs : getOpenPubs
};