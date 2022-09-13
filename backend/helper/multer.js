import multer from "multer";
import path from "path"
// const storage = multer.diskStorage({
//     storage: multer.diskStorage({
//             destination: (req, file, callback) => {
//                 callback(null, "./files");
//             },
//             filename: (req, file, callback) => {
//               req.originalName = Date.now() + path.extname(file.originalname);
//               callback(null, req.originalName);
//             },
//           }),
// });
  
// export const upload = multer({ storage: storage,  limits: {
//     fileSize: 1024 * 1024 * 6
// },});



export const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./files");
    },
    filename: (req, file, callback) => {
      req.originalName = Date.now() + path.extname(file.originalname);
      callback(null, req.originalName);
    },
  }),
}).single("file"); // for multiple upload


// export const getFile = async () =>{
//   upload(req, res, (err) => {
//     var files = [];
//     req.files.forEach((ele) => {
//       console.log(ele);
//       files.push(process.env.staticFilesUrl + ele.filename);
//     });
//     res.send({
//       status: "SUCCESS",
//       files,
//     });
//   });
// };