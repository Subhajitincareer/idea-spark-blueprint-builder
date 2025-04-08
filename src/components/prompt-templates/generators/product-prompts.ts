
/**
 * Generate prompts for product development
 */
export const generateProductPrompt = (
  topic: string,
  tone: string,
  outputType: string,
  audience: string = "general",
  language: string = "English",
  industry: string = "technology"
): string => {
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
    
    case "competitiveAnalysis":
      promptTemplate = `As a market analyst specializing in ${topic} and the ${industry} industry, create a comprehensive competitive analysis.

Use a ${tone} tone and provide an objective assessment of the competitive landscape.

Please include:
1. Overview of 4-6 main competitors in the ${topic} space
2. Each competitor's key strengths and weaknesses
3. Unique selling propositions for each competitor
4. Market positioning analysis
5. Pricing strategy comparison
6. Feature/offering comparison matrix
7. Opportunities for differentiation
8. Recommendations for competitive advantage

This analysis should be suitable for a ${audience} audience and written in ${language}.`;
      break;
      
    case "featurePrioritization":
      promptTemplate = `As a product manager with expertise in ${topic} for the ${industry} industry, create a feature prioritization framework.

Use a ${tone} tone and provide a structured approach to feature prioritization.

Please include:
1. Methodology for evaluating feature importance (e.g., RICE, MoSCoW, Kano)
2. Evaluation criteria with weightings
3. Top 10 potential features with brief descriptions
4. Scoring matrix for each feature
5. Prioritized feature list with rationale
6. Implementation timeline recommendations
7. Resource allocation suggestions
8. Success metrics for each feature

This framework should be appropriate for a ${audience} audience and written in ${language}.`;
      break;
      
    case "productVision":
      promptTemplate = `As a product visionary in the ${industry} industry, craft an inspiring product vision statement for a ${topic} solution.

Use a ${tone} tone that communicates a compelling future state.

Please provide:
1. A concise vision statement (25-50 words)
2. Supporting paragraphs explaining the vision's key elements
3. How the product aligns with market trends
4. The core customer problems being solved
5. Long-term aspirational goals (3-5 years)
6. How this vision differentiates from competitors
7. Values and principles that guide the product

This vision statement should resonate with a ${audience} audience and be written in ${language}.`;
      break;
      
    default:
      promptTemplate = `As a product specialist in the ${industry} industry, provide insights on ${topic}.

Use a ${tone} tone that is clear and actionable.

Please include:
1. Overview of the key aspects of ${topic}
2. Current trends and best practices
3. Challenges and opportunities
4. Strategic recommendations
5. Implementation considerations
6. Success metrics and evaluation criteria

This information should be tailored for a ${audience} audience and written in ${language}.`;
  }
  
  return promptTemplate;
};
