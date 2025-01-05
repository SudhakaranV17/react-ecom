//  `GET /orders/{id}` - Get order details by ID
/** @type {import("express").RequestHandler} */
export default function orderDetail(req, res) {
    console.log("order detail by id");
    res.json({ "message": "order detail by id" })
}