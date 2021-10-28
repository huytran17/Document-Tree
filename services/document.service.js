"use strict";

const Document = require('../models/Document')
const { HttpCode, HttpText } = require('../constants/Http')
const HttpResponse = require('../utils/HttpResponse')

module.exports = {
	name: "documents",

	settings: {
		routes: [{
			alisases: {
				"REST documents": "documents"
			}
		}]
	},

	dependencies: [],

	actions: {
		list: {
			async handler(ctx) {
				try {
					const docs = await Document.findAll()

					return HttpResponse(false, HttpCode.OK, HttpText.OK, docs)
				}
				catch (err) {
					return new Error(err.message)
				}
			}
		},

		get: {
			params: {
				id: "string",
			},

			async handler(ctx) {
				try {
					const id = ctx.params.id

					const doc = await Document.findOne(id)

					return HttpResponse(false, HttpCode.OK, HttpText.OK, doc)
				}
				catch (err) {
					return new Error(err.message)
				}
			}
		},

		create: {
			async handler(ctx) {
				try {
					const data = ctx.data

					const doc = await Document.create({ data })

					return HttpResponse(false, HttpCode.CREATED, HttpText.CREATED, doc)
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
					const id = ctx.data.id

					const data = ctx.data

					const doc = await Document.create({ data }, { where: { id: id } })

					return HttpResponse(false, HttpCode.OK, HttpText.OK, doc)
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
					const id = ctx.data.id

					const doc = await Document.destroy({ where: { id: id } })

					return HttpResponse(false, HttpCode.OK, HttpText.OK, doc)
				}
				catch (err) {
					return new Error(err.message)
				}
			}
		}
	},

	events: {},

	methods: {},

	created() { },

	async started() { },

	async stopped() { },
};
