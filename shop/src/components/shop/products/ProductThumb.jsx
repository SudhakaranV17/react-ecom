import productImg from "../../../assets/product-1.jpg";
import productImgOrg from "../../../assets/product-2.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../slice/cartSlice";
function ProductThumb({ product }) {
  const dispatch = useDispatch();
  const { items, totalItems } = useSelector((state) => state.cart);
  const handleCart = () => {
    dispatch(addToCart({ id: product.id, quantity: 1 }));
  };
  return (
    <>
      <div
        className="group hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden relative"
        key={product.id}
      >
        <Link to={`/shop/${product.id}`}>
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src={product.image}
              alt=""
              className="w-full h-full object-bottom xl:object-center absolute top-0 z-10 object-cover group-hover:opacity-0 group-hover:z-0 transition-all duration-500 "
            />
            <img
              src={product.image}
              alt=""
              className="w-full h-full absolute object-bottom xl:object-center top-0 z-0 object-cover group-hover:opacity-1 group-hover:z-10 transition-all duration-500"
            />
          </div>
        </Link>
        <div className="group-hover:pl-5 transition-all duration-500 my-4">
          <h6 className="text-sm mb-1">{product.name}</h6>
          <p className="">${product.price}</p>
        </div>
        <div className="absolute px-4 py-6 flex flex-col items-center gap-5 justify-center bg-white top-1/2 -right-full -translate-y-1/2 group-hover:right-0 transition-all duration-300 z-10">
          <LuHeart className="w-5 h-5 hover:fill-red-500 hover:stroke-transparent duration-200 transition-all" />
          <FaShoppingCart
            className="w-5 h-5 cursor-pointer"
            onClick={handleCart}
          />
        </div>
      </div>
    </>
  );
}

export default ProductThumb;
