import React from "react";

import DeliveryMenu from "../components/DeliveryMenu";
function HomePage() {
  return (
    <div className="bg-[url(/HomePage%20Background.jpg)] bg-cover bg-center h-full w-full">
      <main className="flex flex-col">
        <section className="h-[50rem] bg-[url(/HeroImage.jpg)] bg-cover bg-no-repeat">
          <div className="float-right bg-black/50 h-full w-1/2 irish-grover text-white flex items-center justify-center text-[70px] leading-[7rem] pl-2">
            <h3>
              Want Something
              <ul className="list-disc list-inside">
                <li>Tasty?</li>
                <li>Hot?</li>
                <li>Quick?</li>
              </ul>
            </h3>
          </div>
        </section>
        <section className="">
          <DeliveryMenu />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
