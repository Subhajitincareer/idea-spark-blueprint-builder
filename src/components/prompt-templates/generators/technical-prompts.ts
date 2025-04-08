
/**
 * Generate prompts for technical documentation and processes
 */
export const generateTechnicalPrompt = (
  topic: string,
  tone: string,
  outputType: string,
  audience: string = "general",
  language: string = "English",
  industry: string = "technology"
): string => {
  let promptTemplate = "";
  
  switch (outputType) {
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
      promptTemplate = `As a technical specialist focusing on ${topic} for the ${industry} industry, create comprehensive technical documentation.

Use a ${tone} tone that clearly communicates complex information.

Please include:
1. System/process overview
2. Technical specifications and requirements
3. Implementation guidelines
4. Best practices and standards
5. Common issues and troubleshooting
6. Performance optimization tips
7. Security considerations
8. Maintenance and support guidance

This technical documentation should be appropriate for a ${audience} audience and written in ${language}.`;
  }
  
  return promptTemplate;
};
