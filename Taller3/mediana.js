const calculateArithmeticAverage = (list) => {
  const addList = list.reduce(
    function (accumulatedValue = 0, newElement ) {
      return accumulatedValue + newElement;
    }
  );

  const averageList = addList / list.length;
  return averageList;
}


function calculateMedian(list) {

  const orderedList = list.sort((num1, num2) => {return num1 - num2});
  const halfList = parseInt(list.length / 2);
  let median;

  if (isEven(list.length)) {
      const element1 = list[halfList];
      const element2 = list[halfList - 1];

      const averageElement1And2 = calculateArithmeticAverage([
          element1,
          element2
      ]);

      median = averageElement1And2;
  } else {
      median = list[halfList];
  }

  return median;
}
