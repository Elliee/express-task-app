const app = require('./app')
require('dotenv').config();
const connectDB = require('./DB/connect')

connectDB(process.env.MONGO_URI);

app.listen(8000, () => {
    console.log('listening on port 8000...')
})