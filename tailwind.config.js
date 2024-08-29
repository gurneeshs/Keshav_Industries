import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#030F27',
        eda72f: '#EDA72F',
        customBackG:'#111927',
        customGray:'#1f293780',
        customNewBack: '#faf7f0'
      },
    },
  },
  plugins: [],
});
