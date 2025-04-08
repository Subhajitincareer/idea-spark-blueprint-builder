
// Output type definitions for prompt generation

export type OutputType = {
  id: string;
  name: string;
  category: string;
};

/**
 * Returns all available output types across all categories
 */
export const getOutputTypes = (): OutputType[] => [
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
  { id: "securityProtocol", name: "Security Protocol", category: "technical" },
  
  // AI Art Generation
  { id: "photoRealistic", name: "Photo-Realistic Image", category: "art" },
  { id: "characterDesign", name: "Character Design", category: "art" },
  { id: "landscapeScene", name: "Landscape/Scene", category: "art" },
  { id: "conceptArt", name: "Concept Art", category: "art" },
  { id: "productVisualization", name: "Product Visualization", category: "art" },
  { id: "patternDesign", name: "Pattern/Texture Design", category: "art" },
  { id: "styleTransfer", name: "Style Transfer", category: "art" },
  { id: "logoDesign", name: "Logo Design Concept", category: "art" },
  
  // Coding Assistance
  { id: "algorithmDesign", name: "Algorithm Design", category: "coding" },
  { id: "functionImplementation", name: "Function Implementation", category: "coding" },
  { id: "codingChallenge", name: "Coding Challenge", category: "coding" },
  { id: "codeRefactoring", name: "Code Refactoring", category: "coding" },
  { id: "designPattern", name: "Design Pattern Implementation", category: "coding" },
  { id: "apiEndpoint", name: "API Endpoint Design", category: "coding" },
  { id: "bugFixing", name: "Bug Fixing Approach", category: "coding" },
  { id: "unitTestCase", name: "Unit Test Cases", category: "coding" },
  
  // Learning & Research
  { id: "researchQuestion", name: "Research Question", category: "learning" },
  { id: "literatureReview", name: "Literature Review", category: "learning" },
  { id: "conceptExplanation", name: "Concept Explanation", category: "learning" },
  { id: "debateArguments", name: "Debate Arguments", category: "learning" },
  { id: "experimentDesign", name: "Experiment Design", category: "learning" },
  { id: "analogiesMetaphors", name: "Analogies & Metaphors", category: "learning" },
  { id: "mentalModel", name: "Mental Model", category: "learning" },
  { id: "historicalAnalysis", name: "Historical Analysis", category: "learning" },
  
  // Productivity & Planning
  { id: "decisionMatrix", name: "Decision Matrix", category: "productivity" },
  { id: "habitTracker", name: "Habit Tracker", category: "productivity" },
  { id: "weeklyPlanner", name: "Weekly Planner", category: "productivity" },
  { id: "projectTimeline", name: "Project Timeline", category: "productivity" },
  { id: "meetingAgenda", name: "Meeting Agenda", category: "productivity" },
  { id: "retrospective", name: "Retrospective", category: "productivity" },
  { id: "problemSolving", name: "Problem-Solving Framework", category: "productivity" },
  { id: "goalsFramework", name: "Goals Framework", category: "productivity" }
];
