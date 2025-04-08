
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
import { getOutputTypes, toneOptions, generatePrompt } from "./PromptTemplates";

interface PromptFormProps {
  onPromptGenerate: (prompt: string) => void;
}

const PromptForm: React.FC<PromptFormProps> = ({ onPromptGenerate }) => {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("professional");
  const [outputType, setOutputType] = useState("mvp");
  const [isGenerating, setIsGenerating] = useState(false);

  const outputTypes = getOutputTypes();

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
      const generatedPrompt = generatePrompt(topic, tone, outputType);
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
