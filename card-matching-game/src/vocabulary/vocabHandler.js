const vocabList = [
    'take public transportation', 'take reusable shopping bags',
    'use energy-saving saving light bulbs', 
    'keep the air conditioner on low', 
    'grow your own vegetables', 
    'dry clothes outside' 

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
  
