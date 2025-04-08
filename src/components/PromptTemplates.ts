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
  { id: "competitiveAnalysis", name: "Competitive Analysis", category: "product" },
  { id: "featurePrioritization", name: "Feature Prioritization", category: "product" },
  { id: "productVision", name: "Product Vision Statement", category: "product" },
  
  // Content Creation
  { id: "blogPost", name: "Blog Post", category: "content" },
  { id: "socialMedia", name: "Social Media Posts", category: "content" },
  { id: "emailNewsletter", name: "Email Newsletter", category: "content" },
  { id: "videoScript", name: "Video Script", category: "content" },
  { id: "podcastOutline", name: "Podcast Outline", category: "content" },
  { id: "whitePaper", name: "White Paper", category: "content" },
  { id: "caseStudy", name: "Case Study", category: "content" },
  { id: "infographicContent", name: "Infographic Content", category: "content" },
  
  // Business
  { id: "businessPlan", name: "Business Plan", category: "business" },
  { id: "swotAnalysis", name: "SWOT Analysis", category: "business" },
  { id: "marketResearch", name: "Market Research", category: "business" },
  { id: "investorPitch", name: "Investor Pitch", category: "business" },
  { id: "salesScript", name: "Sales Script", category: "business" },
  { id: "projectProposal", name: "Project Proposal", category: "business" },
  { id: "executiveSummary", name: "Executive Summary", category: "business" },
  { id: "financialProjection", name: "Financial Projection Framework", category: "business" },
  
  // Education
  { id: "lessonPlan", name: "Lesson Plan", category: "education" },
  { id: "studyGuide", name: "Study Guide", category: "education" },
  { id: "quizQuestions", name: "Quiz Questions", category: "education" },
  { id: "courseOutline", name: "Course Outline", category: "education" },
  { id: "teachingStrategy", name: "Teaching Strategy", category: "education" },
  { id: "educationalActivity", name: "Educational Activity", category: "education" },
  { id: "rubric", name: "Assessment Rubric", category: "education" },
  { id: "learningObjectives", name: "Learning Objectives", category: "education" },
  
  // Personal Development
  { id: "resume", name: "Resume/CV", category: "personal" },
  { id: "coverLetter", name: "Cover Letter", category: "personal" },
  { id: "personalBio", name: "Personal Bio", category: "personal" },
  { id: "linkedinProfile", name: "LinkedIn Profile", category: "personal" },
  { id: "personalStatement", name: "Personal Statement", category: "personal" },
  { id: "personalBrand", name: "Personal Brand Strategy", category: "personal" },
  { id: "portfolioDescription", name: "Portfolio Description", category: "personal" },
  { id: "interviewPrep", name: "Interview Preparation", category: "personal" },
  
  // Technical
  { id: "technicalSpec", name: "Technical Specification", category: "technical" },
  { id: "apiDocumentation", name: "API Documentation", category: "technical" },
  { id: "codeReview", name: "Code Review Guidelines", category: "technical" },
  { id: "systemArchitecture", name: "System Architecture", category: "technical" },
  { id: "troubleshootingGuide", name: "Troubleshooting Guide", category: "technical" },
  { id: "techOnboarding", name: "Technical Onboarding", category: "technical" },
  { id: "devWorkflow", name: "Development Workflow", category: "technical" },
  { id: "securityProtocol", name: "Security Protocol", category: "technical" }
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

    case "podcastOutline":
      promptTemplate = `As a podcast producer specializing in ${topic} for the ${industry} industry, create a detailed podcast episode outline.

Use a ${tone} tone that will engage listeners and provide valuable insights.

Please include:
1. 5 compelling episode title options
2. Episode introduction script (60-90 seconds)
3. 3-5 main segments with talking points for each
4. Suggested guest profile and 8-10 interview questions
5. Key takeaways for listeners
6. Call-to-action ideas
7. Show notes structure
8. Promotional copy for social media

This podcast outline should appeal to a ${audience} audience and be written in ${language}.`;
      break;

    case "whitePaper":
      promptTemplate = `As a thought leader in ${topic} for the ${industry} industry, outline a comprehensive white paper.

Use a ${tone} tone that establishes authority and provides valuable insights.

Please include:
1. Executive summary structure
2. Introduction to the problem or opportunity
3. Research methodology section
4. Key findings (5-7 main points)
5. Analysis and implications
6. Case studies or examples to include
7. Recommendations and next steps
8. Conclusion structure
9. References and resources section

This white paper outline should be targeted at a ${audience} audience and written in ${language}.`;
      break;

    case "caseStudy":
      promptTemplate = `As a content strategist focusing on ${topic} in the ${industry} industry, create a case study framework.

Use a ${tone} tone that highlights success and demonstrates value.

Please provide:
1. Compelling title options
2. Client/situation background
3. Challenge/problem statement
4. Solution approach and implementation
5. Key metrics and results to feature
6. Client testimonial guidelines
7. Visual elements to include
8. Call-to-action recommendations

This case study framework should be appropriate for a ${audience} audience and written in ${language}.`;
      break;

    case "infographicContent":
      promptTemplate = `As a visual content creator specializing in ${topic} for the ${industry} industry, provide content for an infographic.

Use a ${tone} tone that communicates complex information clearly and visually.

Please include:
1. Suggested title for the infographic
2. Introduction text (25-40 words)
3. 5-8 key data points or statistics
4. 3-5 main sections with brief explanatory text
5. Suggested visual metaphors or icons
6. Flow/structure recommendations
7. Sources to cite
8. Call-to-action text

This infographic content should be designed for a ${audience} audience and written in ${language}.`;
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

    case "linkedinProfile":
      promptTemplate = `As a personal branding expert specializing in ${topic} professionals in the ${industry} industry, create LinkedIn profile content.

Use a ${tone} tone that showcases expertise and attracts opportunities.

Please provide:
1. Attention-grabbing headline options (120 characters)
2. About section framework (2000 characters)
3. Key accomplishments to highlight
4. Skills list recommendations (top 10-15)
5. Recommendations request templates
6. Content strategy for posts and articles
7. Connection outreach message templates
8. Profile photo and background image guidance

This LinkedIn profile content should be optimized for a ${audience} audience and written in ${language}.`;
      break;

    case "personalStatement":
      promptTemplate = `As a career advisor for ${topic} professionals in the ${industry} industry, craft a personal statement framework.

Use a ${tone} tone that authentically communicates values, goals, and unique qualities.

Please include:
1. Opening hook guidance
2. Core values identification (3-5 values)
3. Professional journey narrative structure
4. Key strengths and unique qualities to highlight
5. Future aspirations articulation
6. Personal philosophy statement
7. Impact statement
8. Memorable closing

This personal statement framework should be tailored for a ${audience} audience and written in ${language}.`;
      break;

    case "personalBrand":
      promptTemplate = `As a personal branding strategist for ${topic} professionals in the ${industry} industry, create a personal brand development plan.

Use a ${tone} tone that guides authentic self-presentation and career advancement.

Please provide:
1. Brand audit process and questions
2. Unique value proposition framework
3. Brand statement formula (25-35 words)
4. Visual identity guidelines
5. Online presence strategy
6. Content pillars identification (3-5 themes)
7. Networking approach aligned with brand
8. Brand consistency checklist
9. Measurement methods for brand effectiveness

This personal brand strategy should be appropriate for a ${audience} audience and written in ${language}.`;
      break;

    case "portfolioDescription":
      promptTemplate = `As a portfolio development specialist for ${topic} professionals in the ${industry} industry, create portfolio item descriptions.

Use a ${tone} tone that effectively showcases work and capabilities.

Please include:
1. Project/work title formatting suggestions
2. Overall structure for each portfolio entry
3. Problem statement framework
4. Process description approach
5. Results and impact highlights
6. Technical details to include
7. Visual elements recommendations
8. Client/collaborator testimonial integration
9. Call-to-action suggestions

These portfolio descriptions should be tailored for a ${audience} audience and written in ${language}.`;
      break;

    case "interviewPrep":
      promptTemplate = `As a career coach specializing in ${topic} roles in the ${industry} industry, create an interview preparation guide.

Use a ${tone} tone that builds confidence and preparation.

Please provide:
1. Research checklist before the interview
2. 15-20 common interview questions with response frameworks
3. 5-7 behavioral question scenarios with STAR method outlines
4. 5-7 technical/knowledge questions specific to ${topic}
5. Questions to ask the interviewer
6. Common interview formats and how to prepare for each
7. Presentation or assessment preparation (if applicable)
8. Follow-up strategy post-interview

This interview preparation guide should be suitable for a ${audience} audience and written in ${language}.`;
      break;

    // Technical prompts
    case "technicalSpec":
      promptTemplate = `As a technical documentation specialist for ${topic} in the ${industry} industry, create a technical specification document template.

Use a ${tone} tone that is precise, clear, and comprehensive.

Please include:
1. Executive summary structure
2. Purpose and scope definition
3. Functional requirements section
4. Technical requirements section
5. System architecture overview
6. Interface specifications framework
7. Data models and database schema approach
8. API endpoints documentation format
9. Security considerations
10. Performance requirements
11. Testing strategy
12. Implementation timeline
13. Maintenance and support plan

This technical specification should be appropriate for a ${audience} audience and written in ${language}.`;
      break;

    case "apiDocumentation":
      promptTemplate = `As an API documentation specialist focusing on ${topic} for the ${industry} industry, create comprehensive API documentation.

Use a ${tone} tone that is technically precise yet accessible.

Please provide:
1. API overview and purpose
2. Authentication and authorization details
3. Base URL and versioning information
4. Rate limiting and quotas explanation
5. Request/response format standards
6. Endpoint documentation template with:
   - HTTP methods
   - Parameters (path, query, body)
   - Request examples
   - Response schemas and examples
   - Error codes and handling
7. Webhook documentation (if applicable)
8. SDK usage examples (if applicable)
9. Changelog approach

This API documentation should be tailored for a ${audience} audience and written in ${language}.`;
      break;

    case "codeReview":
      promptTemplate = `As a senior developer specializing in ${topic} for the ${industry} industry, create code review guidelines.

Use a ${tone} tone that promotes code quality and collaborative improvement.

Please include:
1. Code review objectives and principles
2. Pre-review checklist for submitters
3. Review process workflow
4. 10-15 specific elements to evaluate (e.g., functionality, security, performance)
5. Commenting best practices and examples
6. Common issues to look for in ${topic}-related code
7. Severity classification system for issues
8. Follow-up and verification process
9. Metrics for measuring code review effectiveness

These code review guidelines should be suitable for a ${audience} audience and written in ${language}.`;
      break;

    case "systemArchitecture":
      promptTemplate = `As a solutions architect specializing in ${topic} for the ${industry} industry, create a system architecture document template.

Use a ${tone} tone that clearly communicates technical design decisions.

Please provide:
1. Executive summary framework
2. System overview and context
3. Architectural principles and constraints
4. High-level architecture diagram guidance
5. Component breakdown structure
6. Technology stack recommendations with rationale
7. Data flow descriptions
8. Integration points documentation
9. Security architecture considerations
10. Scalability and performance design
11. Disaster recovery approach
12. Implementation and migration strategy
13. Maintenance considerations

This system architecture document should be appropriate for a ${audience} audience and written in ${language}.`;
      break;

    case "troubleshootingGuide":
      promptTemplate = `As a technical support specialist for ${topic} systems in the ${industry} industry, create a troubleshooting guide.

Use a ${tone} tone that is clear, methodical, and solution-oriented.

Please include:
1. System overview and components
2. Diagnostic tools and their usage
3. 8-12 common issues with:
   - Symptoms and error messages
   - Potential causes
   - Step-by-step troubleshooting procedures
   - Resolution steps
   - Preventative measures
4. Escalation procedures and criteria
5. Log analysis guidance
6. Performance optimization tips
7. Resource usage monitoring
8. Recovery procedures for critical failures

This troubleshooting guide should be suitable for a ${audience} audience and written in ${language}.`;
      break;

    case "techOnboarding":
      promptTemplate = `As a technical team leader for ${topic} in the ${industry} industry, create a technical onboarding plan.

Use a ${tone} tone that facilitates learning and integration into the team.

Please provide:
1. Pre-onboarding preparation checklist
2. First day schedule and setup instructions
3. Week-by-week learning objectives (4-6 weeks)
4. System access and environment setup guide
5. Technology stack overview
6. Codebase orientation approach
7. Key documentation to review
8. Mentorship structure recommendations
9. Initial tasks progression (from simple to complex)
10. Technical resources and learning materials
11. Evaluation checkpoints and feedback mechanisms

This technical onboarding plan should be appropriate for a ${audience} audience and written in ${language}.`;
      break;

    case "devWorkflow":
      promptTemplate = `As a development process expert for ${topic} in the ${industry} industry, create a development workflow guide.

Use a ${tone} tone that promotes efficiency, quality, and collaboration.

Please include:
1. Development lifecycle overview
2. Environment setup and configuration
3. Version control workflow and branching strategy
4. Task management and ticketing process
5. Code style and documentation standards
6. Testing requirements and methodologies
7. Code review process
8. CI/CD pipeline explanation
9. Deployment procedures
10. Monitoring and feedback loops
11. Maintenance and support responsibilities
12. Emergency hotfix protocol

This development workflow guide should be tailored for a ${audience} audience and written in ${language}.`;
      break;

    case "securityProtocol":
      promptTemplate = `As a security specialist focusing on ${topic} in the ${industry} industry, create a security protocol document.

Use a ${tone} tone that emphasizes the importance of security practices.

Please provide:
1. Security principles and objectives
2. Threat model overview relevant to ${topic}
3. Authentication and authorization requirements
4. Data protection measures
5. Secure coding practices specific to ${topic}
6. Infrastructure security considerations
7. Security testing methodology
8. Incident response procedures
9. Compliance requirements
10. Security training recommendations
11. Audit and monitoring approach
12. Vulnerability management process

This security protocol should be suitable for a ${audience} audience and written in ${language}.`;
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
