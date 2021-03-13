const net = require("net");
const stdin = process.stdin;
// connection takes in those "options"
//  host <--- IP city -> building
//  port <--- which the room #
const client = net.createConnection({
  host: "135.23.222.131",
  port: 3001,
});

const name = "Nick Meis";

stdin.setEncoding("utf8");
client.setEncoding("utf8");

// sends information to the server...
client.write(JSON.stringify({ name }));
stdin.on("data", (input) => {
  client.write(JSON.stringify({ name, input }));
});

client.on("data", (data) => {
  parsedData = JSON.parse(data);
  console.log(
    `${parsedData.name} Said: `,
    parsedData.input !== undefined ? parsedData.input : ""
  );
});
