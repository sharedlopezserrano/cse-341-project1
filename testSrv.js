const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dns.resolveSrv("_mongodb._tcp.cluster0.btku0fs.mongodb.net", (err, records) => {
  console.log(err || records);
});

// I runned some test to check if the dns servers are working and they are