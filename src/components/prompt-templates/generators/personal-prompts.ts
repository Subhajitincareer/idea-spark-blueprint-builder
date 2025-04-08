
/**
 * Generate prompts for personal development
 */
export const generatePersonalPrompt = (
  topic: string,
  tone: string,
  outputType: string,
  audience: string = "general",
  language: string = "English",
  industry: string = "technology"
): string => {
  let promptTemplate = "";
  
  switch (outputType) {
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
      
    default:
      promptTemplate = `As a career development specialist focusing on ${topic} for the ${industry} industry, provide personal growth guidance.

Use a ${tone} tone that inspires and motivates professional development.

Please include:
1. Self-assessment framework
2. Key skills and competencies to develop
3. Learning and growth opportunities
4. Networking and relationship-building strategies
5. Career progression pathways
6. Personal branding recommendations
7. Work-life balance considerations
8. Success measurement criteria

This personal development guidance should be tailored for a ${audience} audience and written in ${language}.`;
  }
  
  return promptTemplate;
};
