"use strict";

const path = require("path");

const typescript                           = require("@rollup/plugin-typescript");
const svelte                               = require("rollup-plugin-svelte");
const resolve                              = require("@rollup/plugin-node-resolve");
const commonjs                             = require("@rollup/plugin-commonjs");
const sveltePreprocess = require("svelte-preprocess");
const css                                  = require("rollup-plugin-css-only");
const serve = require("rollup-plugin-serve");

module.exports = {
    input : path.join(__dirname, "./client/index.ts"),
    output : {
        format : "iife",
        name : "app",
        file : path.join(__dirname, "./public/bundle.js")
    },
    plugins : [
        svelte({
            compilerOptions : {
                // enable run-time checks when not in production
                dev : true,
            },

            preprocess : sveltePreprocess({
                postcss    : { plugins : [ require("postcss-nested") ] },
                typescript : { tsconfigFile : path.join(__dirname, "./tsconfig.json") }
            })
        }),

        css({ output : `bundle.css` }),

        resolve.nodeResolve({
            browser : true
        }),


        commonjs(),

        typescript(),

        serve({
            open : true,
            contentBase : "./public"
        }),

        // livereload("public")
    ]
}
