const express = require("express");
const router = express.Router();
const tumanController = require("../controllers/tuman");
router.route("/").get(tumanController.getAll).post(tumanController.add);

router
  .route("/:id")
  .get(tumanController.getOne)
  .patch(tumanController.updateOne)
  .delete(tumanController.deleteOne);

module.exports = router;
