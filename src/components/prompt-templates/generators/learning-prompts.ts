
/**
 * Generate prompts for learning and research purposes
 */
export const generateLearningPrompt = (
  topic: string,
  tone: string,
  outputType: string,
  audience: string = "general",
  language: string = "English",
  industry: string = "technology"
): string => {
  let promptTemplate = "";
  
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
};
