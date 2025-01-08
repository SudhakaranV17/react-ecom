// 5. Inventory Service*
// **Responsibility**: Manages stock levels of products and handles inventory updates when orders are placed.
//  **API**:
//  `GET /inventory/{productId}` - Get the inventory level of a product
//  `POST /inventory/{productId}/update` - Update the stock level after an order is placed
//  `GET /inventory/low` - Get products with low stock
//  **Database**: Manages stock levels in a database, either separate or part of the Product service.
import express from "express";
import authenticate from "../../middlewares/protectRoutes.js";
import inventoryLevel from "./inventoryLevel.js";
import lowStock from "./lowStock.js";
import updateStock from "./updateStock.js";
const router = express.Router();

router.post("/:productId/update", authenticate, updateStock);
router.get("/low", authenticate, lowStock);
router.get("/:productId", authenticate, inventoryLevel);



export default router;