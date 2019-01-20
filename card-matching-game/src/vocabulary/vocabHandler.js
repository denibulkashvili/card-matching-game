const vocabList = [
    'colorful macaw', 'plain egret', 'dangerous jaguar', 
    'friendly river dolphin', 'energetic spider monkey', 'calm sloth',
  ];
  const doubledVocabList = [...vocabList, ...vocabList];
  const shuffleCards = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };
  
  export const shuffledVocabList = shuffleCards(doubledVocabList);
  