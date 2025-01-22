export const calculateReadingTime = (content) => {
<<<<<<< HEAD
  if (!content) return 0; // Early return for null/undefined/empty strings

  const wordsPerMinute = 150;
  let wordCount = 0;
  let inWord = false;

  for (const char of content) {
    if (char.trim()) {
      if (!inWord) {
        wordCount++;
        inWord = true;
      }
    } else {
      inWord = false;
    }
  }

  return Math.ceil(wordCount / wordsPerMinute);
};
=======
    if (!content) return 0; // Early return for null/undefined/empty strings
  
    const wordsPerMinute = 150;
    let wordCount = 0;
    let inWord = false;
  
    for (const char of content) {
      if (char.trim()) {
        if (!inWord) {
          wordCount++;
          inWord = true;
        }
      } else {
        inWord = false;
      }
    }
  
    return Math.ceil(wordCount / wordsPerMinute);
  };
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
