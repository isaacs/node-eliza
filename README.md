# eliza-irc

An IRC bot that does the eliza thing.

This uses a bunch of code I didn't write.  I found it online, and
assumed it was ok to use.  Here's the license:

```
elizabot.js v.1.1 - ELIZA JS library (N.Landsteiner 2005)
Eliza is a mock Rogerian psychotherapist.
Original program by Joseph Weizenbaum in MAD-SLIP for "Project MAC" at MIT.
cf: Weizenbaum, Joseph "ELIZA - A Computer Program For the Study of Natural Language
    Communication Between Man and Machine"
    in: Communications of the ACM; Volume 9 , Issue 1 (January 1966): p 36-45.
JavaScript implementation by Norbert Landsteiner 2005; <http://www.masserk.at>
```

All the parts I wrote are BSD licensed.

## Usage

```javascript
var Eliza = require('eliza/irc.js')

new Eliza({ server: 'irc.freenode.net'
          , nick: 'Eliza'
          , channels: ['##turtles']
          , userName: 'eliza'
          , realName: 'eliza' })
```
