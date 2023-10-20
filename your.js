// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAvarage(classPoints, yourPoints) {
  let sum = 0;
  let avarage;

  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
    // console.log(sum)
  }

  avarage = sum / classPoints.length;

  if (avarage < yourPoints) {
    return "True";
  } else {
    return "False";
  }
}

console.log(betterThanAvarage([100, 40, 34, 57, 29, 72, 57, 88],75)); //True
