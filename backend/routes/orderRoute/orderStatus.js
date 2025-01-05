//  `PUT /orders/{id}/status` - Update order status (e.g., processed, shipped, delivered)
/** @type {import("express").RequestHandler} */
export default function orderStatus(req, res) {
    console.log("order status");
    res.json({ "message": "order status" })
}