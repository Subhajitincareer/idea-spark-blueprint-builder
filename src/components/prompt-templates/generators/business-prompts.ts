
/**
 * Generate prompts for business purposes
 */
export const generateBusinessPrompt = (
  topic: string,
  tone: string,
  outputType: string,
  audience: string = "general",
  language: string = "English",
  industry: string = "technology"
): string => {
  let promptTemplate = "";
  
  switch (outputType) {
    case "businessPlan":
      promptTemplate = `As a business consultant specializing in ${topic} for the ${industry} industry, create an outline for a business plan.

Use a ${tone} tone that reflects professional business standards.

Please include sections on:
1. Executive Summary
2. Company Description
3. Market Analysis
4. Organization & Management Structure
5. Service/Product Line
6. Marketing & Sales Strategy
7. Financial Projections
8. Funding Request (if applicable)
9. Appendix

For each section, provide 3-5 key points that should be addressed.
This business plan should be appropriate for a ${audience} audience and written in ${language}.`;
      break;

    case "swotAnalysis":
      promptTemplate = `As a strategic consultant for ${topic} in the ${industry} industry, conduct a SWOT analysis.

Use a ${tone} tone that provides clear, actionable insights.

Please provide:
1. 5-7 key internal strengths
2. 5-7 key internal weaknesses
3. 5-7 external opportunities
4. 5-7 external threats
5. Strategic recommendations based on the SWOT analysis

This analysis should be tailored for a ${audience} audience and written in ${language}.`;
      break;

    case "marketResearch":
      promptTemplate = `As a market research specialist for ${topic} in the ${industry} industry, create a market research report outline.

Use a ${tone} tone that conveys data-driven insights.

Please include:
1. Executive summary
2. Industry overview and trends
3. Target market segmentation
4. Competitor analysis (3-5 key competitors)
5. Customer needs and pain points
6. Market size and growth potential
7. Pricing analysis
8. Distribution channels
9. Key recommendations

This market research should be appropriate for a ${audience} audience and written in ${language}.`;
      break;

    case "investorPitch":
      promptTemplate = `As an investment specialist in ${topic} and the ${industry} industry, create a framework for an investor pitch.

Use a ${tone} tone that will appeal to potential investors.

Please provide:
1. Attention-grabbing opening hook
2. Company/concept introduction (30-60 seconds)
3. Problem statement with market validation
4. Solution overview with key differentiators
5. Business model explanation
6. Market opportunity sizing
7. Competitive landscape analysis
8. Go-to-market strategy outline
9. Financial highlights and projections
10. Team qualifications summary
11. Investment ask and use of funds
12. Vision and growth roadmap

This investor pitch should be tailored for a ${audience} audience and written in ${language}.`;
      break;

    case "salesScript":
      promptTemplate = `As a sales strategist for ${topic} products/services in the ${industry} industry, create a conversational sales script.

Use a ${tone} tone that builds rapport and drives conversion.

Please include:
1. Introduction and rapport-building opening
2. Discovery questions to identify needs (8-10 questions)
3. Value proposition presentation
4. Product/service explanation with benefits (not just features)
5. Addressing common objections with responses
6. Social proof and success stories to include
7. Closing techniques and next steps
8. Follow-up strategy

This sales script should be effective with a ${audience} audience and written in ${language}.`;
      break;

    case "projectProposal":
      promptTemplate = `As a project management consultant specializing in ${topic} for the ${industry} industry, create a project proposal template.

Use a ${tone} tone that inspires confidence and demonstrates expertise.

Please provide:
1. Executive summary structure
2. Background and needs analysis
3. Project objectives and success criteria
4. Proposed solution/approach
5. Scope of work with deliverables
6. Timeline with key milestones
7. Resource requirements and team structure
8. Budget breakdown categories
9. Risk assessment and mitigation strategies
10. Evaluation methodology
11. Terms and conditions guidance

This project proposal should be suitable for a ${audience} audience and written in ${language}.`;
      break;

    case "executiveSummary":
      promptTemplate = `As a business consultant for ${topic} in the ${industry} industry, craft an executive summary template.

Use a ${tone} tone that is concise, informative, and action-oriented.

Please include:
1. Attention-grabbing opening statement
2. Business concept/initiative overview (60-80 words)
3. Market opportunity and problem statement
4. Proposed solution with key benefits
5. Financial highlights or resource requirements
6. Implementation approach
7. Critical success factors
8. Call to action for readers
9. Next steps recommendation

This executive summary should be tailored for a ${audience} audience and written in ${language}.`;
      break;

    case "financialProjection":
      promptTemplate = `As a financial analyst specializing in ${topic} for the ${industry} industry, create a framework for financial projections.

Use a ${tone} tone that is data-driven and credible.

Please provide:
1. Key financial assumptions to consider
2. Revenue model breakdown with categories
3. Cost structure analysis (fixed vs. variable costs)
4. Monthly cash flow projection structure (12-24 months)
5. Break-even analysis approach
6. Key financial metrics to track
7. Sensitivity analysis scenarios
8. Funding requirements estimation
9. Return on investment calculations
10. Exit strategy considerations (if applicable)

This financial projection framework should be appropriate for a ${audience} audience and written in ${language}.`;
      break;
      
    default:
      promptTemplate = `As a business consultant specializing in ${topic} for the ${industry} industry, provide strategic guidance.

Use a ${tone} tone that is professional and actionable.

Please include:
1. Executive overview of the situation
2. Key business considerations
3. Market and competitive insights
4. Strategic options with pros and cons
5. Implementation recommendations
6. Success metrics and evaluation criteria
7. Risk factors and mitigation strategies

This business guidance should be tailored for a ${audience} audience and written in ${language}.`;
  }
  
  return promptTemplate;
};
