module.exports = {
    extends       : [ "plugin:@typescript-eslint/recommended" ],
    plugins       : [ "@typescript-eslint" ],
    parser        : "@typescript-eslint/parser",
    parserOptions : {
        tsconfigRootDir : __dirname,
        project         : "./tsconfig.json"
    },
    env : {
        browser : true
    },
    overrides : [
        {
            files         : [ "*.svelte" ],
            extends       : [ "plugin:@typescript-eslint/recommended", "plugin:svelte/recommended" ],
            parser        : "svelte-eslint-parser",
            parserOptions : {
                tsconfigRootDir     : __dirname,
                project             : "./tsconfig.json",
                parser              : "@typescript-eslint/parser",
                extraFileExtensions : [ ".svelte" ]
            },
            settings : {
                "svelte/typescript" : true
            },
            env : {
                browser : true
            },
            globals : {
                strings : "readonly"
            }
        }
    ]
}