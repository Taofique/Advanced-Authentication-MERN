// This function checks if the token is valid or not

import jwt from "jsonwebtoken";

export const protectRoute = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded)
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - invalid token" });
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error in verifying Token", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
