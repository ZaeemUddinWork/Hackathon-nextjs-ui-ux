import { Minus, Plus, Trash2, Tag, ArrowRight } from "lucide-react";
import React from "react";
export default function ShoppingCart() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 page-animation">
      <h1 className="text-2xl font-bold mb-8">YOUR CART</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {/* Product 1 */}
          <div className="flex flex-col sm:flex-row items-start gap-4 p-4 border rounded-lg mb-4">
            <img
              src="/images/pic13.png"
              alt="Gradient Graphic T-shirt"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-[#F0EEED] rounded-xl flex-none"
            />
            <div className="flex-1 space-y-1">
              <h3 className="font-medium">Gradient Graphic T-shirt</h3>
              <p className="text-gray-600">Size: Large</p>
              <p className="text-gray-600">Color: White</p>
              <p className="font-medium">$145</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded">
                <button className="p-2" aria-label="Decrease quantity">
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  value="1"
                  className="w-12 text-center bg-transparent"
                  aria-label="Product quantity"
                />
                <button className="p-2" aria-label="Increase quantity">
                  <Plus size={16} />
                </button>
              </div>
              <button aria-label="Remove item">
                <Trash2 className="text-red-500" size={20} />
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col sm:flex-row items-start gap-4 p-4 border rounded-lg mb-4">
            <img
              src="/images/pic3.png"
              alt="Checkered Shirt"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-[#F0EEED] rounded-xl flex-none"
            />
            <div className="flex-1 space-y-1">
              <h3 className="font-medium">Checkered Shirt</h3>
              <p className="text-gray-600">Size: Medium</p>
              <p className="text-gray-600">Color: Red</p>
              <p className="font-medium">$180</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded">
                <button className="p-2" aria-label="Decrease quantity">
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  value="1"
                  className="w-12 text-center bg-transparent"
                  aria-label="Product quantity"
                />
                <button className="p-2" aria-label="Increase quantity">
                  <Plus size={16} />
                </button>
              </div>
              <button aria-label="Remove item">
                <Trash2 className="text-red-500" size={20} />
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col sm:flex-row items-start gap-4 p-4 border rounded-lg">
            <img
              src="/images/pic2.png"
              alt="Skinny Fit Jeans"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-[#F0EEED] rounded-xl flex-none"
            />
            <div className="flex-1 space-y-1">
              <h3 className="font-medium">Skinny Fit Jeans</h3>
              <p className="text-gray-600">Size: Large</p>
              <p className="text-gray-600">Color: Blue</p>
              <p className="font-medium">$240</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded">
                <button className="p-2" aria-label="Decrease quantity">
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  value="1"
                  className="w-12 text-center bg-transparent"
                  aria-label="Product quantity"
                />
                <button className="p-2" aria-label="Increase quantity">
                  <Plus size={16} />
                </button>
              </div>
              <button aria-label="Remove item">
                <Trash2 className="text-red-500" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96">
          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-bold">Order Summary</h2>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$565</span>
            </div>

            <div className="flex justify-between text-red-500">
              <span>Discount (-20%)</span>
              <span>-$113</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$15</span>
            </div>

            <div className="flex justify-between font-bold text-lg pt-4 border-t">
              <span>Total</span>
              <span>$467</span>
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <Tag
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full pl-10 pr-4 py-2 border rounded"
                />
              </div>
              <button className="px-4 py-2 border rounded">Apply</button>
            </div>

            <button className="w-full bg-black text-white rounded py-3 flex items-center justify-center gap-2">
              Go to Checkout
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
