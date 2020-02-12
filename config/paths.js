const path = require('path')

module.exports = {
    src: path.resolve(__dirname, '../src'),
    build: path.resolve(__dirname, '../build'),
    static: path.resolve(__dirname, '../public'),
    atom: path.resolve(__dirname, '../src/atom/'),
    action: path.resolve(__dirname, '../src/actions/'),
    reducer: path.resolve(__dirname, '../src/reducer/'),
    type: path.resolve(__dirname, '../src/types/'),
    util: path.resolve(__dirname, '../src/utils/'),
    asset: path.resolve(__dirname, '../src/assets/'),
    config: path.resolve(__dirname, '../src/config/'),
    root: path.resolve(__dirname, '..'),
}