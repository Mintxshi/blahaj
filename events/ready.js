const colors = require('colors')
const deploy = require('../deploy')
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        console.log(`${'blahaj'.blue} has started.`);
        deploy.deploy()
	},
};