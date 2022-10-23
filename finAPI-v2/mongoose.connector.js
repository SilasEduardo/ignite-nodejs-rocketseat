const mongoose = require('mongoose')

module.exports = async (url, app) =>{
   await mongoose.connect(url)
   console.log('DB CONNECTED')
   app.emit('done')
    
}
