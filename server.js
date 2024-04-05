const express = require('express')
const app = express();
app.use('/public', express.static('public'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
