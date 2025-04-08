
import { generateArtPrompt } from "./generators/art-prompts";
import { generateCodingPrompt } from "./generators/coding-prompts";
import { generateLearningPrompt } from "./generators/learning-prompts";
import { generateProductivityPrompt } from "./generators/productivity-prompts";
import { generateProductPrompt } from "./generators/product-prompts";
import { generateContentPrompt } from "./generators/content-prompts";
import { generateBusinessPrompt } from "./generators/business-prompts";
import { generateEducationPrompt } from "./generators/education-prompts";
import { generatePersonalPrompt } from "./generators/personal-prompts";
import { generateTechnicalPrompt } from "./generators/technical-prompts";

/**
 * Generates a prompt based on user input parameters
 */
export const generatePrompt = (
  topic: string, 
  tone: string, 
  outputType: string,
  audience: string = "general",
  language: string = "English",
  industry: string = "technology",
  aiModel: string = "chatgpt"
): string => {
  // Determine if this is an art prompt
  const isArtPrompt = outputType.startsWith("photo") || 
                    outputType.startsWith("character") || 
                    outputType.startsWith("landscape") || 
                    outputType.startsWith("concept") || 
                    outputType.startsWith("product") || 
                    outputType.startsWith("pattern") || 
                    outputType.startsWith("style") || 
                    outputType.startsWith("logo");
  
  // For art generation prompts (Midjourney, DALL-E, etc.)
  if (isArtPrompt) {
    return generateArtPrompt(topic, tone, outputType, audience, language, industry, aiModel);
  }

  // For coding prompts
  if (outputType.startsWith("algorithm") || 
      outputType.startsWith("function") || 
      outputType.startsWith("coding") ||
      outputType.startsWith("code") ||
      outputType.startsWith("design") ||
      outputType.startsWith("api") ||
      outputType.startsWith("bug") ||
      outputType.startsWith("unit")) {
    return generateCodingPrompt(topic, tone, outputType, audience, language, industry);
  }

  // For learning & research prompts
  if (outputType.startsWith("research") || 
      outputType.startsWith("literature") || 
      outputType.startsWith("concept") ||
      outputType.startsWith("debate") ||
      outputType.startsWith("experiment") ||
      outputType.startsWith("analogies") ||
      outputType.startsWith("mental") ||
      outputType.startsWith("historical")) {
    return generateLearningPrompt(topic, tone, outputType, audience, language, industry);
  }

  // For productivity & planning prompts
  if (outputType.startsWith("decision") || 
      outputType.startsWith("habit") || 
      outputType.startsWith("weekly") ||
      outputType.startsWith("project") ||
      outputType.startsWith("meeting") ||
      outputType.startsWith("retrospective") ||
      outputType.startsWith("problem") ||
      outputType.startsWith("goals")) {
    return generateProductivityPrompt(topic, tone, outputType, audience, language, industry);
  }

  // For product development prompts
  if (outputType === "mvp" || 
      outputType === "roadmap" || 
      outputType === "userStories" ||
      outputType === "marketingCopy" ||
      outputType === "pitchDeck" ||
      outputType === "competitiveAnalysis" ||
      outputType === "featurePrioritization" ||
      outputType === "productVision") {
    return generateProductPrompt(topic, tone, outputType, audience, language, industry);
  }

  // For content creation prompts
  if (outputType === "blogPost" || 
      outputType === "socialMedia" || 
      outputType === "emailNewsletter" ||
      outputType === "videoScript" ||
      outputType === "podcastOutline" ||
      outputType === "whitePaper" ||
      outputType === "caseStudy" ||
      outputType === "infographicContent") {
    return generateContentPrompt(topic, tone, outputType, audience, language, industry);
  }

  // For business prompts
  if (outputType === "businessPlan" || 
      outputType === "swotAnalysis" || 
      outputType === "marketResearch" ||
      outputType === "investorPitch" ||
      outputType === "salesScript" ||
      outputType === "projectProposal" ||
      outputType === "executiveSummary" ||
      outputType === "financialProjection") {
    return generateBusinessPrompt(topic, tone, outputType, audience, language, industry);
  }

  // For education prompts
  if (outputType === "lessonPlan" || 
      outputType === "studyGuide" || 
      outputType === "quizQuestions" ||
      outputType === "courseOutline" ||
      outputType === "teachingStrategy" ||
      outputType === "educationalActivity" ||
      outputType === "rubric" ||
      outputType === "learningObjectives") {
    return generateEducationPrompt(topic, tone, outputType, audience, language, industry);
  }

  // For personal development prompts
  if (outputType === "resume" || 
      outputType === "coverLetter" || 
      outputType === "personalBio" ||
      outputType === "linkedinProfile" ||
      outputType === "personalStatement" ||
      outputType === "personalBrand" ||
      outputType === "portfolioDescription" ||
      outputType === "interviewPrep") {
    return generatePersonalPrompt(topic, tone, outputType, audience, language, industry);
  }

  // For technical prompts
  if (outputType === "technicalSpec" || 
      outputType === "apiDocumentation" || 
      outputType === "codeReview" ||
      outputType === "systemArchitecture" ||
      outputType === "troubleshootingGuide" ||
      outputType === "techOnboarding" ||
      outputType === "devWorkflow" ||
      outputType === "securityProtocol") {
    return generateTechnicalPrompt(topic, tone, outputType, audience, language, industry);
  }

  // Default prompt for cases not covered above
  return `As a ${tone} expert in ${topic} in the ${industry} industry, create a detailed analysis and recommendations.

Please provide:
1. Overview of the current state
2. Key challenges and opportunities
3. Strategic recommendations
4. Implementation steps
5. Expected outcomes and metrics for success

This information should be tailored for a ${audience} audience and written in ${language}.`;
};
