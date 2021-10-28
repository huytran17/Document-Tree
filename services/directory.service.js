"use strict";

// const DbMixin = require("../mixins/db.mixin");
const Directory = require('../models/Directory')
const { HttpCode, HttpText } = require('../constants/Http')

module.exports = {
	name: "directories",

	// mixins: [DbMixin("document")],

	settings: {
		routes: [{
			alisases: {
				'GET hello': 'directories.hello',
				"REST directories": "directories"
			}
		}]
	},

	dependencies: [],

	actions: {
		list: {
			async handler() {
				try {
					const dirs = await Directory.findAll()

					return dirs
				}
				catch (err) {
					return new Error(err.message)
				}
			},
		},

		get: {
			async handler(ctx) {
				try {
					const dir = await Directory.findOne(ctx.params.id)

					return dir
				}
				catch (err) {
					return new Error(err.message)
				}
			}
		},

		create: {
			async handler(ctx) {
				try {
					const data = ctx.data;

					const dir = await Directory.create({ data })

					return dir
				}
				catch (err) {
					return new Error(err.message)
				}
			}
		},

		update: { async handler() { } },

		remove: { async handler() { } },
	},

	events: {},

	methods: {},

	created() { },

	async started() { },

	async stopped() { },
};
