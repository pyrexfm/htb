const express = require('express');
const { VM } = require('vm2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/templates/index.html');
});                       

app.get('/limitations', (req, res) => {
	res.sendFile(__dirname + '/templates/limitations.html');
});

app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/templates/about.html');
});

app.get('/editor', (req, res) => {
	res.sendFile(__dirname + '/templates/editor.html');
});

app.post('/run', (req, res) => {
	const code = Buffer.from(req.body.code, 'base64').toString('utf-8');

	const vm = new VM({
		timeout: 5000,
		console: 'redirect', 
		sandbox: {
		  console: {
			log: (...args) => {
				var output_initial = args.map((arg) => String(arg)).join(' ');
				output.push(output_initial);
			},
		  },
			require: (moduleName) => {
				if (['child_process','fs'].includes(moduleName)) {
				throw new Error(`Module "${moduleName}" is not allowed`);
				}
				return require(moduleName);
			}
		},
	  });
	  
	  
	  try {
		var output = [];
		var output_initial = vm.run(code);		
		output.push(output_initial);

	
		res.json({ output : output.join('\r\n') })
	  } catch (error) {

		errMsg = error.message.split('\n')[0];
		res.json({  error : errMsg });
	  }
});

app.listen(port,() => {
    console.log(`App listening at http://127.0.0.1:${port}`);
});
