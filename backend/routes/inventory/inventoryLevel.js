//  `POST /inventory/{productId}/update` - Update the stock level after an order is placed
/** @type {import("express").RequestHandler} */
export default function inventoryLevel(req, res) {
    console.log("Inventory Level of product after order placed");
    res.json({ "message": "Inventory level of product after order placed" })

}