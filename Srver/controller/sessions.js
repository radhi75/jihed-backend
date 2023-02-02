const { connection } = require("../database-mysql/config.js");
module.exports = {
  Get: (session) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM sessions WHERE session=?",
        [session],
        (err, results) => {
          // console.log(results,'sesssionss')
          err ? reject(err) : resolve(results);
        }
      );
    });
  },
  post: (user_id, session) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO sessions (user_id,session)Values (?,?)",
        [user_id, session],
        (err, results) => {
          return err ? reject(err) : resolve(results);
        }
      );
    });
  },
  delete: (session) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM sessions WHERE session=?",
        [session],
        (err, results) => {
          err ? reject(err) : resolve(results);
        }
      );
    });
  },
};
