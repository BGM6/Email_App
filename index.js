const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
	res.send({name: 'Bryan'});
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));