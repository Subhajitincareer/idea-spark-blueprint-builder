
/**
 * Generate prompts for AI art generation models
 */
export const generateArtPrompt = (
  topic: string,
  tone: string,
  outputType: string,
  audience: string = "general",
  language: string = "English",
  industry: string = "technology",
  aiModel: string = "midjourney"
): string => {
  let promptTemplate = "";
  
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
};
