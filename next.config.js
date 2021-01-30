const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');
const withImages = require('next-images')

module.exports = withPlugins(
  [
    // [optimizedImages, {
    //   /* config for next-optimized-images */
    //   handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    // }],

    // your other plugins here
    // [withImages, {
    //   // assetPrefix: 'resolve-blog.herokuapp.com',
    //   // dynamicAssetPrefix: true,
    //   // webpack(config, options) {
    //   //   return config
    //   // }
    //   inlineImageLimit: false
    // }]
  ],
  {
    /* config options here */
    images: {
      loader: 'cloudinary',
      path: 'https://res.cloudinary.com',
      domains: ['localhost', 'resolve-blog.herokuapp.com', 'res.cloudinary.com'],
    },
  }
);
