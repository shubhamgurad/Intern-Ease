const signupdashmodel = require('../model.js/dashmodel1')
const bcrypt = require('bcryptjs')


const dashregistration = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        // Encrypt the password
        const salt = bcrypt.genSaltSync(12);
        const encpassword = bcrypt.hashSync(password, salt);

        // Create a new user
        const newUser = new signupdashmodel({
            firstname,
            lastname,
            email,
            password: encpassword,
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Send a success response
        res.status(201).json({ message: "User registered successfully", user: savedUser });

    } catch (error) {
        // Handle duplicate key error
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Log other errors and return a server error response
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// module.exports = dashregistration;


// const registration = async (req, res) => {

//     try {

//         const { fullname, email, phoneNumber,course, password  } = req.body

//         const salt = bcrypt.genSaltSync(12)
//         const encpassword = bcrypt.hashSync(password, salt)

//         const userData = new signupmodel({
//                     fullname,
//                     email,
//                     phoneNumber,
//                     course,
//                     photo:req.file.filename,
//                     password:encpassword
//         })

//         const data = await userData.save()
//         res.status(200).send({ msg: "Data inserted successfully", data })

//     } catch (err) {
//         res.status(400).send()
//     }
// }

const findUser = async (req, res) => {
    try {
        const userData = await signupdashmodel.find()
        res.status(200).send({ userData })

    } catch (err) {
        res.status(400).send(err)
    }
}

const findbyemail = async (req, res) => {
    try {
        const data = await signupdashmodel.findOne({ email: req.params.email })
        res.status(200).send({ data })

    } catch (error) {
        res.status(500).send(error)
    }
}

const findParticularUser = async (req, res) => {
    try {
        const userData = await signupdashmodel.findOne({ email: req.params.email })
        if (userData != null) {
            res.status(200).send({ userData })
        }
        else {
            res.status(400).send({ message: "This user doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

const deleteUser = async (req, res) => {
    try {
        const data = await signupdashmodel.deleteOne({ email: req.params.email })
        res.status(200).send({ msg: "User deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}

const updateUser = async (req, res) => {
    try {
        const { email } = req.params

        const { fullname, password: encpassword, phoneNumber, course } = req.body

        const data = await signupdashmodel.updateOne(
            { email },
            {
                $set:
                {
                    fullname,
                    lastname,
                    password: encpassword,
                }
            }
        )
        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "User updated Successfully" })
        }
        else {
            res.status(400).send({ msg: "You haven't updated any data" })
        }

    } catch (err) {
        res.status(500).send(err)
    }
}

async function dashlogin(req, res) {
    try {

        const { email, password } = req.body
        // const { email, password } = req.params

        const data = await signupdashmodel.findOne({ email })

        const compare = await bcrypt.compare(password, data.password)

        if (compare === true) {
            res.status(200).send({ data })
        } else {
            res.status(400).send({ msg: "Email or password incorrect" })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}





module.exports = { dashregistration, findUser, findParticularUser, deleteUser, updateUser, dashlogin, findbyemail }