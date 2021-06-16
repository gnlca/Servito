module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    },
    images: {
      domains: ['openweathermap.org'],
    },
    webpack5:false,
  };

 