
import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getOutputTypes, toneOptions, industryOptions, aiModelOptions } from "../PromptTemplates";
import TopicInput from "./TopicInput";
import CategorySelector from "./CategorySelector";
import OutputTypeSelector from "./OutputTypeSelector";
import ToneSelector from "./ToneSelector";
import AIModelSelector from "./AIModelSelector";
import AdvancedOptions from "./AdvancedOptions";

interface PromptFormProps {
  onPromptGenerate: (prompt: string) => void;
}

// Define audience and language options
const audienceOptions = [
  "general",
  "beginners", 
  "experts",
  "developers",
  "executives",
  "marketers",
  "educators",
  "artists",
  "researchers"
];

const languageOptions = [
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese"
];

const PromptForm: React.FC<PromptFormProps> = ({ onPromptGenerate }) => {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("professional");
  const [outputType, setOutputType] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [audience, setAudience] = useState("general");
  const [language, setLanguage] = useState("English");
  const [industry, setIndustry] = useState("technology");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [aiModel, setAiModel] = useState("chatgpt");

  const allOutputTypes = getOutputTypes();
  
  // Group output types by category
  const outputTypesByCategory = useMemo(() => {
    const grouped = {
      all: allOutputTypes,
      product: allOutputTypes.filter(type => type.category === "product"),
      content: allOutputTypes.filter(type => type.category === "content"),
      business: allOutputTypes.filter(type => type.category === "business"),
      education: allOutputTypes.filter(type => type.category === "education"),
      personal: allOutputTypes.filter(type => type.category === "personal"),
      technical: allOutputTypes.filter(type => type.category === "technical"),
      art: allOutputTypes.filter(type => type.category === "art"),
      coding: allOutputTypes.filter(type => type.category === "coding"),
      learning: allOutputTypes.filter(type => type.category === "learning"),
      productivity: allOutputTypes.filter(type => type.category === "productivity")
    };
    return grouped;
  }, [allOutputTypes]);

  // Filtered output types based on selected category
  const filteredOutputTypes = useMemo(() => {
    return selectedCategory === "all" 
      ? allOutputTypes 
      : outputTypesByCategory[selectedCategory as keyof typeof outputTypesByCategory];
  }, [selectedCategory, outputTypesByCategory, allOutputTypes]);
  
  // Initialize the output type to the first available option when the component mounts
  // or when the category changes
  React.useEffect(() => {
    if (filteredOutputTypes.length > 0 && 
        (!outputType || !filteredOutputTypes.some(type => type.id === outputType))) {
      setOutputType(filteredOutputTypes[0].id);
    }
  }, [filteredOutputTypes, outputType]);

  // Determine if the current outputType is for image generation
  const isImagePrompt = useMemo(() => {
    return outputType && allOutputTypes.find(type => type.id === outputType)?.category === "art";
  }, [outputType, allOutputTypes]);

  // Filter AI models based on whether we're working with an image prompt
  const filteredAiModels = useMemo(() => {
    if (isImagePrompt) {
      return aiModelOptions.filter(model => model.category === "image");
    } 
    return aiModelOptions.filter(model => model.category === "text");
  }, [isImagePrompt]);

  // Update AI model when switching between image and text prompts
  React.useEffect(() => {
    if (filteredAiModels.length > 0 && 
        (!aiModel || !filteredAiModels.some(model => model.id === aiModel))) {
      setAiModel(filteredAiModels[0].id);
    }
  }, [filteredAiModels, aiModel]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!topic.trim()) {
      // Could use a toast here in a more advanced version
      alert("Please enter a topic");
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate a brief loading state to enhance UX
    setTimeout(() => {
      // Get the current output type from the PromptTemplates
      const generatedPrompt = import("../PromptTemplates").then(module => {
        const prompt = module.generatePrompt(topic, tone, outputType, audience, language, industry, aiModel);
        onPromptGenerate(prompt);
        setIsGenerating(false);
      });
    }, 800);
  };

  const categoryOptions = [
    { id: "all", name: "All Categories" },
    { id: "product", name: "Product Development" },
    { id: "content", name: "Content Creation" },
    { id: "business", name: "Business" },
    { id: "education", name: "Education" },
    { id: "personal", name: "Personal Development" },
    { id: "technical", name: "Technical" },
    { id: "art", name: "AI Art Generation" },
    { id: "coding", name: "Coding Assistance" },
    { id: "learning", name: "Learning & Research" },
    { id: "productivity", name: "Productivity & Planning" }
  ];

  return (
    <Card id="prompt-form" className="w-full max-w-3xl mx-auto shadow-lg animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center gradient-text">
          Create Your Prompt
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <TopicInput topic={topic} setTopic={setTopic} />

          <CategorySelector 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
            categoryOptions={categoryOptions} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <OutputTypeSelector 
              outputType={outputType} 
              setOutputType={setOutputType}
              selectedCategory={selectedCategory}
              outputTypesByCategory={outputTypesByCategory}
              filteredOutputTypes={filteredOutputTypes}
            />

            <ToneSelector tone={tone} setTone={setTone} toneOptions={toneOptions} />
          </div>

          <AIModelSelector 
            aiModel={aiModel} 
            setAiModel={setAiModel} 
            filteredAiModels={filteredAiModels}
            isImagePrompt={isImagePrompt}
          />

          <AdvancedOptions
            isAdvancedOpen={isAdvancedOpen}
            setIsAdvancedOpen={setIsAdvancedOpen}
            audience={audience}
            setAudience={setAudience}
            audienceOptions={audienceOptions}
            language={language}
            setLanguage={setLanguage}
            languageOptions={languageOptions}
            industry={industry}
            setIndustry={setIndustry}
            industryOptions={industryOptions}
          />

          <Button
            type="submit"
            className="w-full py-6 text-lg font-medium bg-primary hover:bg-promptly-purple transition-colors"
            disabled={isGenerating}
          >
            {isGenerating ? "Generating..." : "Generate Prompt"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PromptForm;
