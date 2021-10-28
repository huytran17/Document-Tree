"use strict";

// const DbMixin = require("../mixins/db.mixin");
const { getRepository, getConnection } = require('typeorm')
const { Directory } = require('../entity')

module.exports = {
	name: "directory",

	// mixins: [DbMixin("document")],

	settings: {},

	dependencies: [],

	actions: {
		hello: {
			rest: {
				method: "GET",
				path: "/hello",
			},

			async handler() {
				const connection = getConnection();

				const shopkeeperRepository = connection.getRepository(Directory);

				const u = shopkeeperRepository.findOne(1);

				return u;
			},
		},
	},

	events: {},

	methods: {},

	created() { },

	async started() { },

	async stopped() { },
};
