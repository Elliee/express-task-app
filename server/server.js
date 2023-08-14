const app = require('./app')
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)

app.listen(8000, () => {
    console.log('listening on port 8000...')
})