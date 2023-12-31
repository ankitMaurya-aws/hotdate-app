const express = require("express")
const router = express.Router()
const eventController = require("../Controller/event")
const { verifyToken,verifyAdmin,verifyUser } = require("../helper/middleware")

const multer = require("multer");
const path = require("path");
// Define the upload file path
const uploadFilePath = path.resolve(__dirname, "../", "public/uploads");
// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFilePath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Define the file filter logic
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)
  ) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file type. Only JPEG, PNG, and MP4/MKV files are allowed."),
      false
    );
  }
};
  const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/createEvent",verifyUser,upload.fields([{ name: 'images', maxCount: 1000*100*10 }, { name: 'videos', maxCount: 1000*100*10 }]),eventController.createEvent)
router.get("/events",eventController.find)
router.get("/get_event/:id",eventController.get_event)
router.put("/update_event",verifyUser,upload.fields([ { name: 'mainImage', maxCount: 1 },{ name: 'images', maxCount: 1000*100*10 }, { name: 'videos', maxCount: 1000*100*10 }]),eventController.update_event)
router.delete("/delete_event/:id",verifyUser,eventController.delete_event)
router.post("/events/:eventId/participants",verifyUser, eventController.requestParticipant);

router.post("/events/:eventId/:participantId",verifyUser, eventController.updateParticipantStatus);
// router.post("/:eventId/promote",eventController.promote)


module.exports=router