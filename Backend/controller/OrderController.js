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


//get a specific supplier by id
const getOrderById = async (req, res) => {
    
    let OrderID = req.params.id;
    ORDER_MODEL.findById(OrderID, (err, supplier) => {
        if (err) {
            return res.status(400).json({ code:"201",success: false, err });
        } else {
            return res.status(200).json({
                code:"200",
                success: true,
                supplier
            });
        }


    });

}


//Update Order status
const upDateOrderDetails = async (req, res) => {
    ORDER_MODEL.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },

    ).then(() => {
        res.status(200).send({ status: "200", statusmsg: "order updated" });
    }).catch((err) => {
        console.error(err);
        res.status(500).send({ status: "500", statusmsg: "error with updating data" });

    })
}


module.exports = {
    addOrderDetails,
    getallAccountDetails,
    getOrderById,
    upDateOrderDetails
}