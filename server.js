import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Get the directory name of the current module.
// This is necessary because __dirname is not available in ES modules.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'static')));

// Handle all GET requests to any route by serving index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
