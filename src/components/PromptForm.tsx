
import React, { useState, useEffect } from "react";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import {
  generatePrompt,
  industryOptions,
  toneOptions,
  getOutputTypes,
 
} from "./prompt-templates";
import   {aiModelOptions} from "./prompt-templates/ai-model-options";
import TopicInput from "./prompt-form/TopicInput";
import CategorySelector from "./prompt-form/CategorySelector";
import OutputTypeSelector from "./prompt-form/OutputTypeSelector";
import ToneSelector from "./prompt-form/ToneSelector";
import AIModelSelector from "./prompt-form/AIModelSelector";
import AdvancedOptions from "./prompt-form/AdvancedOptions";

interface PromptFormProps {
  onPromptGenerate: (prompt: string) => void;
}

const PromptForm: React.FC<PromptFormProps> = ({ onPromptGenerate }) => {
  const [topic, setTopic] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("product");
  const [outputType, setOutputType] = useState("mvp");
  const [tone, setTone] = useState("professional");
  const [audience, setAudience] = useState("general");
  const [language, setLanguage] = useState("English");
  const [industry, setIndustry] = useState("technology");
  const [aiModel, setAiModel] = useState("chatgpt");

  // Filter output types based on selected category
  const filteredOutputTypes = getOutputTypes().filter(
    (type) => type.category === selectedCategory
  );

  // When category changes, set the first output type of that category
  useEffect(() => {
    if (filteredOutputTypes.length > 0) {
      setOutputType(filteredOutputTypes[0].id);
    }
  }, [selectedCategory]);

  // Determine if current output type requires AI model selection
  const isArtPrompt = outputType.startsWith("photo") || 
                      outputType.startsWith("character") || 
                      outputType.startsWith("landscape") || 
                      outputType.startsWith("concept") || 
                      outputType.startsWith("product") || 
                      outputType.startsWith("pattern") || 
                      outputType.startsWith("style") || 
                      outputType.startsWith("logo");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    const prompt = generatePrompt(
      topic,
      tone,
      outputType,
      audience,
      language,
      industry,
      aiModel
    );
    
    onPromptGenerate(prompt);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
      {/* Topic Input */}
      <TopicInput topic={topic} setTopic={setTopic} />

      {/* Category Selector */}
      <CategorySelector 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />

      {/* Output Type Selector */}
      <OutputTypeSelector 
        outputType={outputType}
        setOutputType={setOutputType}
        filteredOutputTypes={filteredOutputTypes}
      />

      {/* Tone Selector */}
      <ToneSelector tone={tone} setTone={setTone} />

      {/* AI Model Selector (only for art prompts) */}
      {isArtPrompt && (
        <AIModelSelector aiModel={aiModel} setAiModel={setAiModel} />
      )}

      {/* Advanced Options Accordion */}
      <AdvancedOptions 
        audience={audience}
        setAudience={setAudience}
        language={language}
        setLanguage={setLanguage}
        industry={industry}
        setIndustry={setIndustry}
      />

      {/* Generate Button */}
      <div className="flex justify-center pt-4">
        <Button type="submit" size="lg" className="w-full max-w-sm">
          Generate Prompt
        </Button>
      </div>
    </form>
  );
};

export default PromptForm;
