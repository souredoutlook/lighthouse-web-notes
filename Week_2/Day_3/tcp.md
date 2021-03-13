# TCP

### Instructor: Vasily Klimkin

## Content:

- Q/A
- What Is Networking?
- Networking with TCP
- Build A Server
- Build A Client
- Connect To Vasily's Server

## Q/A

Async Testing:

Don't think about it like: computers/threads/awaits etc.

Consider when you do chores like, dusting, mopping, throwing out the garbage, laundry. load up the dishwasher. You could get up and dust right now - but laundry you have options - you can put it in a machine or wash by hand. Putting it in the machine is an async function, provided you don't sit there and watching it spin for 2 hours.

Testing async is tricky because Mocha can execute it's tests faster than the testable code can execute its asynchronus functions.

## What is Networking !!!!

- communication between things
- connecting between entities (2 or more)

## Tips for Networking

- Say Hello!
- Say your name
- Try to be not nervous, stay on point
- Show interest
- Make sure to say a proper goodbye

## Mediums Human Beings Use to Communicate

- Air
- Sound Waves
- Light
- Phones
- Lip Reading
- Vibrations
- Telepathy (lol)
- Pen/paper writing
- Can Phone (phone category)
- Morse Code

## Computer Communication Mediums

- binary
- cables
- radio
- frequencies (wifi)
- bluetooth
- LAN/WAN (still cables/frequencies)
- and many many more

## Rules for Lecture

- 1 person speaks, everyone else listens
- 1 person shares their screen at a time
- Cameras on.
- May unmute and ask questions and/or chat in the chat window

## Computer Networking Rules

- Computer A is server, Computer B is client
- Computer A turns on and listens to connections
- Computer B can connect to Computer A by knowing its "options" that need to be configured
- Computer B can send messages, Computer A can recieve messages
- Computer A can send messages, Computer B can recieve messages
- Both computers may not send messages at the same time (unless async)
- Computer B can disconnect

> Another word for rules is Protocol ... or this case [Transmission Control Protocol](https://tools.ietf.org/html/rfc793)

## Other Computer Networking Rules

HTTP a subset of TCP (which is happening in the background)

**(H)** yper **(T)** ext **(T)** ransfer **(P)** rotocol

- Once a client connects they are asking for a REQUEST
- Server recievs a REQUEST and does some logic ... sends back a response
- CONNECTION GETS TERMINATED

- Requests get a response in HTML but can also get response in JSON

Also UDP! Example: high packet volume online multiplayer.

## Library: Net

- [Net](https://nodejs.org/api/net.html) is a TCP library built in nodeJS
- Have a bunch of methods for server and client(socket)
- built into the default node library - no need to npm install anything just `require('net')`

```javascript
//server

const net = require("net");
const server = net.createServer(); //console.log(server) will yield a BUNCH of info about what server is

// If your computer is a building, and ports are rooms. How do we get to your building?
// Our "building" is located at an IP address (locally on our home network)
// Conceptually "our city" is at a public IP address
// Using ifconfig to get an ip

// PORT, CB
server.listen(3001, () => {
  console.log("Server is listening on port 3001");
  /* 65535 available ports or 2^16 less one (the biggest number that can be represented with an unsigned 16 bit number) Port 0 is reserved */
});

const users = [];

server.on("connection", () => {
  users.push(client);
  console.log("Someone has connected");
  client.setEncoding("utf8");
  client.on("data", (data) => {
    console.log(data);
    for (let user of users) {
      user.write(data);
    }
  });

  client.on("end", () => {
    users.splice(users.indexOf(client), 1);
    // this removes clients from the user list so that our app doesn't crash
    console.log("----Someone Disconnnected----");
    console.log("Goodbye :(");
  });
});
```

```javascript
//client - see Day_3/client.js for full code
const net = require("net");

const client = net.createConnection({
  //connection takes in "options"
  // host: <-- IP (either public or local depending on how we're networking)
  // port: <-- the port number that the server is listening on
  host: "localhost", //because its running on the same machine
  port: 3001,
});

//etc. etc. etc.
```
