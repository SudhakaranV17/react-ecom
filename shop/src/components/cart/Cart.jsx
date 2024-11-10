import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../slice/cartSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import clsx from "clsx";

function Cart() {
  const dispatch = useDispatch();
  const { items, totalItems } = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/product.json");
        const data = await res.json();
        setProducts(data); // Set the products state

        const initialQuantities = {};
        items.forEach((item) => {
          const product = data.find(
            (product) => product.id === Number(item.id)
          );
          if (product) {
            initialQuantities[item.id] = item.quantity; // Set the quantity for the existing item
          }
        });

        setQuantity(initialQuantities);
        console.log("Initial quantities:", initialQuantities);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [items]);

  const handleQuantityChange = (id, value) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: Math.max(1, Math.min(75, Number(value))), // Limit between 1 and 75
    }));
  };

  const handleCartAddUpdate = (id) => {
    const currentQuantity = quantity[id];
    const existingItem = items.find((item) => item.id === id);

    if (existingItem && existingItem.quantity === currentQuantity) {
      console.log(`Quantity for ${id} is unchanged. No update needed.`);
      return; // No update needed if quantity is unchanged
    }

    dispatch(addToCart({ id, quantity: currentQuantity }));
  };

  const handleRemoveFromCart = (id) => {
    console.log("clicked remove");
    dispatch(removeFromCart(id)); // Dispatch remove action
  };
  // Calculate overall total
  const overallTotal = Number(
    items.reduce((total, item) => {
      const product = products.find((prod) => prod.id === Number(item.id));
      return total + (product ? product.price * item.quantity : 0);
    }, 0)
  ).toFixed(2);

  return (
    <div className="container mx-auto py-20 px-5">
      <h3 className="text-xl lg:text-2xl xl:text-3xl text-center font-semibold">
        Cart
      </h3>
      {items.length !== 0 ? (
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
          {/* PRODUCTS */}
          <div className="w-full lg:w-[70%]">
            {items.map((item) => {
              const product = products.find(
                (prod) => prod.id === Number(item.id)
              );
              const productPrice = product ? product.price : 0; // Assuming product has a price property
              const subtotal =
                productPrice * (quantity[item.id] || item.quantity);

              return (
                <div
                  key={item.id}
                  className="border-b border-black/30 py-8 flex flex-wrap items-center gap-4"
                >
                  <AlertDialog>
                    <AlertDialogTrigger
                      className={clsx(
                        buttonVariants({ variant: "ghost" }),
                        "group"
                      )}
                    >
                      {" "}
                      <CgClose className="w-4 h-4 transition-transform group-hover:rotate-180 ease-in duration-300" />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete this product from your cart.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  {/* product image */}
                  <div className="flex flex-grow md:flex-grow-0 justify-center items-center">
                    <Link to={`/shop/${item.id}`}>
                      <img
                        src={product ? product.image : "fallback-image-url"} // Assuming products have an imageUrl property
                        alt={product ? product.name : "Product"}
                        className="w-[30vw] md:w-[120px] md:h-[120px]"
                      />
                    </Link>
                  </div>
                  {/* product details */}
                  <div className="flex flex-col gap-4 lg:gap-0 md:flex-row w-full mt-5 md:mt-0 md:w-[unset] md:flex-grow md:justify-around md:items-center">
                    <div className="flex justify-between max-w-16">
                      <p className="font-medium text-sm md:hidden">Product:</p>
                      <Link
                        to={`/shop/${item.id}`}
                        className="text-black/90 text-sm font-normal"
                      >
                        {product ? product.name : "Product Name"}
                      </Link>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-medium text-sm md:hidden">Price:</p>
                      <p className="text-black/90 text-sm font-normal">
                        Rs. {Number(productPrice).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-medium text-sm md:hidden">Quantity:</p>
                      <Input
                        type="number"
                        variant="number"
                        value={quantity[item.id] || item.quantity}
                        max={75}
                        min={1}
                        onChange={(newQuantity) =>
                          handleQuantityChange(item.id, newQuantity)
                        }
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="font-semibold text-sm lg:hidden uppercase md:hidden">
                        Subtotal:
                      </p>
                      <p className="text-black text-sm font-semibold">
                        Rs. {Number(subtotal).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <Button
                    className="uppercase text-sm font-bold tracking-wide"
                    onClick={() => handleCartAddUpdate(item.id)}
                  >
                    Update Cart
                  </Button>
                </div>
              );
            })}
          </div>
          {/* BILL */}
          <div className="w-full lg:w-[30%] py-5 lg:p-5">
            <h3 className="text-2xl font-semibold">Cart Totals</h3>
            <div className="py-5">
              <div className="border-t border-black/10 flex justify-between py-6 lg:py-8 text-black/60">
                <h5 className="">Subtotal:</h5>
                <p className=" text-sm font-normal">Rs. {overallTotal}</p>
              </div>
              <div className="border-t border-black/10 flex justify-between py-4 lg:py-6 text-black/60">
                <h5>tax:</h5>
                <p className=" text-sm font-normal">Rs. 0</p>
              </div>
              <div className="border-t border-black/10 flex justify-between py-4 lg:py-6 text-black/60">
                <h5>Delivery:</h5>
                <p className=" text-sm font-normal">Rs. 12</p>
              </div>
              {/* total bill */}
              <div className="border-t border-black/10 flex justify-between py-5 ">
                <h5 className="text-lg font-semibold">Total:</h5>
                <p className="text-black text-lg font-semibold">
                  Rs. {overallTotal}
                </p>
              </div>
              {/* checkout button */}
              <Button className="w-full mt-3 uppercase text-sm font-semibold">
                Proceed To Checkout
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8 w-full">
          <h2 className="text-center">Your cart is empty</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
