//  `GET /inventory/low` - Get products with low stock
/** @type {import("express").RequestHandler} */
export default function lowStock(req, res) {
    console.log("Get products with low stock");
    res.json({ "message": "Get products with low stock" })

}