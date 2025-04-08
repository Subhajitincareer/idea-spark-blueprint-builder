
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AdvancedOptionsProps {
  isAdvancedOpen: boolean;
  setIsAdvancedOpen: (isOpen: boolean) => void;
  audience: string;
  setAudience: (audience: string) => void;
  audienceOptions: string[];
  language: string;
  setLanguage: (language: string) => void;
  languageOptions: string[];
  industry: string;
  setIndustry: (industry: string) => void;
  industryOptions: string[];
}

const AdvancedOptions: React.FC<AdvancedOptionsProps> = ({
  isAdvancedOpen,
  setIsAdvancedOpen,
  audience,
  setAudience,
  audienceOptions = [], // ✅ fallback if undefined
  language,
  setLanguage,
  languageOptions = [],
  industry,
  setIndustry,
  industryOptions = [],
}) => {
  return (
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
  );
};

export default AdvancedOptions;
