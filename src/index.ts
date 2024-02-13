namespace negative {
  // Challenge 3
  //
  // Beklenenler:
  // TypeScript'te interface/arayüzleri açıklayabilir misiniz?
  // Bir dizideki sayıları positif ve negatif olmak uzere 2 yeni diziye yerleştiren uygulama yazalım
  //
  // Örnek çıktı:
  // Verilen dizi: [3,9,-2,0,4,-1,-7]
  // Pozitif dizi: [3,9,4]
  // Negatif dizi: [-2,-1,-7]

  export interface NumberArrays {
    targetArray: number[];
    positivesArray: number[];
    negativesArray: number[];
  }

  export function separateNumbersInAnArray(
    targetArray: number[]
  ): NumberArrays {
    const positivesArray: number[] = [];
    const negativesArray: number[] = [];

    Array.from(targetArray, (num) => {
      // num > 0 ? positivesArray.push(num) : negativesArray.push(num);
      if (num > 0) {
        positivesArray.push(num);
      } else if (num < 0) {
        negativesArray.push(num);
      }
    });

    return { targetArray, positivesArray, negativesArray };
  }
}

const exampleArray = [3, 9, -2, 0, 4, -1, -7];

const result: negative.NumberArrays = negative.separateNumbersInAnArray(
  exampleArray
);

console.warn("Verilen dizi:", result.targetArray);
console.warn("Pozitif dizi:", result.positivesArray);
console.warn("Negatif dizi:", result.negativesArray);
