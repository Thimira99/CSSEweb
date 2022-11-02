const User = require('../Models/userModel');

// Add new user
const createUser = async (req, res) => {
    console.log(req.body);
    if (req.body) {
        const user = new User(req.body);
        await user
            .save()
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.status(500).send({ error: error.message });
            });
    }
};

// const getUserById = async (req, res) => {
//     if (req.params && req.params.userId) {
//         await User.findById(req.params.userId)
//             .then(data => {
//                 res.status(200).send({ data: data });
//             })
//             .catch(error => {
//                 res.status(500).send({ error: error.message });
//             })
//     }
// }

// Get user by user id
const getUserById = async (req, res) => {
    console.log(req.params.email);
    if (req.params.email) {
        await User.find({ email: req.params.email })
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.status(500).send({ error: error.message });
            });
    }
};


//get user by role
const getUserByrole = async (req, res) => {
   
        const { role } = req.body;
        await User.find({ role: role }).then((data) => {
            res.status(200).send({ data: data });
        }).catch((error) => {
            res.status(500).send({ error: error.message });
        })
      

}




module.exports = {
    createUser,
    getUserById,
    getUserByrole
};
