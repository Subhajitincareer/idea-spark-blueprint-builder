
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
  // Product Development
  { id: "mvp", name: "MVP Features", category: "product" },
  { id: "roadmap", name: "Product Roadmap", category: "product" },
  { id: "userStories", name: "User Stories", category: "product" },
  { id: "marketingCopy", name: "Marketing Copy", category: "product" },
  { id: "pitchDeck", name: "Pitch Deck Outline", category: "product" },
  
  // Content Creation
  { id: "blogPost", name: "Blog Post", category: "content" },
  { id: "socialMedia", name: "Social Media Posts", category: "content" },
  { id: "emailNewsletter", name: "Email Newsletter", category: "content" },
  { id: "videoScript", name: "Video Script", category: "content" },
  
  // Business
  { id: "businessPlan", name: "Business Plan", category: "business" },
  { id: "swotAnalysis", name: "SWOT Analysis", category: "business" },
  { id: "marketResearch", name: "Market Research", category: "business" },
  
  // Education
  { id: "lessonPlan", name: "Lesson Plan", category: "education" },
  { id: "studyGuide", name: "Study Guide", category: "education" },
  { id: "quizQuestions", name: "Quiz Questions", category: "education" },
  
  // Personal Development
  { id: "resume", name: "Resume/CV", category: "personal" },
  { id: "coverLetter", name: "Cover Letter", category: "personal" },
  { id: "personalBio", name: "Personal Bio", category: "personal" }
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
  
  // Product Development prompts
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
    
    // Content Creation prompts
    case "blogPost":
      promptTemplate = `As a content creator specializing in ${topic} for the ${industry} industry, outline a compelling blog post.

Use a ${tone} tone that will engage readers and provide value.

Please include:
1. 5 engaging title options
2. Introduction that hooks the reader
3. 3-5 main sections with key points for each
4. Conclusion with a clear takeaway
5. Call-to-action
6. SEO keywords to include

This blog post should be tailored for a ${audience} audience and written in ${language}.`;
      break;

    case "socialMedia":
      promptTemplate = `As a social media expert for ${topic} in the ${industry} industry, create a set of social media posts.

Use a ${tone} tone that will encourage engagement.

Please provide:
1. 3 Twitter/X posts (under 280 characters)
2. 2 LinkedIn posts (200-600 words)
3. 2 Instagram captions with hashtag suggestions
4. 2 Facebook posts
5. Content ideas for TikTok or short-form video

These posts should be targeted at a ${audience} audience and written in ${language}.`;
      break;

    case "emailNewsletter":
      promptTemplate = `As an email marketing specialist for ${topic} in the ${industry} industry, draft an email newsletter.

Use a ${tone} tone that will drive opens and clicks.

Please include:
1. 5 subject line options
2. Personalized greeting
3. Introduction paragraph
4. 2-3 main content sections
5. Clear call-to-action
6. Professional signature
7. P.S. note for additional engagement

This email should be written for a ${audience} audience in ${language}.`;
      break;

    case "videoScript":
      promptTemplate = `As a video content creator for ${topic} in the ${industry} industry, write a script for a video.

Use a ${tone} tone that will engage viewers.

Please provide:
1. Attention-grabbing hook (first 5-10 seconds)
2. Brief introduction of the topic
3. 3-5 key points to cover with detailed descriptions
4. Smooth transitions between sections
5. Engaging conclusion
6. Call-to-action
7. Approximate script timing for a 3-5 minute video

This script should be written for a ${audience} audience in ${language}.`;
      break;

    // Business prompts
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

    // Education prompts
    case "lessonPlan":
      promptTemplate = `As an education specialist for ${topic} in the ${industry} industry, create a detailed lesson plan.

Use a ${tone} tone that will engage students and facilitate learning.

Please include:
1. Learning objectives (3-5)
2. Materials needed
3. Time required
4. Introduction/warm-up activity (5-10 minutes)
5. Main lesson content with step-by-step instructions
6. Student activities or exercises
7. Assessment methods
8. Conclusion and reflection
9. Homework or extension activities

This lesson plan should be appropriate for a ${audience} audience and written in ${language}.`;
      break;

    case "studyGuide":
      promptTemplate = `As an educational content creator specializing in ${topic} for the ${industry} industry, create a comprehensive study guide.

Use a ${tone} tone that facilitates understanding and retention.

Please include:
1. Key concepts and definitions (10-15)
2. Summary of important theories or frameworks
3. Visual aids or diagrams to explain complex ideas
4. Practice questions (10-15) with answers
5. Memory aids or mnemonic devices
6. Additional resources for further study
7. Test-taking strategies

This study guide should be tailored for a ${audience} audience and written in ${language}.`;
      break;

    case "quizQuestions":
      promptTemplate = `As an educational assessment specialist for ${topic} in the ${industry} industry, create a set of quiz questions.

Use a ${tone} tone that accurately tests knowledge while being clear and fair.

Please provide:
1. 5 multiple-choice questions with 4 options each
2. 5 true/false questions
3. 3 short-answer questions
4. 2 essay or extended response questions
5. Answer key with explanations for correct answers

These questions should be appropriate for a ${audience} audience and written in ${language}.`;
      break;

    // Personal Development prompts
    case "resume":
      promptTemplate = `As a career coach specializing in ${topic} for the ${industry} industry, create a resume template.

Use a ${tone} tone that highlights professional achievements effectively.

Please include:
1. Contact information section
2. Professional summary (3-5 sentences)
3. Skills section with 8-10 relevant skills
4. Experience section with bullet point examples
5. Education section format
6. Optional sections (certifications, languages, etc.)
7. Design and formatting tips
8. 3-5 power verbs to use throughout

This resume template should be tailored for a ${audience} audience and written in ${language}.`;
      break;

    case "coverLetter":
      promptTemplate = `As a career advisor specializing in ${topic} for the ${industry} industry, draft a cover letter template.

Use a ${tone} tone that demonstrates professionalism and enthusiasm.

Please include:
1. Header with contact information
2. Proper salutation options
3. Opening paragraph that grabs attention
4. 1-2 paragraphs highlighting relevant qualifications
5. Paragraph connecting your experience to the company's needs
6. Strong closing paragraph
7. Professional sign-off
8. 3-5 phrases to customize for specific applications

This cover letter should be targeted at a ${audience} audience and written in ${language}.`;
      break;

    case "personalBio":
      promptTemplate = `As a personal branding expert for ${topic} professionals in the ${industry} industry, create a personal bio.

Use a ${tone} tone that effectively communicates your value and personality.

Please provide:
1. Short version (50 words)
2. Medium version (100-150 words)
3. Long version (200-300 words)
4. Key accomplishments to highlight
5. Educational background elements to include
6. Professional experience highlights
7. Personal touches to make it memorable

This bio should be tailored for a ${audience} audience and written in ${language}.`;
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
