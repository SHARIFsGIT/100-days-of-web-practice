function calculateTotalExpenses(array) {
    return array.reduce((total, expense) => {
      if (!total[expense.category]) {
        total[expense.category] = 0;
      }
      total[expense.category] += expense.amount;
      return total;
    }, {});
  }
  
  const expenses = [
    { category:'Food', amount:50 },
    { category:'Transportation', amount:30 },
    { category:'Food', amount:20 },
    { category:'Utilities', amount:100 },
    { category:'Transportation', amount:50 }
  ];
  
  console.log(calculateTotalExpenses(expenses));