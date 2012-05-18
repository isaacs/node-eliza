var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl._prompt = '> '

var ElizaBot = require('./elizabot.js')
var eliza = new ElizaBot
eliza.memSize = 1024

function say (line) {
  console.log('ELIZA: ' + line)
  process.stdout.write(rl._prompt)
}

rl.on('line', function (line) {
  line = line.trim()
  if (!line) return

  // user asked a question
  if (line === '.reset') {
    console.log(eliza.getFinal())
    eliza.reset()
    say(eliza.getInitial())
    process.stdout.write(rl._prompt)
    return
  }
  if (line === '.quit') {
    process.exit()
    return
  }
  var reply = eliza.transform(line)
  say(reply)
  if (eliza.quit) {
    process.exit()
  }
})

say(eliza.getInitial())
