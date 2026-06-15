//Q.8

const customers = [
  { customer: "Sundarlaal", amount: 50000 },
  { customer: "ram", amount: 20000 }
];

const totalSpending = customers.reduce(
  (sum, customer) => sum + customer.amount,
  0
);

console.log("Total Spendings", totalSpending);