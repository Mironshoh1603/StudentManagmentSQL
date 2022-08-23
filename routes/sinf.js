const express = require("express");
const router = express.Router();
const sinfController = require("../controllers/sinf");
router.route("/").get(sinfController.getAll).post(sinfController.add);

router
  .route("/:id")
  .get(sinfController.getOne)
  .patch(sinfController.updateOne)
  .delete(sinfController.deleteOne);

module.exports = router;
