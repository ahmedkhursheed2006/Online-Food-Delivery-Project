import React, { useEffect, useState } from "react";
import { categories } from "../dummyData/FoodCategory";
import { useCustomerStore } from "../useStores/useCustomerStore";
import { useOrderStore } from "../useStores/useOrderStore";
function DeliveryMenu() {
  const { addToCart } = useOrderStore();
  const { products, getProductsByCity } = useCustomerStore();
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };
  useEffect(() => {
    getProductsByCity();
  }, []);

  const currentCategory = categories.find((cat) => cat.id === activeCategory);
  const currentDishes = products.filter(
    (product) => product.category === currentCategory.dishKey
  );

 

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${currentCategory.image})` }}
    >
      <h2 className="irish-grover text-center text-[70px] underline bg-black/30 text-white py-[30px]">
        What we Deliver?
      </h2>
      {/* Category Navbar */}
      <nav className="bg-black/70 p-4 ">
        <div className="flex gap-3 overflow-x-scroll pb-2 ">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors inter-custom ${
                activeCategory === category.id
                  ? "bg-[#E53015] text-[#FCECC7]"
                  : "bg-[#FCECC7] text-[#E53015] hover:bg-[#E53015]/90 hover:text-[#FCECC7]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Dishes Grid */}
      <div className="bg-black/50 p-6 min-h-[calc(100vh-72px)]">
        <h2 className="text-3xl font-bold text-[#FCECC7] mb-6 text-center uppercase">
          {currentCategory.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentDishes.map((dish) => (
            <div
              key={dish._id}
              className="bg-[#FCECC7]/90 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div className="p-4 text-[#E53015] flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                <p className="text-sm mb-3 line-clamp-2">
                  Ingredients: <br />
                  {dish.ingredients}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">
                    ${dish.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(dish._id)}
                    className="bg-[#E53015] text-[#FCECC7] px-3 py-1 rounded-full text-sm hover:bg-[#E53015]/90"
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeliveryMenu;
