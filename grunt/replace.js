module.exports = {
  all: {
    options: {
      patterns: [
        { match: 'app', replacement: '<%= package.name %>' },
        { match: 'version', replacement: '<%= package.version %>' },
        { match: 'author', replacement: '<%= package.author %>' }
      ]
    },
    files: [{
      src: 'dist/homepage/index.html',
      dest: 'dist/homepage/index.html'
    },
    {
      src: 'dist/chrome-extension/manifest.json',
      dest: 'dist/chrome-extension/manifest.json'
    }]
  }
};
