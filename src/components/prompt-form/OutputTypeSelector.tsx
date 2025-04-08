
import React from "react";
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

interface OutputType {
  id: string;
  name: string;
  category: string;
}

interface OutputTypeSelectorProps {
  outputType: string;
  setOutputType: (outputType: string) => void;
  selectedCategory: string;
  outputTypesByCategory: {
    [key: string]: OutputType[];
  };
  filteredOutputTypes: OutputType[];
}

const OutputTypeSelector: React.FC<OutputTypeSelectorProps> = ({
  outputType,
  setOutputType,
  selectedCategory,
  outputTypesByCategory,
  filteredOutputTypes,
}) => {
  const getCategoryDisplayName = (category: string): string => {
    switch(category) {
      case "product": return "Product Development";
      case "content": return "Content Creation";
      case "business": return "Business";
      case "education": return "Education";
      case "personal": return "Personal Development";
      case "technical": return "Technical";
      case "art": return "AI Art Generation";
      case "coding": return "Coding Assistance";
      case "learning": return "Learning & Research";
      case "productivity": return "Productivity & Planning";
      default: return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };

  return (
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
                    {getCategoryDisplayName(category)}
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
  );
};

export default OutputTypeSelector;
