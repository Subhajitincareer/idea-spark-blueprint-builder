
import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AIModel {
  id: string;
  name: string;
  category: string;
}

interface AIModelSelectorProps {
  aiModel: string;
  setAiModel: (aiModel: string) => void;
  filteredAiModels: AIModel[];
  isImagePrompt: boolean;
}

const AIModelSelector: React.FC<AIModelSelectorProps> = ({
  aiModel,
  setAiModel,
  filteredAiModels,
  isImagePrompt,
}) => {
  return (
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
  );
};

export default AIModelSelector;
