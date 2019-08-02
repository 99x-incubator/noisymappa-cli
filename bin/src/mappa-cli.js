const program = require('commander');
const client = require('../src/mappa-client');

program.version('0.1.0');

program.command('on')
    .action(() => {
        client.setServerStatus({
            status: 'on'
        });
    });

program.command('off')
    .action(() => {
        client.setServerStatus({
            status: 'off'
        });
    });

module.exports = {
    program: program
};