
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getOutputTypes, toneOptions, industryOptions, generatePrompt } from "./PromptTemplates";

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
  "educators"
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

  const outputTypes = getOutputTypes();
  
  // Initialize the output type to the first available option when the component mounts
  React.useEffect(() => {
    if (outputTypes.length > 0 && !outputType) {
      setOutputType(outputTypes[0].id);
    }
  }, [outputTypes, outputType]);

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
      // Updated to include the new industry parameter
      const generatedPrompt = generatePrompt(topic, tone, outputType, audience, language, industry);
      onPromptGenerate(generatedPrompt);
      setIsGenerating(false);
    }, 800);
  };

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
            <Label htmlFor="topic">What are you building?</Label>
            <Input
              id="topic"
              placeholder="e.g., task management app, e-commerce platform, content creator tool"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="focus-ring"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div className="space-y-2">
              <Label htmlFor="outputType">Output Type</Label>
              <Select value={outputType} onValueChange={setOutputType}>
                <SelectTrigger id="outputType" className="focus-ring">
                  <SelectValue placeholder="Select output type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {outputTypes.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
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
