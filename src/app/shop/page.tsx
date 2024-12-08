"use client"
import { useState } from "react";
import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FiSliders } from "react-icons/fi";
import { newArrivalsData, relatedProductData, topSellingData } from "../page";
import ProductCard from "@/components/common/ProductCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination";
import { MoreVertical, ChevronRight, ChevronUp, Check } from "lucide-react";
import * as Slider from "@radix-ui/react-slider";

const ShopPage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false); 

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop />
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Mobile Filter Toggle Button */}
          <button
            className="lg:hidden mb-4 flex items-center justify-center text-black bg-transparent border rounded-lg p-2"
            onClick={() => setShowFilters((prev) => !prev)} 
          >
            <FiSliders className="h-5 w-5" />
            <span className="ml-2">Filters</span>
          </button>

          {/* Filters (Mobile Hidden by Default) */}
          <aside
            className={`lg:w-64 p-2 border rounded-md border-gray-200 transition-all ${
              showFilters ? "block" : "hidden" // Mobile: show if state is true
            } lg:block`} // Desktop: always visible
          >
            <header className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button aria-label="More options">
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </button>
            </header>

            {/* Category Filter */}
            <section className="mb-6">
              {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((category) => (
                <button
                  key={category}
                  className="flex justify-between items-center w-full py-2 text-gray-600 hover:bg-gray-50"
                >
                  {category}
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
            </section>

            {/* Price Filter */}
            <section className="mb-6">
              <button className="flex justify-between items-center w-full mb-4">
                <span className="font-medium">Price</span>
                <ChevronUp className="h-4 w-4" />
              </button>
              <Slider.Root
                className="relative flex items-center w-full h-5"
                defaultValue={[50, 200]}
                min={0}
                max={500}
                step={1}
              >
                <Slider.Track className="bg-gray-200 relative grow h-1 rounded-full">
                  <Slider.Range className="absolute bg-black h-full rounded-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-4 h-4 bg-black rounded-full" />
                <Slider.Thumb className="block w-4 h-4 bg-black rounded-full" />
              </Slider.Root>
              <div className="flex justify-between mt-2">
                <span className="text-sm">$50</span>
                <span className="text-sm">$200</span>
              </div>
            </section>

            {/* Color Filter */}
            <section className="mb-6">
              <button className="flex justify-between items-center w-full mb-4">
                <span className="font-medium">Colors</span>
                <ChevronUp className="h-4 w-4" />
              </button>
              <div className="grid grid-cols-5 gap-2">
                {[
                  "bg-green-500", "bg-red-500", "bg-yellow-400", "bg-orange-500", "bg-sky-400",
                  "bg-blue-500", "bg-purple-500", "bg-pink-500", "bg-white", "bg-black",
                ].map((color, i) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full ${color} border border-gray-200 flex items-center justify-center`}
                  >
                    {i === 5 && <Check className="h-4 w-4 text-white" />}
                  </button>
                ))}
              </div>
            </section>

            {/* Size Filter */}
            <section className="mb-6">
              <button className="flex justify-between items-center w-full mb-4">
                <span className="font-medium">Size</span>
                <ChevronUp className="h-4 w-4" />
              </button>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large",
                ].map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-full text-sm
                      ${size === "Large" ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </section>

            {/* Dress Style Filter */}
            <section className="mb-6">
              <button className="flex justify-between items-center w-full mb-4">
                <span className="font-medium">Dress Style</span>
                <ChevronUp className="h-4 w-4" />
              </button>
              {["Casual", "Formal", "Party", "Gym"].map((style) => (
                <button
                  key={style}
                  className="flex justify-between items-center w-full py-2 text-gray-600 hover:bg-gray-50"
                >
                  {style}
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
            </section>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900">
              Apply Filter
            </button>
          </aside>

          {/* Product Display Section */}
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <h1 className="font-bold text-2xl md:text-[32px]">Casual</h1>
              <div className="flex flex-col sm:items-center sm:flex-row">
                <span className="text-sm md:text-base text-black/60 mr-3">Showing 1-10 of 100 Products</span>
                <div className="flex items-center">
                  Sort by:{" "}
                  <Select defaultValue="most-popular">
                    <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="most-popular">Most Popular</SelectItem>
                      <SelectItem value="low-price">Low Price</SelectItem>
                      <SelectItem value="high-price">High Price</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Product Cards */}
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {[...relatedProductData.slice(1, 4), ...newArrivalsData.slice(1, 4), ...topSellingData.slice(1, 4)].map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>

            <hr className="border-t-black/10" />

            {/* Pagination */}
            <Pagination className="justify-between">
              <PaginationPrevious href="#" className="border border-black/10" />
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink href="#" className="text-black/50 font-medium text-sm" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-black/50 font-medium text-sm">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="hidden lg:block">
                  <PaginationLink href="#" className="text-black/50 font-medium text-sm">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className="text-black/50 font-medium text-sm" />
                </PaginationItem>
                <PaginationItem className="hidden lg:block">
                  <PaginationLink href="#" className="text-black/50 font-medium text-sm">
                    8
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="hidden sm:block">
                  <PaginationLink href="#" className="text-black/50 font-medium text-sm">
                    9
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-black/50 font-medium text-sm">
                    10
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>

              <PaginationNext href="#" className="border border-black/10" />
            </Pagination>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
