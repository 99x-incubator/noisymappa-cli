const request = require('request');
const constants = require('../../constants');

let setServerStatus = (payload) => {
    const options = {
        url: constants.serverUrl,
        headers: {
            'Authorization': 'Basic ' + constants.staticToken
        },
        method: 'POST',
        json: payload
    };

    request(options, (error, response, body) => {
        console.log(payload.status, body);
    });
};

module.exports = {
    setServerStatus: setServerStatus
};
