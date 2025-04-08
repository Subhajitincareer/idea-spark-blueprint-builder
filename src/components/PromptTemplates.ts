
type PromptTemplate = {
  outputType: string;
  template: (topic: string, tone: string) => string;
};

const promptTemplates: Record<string, PromptTemplate> = {
  mvp: {
    outputType: "MVP Feature List",
    template: (topic, tone) => {
      return `Create a Minimum Viable Product (MVP) feature list for a ${topic} application. The list should be ${tone} and include only the most essential features needed to launch. For each feature, provide a brief explanation of why it's essential.`;
    },
  },
  expansion: {
    outputType: "Post-MVP Features",
    template: (topic, tone) => {
      return `After launching an MVP for a ${topic} application, suggest a list of additional features to improve user experience and provide more value. The list should be ${tone} and prioritized based on potential impact. For each feature, provide a brief explanation of its value.`;
    },
  },
  fullPlan: {
    outputType: "Complete Feature Roadmap",
    template: (topic, tone) => {
      return `Create a comprehensive feature roadmap for a ${topic} application. Begin with essential MVP features, then expand to post-launch enhancements. The roadmap should be ${tone} and divided into phases. For each feature, provide a brief explanation and indicate its priority level.`;
    },
  },
  userStories: {
    outputType: "User Stories",
    template: (topic, tone) => {
      return `Create a set of ${tone} user stories for a ${topic} application. Include both MVP and post-MVP user stories, clearly indicating which are essential for launch. Each user story should follow the format: "As a [type of user], I want [goal] so that [benefit]."`;
    },
  },
  marketingPitch: {
    outputType: "Marketing Pitch",
    template: (topic, tone) => {
      return `Create a ${tone} marketing pitch for a ${topic} application. The pitch should highlight the core value proposition of the MVP as well as hint at future enhancements. Include a tagline, a brief description, key benefits, and a call to action.`;
    },
  },
};

export const generatePrompt = (
  topic: string,
  tone: string,
  outputType: string
): string => {
  const template = promptTemplates[outputType];
  if (!template) {
    return `I need a well-structured prompt for ${topic} with a ${tone} tone.`;
  }
  return template.template(topic, tone);
};

export const getOutputTypes = (): { id: string; name: string }[] => {
  return Object.entries(promptTemplates).map(([id, { outputType }]) => ({
    id,
    name: outputType,
  }));
};

export const toneOptions = [
  "professional",
  "casual",
  "enthusiastic",
  "technical",
  "creative",
  "concise",
  "detailed",
];
