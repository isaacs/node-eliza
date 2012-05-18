var ElizaIRC = require('./irc.js')

new ElizaIRC('irc.freenode.net', 'elizsbot', {
  channels: ['#isaacs', '#Node.js', '#stackvm']
})
