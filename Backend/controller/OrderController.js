const ORDER_MODEL = require("../Models/OrderModel");


// //adding order details
// const addOrderDetails = async (req, res) => {

//     let newData = new ORDER_MODEL(req.body);


//     //    const { ProductName ,Address , EmailAddress , PhoneNumber ,UserName } = req.body;

//     const data = req.body
//     console.log("sukithaaa")
//     try {

//         newData.save((err) => {
//             if (err) {
//                 return res.status(400).json({
//                     message: err,
//                     code: "300"
//                 });
//             }
//             return res.status(200).json({
//                 message: "data added succsesfull",
//                 code: "200"
//             });
//         });

//     } catch (err) {

//         return res.status(400).json({
//             messages: err,
//             code: "500"
//         });

//     }
// }

const addOrderDetails = async (req, res) => {
	if (req.body) {
		const order = new ORDER_MODEL(req.body);
		await order
			.save()
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

const getallAccountDetails = async (req, res) => {
    try {
        const ShopData = await ORDER_MODEL.find();
        return res.status(200).send({
            data: ShopData,
            code: "200"
        });

    } catch (err) {

        return res.status(500).send({
            message: err,
            code: "500"
        })

    }
}

module.exports = {
    addOrderDetails,
    getallAccountDetails
}