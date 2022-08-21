const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'gives you the latency',
  },
];

const rest = new REST({ version: '10' }).setToken('NjQyODQyNTM2NjMyOTA5ODUw.G5eRQB.n7x3ThnlCcUrY_gfcOk97RcNaO0RZDoxpU1NC0');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands('642842536632909850'), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();