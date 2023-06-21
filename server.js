const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const trainingRouter = require('./routes/trainingRoutes');
const inviteRouter = require('./routes/inviteRoutes');
const errorHandler = require('./middleware/errorHandler');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/trainings', trainingRouter);
app.use('/api/invites', inviteRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
