const multer = require('multer');
const path = require('path');

// Photo storage configuration
const photoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, './Studentimg'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// File storage configuration
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, './offerLetter'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// const reviewFileStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, './ReviewDoc'));
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });

const photoUpload = multer({
    storage: photoStorage,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB file size limit for photos
});

const fileUpload = multer({
    storage: fileStorage,
    // You can set limits here if needed
});

// const reviewFileUpload = multer({
//     storage: reviewFileStorage,
//     // You can set limits here if needed
// });

module.exports = { photoUpload, fileUpload };




// const photoStorage = multer.diskStorage({...}): 
// This block of code defines a storage engine to store uploaded files. 
// In this case, it's using diskStorage, which means files will be stored on the disk.
//  It specifies two functions:

// destination: This function determines the directory to which uploaded files should be saved.
//  In this example, it sets the destination to ./public/images.


// filename: This function determines what the file should be named. 
// In this example, it simply uses the original name of the file.