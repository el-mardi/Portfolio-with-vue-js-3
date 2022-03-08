// deploy to github pages
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/Portfolio-with-vue-js-3/'
    : '/'
}