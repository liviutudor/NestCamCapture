const Nightmare = require("nightmare")
const program = require("commander")

let pathToConfig = "../conf.json"
program
	.option("-f <configfile>", "Specify a configuration file (use conf.json as default if not specified)")
	.action(function(configfile) {
		console.log( "Using configuration file " + configfile)
		pathToConfig = configfile
	})
	.parse(process.argv)
const conf = require(pathToConfig)
console.log("conf.username=" + conf.username)

// var nightmare = Nightmare()

// nightmare.goto("https://home.nest.com/")
// 		.wait()
