
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 xl:mt-20">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Generate Perfect</span>
                <span className="block gradient-text">Product Prompts</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Create tailored prompts to help build your product. From MVP
                planning to feature expansion, we've got you covered.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Button
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-primary hover:bg-promptly-purple md:py-4 md:text-lg md:px-10"
                    onClick={() => {
                      const formElement = document.getElementById("prompt-form");
                      if (formElement) {
                        formElement.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                  >
                    Get Started
                  </Button>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md border-2 border-primary text-primary hover:bg-secondary md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-prompt-gradient sm:h-72 md:h-96 lg:w-full lg:h-full"></div>
      </div>
    </div>
  );
};

export default Hero;
