const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint
router.get("/", (req, res) => {
	// find all tags and include its associated Product data
	Tag.findAll({
		attributes: ["id", "tag_name"],
		include: [
			{
				model: Product,
				through: ProductTag,
				as: "products",
				foreignKey: "product_id",
				attributes: ["product_name"],
			},
		],
	})
		.then((dbTagData) => res.json(dbTagData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/:id", (req, res) => {
	// find a single tag by its `id` and include its associated Product data
	Tag.findOne({
		attributes: ["id", "tag_name"],
		where: {
			id: req.params.id,
		},
		include: [
			{
				model: Product,
				through: ProductTag,
				as: "products",
				foreignKey: "product_id",
				attributes: ["product_name"],
			},
		],
	})
		.then((dbTagData) => {
			if (!dbTagData) {
				res.status(404).json({ message: "No tags found with this id" });
				return;
			}
			res.json(dbTagData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post("/", (req, res) => {
	// create a new tag
	Tag.create(req.body)
		.then((tag) => {
			if (req.body.productIds.length) {
				const tagProductIdArr = req.body.productIds.map((product_id) => {
					return {
						tag_id: tag.id,
						product_id,
					};
				});
				return ProductTag.bulkCreate(tagProductIdArr);
			}
			res.status(200).json(product);
		})
		.then((productTagIds) => res.status(200).json(productTagIds))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

router.put("/:id", (req, res) => {
	// update a tag's name by its `id` value
	Tag.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((tag) => {
			// find all associated products from ProductTag
			return ProductTag.findAll({ where: { tag_id: req.params.id } });
		})
		.then((dbTagData) => {
			if (!dbTagData[0]) {
				res.status(404).json({ message: "No category found with this id" });
				return;
			}
			res.json(dbTagData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.delete("/:id", (req, res) => {
	// delete on tag by its `id` value
	Tag.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbTagData) => {
			if (!dbTagData) {
				res.status(404).json({ message: "No tags found with this id" });
				return;
			}
			res.json(dbTagData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
