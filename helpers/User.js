"use strict";

//const { result } = require("lodash");

module.exports = function () {
  return {
    SignUpValidation: (req, res, next) => {
      req.checkBody("username", "Prénom requit !").notEmpty();
      req.checkBody("username", "Minimum 5 caractères").isLength({ min: 5 });
      req.checkBody("email", "Email requit !").notEmpty();
      req.checkBody("email", "Email invalid !").isEmail();
      req.checkBody("password", "Mot de passe requit !").notEmpty();
      req.checkBody("password", "Minimum 5 caractères").isLength({ min: 5 });

      req
        .getValidationResult()
        .then((result) => {
          const errors = result.array();
          const messages = [];
          errors.forEach((error) => {
            messages.push(error.msg);
          });

          req.flash("error", messages);
          res.redirect("/signup");
        })

        .catch((err) => {
          return next();
        });
    },

    LoginValidation: (req, res, next) => {
      req.checkBody("email", "Email requit !").notEmpty();
      req.checkBody("email", "Email invalid !").isEmail();
      req.checkBody("password", "Mot de passe requit !").notEmpty();
      req.checkBody("password", "Minimum 5 caractères").isLength({ min: 5 });

      req
        .getValidationResult()
        .then((result) => {
          const errors = result.array();
          const messages = [];
          errors.forEach((error) => {
            messages.push(error.msg);
          });

          req.flash("error", messages);
          res.redirect("/");
        })

        .catch((err) => {
          return next();
        });
    },

  };
};
