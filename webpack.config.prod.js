const {merge} = require('webpack-merge');
const basis = require('./webpack.config.js');

module.exports = merge(basis,{
    mode:'production',
    devtool:'source-map' //建立除錯 檔案指向map, 出錯時才知道在哪個檔案
    
});
