"use strict";

// const DbMixin = require("../mixins/db.mixin");

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "directory",

	// mixins: [DbMixin("directory")],

	/**
	 * Settings
	 */
	settings: {
		fields: [
			"_id",
			"label",
			"parent",
			"documents",
			"createdAt",
			"updatedAt",
		],
		entityValidator: {
			label: "string|min:1",
		},
	},

	hooks: {},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		getAll: {
			rest: {
				method: "GET",
				path: "/",
			},

			async handler() {},
		},
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	created() {},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {},
};
