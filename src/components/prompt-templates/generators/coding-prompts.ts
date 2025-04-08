
/**
 * Generate prompts for coding assistance
 */
export const generateCodingPrompt = (
  topic: string,
  tone: string,
  outputType: string,
  audience: string = "general",
  language: string = "English",
  industry: string = "technology"
): string => {
  let promptTemplate = "";
  
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
};
