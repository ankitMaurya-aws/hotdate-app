const express = require("express");
const user = require("../Controller/userController");
const router = express.Router();
const { verifyToken,verifyAdmin,verifyUser } = require("../helper/middleware")
const eventController =require("../Controller/event")
const multer = require("multer");
const path = require("path");
const userController = require("../Controller/userController");
const uploadFilePath = path.resolve(__dirname, "../", "public/uploads");
const storage = multer.diskStorage({
  destination: uploadFilePath,
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

router.post("/register", user.signup);
router.post("/login", user.login);
router.post("/upload_album",verifyUser,upload.any("album.images"),user.upload_album)
router.post("/add_img_album/:albumId",verifyUser,upload.any("album.images"),user.add_img_album)
router.put("/deleteAlbum/:albumId",verifyUser,user.deleteAlbum)
router.put("/del_img_album/:albumId",verifyUser,user.del_img_album)
router.post("/model_mail",verifyUser,user.model_mail)
router.post("/model_verify",verifyAdmin,user.model_verify)
router.get("/forget",user.forget)
router.post("/verifyOtp",user.verifyOtp)
router.post("/reset_pass",verifyUser,user.reset_pass)
router.get("/findOne/:id", user.findOne)
router.put("/update_model", verifyUser,upload.fields(
  [{ name: 'images', maxCount: 1000 * 100 * 10 },
  { name: 'image', maxCount: 1 },
  { name: 'videos', maxCount: 1000 * 100 * 10 }]
), userController.update)
router.delete("/delete_user/:id", verifyAdmin, user.delete_user)
router.get("/search_user",user.search_user)
router.post("/logout",verifyUser,user.logout)
router.put("/changePassword",verifyUser,user.changePassword)
router.post("/contactUs",user.contactUs)
router.get("/userdetail/:userId",user.userdetail)
router.post("/subscribe/:modelId",verifyUser,user.subscribe)
module.exports = router;
