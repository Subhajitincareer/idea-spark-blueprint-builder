
/**
 * Generate prompts for productivity and planning purposes
 */
export const generateProductivityPrompt = (
  topic: string,
  tone: string,
  outputType: string,
  audience: string = "general",
  language: string = "English",
  industry: string = "technology"
): string => {
  let promptTemplate = "";
  
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
};
