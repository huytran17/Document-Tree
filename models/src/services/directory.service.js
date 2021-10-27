"use strict";

// const DbMixin = require("../mixins/db.mixin");
const { DirectoryRepository } = require("../repository")
const { getRepository } = require('typeorm')
const { Directory } = require('../entity')

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "directory",

	// mixins: [DbMixin("document")],

	/**
	 * Settings
	 */
	settings: {},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		hello: {
			rest: {
				method: "GET",
				path: "/hello",
			},

			async handler() {
				const directoryRepo = getRepository(Directory);

				return await directoryRepo.find();
			},
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
	created() { },

	/**
	 * Service started lifecycle event handler
	 */
	async started() { },

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() { },
};
