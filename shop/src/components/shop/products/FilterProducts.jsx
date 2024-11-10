import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { useRef, useState } from "react";

const products = {
  Accessories: ["belts", "halts", "socks"],
  Clothing: ["Mens", "Womens", "Kids"],
  Footwear: [],
  Furniture: [],
};

function FilterProducts() {
  const [values, setValues] = useState([0, 5000]);
  const handleChange = (newValue) => {
    setValues(newValue);
  };
  return (
    <div className="">
      {/* PRODUCTS */}
      <h3 className="uppercase font-semibold  mb-4">Filter Products</h3>
      <div className="flex flex-col text-black/40">
        {Object.keys(products).map((category) => (
          <div key={category} className="mb-3">
            <h2 className="hover:text-black font-normal w-fit">{category}</h2>
            {products[category].length > 0 && (
              <ul className="ps-4 flex flex-col gap-2 mt-3">
                {products[category].map((product) => (
                  <li
                    key={product}
                    className="hover:text-black font-normal w-fit"
                  >
                    {product}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <Separator className="my-8" />

      {/* COLORS */}
      <div className="">
        <h3 className="uppercase font-semibold  mb-4">Filter By Colours</h3>
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-4">
            <span className="inline-block w-4 h-4 bg-black"></span>Black
          </p>
          <p className="flex items-center gap-4">
            <span className="inline-block w-4 h-4 bg-gray-500"></span>Gray
          </p>
          <p className="flex items-center gap-4">
            <span className="inline-block w-4 h-4 bg-red-900"></span>Red
          </p>
          <p className="flex items-center gap-4">
            <span className="inline-block w-4 h-4 bg-green-900"></span>Green
          </p>
        </div>
      </div>
      <Separator className="my-8" />

      {/* SIZES */}
      <div className="">
        <h3 className="uppercase font-semibold  mb-4">Filter By Sizes</h3>
        <div className="flex gap-3 flex-wrap">
          <p className="px-6 py-2 border border-black">S</p>
          <p className="px-6 py-2 border border-black">M</p>
          <p className="px-6 py-2 border border-black">L</p>
          <p className="px-6 py-2 border border-black">XL</p>
        </div>
      </div>
      <Separator className="my-8" />
      {/* Price */}
      <div className="">
        <h3 className="uppercase font-semibold  mb-4">Filter By Price</h3>
        <div className="flex gap-3 mt-6">
          <Slider
            defaultValue={values}
            max={5000}
            step={100}
            onValueChange={handleChange}
          />
        </div>
        <p className="mt-3">
          Price range between {values && values[0]} to {values && values[1]}
        </p>
      </div>
    </div>
  );
}

export default FilterProducts;
