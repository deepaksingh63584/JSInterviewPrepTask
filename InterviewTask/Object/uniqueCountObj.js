const employees = [
  { name: "Deepak", department: "IT" },
  { name: "Sachin", department: "HR" },
  { name: "Deepak", department: "IT" },
  { name: "Deepak", department: "Finance" },
  { name: "Sachin", department: "IT" },
  { name: "Deepak", department: "HR" }
];

const result = employees.reduce((acc, employee) => {
  const name = employee.name;

  acc[name] = (acc[name] || 0) + 1;

  return acc;
}, {});

Object.entries(result).forEach(([name, count]) => {
  console.log(`${name} : ${count}`);
});