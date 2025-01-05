//  `GET /orders/user/{userId}` - Get all orders for a specific user
/** @type {import("express").RequestHandler} */
export default function userOrders(req, res) {
    console.log("get all orders for a User");
    res.json({ "message": "get all orders for a User" })
}