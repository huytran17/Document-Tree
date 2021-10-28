const moleculer = require("moleculer");
const { Service, Action, Event, Method } = require("moleculer-decorators");
const web = require("moleculer-web");
const broker = new moleculer.ServiceBroker({
	logger: console,
	logLevel: "debug",
});

@Service({
	mixins: [web],
	settings: {
		port: 3000,
		routes: [],
	},
})
class TestService extends moleculer.Service {
	// Optional constructor
	constructor() {
		super();
		this.settings = {
			// Overrides above by default, to prevent this, add "constructOverride: false" to @Service
			port: 3001,
		};
	}

	// Without constructor (typescript)
	settings = {
		port: 3001,
	};

	@Action()
	Login(ctx) {}

	@Action({
		skipHandler: true, // Any options will be merged with the mixin's action.
	})
	Login3() {
		// this function will never be called since a mixin will override it, unless you specify skipHandler: false.
	}

	// With options
	// No need for "handler:{}" here
	@Action({
		cache: false,
		params: {
			a: "number",
			b: "number",
		},
	})
	Login2(ctx) {}

	@Event({
		group: "group_name",
	})
	"event.name"(payload, sender, eventName) {}
}

module.exports = TestService;
