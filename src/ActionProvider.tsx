import React from 'react';

class ActionProvider {
  createChatBotMessage: (message: string, options?: object) => any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  stateRef: any;

  constructor(
    createChatBotMessage: (message: string, options?: object) => any,
    setStateFunc: React.Dispatch<React.SetStateAction<any>>,
    stateRef: any
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.stateRef = stateRef;
  }

  handleGreeting(): void {
    const greetingMessage = this.createChatBotMessage("Hello", {});
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, greetingMessage],
    }));
  }

  handleDefault(): void {
    const defaultMessage = this.createChatBotMessage("I'm sorry, I didn't understand that.", {});
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, defaultMessage],
    }));
  }
}

export default ActionProvider;



/*
  This code for the pdf
*/

// // src/ActionProvider.tsx
// import portfolioContent from './portfolioContent';

// class ActionProvider {
//   createChatBotMessage: (message: string, options?: object) => any;
//   setState: React.Dispatch<React.SetStateAction<any>>;
//   stateRef: any;

//   constructor(
//     createChatBotMessage: (message: string, options?: object) => any,
//     setStateFunc: React.Dispatch<React.SetStateAction<any>>,
//     stateRef: any
//   ) {
//     this.createChatBotMessage = createChatBotMessage;
//     this.setState = setStateFunc;
//     this.stateRef = stateRef;
//   }

//   // New helper function: Extracts the entire sentence containing the keyword.
//   extractSentence(text: string, keyword: string): string {
//     const lowerText = text.toLowerCase();
//     const lowerKeyword = keyword.toLowerCase();
//     const index = lowerText.indexOf(lowerKeyword);
//     if (index === -1) return "";

//     // Find the start of the sentence: look backwards for a period, exclamation or question mark.
//     let start = text.lastIndexOf('.', index);
//     const exclamIndex = text.lastIndexOf('!', index);
//     const questionIndex = text.lastIndexOf('?', index);
//     start = Math.max(start, exclamIndex, questionIndex);
//     // If none found, start from beginning
//     if (start === -1) start = 0;
//     else start = start + 1; // move past the punctuation

//     // Find the end of the sentence: look forward for a period, exclamation or question mark.
//     let endCandidates = [
//       text.indexOf('.', index),
//       text.indexOf('!', index),
//       text.indexOf('?', index)
//     ].filter(pos => pos !== -1);
//     let end = endCandidates.length > 0 ? Math.min(...endCandidates) : text.length;
//     // Include the punctuation mark at the end
//     end = end + 1;

//     return text.substring(start, end).trim();
//   }

//   handleGreeting(): void {
//     const message = this.createChatBotMessage("Hello! How can I help you today?", {});
//     this.setState((prev: any) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//   }

//   handleQuery(query: string): void {
//     const lowerQuery = query.toLowerCase();
//     let response = "I'm sorry, I couldn't find any information regarding that.";

//     if (lowerQuery.includes("background") || lowerQuery.includes("who are you")) {
//       // Extract the sentence containing the keyword "background" or "who are you"
//       const snippet = this.extractSentence(portfolioContent, "background") ||
//                       this.extractSentence(portfolioContent, "who are you");
//       response = snippet
//         ? "Here's some information from my portfolio regarding my background: " + snippet
//         : "I am Tagupa James, a passionate web developer with over five years of experience. " +
//           "I specialize in modern web development using technologies like React.js and Node.js. " +
//           "For more details, please refer to my portfolio.";
//     } else if (lowerQuery.includes("experience") || lowerQuery.includes("skills")) {
//       const snippet = this.extractSentence(portfolioContent, "experience") ||
//                       this.extractSentence(portfolioContent, "skills");
//       response = snippet
//         ? "Here's some information from my portfolio regarding my experience: " + snippet
//         : "I have worked on multiple projects ranging from business web applications to interactive e-commerce platforms. " +
//           "My expertise spans frontend development, backend integration, and UI/UX design.";
//     }

//     const message = this.createChatBotMessage(response, {});
//     this.setState((prev: any) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//   }

//   handleDefault(): void {
//     const message = this.createChatBotMessage("I'm sorry, I didn't understand that. Could you rephrase?", {});
//     this.setState((prev: any) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//   }
// }

// export default ActionProvider;
