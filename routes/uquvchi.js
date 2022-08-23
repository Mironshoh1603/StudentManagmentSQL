const express = require("express");
const router = express.Router();
const uquvchiController = require("../controllers/uquvchi");
router.route("/").get(uquvchiController.getAll).post(uquvchiController.add);

router
  .route("/:id")
  .get(uquvchiController.getOne)
  .patch(uquvchiController.updateOne)
  .delete(uquvchiController.deleteOne);

module.exports = router;
