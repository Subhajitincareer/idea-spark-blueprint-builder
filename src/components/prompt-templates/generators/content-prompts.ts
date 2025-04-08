
/**
 * Generate prompts for content creation
 */
export const generateContentPrompt = (
  topic: string,
  tone: string,
  outputType: string,
  audience: string = "general",
  language: string = "English",
  industry: string = "technology"
): string => {
  let promptTemplate = "";
  
  switch (outputType) {
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
      
    default:
      promptTemplate = `As a content creator specializing in ${topic} for the ${industry} industry, create engaging content.

Use a ${tone} tone that will resonate with your audience.

Please include:
1. Attention-grabbing headlines or titles
2. Key messages to communicate
3. Supporting points or evidence
4. Storytelling elements
5. Call-to-action suggestions
6. Visual content recommendations

This content should be tailored for a ${audience} audience and written in ${language}.`;
  }
  
  return promptTemplate;
};
