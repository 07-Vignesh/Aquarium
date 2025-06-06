// middlewares/mockAuth.js
export const mockAuth = (req, res, next) => {
  req.auth = { userId: "mock-user-123" }; // Simulate a logged-in user
  next();
};
