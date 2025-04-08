
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TopicInputProps {
  topic: string;
  setTopic: (topic: string) => void;
}

const TopicInput: React.FC<TopicInputProps> = ({ topic, setTopic }) => {
  return (
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
  );
};

export default TopicInput;
