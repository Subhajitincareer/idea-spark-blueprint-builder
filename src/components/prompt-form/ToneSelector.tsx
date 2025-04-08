
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

interface ToneSelectorProps {
  tone: string;
  setTone: (tone: string) => void;
  toneOptions: string[];
}

const ToneSelector: React.FC<ToneSelectorProps> = ({ tone, setTone, toneOptions }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="tone">Tone</Label>
      <Select value={tone} onValueChange={setTone}>
        <SelectTrigger id="tone" className="focus-ring">
          <SelectValue placeholder="Select tone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {(toneOptions ?? []).map((toneOption) => (
              <SelectItem key={toneOption} value={toneOption}>
                {toneOption.charAt(0).toUpperCase() + toneOption.slice(1)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ToneSelector;
