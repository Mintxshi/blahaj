const colors = require('colors')
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.clear()
        console.log(`${'blahaj'.blue} has started.`);
		client.user.setPresence({
			game: {
				name: 'dunno dont care',
				type: "STREAMING",
				url: "https://www.twitch.tv/monstercat"
			}
		});
	},
};