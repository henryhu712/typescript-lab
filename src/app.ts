import * as Handlebars from 'handlebars'

import _, { extendWith } from 'lodash'
import fp from 'lodash/fp'

let a = fp.map(parseInt)(['6', '7'])
console.log('a: ', a)
process.exit()





const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));

console.log('from ts ---------------')

const message = "Hello!"

const lower = message.toLowerCase()

console.log('lower: ', lower)

const user = {
	name: 'Daniel',
	age: 26
}

let msg = 'b'
if (msg != 'a') {
	//
	//
}

