const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "rootuser",
  database: "mydb",
});

client.connect();

client.query(`SELECT * FROM users`, (error, result) => {
  if (!error) {
    console.log(result.rows);
  } else {
    console.log(error.message);
  }
  client.end();
});

// client.query(
//   `INSERT INTO users (firstname, lastname, location) VALUES ('Mavericks', 'Balitaan', 'Philippines')`,
//   (err, res) => {
//     if (!err) {
//       console.log(res.rows);
//     } else {
//       console.log(err.message);
//     }
//     // client.end();
//   }
// );

// client.query(`DELETE FROM users WHERE id=1`, (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   // client.end();
// });
