import jwt from "jsonwebtoken";

async function authentication(req, res, next) {
  const headers = req?.headers["authorization"];
  const token = headers?.split(" ")[1];
  //   console.log(token)
  if (!token) {
    return res
      .status(401)
      .json({ status: "Error", message: "Unauthorized user" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({
      status: "error",
      message: "Invalid token",
    });
  }
}

export default authentication;
