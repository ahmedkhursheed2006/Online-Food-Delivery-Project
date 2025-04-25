import React, { useEffect } from "react";
import DeliveryMenu from "../components/DeliveryMenu";
import Footer from "../components/Footer";
import { useCustomerStore } from "../useStores/useCustomerStore";
function HomePage() {
  const { scrollSection, setScrollSection } = useCustomerStore();
  useEffect(() => {
    if (scrollSection === "menuSection") {
      document.getElementById("menuSection").scrollIntoView({behavior: "smooth"})
      setScrollSection(null);
    }
  }, [scrollSection]);
  return (
    <div className="bg-[url(/HomePage-Background.jpg)] bg-cover bg-center h-full w-full">
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
        <section id="menuSection" className="">
          <DeliveryMenu />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
