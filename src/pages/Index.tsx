
import React, { useState } from "react";
import Hero from "@/components/Hero";
import PromptForm from "@/components/PromptForm";
import PromptResult from "@/components/PromptResult";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index: React.FC = () => {
  const [generatedPrompt, setGeneratedPrompt] = useState("");

  const handlePromptGenerate = (prompt: string) => {
    setGeneratedPrompt(prompt);
    
    // Scroll to the result after a short delay to ensure it's rendered
    setTimeout(() => {
      const resultElement = document.getElementById("result-section");
      if (resultElement) {
        resultElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <Hero />
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* Form Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold gradient-text">
                Create Your Custom AI Prompt
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Fill in the details below to generate a tailored prompt for any purpose
              </p>
            </div>

            <PromptForm onPromptGenerate={handlePromptGenerate} />
          </div>
        </section>

        {/* Result Section */}
        {generatedPrompt && (
          <section id="result-section" className="py-12 bg-secondary/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold gradient-text">
                  Your Generated Prompt
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Copy this prompt and use it with your favorite AI assistant
                </p>
              </div>

              <PromptResult prompt={generatedPrompt} />
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text">
                Why Use Our AI Prompt Generator?
              </h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                Get expertly crafted prompts for any purpose - from business to education and beyond
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Save Time",
                  description:
                    "Generate effective prompts in seconds rather than spending time figuring out how to word your requests.",
                },
                {
                  title: "Better Results",
                  description:
                    "Well-structured prompts get better AI responses, helping you achieve your goals faster.",
                },
                {
                  title: "Multiple Categories",
                  description:
                    "From product development to content creation, education, business, and personal growth.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md card-hover"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
