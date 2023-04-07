module.exports = [
    {
        entry: { shared: "./src/shared-util.js" },
        output: {
            library: ["__NarniaShared"],
            path: `${__dirname}/dist`,
            filename: "[name].js",
        },
        target: "web",
    },
    {
        entry: { libs: "./src/shared-lib.js" },
        output: {
            library: ["__SharedLibs"],
            path: `${__dirname}/dist`,
            filename: "[name].js",
        },
        target: "web",
    },
];
