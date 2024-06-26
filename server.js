const express = require('express')
const app = express();
app.use('/public', express.static('public'));

const PORT = process.env.PORT || 8000;

app.get("/financeData", function (req, res) {
    const simulatedData = [
        {
          title: "March Grocery",
          category: "Groceries",
          amount: "$200",
          type: "Debit",
          date: "2024-04-01",
        },
        {
          title: "Utility Bill",
          category: "Utilities",
          amount: "$150",
          type: "Debit",
          date: "2024-04-02",
        },
        {
          title: "Movie Night",
          category: "Entertainment",
          amount: "$100",
          type: "Debit",
          date: "2024-04-03",
        },
      ];
    res.type("json");
    res.send(simulatedData);
  });

app.post("/submit", function(req, res) {
  simulatedData.push({
    title: req.body.expensePlace,
    category: req.body.expenseCategory,
    amount: req.body.expenseAmount,
    type: req.body.paymentMode,
    date: req.body.expenseDate
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});