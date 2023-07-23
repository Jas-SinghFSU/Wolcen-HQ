const ensureAuthenticated = (req, res, next) => {
  // Use passports isAuthenticated api
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(401).send({ error: "You need to log in first." });
  }
};

const ensureUnauthenticated = (req, res, next) => {
  // Use passports isAuthenticated api
  if (req.isAuthenticated()) {
    return res.status(500).send({ error: "Already logged in." });
  } else {
    return next();
  }
};

module.exports = {
  ensureAuthenticated,
  ensureUnauthenticated,
};
