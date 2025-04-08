
/**
 * Generate prompts for educational purposes
 */
export const generateEducationPrompt = (
  topic: string,
  tone: string,
  outputType: string,
  audience: string = "general",
  language: string = "English",
  industry: string = "technology"
): string => {
  let promptTemplate = "";
  
  switch (outputType) {
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
      
    case "courseOutline":
      promptTemplate = `As an educational curriculum designer specializing in ${topic} for the ${industry} industry, create a comprehensive course outline.

Use a ${tone} tone that organizes content logically and engages learners.

Please include:
1. Course title and brief description
2. Learning outcomes and objectives
3. Course prerequisites (if any)
4. 8-12 module topics with brief descriptions
5. Key assignments or assessments for each module
6. Reading/resource list
7. Evaluation methods and grading criteria
8. Schedule/timeline recommendations

This course outline should be suitable for a ${audience} audience and written in ${language}.`;
      break;
      
    case "teachingStrategy":
      promptTemplate = `As an educational methodology expert focusing on ${topic} for the ${industry} industry, outline effective teaching strategies.

Use a ${tone} tone that provides practical pedagogical guidance.

Please include:
1. 5-7 evidence-based teaching approaches
2. Differentiation techniques for varied learning styles
3. Engagement methods and activities
4. Technology integration suggestions
5. Assessment strategies aligned with learning objectives
6. Classroom management techniques
7. Methods for addressing common misconceptions
8. Professional development recommendations

These teaching strategies should be appropriate for a ${audience} audience and written in ${language}.`;
      break;
      
    case "educationalActivity":
      promptTemplate = `As an instructional designer specializing in ${topic} for the ${industry} industry, create an educational activity.

Use a ${tone} tone that promotes active learning and engagement.

Please provide:
1. Activity title and learning objective
2. Materials/resources required
3. Preparation steps for the instructor
4. Step-by-step instructions for implementation
5. Time required for completion
6. Guiding questions for discussion
7. Adaptation options for different skill levels
8. Assessment criteria or rubric
9. Extension/follow-up activities

This educational activity should be suitable for a ${audience} audience and written in ${language}.`;
      break;
      
    case "rubric":
      promptTemplate = `As an educational assessment specialist focusing on ${topic} for the ${industry} industry, create a comprehensive assessment rubric.

Use a ${tone} tone that clearly communicates performance expectations.

Please include:
1. Assessment purpose and learning objectives
2. 4-6 key criteria/dimensions to evaluate
3. Performance level descriptions for each criterion (3-5 levels)
4. Point allocation or weighting system
5. Examples of work at different performance levels
6. Implementation guidelines for assessors
7. Self-assessment component for learners
8. Feedback mechanism recommendations

This assessment rubric should be appropriate for a ${audience} audience and written in ${language}.`;
      break;
      
    case "learningObjectives":
      promptTemplate = `As an instructional design specialist focusing on ${topic} for the ${industry} industry, create comprehensive learning objectives.

Use a ${tone} tone that clearly defines expected outcomes.

Please provide:
1. 3-5 knowledge-based objectives (what learners will know)
2. 3-5 skill-based objectives (what learners will be able to do)
3. 2-3 attitude/value-based objectives (how learners will feel/value)
4. Alignment with industry standards or frameworks
5. Bloom's taxonomy classification for each objective
6. Measurable assessment indicators
7. Prerequisites or prior knowledge required
8. Application context in real-world settings

These learning objectives should be suitable for a ${audience} audience and written in ${language}.`;
      break;
      
    default:
      promptTemplate = `As an education specialist focusing on ${topic} for the ${industry} industry, create comprehensive educational materials.

Use a ${tone} tone that facilitates learning and engagement.

Please include:
1. Key learning objectives
2. Content outline with main topics
3. Instructional activities and exercises
4. Assessment methods
5. Resources and materials needed
6. Teaching/facilitation tips
7. Adaptations for different learning needs

These educational materials should be appropriate for a ${audience} audience and written in ${language}.`;
  }
  
  return promptTemplate;
};
