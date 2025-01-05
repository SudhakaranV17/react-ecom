//  `POST /orders/new` - Create a new order
/** @type {import("express").RequestHandler} */
export default function createOrder(req, res) {
    console.log("create new order");
    res.json({ "message": "create new order" })

}