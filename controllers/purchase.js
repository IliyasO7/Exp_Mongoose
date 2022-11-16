const Razorpay = require('razorpay');

const Order = require('../models/orders');
const user = require('../models/user');

const purchasepremium =async (req, res) => {
    try {
        var rzp = new Razorpay({
            key_id: "rzp_test_mEcw6nov9iuw2t",
            key_secret: "Nvfpo1g8giwnLrUYvcfHsiaM"
        })
        const amount = 2500;

        rzp.orders.create({amount, currency: "INR"}, (err, order) => {
            if(err) {
                throw new Error(err);
            }
            const createOrder = new Order({orderid: order.id, status:'PENDING',userId:req.user._id})
            console.log(createOrder);
            return createOrder.save() // IMP
            .then(() => {
                return res.status(201).json({ order, key_id : rzp.key_id});

            }).catch(err => {
                throw new Error(err)
            })
        })
    } catch(err){
        console.log(err);
        res.status(403).json({ message: 'Something went wrong', error: err})
    }
}


 const updateTransactionStatus = (req, res ) => {
    try {
        const { payment_id, order_id} = req.body;
        Order.findOne({where : {orderid : order_id}}).then(order => {
            order.paymentid = payment_id
            order.status = 'SUCCESSFUL'
            order.ispremiumuser= true
            return order.save()
            .then(()=>{
                user.findOne()
                return res.status(202).json({success:true, message:"Transaction successful"});
            }).catch((err)=> {
                throw new Error(err);
            })
        }).catch(err => {
            throw new Error(err);
        })
    } catch (err) {
        console.log(err);
        res.status(403).json({ errpr: err, message: 'Sometghing went wrong' })

    }
}
           /* order.update({ paymentid: payment_id, status: 'SUCCESSFUL'}).then(() => {
                req.user.update({ispremiumuser: true})
                return res.status(202).json({sucess: true, message: "Transaction Successful"});
            })*/

module.exports = {
    purchasepremium,
    updateTransactionStatus
}