
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PromptResultProps {
  prompt: string;
}

const PromptResult: React.FC<PromptResultProps> = ({ prompt }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt).then(
      () => {
        setIsCopied(true);
        toast({
          title: "Copied to clipboard!",
          description: "The prompt has been copied to your clipboard.",
        });
        
        // Reset the copied state after 2 seconds
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to copy to clipboard.",
        });
      }
    );
  };

  if (!prompt) {
    return null;
  }

  return (
    <Card className="w-full max-w-3xl mx-auto mt-8 shadow-lg animate-slide-up">
      <CardHeader>
        <CardTitle className="text-2xl font-bold gradient-text">
          Your Generated Prompt
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-muted p-4 rounded-md">
          <p className="whitespace-pre-wrap text-base">{prompt}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={copyToClipboard}
          variant="outline"
          className="flex items-center gap-2"
        >
          {isCopied ? (
            <>
              <Check className="h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy to Clipboard
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PromptResult;
