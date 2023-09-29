const mongoose = require('mongoose')


mongoose.connect(process.env.BASE_URL, {
    useUnifiedTopology: true,  //for solving connection issues
    useNewUrlParser: true
}).then(() => {
    console.log("mongodb atlas connected");
}).catch(() => {
    console.log("not connected");
})