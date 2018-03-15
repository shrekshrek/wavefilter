export default [{
    input: 'src/basic.js',
    indent: '\t',
    context: 'window',
    output: [
        {
            format: 'umd',
            name: 'WF',
            file: 'build/basic.js'
        }
    ],
}, {
    input: 'src/advance.js',
    indent: '\t',
    context: 'window',
    output: [
        {
            format: 'umd',
            name: 'WF',
            file: 'build/advance.js',
        }
    ],
}];
