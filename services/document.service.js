"use strict";

const Document = require('../models/Document')
const { HttpCode, HttpText } = require('../constants/Http')
const HttpResponse = require('../utils/HttpResponse')
const db = require('../config/database')

module.exports = {
	name: "documents",

	settings: {
		routes: [{
			alisases: {
				"REST documents": "documents"
			}
		}]
	},

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

					const doc = await Document.findOne({ where: { id } })

					return HttpResponse(false, HttpCode.OK, HttpText.OK, doc)
				}
				catch (err) {
					return new Error(err.message)
				}
			}
		},

		create: {
			async handler(ctx) {
				const t = await db.transaction()

				try {
					const data = ctx.params

					const doc = await Document.create(
						data,
						{
							transaction: t
						})

					await t.commit()

					return HttpResponse(false, HttpCode.CREATED, HttpText.CREATED, doc)
				}
				catch (err) {
					await t.rollback()
				}
			}
		},

		update: {
			params: {
				id: "string"
			},

			async handler(ctx) {
				const t = await db.transaction()

				try {

					const { id, label, content, directoryId } = ctx.params

					const doc = await Document.update(
						{ label, content, directoryId },
						{
							where: { id },
							transaction: t
						})

					await t.commit()

					return HttpResponse(false, HttpCode.OK, HttpText.OK, doc)
				}
				catch (err) {
					await t.rollback()
				}
			}
		},

		remove: {
			params: {
				id: "string"
			},

			async handler(ctx) {
				const t = await db.transaction()

				try {

					const { id } = ctx.params

					const doc = await Document.destroy(
						{
							where: { id: id },
							transaction: t
						})

					await t.commit()

					return HttpResponse(false, HttpCode.OK, HttpText.OK, doc)
				}
				catch (err) {
					await t.rollback()
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
