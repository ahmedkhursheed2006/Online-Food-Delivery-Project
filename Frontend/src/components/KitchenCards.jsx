import React from "react";

function KitchenCards({ imageURL, kitchenName, rating }) {
  return (
    <article className="bg-[#e0c4a7] w-[250px] h-[450px] flex flex-col items-center p-2 rounded-md border-4 border-[#88531a] text-black/50">
      <div className="aspect-square flex items-center justify-center">
        <img
          src={imageURL}
          alt={kitchenName}
          className="w-full h-full object-cover border-2 border-white/50"
        />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <h3 className="text-center text-[30px] font-bold text-black inter-custom">{kitchenName}</h3>
        <div className="flex justify-center mt-2 bg-white">
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index} className="text-yellow-400 text-3xl">
              ★
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default KitchenCards;
