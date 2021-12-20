var ghpages = require("gh-pages");

ghpages.publish(
	"build",
	{
		branch: "web",
		repo: "https://github.com/lewd-labs/xyz.git",
		// Only add, and never remove existing files.
		add: false,
		message: "Website has been deployed!",
	},
).then(() => console.log("Content pushed to github..."))