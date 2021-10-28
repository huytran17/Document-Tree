"use strict";

const Directory = require('../models/Directory')
const { HttpCode, HttpText } = require('../constants/Http')
const HttpResponse = require('../utils/HttpResponse')
const db = require('../config/database')

module.exports = {
	name: "directories",

	settings: {
		routes: [{
			alisases: {
				"REST directories": "directories"
			}
		}]
	},

	metadata: {
		t: async () => await db.transaction()
	},

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
			/**
			 * 
			 * @param {Context} ctx 
			 * @returns all directories || errors
			 */
			async handler(ctx) {
				try {
					const id = ctx.params.id

					const dir = await Directory.findOne({ where: { id } })

					return HttpResponse(false, HttpCode.OK, HttpText.OK, dir)
				}
				catch (err) {
					return new Error(err.message)
				}
			}
		},

		create: {
			/**
			 * 
			 * @param {Context} ctx 
			 * @returns inserted directory || errors
			 */
			async handler(ctx) {
				try {
					const t = await db.transaction()

					const data = ctx.data;

					const dir = await Directory.create(
						{ data },
						{
							transaction: t
						})

					await t.commit()

					return HttpResponse(false, HttpCode.CREATED, HttpText.CREATED, dir)
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
			/**
			 * 
			 * @param {Context} ctx 
			 * @returns updated directory || errors
			 */
			async handler(ctx) {
				try {
					const t = await db.transaction()

					const id = ctx.params.id

					const data = ctx.data;

					const dir = await Directory.update(
						{ data },
						{
							where: { id: id },
							transaction: t
						})

					await t.commit()

					return HttpResponse(false, HttpCode.OK, HttpText.OK, dir)
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
			/**
			 * 
			 * @param {Context} ctx 
			 * @returns removed directory || errors
			 */
			async handler(ctx) {
				try {
					const t = await db.transaction()

					const id = ctx.params.id

					const dir = await Directory.destroy(
						{
							where: { id },
							transaction: t
						})

					await t.commit()

					return HttpResponse(false, HttpCode.OK, HttpText.OK, dir)
				}
				catch (err) {
					await t.rollback()
				}
			}
		},
	},

	events: {},

	methods: {

	},

	created() { },

	async started() { },

	async stopped() { },
};
