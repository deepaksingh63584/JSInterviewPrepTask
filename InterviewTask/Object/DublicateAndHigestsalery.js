const employees = [
{ id: 1, name: "Akash", email: "akash@example.com", salary: 85000, department: "Engineering" },
  { id: 2, name: "Riya", email: "riya@example.com", salary: 92000, department: "Engineering" },
  { id: 3, name: "Aman", email: "aman@example.com", salary: 78000, department: "HR" },
  { id: 4, name: "Neha", email: "neha@example.com", salary: 67000, department: "HR" },
  { id: 5, name: "Rahul", email: "rahul@example.com", salary: 88000, department: "Finance" },
  { id: 6, name: "Sneha", email: "sneha@example.com", salary: 91000, department: "Finance" },
  { id: 7, name: "Riya Sharma", email: "riya@example.com", salary: 95000, department: "Engineering" },
  { id: 8, name: "Rahul Verma", email: "rahul@example.com", salary: 90000, department: "Finance" },
  { id: 9, name: "Neha Gupta", email: "neha@example.com", salary: 72000, department: "HR" },
  { id: 10, name: "Vikram", email: "vikram@example.com", salary: 98000, department: "Engineering" },
  { id: 11, name: "Priya", email: "priya@example.com", salary: 86000, department: "Finance" },
  { id: 12, name: "Karan", email: "karan@example.com", salary: 83000, department: "HR" }
];

// 1. Remove duplicates based on email
const uniqueEmployees = [
 ...new Map(employees.map(emp => [emp.email, emp])).values()
];

console.log("Removed duplicate employees by email:- \n", uniqueEmployees);

// 2. Highest salary in each department
const highestPaid = uniqueEmployees.reduce((result, employee) => {
 const dept = employee.department;

 if (!result[dept] || employee.salary > result[dept].salary) {
 result[dept] = employee;
 }

 return result;
}, []);

console.log("Highest paid employees in each department:- \n", highestPaid);