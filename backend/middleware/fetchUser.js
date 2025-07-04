const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const fetchUser = (req, res, next) => {
  // Get the token from header
  const token = req.header("auth-token");
  if (!token) return res.status(401).send({ error: "Access denied: no token provided" });

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch {
    res.status(401).send({ error: "Access denied: invalid token" });
  }
};

module.exports = fetchUser;
