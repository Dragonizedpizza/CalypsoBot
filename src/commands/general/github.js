const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = class GitHubCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'github',
      aliases: ['gh', 'repo'],
      usage: 'github',
      description: 'Posts the link to Calypso\'s GitHub repository.',
      type: 'general'
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('GitHub Link')
      .setDescription(oneLine`
        Click [here](https://github.com/sabattle/CalypsoBot) to to visit my GitHub repository!
        Please support me by starring ⭐ the repo, and feel free to comment about issues or suggestions!
      `)
      .addField('Other Links',
        '**[Invite Me](https://discordapp.com/oauth2/authorize?client_id=416451977380364288&scope=bot&permissions=268528727) | ' +
        '[Support Server](https://discord.gg/pnYVdut)**'
      )
      .setFooter(`Requested by ${message.member.displayName}#${message.author.discriminator}`, 
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setThumbnail('https://raw.githubusercontent.com/sabattle/CalypsoBot/develop/data/images/Calypso.png')
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
