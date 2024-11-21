const contactdetails = require('../model.js/model3')

const getcontactdata = async (req, res) => {
    try {
        const data = await contactdetails.find()
        res.send({ data })

    } catch (error) {
        console.log(error)

    }
}

const postcontactdata = async (req, res) => {
    const { name, email, message } = req.body

    try {
    
        const userdata = new contactdetails({
            name,
            email,
            message
        })
        const data = await userdata.save()
        res.send({ data })

    } catch (error) {
        console.log(error)

    }
}

module.exports = { getcontactdata, postcontactdata }