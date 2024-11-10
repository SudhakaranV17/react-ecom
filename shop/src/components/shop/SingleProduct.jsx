import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LuShoppingCart } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slice/cartSlice";
import { Link, useParams } from "react-router-dom";
import { useToast } from "@/components/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
const images = [
  {
    link: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    link: "https://swiperjs.com/demos/images/nature-2.jpg",
  },
  {
    link: "https://swiperjs.com/demos/images/nature-3.jpg",
  },
  {
    link: "https://swiperjs.com/demos/images/nature-4.jpg",
  },
];

function SingleProduct() {
  const { productId } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState({}); // Simplified state
  const cartStatus = useSelector((state) => state.cart.status);
  const { toast } = useToast();
  // Show toast notification based on cart status

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleQuantityChange = (id, value) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: Math.max(1, Math.min(75, Number(value))), // Limit between 1 and 75
    }));
  };

  const handleCartAddUpdate = (id) => {
    const currentQuantity = quantity[id] || 1;
    const existingItem = items.find((item) => item.id === productId);

    if (existingItem && existingItem.quantity === quantity) {
      console.log(`Quantity for ${productId} is unchanged. No update needed.`);
      return;
    }
    dispatch(addToCart({ id: productId, quantity: Number(currentQuantity) }));
    toast({
      title: "Product Added To Cart",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: (
        <Link to={"/cart"} className="w-fit text-nowrap">
          <ToastAction altText="View Cart">View Cart</ToastAction>
        </Link>
      ),
    });
  };

  return (
    <div className="container mx-auto my-14 px-5">
      <div className="flex flex-col lg:flex-row lg:justify-between w-full h-full">
        {/* Images */}
        <div className="w-full lg:w-[50%] h-[55vh] xl:h-[700px] flex gap-3 justify-between overflow-hidden">
          <div className="relative w-[20%] md:w-[15%] h-full">
            <Swiper
              onSwiper={setThumbsSwiper}
              direction="vertical"
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              navigation={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper w-full h-full relative"
              onSlideChange={handleSlideChange}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img.link} alt={`Nature ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-[80%] md:w-[85%] h-full">
            <Swiper
              spaceBetween={10}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              speed={1500}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 w-full h-full"
              onSlideChange={handleSlideChange}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index} className="w-full h-full">
                  <img
                    src={img.link}
                    alt={`Nature ${index + 1}`}
                    className="w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* Content */}
        <div className="w-full lg:w-[45%] px-16 flex flex-col gap-6 lg:gap-8">
          <h3 className="capitalize font-medium text-2xl xl:text-3xl">
            Abra - Canvas Sneakers
          </h3>
          <p className="text-sm leading-relaxed text-black/70">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
            <span className="block mb-2"></span>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine-tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          {/* Quantity */}
          <div className="flex flex-col gap-4">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              type="number"
              variant="number"
              value={quantity[productId] || Number(1)}
              max={75}
              min={1}
              onChange={(newQuantity) =>
                handleQuantityChange(productId, newQuantity)
              }
              className="w-[10%] lg:w-[20%]"
            />
          </div>
          {/* Cart */}
          <Button
            className="flex gap-4"
            onClick={() => handleCartAddUpdate(productId)}
          >
            <LuShoppingCart className="w-5 h-5" />
            <span className="text-lg font-semibold uppercase">Add To Cart</span>
          </Button>
          {/* Category */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-normal">Share:</p>
            <p className="text-sm font-normal">
              Category: <span className="text-black/80">Footwear</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
