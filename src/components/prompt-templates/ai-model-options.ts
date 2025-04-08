
// AI model options for different prompt types

export type AIModel = {
  id: string;
  name: string;
  category: string;
};

/**
 * Available AI model options for different prompt types
 */
export const aiModelOptions: AIModel[] = [
  { id: "chatgpt", name: "ChatGPT/GPT-4", category: "text" },
  { id: "claude", name: "Claude", category: "text" },
  { id: "geminipro", name: "Gemini Pro", category: "text" },
  { id: "midjourney", name: "Midjourney", category: "image" },
  { id: "dalle", name: "DALL·E", category: "image" },
  { id: "stablediffusion", name: "Stable Diffusion", category: "image" }
];
