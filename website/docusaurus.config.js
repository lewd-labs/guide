// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Lewd Labs",
	tagline: "🍷",
	url: "https://github.com/lewd-labs/", // domain
	baseUrl: "/guide/", // repo name for github pages
	onBrokenMarkdownLinks: "warn",
	favicon: "img/bone.svg",
	organizationName: "lewd-labs", // Usually your GitHub org/user name.
	projectName: "xyz", // Usually your repo name.

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/lewd-labs/xyz/edit/main/website/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: "https://github.com/lewd-labs/xyz/edit/main/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			hideableSidebar: true,
			metadata: [
				{
					name: "keywords",
					content: "discord, bot, Economy, npm, coding, lewd-labs",
				},
			],
			navbar: {
				title: "Lewd Labs",
				logo: {
					alt: "My Site Logo",
					src: "img/bone.svg",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Documentation",
					},
					{ to: "/blog", label: "Blog", position: "left" },
					{
						href: "https://github.com/lewd-labs",
						label: "GitHub",
						position: "right",
					},
					{
						type: "docsVersionDropdown",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Tutorials",
								to: "/docs/intro",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Discord",
								href: "https://discord.com/invite/N79DZsm3m2",
							},
							{
								label: "YouTube",
								href: "https://www.youtube.com/channel/UCVOQobByo_2WISQf2037eXQ",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
							{
								label: "GitHub",
								href: "https://github.com/facebook/docusaurus",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Lewd Labs, Inc.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
