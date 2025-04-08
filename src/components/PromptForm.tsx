
import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getOutputTypes, toneOptions, industryOptions, aiModelOptions } from "./PromptTemplates";

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
      const generatedPrompt = import("./PromptTemplates").then(module => {
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
          <div className="space-y-2">
            <Label htmlFor="topic">What's your topic?</Label>
            <Input
              id="topic"
              placeholder="e.g., task management app, fantasy portrait, marketing strategy"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="focus-ring"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Prompt Category</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger id="category" className="focus-ring">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categoryOptions.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="outputType">Output Type</Label>
              <Select value={outputType} onValueChange={setOutputType}>
                <SelectTrigger id="outputType" className="focus-ring">
                  <SelectValue placeholder="Select output type" />
                </SelectTrigger>
                <SelectContent>
                  {selectedCategory === "all" ? (
                    Object.entries(outputTypesByCategory)
                      .filter(([category]) => category !== "all")
                      .map(([category, types]) => (
                        <SelectGroup key={category}>
                          <SelectLabel className="capitalize">
                            {category === "product" ? "Product Development" : 
                             category === "content" ? "Content Creation" :
                             category === "business" ? "Business" :
                             category === "education" ? "Education" :
                             category === "personal" ? "Personal Development" : 
                             category === "technical" ? "Technical" :
                             category === "art" ? "AI Art Generation" :
                             category === "coding" ? "Coding Assistance" :
                             category === "learning" ? "Learning & Research" :
                             category === "productivity" ? "Productivity & Planning" : category}
                          </SelectLabel>
                          {types.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      ))
                  ) : (
                    <SelectGroup>
                      {filteredOutputTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tone">Tone</Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger id="tone" className="focus-ring">
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {toneOptions.map((toneOption) => (
                      <SelectItem key={toneOption} value={toneOption}>
                        {toneOption.charAt(0).toUpperCase() + toneOption.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* AI Model Selection */}
          <div className="space-y-2">
            <Label htmlFor="aiModel">Target AI Model</Label>
            <Select value={aiModel} onValueChange={setAiModel}>
              <SelectTrigger id="aiModel" className="focus-ring">
                <SelectValue placeholder="Select AI model" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {filteredAiModels.map((model) => (
                    <SelectItem key={model.id} value={model.id}>
                      {model.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground mt-1">
              {isImagePrompt 
                ? "Choose the AI image generator you'll use" 
                : "Select the AI model you'll use this prompt with"}
            </p>
          </div>

          {/* Advanced Options Collapsible */}
          <Collapsible
            open={isAdvancedOpen}
            onOpenChange={setIsAdvancedOpen}
            className="border rounded-md p-2"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Advanced Customization</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                  {isAdvancedOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent className="mt-4 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="audience">Target Audience</Label>
                  <Select value={audience} onValueChange={setAudience}>
                    <SelectTrigger id="audience" className="focus-ring">
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {audienceOptions.map((audienceOption) => (
                          <SelectItem key={audienceOption} value={audienceOption}>
                            {audienceOption.charAt(0).toUpperCase() + audienceOption.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger id="language" className="focus-ring">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {languageOptions.map((languageOption) => (
                          <SelectItem key={languageOption} value={languageOption}>
                            {languageOption}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger id="industry" className="focus-ring">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {industryOptions.map((industryOption) => (
                        <SelectItem key={industryOption} value={industryOption}>
                          {industryOption.charAt(0).toUpperCase() + industryOption.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </CollapsibleContent>
          </Collapsible>

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
