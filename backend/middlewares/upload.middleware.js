const multer = require("multer");
// making uplaod to use in product route
const upload = multer({
  //making storage we can make it local starorage and store locally but we are using cloudinary
  storage: multer.memoryStorage(),
  //file size limit is max 5mb
  limits: { fileSize: 5 * 1024 * 1024 },
  //flitering the file that file must be image
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      //if image pass
      cb(null, true);
      //if not image thorw error
    } else {
      cb(new Error("file size limit exceed"), false);
    }
  },
});

module.exports = upload;
