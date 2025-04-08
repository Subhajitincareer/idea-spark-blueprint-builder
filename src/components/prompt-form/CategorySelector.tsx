
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

interface CategoryOption {
  id: string;
  name: string;
}

interface CategorySelectorProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categoryOptions?: CategoryOption[];
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  selectedCategory, 
  setSelectedCategory, 
  categoryOptions = [],
}) => {
  return (
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
  );
};

export default CategorySelector;
