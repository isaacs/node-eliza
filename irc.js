var irc = require('irc')
var ElizaBot = require('./elizabot.js')

// hold all the sessions for each user
// She remembers you, even if you are on
// a different connection or in a different
// room.
var elizas = {}

module.exports = ElizaIRC

function ElizaIRC (host, nick, opts) {
  irc.Client.call(this, host, nick, opts)

  this.on('message', this._onMessage)
  this.nick = nick
}

require('util').inherits(ElizaIRC, irc.Client)

ElizaIRC.prototype._onMessage = function (from, to, message) {
  // figure out if this is for us
  if (to !== this.nick && message.indexOf(this.nick) !== 0) {
    return
  }

  // remove nick: from the start
  if (message.indexOf(this.nick) !== 0) {
    message = message.substr(this.nick.length)
    message = message.replace(/^[,:]/, '').trim()
  }

  var private = this.nick === to
  var where = private ? from : to
  var prefix = private ? '' : (from + ': ')

  // do we already have a bot for this user?
  var eliza = elizas[from]
  if (!eliza) {
    eliza = elizas[from] = new ElizaBot
    var init = prefix + elizas[from].getInitial()
    this.say(where, init)
    // just add it to the corpus so we rememeber it for later
    eliza.transform(message)
    return
  }

  // otherwise, pick up
  this.say(where, prefix + eliza.transform(message))
  if (eliza.quit) delete elizas[from]
}
