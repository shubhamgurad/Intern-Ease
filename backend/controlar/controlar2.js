const interninfo = require('../model.js/model2')

const getdata = async (req, res) => {
    try {
        const data = await interninfo.find()
        res.send({ data })

    } catch (error) {
        console.log(error)

    }
}

const postdata = async (req, res) => {
    // const { companyName, contactNumber, copmanyEmail, guideName, joiningDate, projectTitle, technology, Objective ,firstReviewSubmitted ,firstSubmissionDate } = req.body

    // try {
    
    //     const userdata = new interninfo({
    //         companyName,
    //         contactNumber,
    //         copmanyEmail,
    //         guideName,
    //         joiningDate,
    //         projectTitle,
    //         technology,
    //         offerLetter: req.file.filename ,
    //         Objective,
    //         //review
    //         firstReviewSubmitted,
    //         firstSubmissionDate,
    //         firstReviewDocument: req.file.filename ,
    //         secondReviewSubmitted,
    //         secondSubmissionDate,
    //         secondReviewDocument: req.file.filename ,
    //     })
    const { companyName, contactNumber, copmanyEmail, guideName, joiningDate, projectTitle, technology, Objective, firstReviewSubmitted, firstSubmissionDate, secondReviewSubmitted, secondSubmissionDate } = req.body

    try {
        let offerLetterFilename = "";
        let firstReviewDocumentFilename = "";
        let secondReviewDocumentFilename = "";

        // Check if req.file is defined and has a filename property
        if (req.file && req.file.filename) {
            offerLetterFilename = req.file.filename;
            firstReviewDocumentFilename = req.file.filename;
            secondReviewDocumentFilename = req.file.filename;
        }

        const userdata = new interninfo({
            companyName,
            contactNumber,
            copmanyEmail,
            guideName,
            joiningDate,
            projectTitle,
            technology,
            offerLetter: offerLetterFilename,
            Objective,
            //review
            firstReviewSubmitted,
            firstSubmissionDate,
            firstReviewDocument: firstReviewDocumentFilename,
            secondReviewSubmitted,
            secondSubmissionDate,
            secondReviewDocument: secondReviewDocumentFilename,
        });
        const data = await userdata.save()
        res.send({ data })

    } catch (error) {
        console.log(error)

    }
}


module.exports = { getdata, postdata }