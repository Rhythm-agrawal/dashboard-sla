module.exports = {
  // The module name mapper maps the @ alias to the src folder.
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // Transform .vue files using vue-jest and .js files using babel-jest.
  transform: {
    "^.+\\.vue$": "vue3-jest",
    "^.+\\.js$": "babel-jest",
  },
  testEnvironment: "jsdom",
};
