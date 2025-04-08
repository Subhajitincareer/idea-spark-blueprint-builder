
export const toneOptions = [
  "professional",
  "casual",
  "friendly",
  "enthusiastic",
  "formal",
  "technical"
];

export const industryOptions = [
  "technology",
  "healthcare",
  "education",
  "finance",
  "retail",
  "manufacturing",
  "entertainment",
  "marketing",
  "non-profit"
];

export const getOutputTypes = () => [
  { id: "mvp", name: "MVP Features" },
  { id: "roadmap", name: "Product Roadmap" },
  { id: "userStories", name: "User Stories" },
  { id: "marketingCopy", name: "Marketing Copy" },
  { id: "pitchDeck", name: "Pitch Deck Outline" }
];

export const generatePrompt = (
  topic: string, 
  tone: string, 
  outputType: string,
  audience: string = "general",
  language: string = "English",
  industry: string = "technology"
) => {
  let promptTemplate = "";
  
  switch (outputType) {
    case "mvp":
      promptTemplate = `As a product development expert in the ${industry} industry, help me create an MVP for a ${topic}. 
      
Use a ${tone} tone and focus on the essential features that would make this product viable. 

Please provide:
1. A concise description of the core product
2. 5-7 essential features for the MVP, with brief explanations
3. Key metrics to track for validating the MVP
4. Suggested timeline for development
5. Potential challenges and how to address them

This information should be tailored for a ${audience} audience and written in ${language}.`;
      break;
      
    case "roadmap":
      promptTemplate = `As a product strategist with expertise in ${topic} and the ${industry} industry, create a comprehensive product roadmap.

Use a ${tone} tone and outline the development stages from MVP to mature product.

Please include:
1. Short-term goals (3-6 months)
2. Mid-term milestones (6-12 months)
3. Long-term vision (1-2 years)
4. Key features for each phase
5. Suggested resources needed at each stage
6. Critical dependencies and potential bottlenecks

This roadmap should be appropriate for a ${audience} audience and written in ${language}.`;
      break;
      
    case "userStories":
      promptTemplate = `As a user experience expert for ${topic} products in the ${industry} industry, create detailed user stories.

Use a ${tone} tone and focus on the key user journeys.

Please provide:
1. 8-10 user stories in the format "As a [type of user], I want [goal] so that [benefit]"
2. Acceptance criteria for each story
3. Priority level (must-have, should-have, could-have)
4. Estimated complexity (simple, moderate, complex)
5. Any dependencies between stories

These user stories should be appropriate for a ${audience} audience and written in ${language}.`;
      break;
      
    case "marketingCopy":
      promptTemplate = `As a marketing specialist for ${topic} products in the ${industry} industry, create compelling marketing copy.

Use a ${tone} tone that will resonate with potential customers.

Please provide:
1. A catchy headline (under 10 words)
2. A subheading that explains the value proposition (15-20 words)
3. 3-4 short paragraphs highlighting key benefits
4. 3-5 bullet points for features and their benefits
5. A strong call-to-action

This marketing copy should be targeted at a ${audience} audience and written in ${language}.`;
      break;
      
    case "pitchDeck":
      promptTemplate = `As a startup advisor specializing in ${topic} and the ${industry} industry, create an outline for a pitch deck.

Use a ${tone} tone that will appeal to investors and stakeholders.

Please include slides for:
1. Problem statement
2. Solution overview
3. Market opportunity and size
4. Business model
5. Competitive landscape
6. Go-to-market strategy
7. Team highlights
8. Financial projections
9. Funding ask and use of funds
10. Vision and roadmap

For each slide, provide 2-3 bullet points of key information to include.
This pitch deck outline should be appropriate for a ${audience} audience and written in ${language}.`;
      break;
      
    default:
      promptTemplate = `As a ${tone} expert in ${topic} in the ${industry} industry, create a detailed analysis and recommendations.

Please provide:
1. Overview of the current state
2. Key challenges and opportunities
3. Strategic recommendations
4. Implementation steps
5. Expected outcomes and metrics for success

This information should be tailored for a ${audience} audience and written in ${language}.`;
  }
  
  return promptTemplate;
};
