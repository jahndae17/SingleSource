// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the SingleSourceApp directory
app.use(express.static(path.join(__dirname, 'SingleSourceApp')));

// Fallback: serve index.html for any unknown route (SPA style)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'SingleSourceApp', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
