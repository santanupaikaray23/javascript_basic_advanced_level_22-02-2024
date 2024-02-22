var > we are able to redeclare and reassing
let >We can't redeclare but reassign
const >We can neither redeclare nor reassign
> const a = 56
undefined
> a
56
> const a = 78
Uncaught SyntaxError: Identifier 'a' has already been declared
> a
56
> const b = 456
undefined
> b
456
> const b = 3456
Uncaught SyntaxError: Identifier 'b' has already been declared
> b
456