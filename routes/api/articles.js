const router = require("express").Router();
const booksController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articlessController.findAll)
  .post(articlessController.create);

// Matches with "/api/articles/:id"
router
.route("/:id")
  .get(articlessController.findById)
  .put(articlessController.update)
  .delete(articlessController.remove);

module.exports = router;
