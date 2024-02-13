module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver", {
      root: ["./src"],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        tests: ['./tests/'],
        "@/components": "./components",
        "@/constants": "./constants",
        "@/navigation": "./navigation",
        "@/screens": "./src/screens",
        "@/store": "./src/store",
        "@/theme": "theme",
        "@/underscore": "lodash"
      }
    }],
    'react-native-reanimated/plugin',
  ],
};
