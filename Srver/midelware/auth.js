const models = require("../models/session");
module.exports = {
  CreateSession: (req, res, user_id, session) => {
    models
      .post(user_id, session)
      .then((result) => {
        res
          .cookie("abdelwahebcenima", session, {
            path: "/",
            expires: new Date(new Date().getTime() + 86400 * 1000),
            httpOnly: false,
            abdelwahebcenima: false,
          })
          .send([session, "secsuss", user_id]);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  VerifySession: (req, res, next) => {
    if (req.cookies.abdelwahebcenima) {
      models
        .Get(req.cookies.abdelwahebcenima)
        .then((result) => {
          if (result.length > 0 && result[0].date > Date.now()) {
            var registerInfo = {
              user_id: result[0].user_id,
              session: result[0].session,
            };
            res.status(200).send(registerInfo);
          } else {
            res.status(200).send("seesion login fail");
          }
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    } else {
      res.status(200).send("session login fail");
    }
  },
};
