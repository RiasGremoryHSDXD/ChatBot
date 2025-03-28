class MessageParser {
  actionProvider: any;
  state: any;

  constructor(actionProvider: any, state: any) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message: string): void {
    const lowerCaseMessage = message.toLowerCase().trim();
    if (lowerCaseMessage === "hi") {
      this.actionProvider.handleGreeting();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;



// class MessageParser {
//   actionProvider: any;
//   state: any;

//   constructor(actionProvider: any, state: any) {
//     this.actionProvider = actionProvider;
//     this.state = state;
//   }

//   parse(message: string): void {
//     const lowerCaseMessage = message.toLowerCase().trim();
//     if (lowerCaseMessage === "hi") {
//       this.actionProvider.handleGreeting();
//     } else {
//       // Pass the original message or the trimmed one—both should work.
//       this.actionProvider.handleQuery(lowerCaseMessage);
//     }
//   }
// }

// export default MessageParser;
