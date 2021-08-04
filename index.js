const express = require('express');
const connectDB = require('./config/db');
require('./models/User');
require('./services/passport');
const PORT = process.env.PORT || 5000;

const app = express();

//MongoDB
connectDB().then(() => console.log('MongoDB Connected...'));

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./routes/authRoutes')(app);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));