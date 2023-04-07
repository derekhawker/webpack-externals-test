module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: `${__dirname}/dist`,
        filename: "[name].js",
    },
    target: "web",
    externals: {
        "@c1c-narnia/util": "__NarniaShared",
        react: "__SharedLibs.React",
        "react-dom": "__SharedLibs.ReactDOM",
        "react-dom/client": "__SharedLibs.ReactDOMClient",
    },
};
