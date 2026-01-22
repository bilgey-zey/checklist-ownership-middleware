function checkOwnership(req, res, next) {
  // Mock data for demonstration purposes
  const checklistOwnerId = 1;

  // Assume user id is attached to the request
  const currentUserId = req.userId;

  if (currentUserId !== checklistOwnerId) {
    return res.status(403).json({
      message: "You do not have permission to modify this checklist"
    });
  }

  next();
}

module.exports = checkOwnership;
