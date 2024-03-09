const defaultStandardVersion = {
  bumpFiles: [
    {
      filename: "package.json",
      type: "json",
    },
  ],
  skip: {
    changelog: true
  }
};

module.exports = defaultStandardVersion;
