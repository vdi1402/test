module.exports = {
  content: ["./src/**/*.{html,js}"], /// {html,js,jsx,ts,tsx} <- I have the same error as yours, you can try to change this to this, and change to this and my error will disappear
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};