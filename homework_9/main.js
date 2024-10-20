/*
Sample object for tests

const company = {
  sales: [
    { name: "Yurii", salary: 1000 },
    { name: "Peter", salary: 1500 },
    { name: "Vasya", salary: 2000 },
  ],
  development: {
    web: [{ name: "Andrew", salary: 2000 }],
    internals: [{ name: "Anna", salary: 5000 }],
    additional: {
      add1: [{ name: "Kate", salary: 1000 }],
      add2: [{ name: "Kolya", salary: 2000 }],
      add3: {
        add4: {
          add5: [{ name: "Valera", salary: 3000 }],
          add6: {
            add7: [{ name: "Igor", salary: 2500 }],
          },
          add8: [{ name: "Sergii", salary: 2000 }],
        },
      },
    },
  },
};

*/

/*
  The following function should be called as:
  const salaryCalculator = salaryCalculatorWorker();
  salaryCalculator(company);
*/
function salaryCalculatorWorker() {
  let totalSalary = 0;

  return function processSalaryCalculation(departmentDivision) {
    for (department in departmentDivision) {
      const deparmentStructure = departmentDivision[department];
      if (Array.isArray(deparmentStructure)) {
        totalSalary += internalCalculateDepartmentSalary(deparmentStructure);
      } else {
        processSalaryCalculation(deparmentStructure);
      }
    }
    return totalSalary;
  };

  function internalCalculateDepartmentSalary(deparmentStructure) {
    let deparmentSalary = 0;
    deparmentStructure.forEach((item) => {
      deparmentSalary += item.salary;
    });
    return deparmentSalary;
  }
}
