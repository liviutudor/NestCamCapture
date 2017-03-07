let Nightmare = require("nightmare")
let program = require("commander")

let pathToConfig = "../conf.json"
program
	.option( "-f, --file <configfile>", "Specify a configuration file (use conf.json as default if not specified)" )
	.parse( process.argv )

if( program.file ) {
	pathToConfig = program.file
	console.log( "Using configuration file " + pathToConfig )
}
const conf = require( pathToConfig )
console.log( "Using username " + conf.username )

let nightmare = Nightmare({ show: true })
nightmare
	.useragent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:51.0) Gecko/20100101 Firefox/51.0")
	.viewport(1024, 768)

nightmare
		.goto("https://home.nest.com/login")
		.wait()
		.type("#ember565", conf.username)
		.type("#ember617", conf.password)
		.click("#ember626")
		.wait(10000)
		.goto( "https://home.nest.com/camera/" + conf.cameraId)
		.wait(10000)
		.screenshot("1.png")
		.end()
		.then( () => console.log("Finished") )
		.catch( (error) => console.log("ERROR: " + error) )
