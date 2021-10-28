"use strict";

// const DbMixin = require("../mixins/db.mixin");
const Directory = require('../models/Directory')
const { HttpCode, HttpText } = require('../constants/Http')
const HttpResponse = require('../utils/HttpResponse')

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

					return HttpResponse(false, HttpCode.OK, HttpText.OK, dirs)
				}
				catch (err) {
					return new Error(err.message)
				}
			},
		},

		get: {
			params: {
				id: "string"
			},

			async handler(ctx) {
				try {
					const dir = await Directory.findOne(ctx.params.id)

					return HttpResponse(false, HttpCode.OK, HttpText.OK, dir)
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

					return HttpResponse(false, HttpCode.CREATED, HttpText.CREATED, dir)
				}
				catch (err) {
					return new Error(err.message)
				}
			}
		},

		update: {
			params: {
				id: "string"
			},

			async handler(ctx) {
				try {
					const id = ctx.params.id

					const data = ctx.data;

					const dir = await Directory.update({ data }, { where: { id: id } })

					return HttpResponse(false, HttpCode.OK, HttpText.OK, dir)
				}
				catch (err) {
					return new Error(err.message)
				}
			}
		},

		remove: {
			params: {
				id: "string"
			},
			
			async handler(ctx) {
				try {
					const id = ctx.params.id

					const dir = await Directory.destroy({ where: { id: id } })

					return HttpResponse(false, HttpCode.OK, HttpText.OK, dir)
				}
				catch (err) {
					return new Error(err.message)
				}
			}
		},
	},

	events: {},

	methods: {},

	created() { },

	async started() { },

	async stopped() { },
};
