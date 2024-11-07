// index.js
import express from 'express';
import router from '../Expresse/src/routes/blogRoute.js'; 

const app = express();
app.use('/api', router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
