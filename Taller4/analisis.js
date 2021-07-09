// Helpers
const isEven = (number) => {
  return (number % 2 === 0);
};

const calculateArithmeticAverage = (list) => {
  const addList = list.reduce(
    function (accumulatedValue = 0, newElement ) {
      return accumulatedValue + newElement;
    }
  );

  const averageList = addList / list.length;
  return averageList;
}

// Median Calculator
function medianSalaries(list) {
  const half = parseInt(list.length / 2);

  if(isEven(list.length)) {
    const halfPerson1 = list[half - 1];
    const halfPerson2 = list[half];

    const median = calculateArithmeticAverage([halfPerson1, halfPerson2]);
    return median;
  } else {
    const halfPerson = list[half];
    return halfPerson;
  }
}

// Mediana General
const salariesWork = worker.map(
  function (person) {
    return person.salary;
  }
);

const salariesWorkSorted = salariesWork.sort(
  function(salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

const generalMedianWorker = medianSalaries(salariesWorkSorted) 

// Median Top 10%
const spliceStart = (salariesWorkSorted.length * 90) / 100;
const spliceCount = salariesWorkSorted.length - spliceStart;

const salariesTop10 = salariesWorkSorted.splice(
  spliceStart,
  spliceCount,
);

const medianTop10 = medianSalaries(salariesTop10);

console.log({
  generalMedianWorker,
  medianTop10
});