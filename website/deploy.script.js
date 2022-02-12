const GitHub = require("gh-pages");

GitHub.publish(
	"./build",
	{
		branch: "web",
		repo: "https://github.com/lewd-labs/xyz.git",
		// Only add, and never remove existing files.
		add: false,
		message: "Website has been deployed!",
	},
	function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("Website has been deployed!");
		}
	}
)