
export const toneOptions = [
  "professional",
  "casual",
  "friendly",
  "enthusiastic",
  "formal",
  "technical",
  "creative",
  "minimalist",
  "detailed",
  "whimsical"
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
  "non-profit",
  "art",
  "design",
  "gaming",
  "science"
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
  { id: "securityProtocol", name: "Security Protocol", category: "technical" },
  
  // NEW: AI Art Generation (for tools like Midjourney, DALL-E, Stable Diffusion)
  { id: "photoRealistic", name: "Photo-Realistic Image", category: "art" },
  { id: "characterDesign", name: "Character Design", category: "art" },
  { id: "landscapeScene", name: "Landscape/Scene", category: "art" },
  { id: "conceptArt", name: "Concept Art", category: "art" },
  { id: "productVisualization", name: "Product Visualization", category: "art" },
  { id: "patternDesign", name: "Pattern/Texture Design", category: "art" },
  { id: "styleTransfer", name: "Style Transfer", category: "art" },
  { id: "logoDesign", name: "Logo Design Concept", category: "art" },
  
  // NEW: Coding Assistance
  { id: "algorithmDesign", name: "Algorithm Design", category: "coding" },
  { id: "functionImplementation", name: "Function Implementation", category: "coding" },
  { id: "codingChallenge", name: "Coding Challenge", category: "coding" },
  { id: "codeRefactoring", name: "Code Refactoring", category: "coding" },
  { id: "designPattern", name: "Design Pattern Implementation", category: "coding" },
  { id: "apiEndpoint", name: "API Endpoint Design", category: "coding" },
  { id: "bugFixing", name: "Bug Fixing Approach", category: "coding" },
  { id: "unitTestCase", name: "Unit Test Cases", category: "coding" },
  
  // NEW: Learning & Research
  { id: "researchQuestion", name: "Research Question", category: "learning" },
  { id: "literatureReview", name: "Literature Review", category: "learning" },
  { id: "conceptExplanation", name: "Concept Explanation", category: "learning" },
  { id: "debateArguments", name: "Debate Arguments", category: "learning" },
  { id: "experimentDesign", name: "Experiment Design", category: "learning" },
  { id: "analogiesMetaphors", name: "Analogies & Metaphors", category: "learning" },
  { id: "mentalModel", name: "Mental Model", category: "learning" },
  { id: "historicalAnalysis", name: "Historical Analysis", category: "learning" },
  
  // NEW: Productivity & Planning
  { id: "decisionMatrix", name: "Decision Matrix", category: "productivity" },
  { id: "habitTracker", name: "Habit Tracker", category: "productivity" },
  { id: "weeklyPlanner", name: "Weekly Planner", category: "productivity" },
  { id: "projectTimeline", name: "Project Timeline", category: "productivity" },
  { id: "meetingAgenda", name: "Meeting Agenda", category: "productivity" },
  { id: "retrospective", name: "Retrospective", category: "productivity" },
  { id: "problemSolving", name: "Problem-Solving Framework", category: "productivity" },
  { id: "goalsFramework", name: "Goals Framework", category: "productivity" }
];

// Add AI model options for different prompt types
export const aiModelOptions = [
  { id: "chatgpt", name: "ChatGPT/GPT-4", category: "text" },
  { id: "claude", name: "Claude", category: "text" },
  { id: "geminipro", name: "Gemini Pro", category: "text" },
  { id: "midjourney", name: "Midjourney", category: "image" },
  { id: "dalle", name: "DALL·E", category: "image" },
  { id: "stablediffusion", name: "Stable Diffusion", category: "image" }
];

export const generatePrompt = (
  topic: string, 
  tone: string, 
  outputType: string,
  audience: string = "general",
  language: string = "English",
  industry: string = "technology",
  aiModel: string = "chatgpt"
) => {
  let promptTemplate = "";
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
    // Art generation prompt formats are different
    switch (outputType) {
      case "photoRealistic":
        promptTemplate = `${topic}, photorealistic, highly detailed, ${tone} style, ${industry} aesthetic, 8k resolution, professional photography, realistic lighting, for ${audience} viewers`;
        
        if (aiModel === "midjourney") {
          promptTemplate += " --ar 16:9 --v 6 --q 2";
        } else if (aiModel === "dalle") {
          promptTemplate = `Create a photorealistic image of ${topic}. Make it highly detailed with realistic lighting and textures. Use a ${tone} style with elements of ${industry} aesthetic.`;
        }
        break;
        
      case "characterDesign":
        promptTemplate = `Character design of ${topic}, full body, ${tone} style, detailed features, unique personality, ${industry}-inspired costume and accessories, professional character sheet, for ${audience} audience`;
        
        if (aiModel === "midjourney") {
          promptTemplate += " --ar 3:4 --v 6 --q 2";
        } else if (aiModel === "dalle") {
          promptTemplate = `Design a character based on ${topic}. Include full body, detailed features, and unique personality. Use ${tone} style with ${industry}-inspired costume and accessories.`;
        }
        break;
        
      case "landscapeScene":
        promptTemplate = `Landscape of ${topic}, panoramic view, ${tone} atmosphere, ${industry} setting, dramatic lighting, rich details, environmental storytelling, for ${audience} viewers`;
        
        if (aiModel === "midjourney") {
          promptTemplate += " --ar 16:9 --v 6 --q 2";
        } else if (aiModel === "dalle") {
          promptTemplate = `Create a panoramic landscape of ${topic}. Include dramatic lighting, rich details, and environmental storytelling. Use a ${tone} atmosphere in a ${industry} setting.`;
        }
        break;
        
      case "conceptArt":
        promptTemplate = `Concept art for ${topic}, ${tone} aesthetic, ${industry} influence, imaginative design, mood board, color palette, multiple angles and variations, professional quality, for ${audience} viewers`;
        
        if (aiModel === "midjourney") {
          promptTemplate += " --ar 16:9 --v 6 --q 2";
        } else if (aiModel === "dalle") {
          promptTemplate = `Create concept art for ${topic}. Use a ${tone} aesthetic with ${industry} influence. Include imaginative design elements, suggesting a mood and color palette.`;
        }
        break;
        
      case "productVisualization":
        promptTemplate = `Product visualization of ${topic}, ${tone} presentation, ${industry} context, studio lighting, multiple angles, photorealistic rendering, professional product photography style, white background, for ${audience} market`;
        
        if (aiModel === "midjourney") {
          promptTemplate += " --ar 1:1 --v 6 --q 2";
        } else if (aiModel === "dalle") {
          promptTemplate = `Create a product visualization of ${topic}. Use studio lighting with multiple angles and photorealistic rendering. Present in a ${tone} style for the ${industry} market.`;
        }
        break;
        
      case "patternDesign":
        promptTemplate = `Seamless pattern based on ${topic}, ${tone} style, ${industry}-inspired elements, repeating design, scalable vector style, professional textile/surface design, color variations, for ${audience} application`;
        
        if (aiModel === "midjourney") {
          promptTemplate += " --ar 1:1 --v 6 --q 2";
        } else if (aiModel === "dalle") {
          promptTemplate = `Design a seamless pattern based on ${topic}. Create it in a ${tone} style with ${industry}-inspired elements. Make it suitable for ${audience} applications.`;
        }
        break;
        
      case "styleTransfer":
        promptTemplate = `${topic} in the style of ${industry} ${tone} art, artistic interpretation, creative reimagining, distinctive style elements, professional quality, for ${audience} appreciation`;
        
        if (aiModel === "midjourney") {
          promptTemplate += " --ar 16:9 --v 6 --q 2";
        } else if (aiModel === "dalle") {
          promptTemplate = `Create an artistic interpretation of ${topic} in the style of ${industry} ${tone} art. Include distinctive style elements for ${audience} appreciation.`;
        }
        break;
        
      case "logoDesign":
        promptTemplate = `Logo design concept for ${topic}, ${tone} style, ${industry} sector, minimal, scalable, professional, versatile, memorable, suitable for ${audience} brand identity`;
        
        if (aiModel === "midjourney") {
          promptTemplate += " --ar 1:1 --v 6 --q 2";
        } else if (aiModel === "dalle") {
          promptTemplate = `Design a logo concept for ${topic}. Make it minimal, scalable, and memorable in a ${tone} style suitable for the ${industry} sector.`;
        }
        break;
        
      default:
        // Generic art prompt if specific type not found
        promptTemplate = `${topic}, ${tone} style, detailed, high quality, ${industry} aesthetic, professional, for ${audience} viewers`;
        
        if (aiModel === "midjourney") {
          promptTemplate += " --v 6 --q 2";
        } else if (aiModel === "dalle") {
          promptTemplate = `Create an image of ${topic} in a ${tone} style with a ${industry} aesthetic. Make it highly detailed and suitable for ${audience} viewers.`;
        }
    }
    
    // Append AI model-specific instructions
    if (aiModel === "stablediffusion") {
      promptTemplate = promptTemplate.replace(/--ar.*--q 2/, "");
      promptTemplate += ", best quality, high resolution, masterpiece";
    }
    
    return promptTemplate;
  }

  // Coding prompts
  if (outputType.startsWith("algorithm") || 
      outputType.startsWith("function") || 
      outputType.startsWith("coding") ||
      outputType.startsWith("code") ||
      outputType.startsWith("design") ||
      outputType.startsWith("api") ||
      outputType.startsWith("bug") ||
      outputType.startsWith("unit")) {
    
    switch (outputType) {
      case "algorithmDesign":
        promptTemplate = `As a software architect, help me design an algorithm for ${topic} in the ${industry} industry.

Use a ${tone} tone and focus on clarity and efficiency.

Please provide:
1. Problem statement and requirements
2. Input and output specifications
3. Step-by-step algorithm description
4. Time and space complexity analysis
5. Edge cases to consider
6. Pseudocode implementation
7. Potential optimization strategies
8. Testing approach

This algorithm design should be suitable for a ${audience} audience and explained in ${language}.`;
        break;
        
      case "functionImplementation":
        promptTemplate = `As a software developer, help me implement a function for ${topic} in the ${industry} industry.

Use a ${tone} tone and focus on clean, maintainable code.

Please provide:
1. Function signature with parameters and return type
2. Description of what the function does
3. Input validation approach
4. Core logic implementation
5. Error handling strategy
6. Complete code implementation in a popular programming language
7. Example usage
8. Unit test cases

This function implementation should be suitable for a ${audience} audience and written in ${language}.`;
        break;
        
      case "codingChallenge":
        promptTemplate = `As a coding instructor, create a coding challenge about ${topic} for the ${industry} industry.

Use a ${tone} tone that will engage and test programming skills.

Please provide:
1. Challenge title
2. Problem description
3. Input format and constraints
4. Expected output format
5. 2-3 example test cases with input and output
6. Difficulty level (easy/medium/hard)
7. Hints without giving away the solution
8. Suggested approach or algorithm

This coding challenge should be suitable for a ${audience} level programmer and written in ${language}.`;
        break;
        
      case "codeRefactoring":
        promptTemplate = `As a code quality expert, provide guidance for refactoring code related to ${topic} in the ${industry} industry.

Use a ${tone} tone that explains the benefits of clean code.

Please provide:
1. Common code smells to look for
2. Refactoring techniques applicable to this context
3. Before and after code examples
4. Design patterns that might be relevant
5. Maintainability improvements
6. Performance considerations
7. Testing strategy during refactoring
8. Step-by-step refactoring approach

This refactoring guidance should be appropriate for a ${audience} level developer and written in ${language}.`;
        break;
        
      case "designPattern":
        promptTemplate = `As a software architect, explain how to implement the appropriate design pattern(s) for ${topic} in the ${industry} industry.

Use a ${tone} tone that clearly explains architectural concepts.

Please provide:
1. Recommended design pattern(s) and why they're appropriate
2. UML diagram description
3. Key components and their responsibilities
4. Implementation steps
5. Sample code for core components
6. Benefits of using this pattern
7. Potential drawbacks or limitations
8. Alternative patterns to consider

This design pattern guidance should be suitable for a ${audience} level developer and written in ${language}.`;
        break;
        
      case "apiEndpoint":
        promptTemplate = `As an API designer, help me design an API endpoint for ${topic} in the ${industry} industry.

Use a ${tone} tone that focuses on best practices and clarity.

Please provide:
1. Endpoint purpose and functionality
2. RESTful route (URL and HTTP method)
3. Request parameters and body schema
4. Response structure and status codes
5. Authentication and authorization requirements
6. Rate limiting considerations
7. Error handling approach
8. Example requests and responses
9. Documentation in OpenAPI/Swagger format

This API endpoint design should be suitable for a ${audience} level developer and written in ${language}.`;
        break;
        
      case "bugFixing":
        promptTemplate = `As a debugging expert, provide a systematic approach to fixing bugs related to ${topic} in the ${industry} industry.

Use a ${tone} tone that is methodical and instructive.

Please include:
1. Common bug patterns in this area
2. Diagnostic steps and tools to use
3. Information gathering approach
4. Root cause analysis methodology
5. Potential solutions with pros and cons
6. Testing verification process
7. Prevention strategies for future bugs
8. Documentation practices for the fix

This bug fixing approach should be appropriate for a ${audience} level developer and written in ${language}.`;
        break;
        
      case "unitTestCase":
        promptTemplate = `As a quality assurance engineer, help me create unit tests for ${topic} functionality in the ${industry} industry.

Use a ${tone} tone that emphasizes test coverage and reliability.

Please provide:
1. Test scope and objectives
2. Test framework recommendations
3. Test setup requirements
4. 5-8 specific test cases with:
   - Test name and description
   - Input/preconditions
   - Expected outcome
   - Edge cases to verify
5. Mocking/stubbing strategy
6. Code examples using a popular testing framework
7. Test coverage considerations
8. Integration with CI/CD

These unit test cases should be suitable for a ${audience} level developer and written in ${language}.`;
        break;
        
      default:
        promptTemplate = `As a software developer, provide guidance on ${topic} for the ${industry} industry.

Use a ${tone} tone that is clear and practical.

Please include:
1. Overview of the problem or task
2. Key considerations and best practices
3. Step-by-step implementation approach
4. Code examples or pseudocode
5. Testing strategy
6. Potential challenges and solutions
7. Resources for further learning

This guidance should be suitable for a ${audience} level developer and written in ${language}.`;
    }
    
    return promptTemplate;
  }

  // Learning & Research Prompts
  if (outputType.startsWith("research") || 
      outputType.startsWith("literature") || 
      outputType.startsWith("concept") ||
      outputType.startsWith("debate") ||
      outputType.startsWith("experiment") ||
      outputType.startsWith("analogies") ||
      outputType.startsWith("mental") ||
      outputType.startsWith("historical")) {
      
    switch (outputType) {
      case "researchQuestion":
        promptTemplate = `As a research methodologist in the field of ${topic} for the ${industry} industry, help me formulate effective research questions.

Use a ${tone} tone that encourages critical thinking.

Please provide:
1. 3-5 primary research questions of varying scope
2. 5-8 secondary/sub-questions for each primary question
3. Theoretical frameworks that could guide this research
4. Hypotheses that might be tested
5. Variables to consider
6. Research design suggestions
7. Methodology recommendations
8. Limitations to anticipate

These research questions should be appropriate for a ${audience} audience and written in ${language}.`;
        break;
        
      case "literatureReview":
        promptTemplate = `As a research scholar specializing in ${topic} for the ${industry} industry, outline a comprehensive literature review.

Use a ${tone} tone that demonstrates academic rigor.

Please include:
1. Scope and objectives of the review
2. Key themes and subtopics to explore
3. Historical development of the field
4. Current state of knowledge
5. Major theories and frameworks
6. Methodological approaches in existing research
7. Gaps in the literature
8. Future research directions
9. Structure for organizing the review

This literature review outline should be suitable for a ${audience} audience and written in ${language}.`;
        break;
        
      case "conceptExplanation":
        promptTemplate = `As an educator specializing in ${topic} for the ${industry} industry, create a comprehensive concept explanation.

Use a ${tone} tone that makes complex ideas accessible.

Please provide:
1. Clear definition of the concept
2. Historical background and development
3. Key principles and components
4. Real-world applications and examples
5. Visual or conceptual model description
6. Common misconceptions and clarifications
7. Related concepts and frameworks
8. Practical implications and relevance
9. Further resources for deeper understanding

This concept explanation should be appropriate for a ${audience} audience and written in ${language}.`;
        break;
        
      case "debateArguments":
        promptTemplate = `As a debate strategist focusing on ${topic} in the ${industry} industry, prepare comprehensive arguments for both sides.

Use a ${tone} tone that presents balanced and well-reasoned positions.

Please provide:
1. Clear framing of the debate question/resolution
2. For the affirmative position:
   - 3-5 strong main arguments with supporting evidence
   - Anticipated counterarguments and rebuttals
   - Key statistics and expert opinions
3. For the negative position:
   - 3-5 strong main arguments with supporting evidence
   - Anticipated counterarguments and rebuttals
   - Key statistics and expert opinions
4. Common ground between positions
5. Stakeholder perspectives to consider

These debate arguments should be suitable for a ${audience} audience and written in ${language}.`;
        break;
        
      case "experimentDesign":
        promptTemplate = `As a research methodology expert focusing on ${topic} in the ${industry} industry, create a detailed experiment design.

Use a ${tone} tone that emphasizes scientific rigor.

Please include:
1. Research question and hypotheses
2. Variables (independent, dependent, control)
3. Experimental setup and conditions
4. Sampling approach and size calculation
5. Data collection methods and tools
6. Control measures and randomization approach
7. Statistical analysis plan
8. Validity considerations (internal and external)
9. Ethical considerations
10. Timeline and resource requirements

This experiment design should be appropriate for a ${audience} audience and written in ${language}.`;
        break;
        
      case "analogiesMetaphors":
        promptTemplate = `As a learning specialist focusing on ${topic} in the ${industry} industry, create powerful analogies and metaphors.

Use a ${tone} tone that makes abstract concepts concrete and relatable.

Please provide:
1. 5-7 compelling analogies that explain different aspects of ${topic}
2. 3-5 extended metaphors that capture the essence of the subject
3. Visual imagery suggestions for each analogy/metaphor
4. Real-world comparisons that resonate with everyday experience
5. Specific applications of these analogies in teaching
6. Potential limitations of each analogy
7. Guidance on when to use which analogy

These analogies and metaphors should be suitable for a ${audience} audience and written in ${language}.`;
        break;
        
      case "mentalModel":
        promptTemplate = `As a cognitive scientist specializing in ${topic} for the ${industry} industry, develop a comprehensive mental model.

Use a ${tone} tone that encourages structured thinking.

Please include:
1. Core principles of the mental model
2. Visual representation description
3. Key components and their relationships
4. Decision-making framework based on this model
5. Pattern recognition guidance
6. Application to specific scenarios
7. Limitations and edge cases
8. Integration with other relevant mental models
9. Practical exercises to internalize the model

This mental model should be appropriate for a ${audience} audience and written in ${language}.`;
        break;
        
      case "historicalAnalysis":
        promptTemplate = `As a historical analyst specializing in ${topic} for the ${industry} industry, create a comprehensive historical analysis.

Use a ${tone} tone that provides context and insight.

Please provide:
1. Timeline of key events and developments
2. Major figures and their contributions
3. Societal, economic, and political context
4. Cause and effect relationships
5. Different historical interpretations and schools of thought
6. Primary sources and evidence
7. Lasting impact and contemporary relevance
8. Lessons learned and patterns identified
9. Areas for further historical inquiry

This historical analysis should be suitable for a ${audience} audience and written in ${language}.`;
        break;
        
      default:
        promptTemplate = `As an educational content creator specializing in ${topic} for the ${industry} industry, develop a comprehensive learning resource.

Use a ${tone} tone that facilitates understanding.

Please include:
1. Key concepts and definitions
2. Historical context and development
3. Theoretical frameworks and principles
4. Practical applications and examples
5. Current debates and perspectives
6. Visual representations and models
7. Assessment questions and activities
8. Resources for further learning

This learning resource should be appropriate for a ${audience} audience and written in ${language}.`;
    }
    
    return promptTemplate;
  }

  // Productivity & Planning Prompts
  if (outputType.startsWith("decision") || 
      outputType.startsWith("habit") || 
      outputType.startsWith("weekly") ||
      outputType.startsWith("project") ||
      outputType.startsWith("meeting") ||
      outputType.startsWith("retrospective") ||
      outputType.startsWith("problem") ||
      outputType.startsWith("goals")) {
      
    switch (outputType) {
      case "decisionMatrix":
        promptTemplate = `As a decision-making specialist focusing on ${topic} in the ${industry} industry, create a comprehensive decision matrix.

Use a ${tone} tone that facilitates clear evaluation.

Please include:
1. Decision statement and objective
2. 3-5 viable options/alternatives
3. 5-8 evaluation criteria with weightings
4. Scoring system and methodology
5. Matrix template with rows and columns
6. Data gathering requirements
7. Analysis interpretation guidance
8. Sensitivity analysis considerations
9. Implementation recommendations

This decision matrix should be suitable for a ${audience} audience and written in ${language}.`;
        break;
        
      case "habitTracker":
        promptTemplate = `As a productivity coach specializing in ${topic} for the ${industry} industry, design a habit tracking system.

Use a ${tone} tone that motivates consistent behavior.

Please provide:
1. Key habits to track related to ${topic} (5-10 habits)
2. Tracking methodology and metrics
3. Template structure (daily, weekly, monthly views)
4. Visual representation suggestions
5. Accountability mechanisms
6. Reward system design
7. Progress evaluation approach
8. Habit stacking and integration strategies
9. Troubleshooting for common obstacles

This habit tracker should be appropriate for a ${audience} audience and written in ${language}.`;
        break;
        
      case "weeklyPlanner":
        promptTemplate = `As a time management expert focusing on ${topic} in the ${industry} industry, create a weekly planning system.

Use a ${tone} tone that encourages effective time allocation.

Please include:
1. Weekly template structure
2. Priority classification system
3. Time blocking strategies
4. Goal-setting framework (weekly objectives)
5. Review and reflection components
6. Flexibility mechanisms
7. Integration with long-term planning
8. Productivity metrics to track
9. Template customization recommendations

This weekly planner should be suitable for a ${audience} audience and written in ${language}.`;
        break;
        
      case "projectTimeline":
        promptTemplate = `As a project management specialist for ${topic} in the ${industry} industry, create a comprehensive project timeline.

Use a ${tone} tone that facilitates clear planning and execution.

Please provide:
1. Project scope definition
2. Key milestones and deliverables
3. Task breakdown structure
4. Dependencies and critical path
5. Resource allocation framework
6. Timeline visualization recommendations
7. Risk management integration
8. Progress tracking methodology
9. Adjustment and replanning protocols

This project timeline should be appropriate for a ${audience} audience and written in ${language}.`;
        break;
        
      case "meetingAgenda":
        promptTemplate = `As a meeting effectiveness consultant focusing on ${topic} for the ${industry} industry, create a comprehensive meeting agenda template.

Use a ${tone} tone that promotes focused discussion.

Please include:
1. Meeting purpose and objectives
2. Attendee roles and responsibilities
3. Discussion topics with time allocations
4. Pre-meeting preparation requirements
5. Decision-making framework
6. Documentation approach
7. Action item tracking
8. Follow-up protocol
9. Meeting effectiveness evaluation

This meeting agenda should be suitable for a ${audience} audience and written in ${language}.`;
        break;
        
      case "retrospective":
        promptTemplate = `As a continuous improvement specialist focusing on ${topic} in the ${industry} industry, design a retrospective framework.

Use a ${tone} tone that encourages honest reflection and growth.

Please provide:
1. Retrospective objectives and principles
2. Structured reflection questions (10-15 questions)
3. Data gathering methodology
4. Success metrics evaluation
5. Root cause analysis techniques
6. Action planning template
7. Follow-up accountability system
8. Integration with future planning
9. Facilitation guidelines

This retrospective framework should be appropriate for a ${audience} audience and written in ${language}.`;
        break;
        
      case "problemSolving":
        promptTemplate = `As a strategic consultant specializing in ${topic} for the ${industry} industry, create a problem-solving framework.

Use a ${tone} tone that facilitates methodical analysis.

Please include:
1. Problem definition methodology
2. Root cause analysis techniques
3. Stakeholder mapping approach
4. Data gathering requirements
5. Solution generation process
6. Evaluation criteria for solutions
7. Implementation planning template
8. Feedback loop design
9. Documentation and knowledge sharing approach

This problem-solving framework should be suitable for a ${audience} audience and written in ${language}.`;
        break;
        
      case "goalsFramework":
        promptTemplate = `As a performance coach specializing in ${topic} for the ${industry} industry, develop a comprehensive goals framework.

Use a ${tone} tone that inspires achievement.

Please provide:
1. Goal classification system (short, medium, long-term)
2. SMART goal formulation guide
3. Alignment methodology (personal/team/organizational)
4. Progress tracking metrics and milestones
5. Obstacle anticipation and contingency planning
6. Motivation and accountability mechanisms
7. Review and adjustment process
8. Celebration and reward system
9. Integration with daily/weekly planning

This goals framework should be appropriate for a ${audience} audience and written in ${language}.`;
        break;
        
      default:
        promptTemplate = `As a productivity specialist focusing on ${topic} for the ${industry} industry, create a structured planning and execution system.

Use a ${tone} tone that facilitates organized action.

Please include:
1. Objective setting methodology
2. Task breakdown approach
3. Prioritization framework
4. Time management strategies
5. Progress tracking system
6. Review and adjustment process
7. Resource allocation guidance
8. Accountability mechanisms

This productivity system should be suitable for a ${audience} audience and written in ${language}.`;
    }
    
    return promptTemplate;
  }
  
  // Fall back to original prompt templates for other categories
  switch (outputType) {
    // Product Development prompts
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
