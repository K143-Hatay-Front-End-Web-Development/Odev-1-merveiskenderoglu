

  function isPalindrome(num) {
    const stringifiedNum = num.toString();
  
    return (
      Array.from(stringifiedNum).toString() ===
      Array.from(stringifiedNum)
        .reverse()
        .toString()
    );
  }


  
  function findLargestPalindrome() {
    const start = 100;
    const end = 999;
  
    let largestPalindrome = 0;
  
    for (let i = 100; i <= 999; i ++) {
      for (let j = 100; j <= 999; j ++) {
        const product = i * j;
        if (isPalindrome(product) && product > largestPalindrome) {
          largestPalindrome = product;
        }
      }
    }
  
    return largestPalindrome;
  }
  
  console.log(findLargestPalindrome());