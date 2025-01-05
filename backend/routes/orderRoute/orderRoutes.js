// RESPONSIBILITY: Manages order creation, status tracking, and history:
//  `POST /orders/new` - Create a new order
//  `GET /orders/{id}` - Get order details by ID
//  `PUT /orders/{id}/status` - Update order status (e.g., processed, shipped, delivered)
//  `GET /orders/user/{userId}` - Get all orders for a specific user

import express from "express";
import createOrder from "./createOrder.js";
import authenticate from "../../middlewares/protectRoutes.js";
import orderDetail from "./orderDetails.js";
import orderStatus from "./orderStatus.js";
import userOrders from "./userOrders.js";
const router = express.Router();

router.post("/new", authenticate, createOrder);
router.get("/:id", authenticate, orderDetail);
router.put("/:id/status", authenticate, orderStatus);
router.get("/user/:userId", authenticate, userOrders);


export default router;