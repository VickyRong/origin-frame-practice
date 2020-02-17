const path = require('path');

module.exports = {
    entry:'./index.js',
    output:{
        filename:'bundle.index.js',
        path:path.resolve(__dirname,'dist')
    }
}