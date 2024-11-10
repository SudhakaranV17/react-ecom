import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductThumb from "./ProductThumb";
import CustomPagination from "../CustomPagination";

function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Customize as needed
  useEffect(() => {
    // Fetch product data only once when the component mounts
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedData = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className="flex justify-between w-full overflow-hidden">
        <div className="">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Default Sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Price: Low to High</SelectItem>
              <SelectItem value="high">Price: High to Low</SelectItem>
              <SelectItem value="popular">Popularity</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="hidden lg:block">
          <p>
            Showing {displayedData.length * currentPage} Results of{" "}
            {products.length}
          </p>
        </div>
      </div>
      <div className="py-12 px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-10 2xl:grid-cols-4 md:gap-12 gap-10">
        {displayedData.map((product, index) => {
          return <ProductThumb product={product} key={index} />;
        })}
      </div>
      <div className="">
        <CustomPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Products;
