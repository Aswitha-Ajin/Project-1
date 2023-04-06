const router=require("express").Router();
const Book=require("../Module/bookModule");
const booksmain = require("../Main/bookmain");



router.get("/", booksmain.getAll);
router.post("/", booksmain.addBook);
router.get("/:id", booksmain.getId);
router.put("/:id", booksmain.updateBook);
router.delete("/:id", booksmain.deleteBook);


module.exports=router;



