import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "..\\..\\src\\hooks.ts";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<link rel=\"stylesheet\" href=\"./app.css\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"/https://github.com/succubus-developments/xyz","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-b3954447.js",
			css: [assets + "/_app/assets/start-61d1577b.css"],
			js: [assets + "/_app/start-b3954447.js",assets + "/_app/chunks/vendor-209772fe.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":".nojekyll","size":0,"type":null},{"file":"favicon.png","size":1571,"type":"image/png"},{"file":"robots.txt","size":67,"type":"text/plain"},{"file":"svelte-welcome.png","size":360807,"type":"image/png"},{"file":"svelte-welcome.webp","size":115470,"type":"image/webp"}],
	layout: "src/routes/__layout.svelte",
	error: "src/routes/__error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/commands\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/commands/index.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/admin\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/admin.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/dev\/launch\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/dev/launch.svelte"],
						b: ["src/routes/__error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),"src/routes/__error.svelte": () => import("..\\..\\src\\routes\\__error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/commands/index.svelte": () => import("..\\..\\src\\routes\\commands\\index.svelte"),"src/routes/about.svelte": () => import("..\\..\\src\\routes\\about.svelte"),"src/routes/admin.svelte": () => import("..\\..\\src\\routes\\admin.svelte"),"src/routes/dev/launch.svelte": () => import("..\\..\\src\\routes\\dev\\launch.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-73ef6d9e.js","css":["assets/pages/__layout.svelte-603eb3f7.css"],"js":["pages/__layout.svelte-73ef6d9e.js","chunks/vendor-209772fe.js"],"styles":[]},"src/routes/__error.svelte":{"entry":"pages/__error.svelte-cfc91790.js","css":["assets/pages/__error.svelte-49c5f779.css"],"js":["pages/__error.svelte-cfc91790.js","chunks/vendor-209772fe.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-7bc6849f.js","css":["assets/pages/index.svelte-e306d646.css"],"js":["pages/index.svelte-7bc6849f.js","chunks/vendor-209772fe.js"],"styles":[]},"src/routes/commands/index.svelte":{"entry":"pages/commands/index.svelte-0b07f329.js","css":["assets/pages/about.svelte-bf4528fa.css"],"js":["pages/commands/index.svelte-0b07f329.js","chunks/vendor-209772fe.js"],"styles":[]},"src/routes/about.svelte":{"entry":"pages/about.svelte-92747f34.js","css":["assets/pages/about.svelte-bf4528fa.css"],"js":["pages/about.svelte-92747f34.js","chunks/vendor-209772fe.js"],"styles":[]},"src/routes/admin.svelte":{"entry":"pages/admin.svelte-81cd7032.js","css":[],"js":["pages/admin.svelte-81cd7032.js","chunks/vendor-209772fe.js"],"styles":[]},"src/routes/dev/launch.svelte":{"entry":"pages/dev/launch.svelte-c2c6f345.js","css":["assets/pages/dev/launch.svelte-49e92209.css"],"js":["pages/dev/launch.svelte-c2c6f345.js","chunks/vendor-209772fe.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}