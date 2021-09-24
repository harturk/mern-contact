const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: "Welcome to the ContactKeepr API..." }));

const PORT = process.env.POST || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
