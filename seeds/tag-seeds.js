const { Tag } = require("../models");

const tagData = [
	{
		tag_name: "modern",
	},
	{
		tag_name: "mid century",
	},
	{
		tag_name: "bohemian",
	},
	{
		tag_name: "contemporary",
	},
	{
		tag_name: "scandinavian",
	},
	{
		tag_name: "industrial",
	},
	{
		tag_name: "minimalist",
	},
	{
		tag_name: "maximalist",
	},
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
