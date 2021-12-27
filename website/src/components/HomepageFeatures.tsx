import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
	title: string;
	image: string;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Easy to Use",
		image: "/guide/img/undraw_docusaurus_mountain.svg",
		description: (
			<>
				Our packages are designed from the ground up to be easily installed and
				used for any of your project integrating mongodb, typescript, and more!
			</>
		),
	},
	{
		title: "Focus on Development",
		image: "/guide/img/undraw_docusaurus_tree.svg",
		description: (
			<>
				<a href="https://github.com/lewd-labs">Lewd Labs</a> lets you focus on
				your project, and we&apos;ll do the chores. Dont worry about building
				from the ground up.
			</>
		),
	},
	{
		title: "Powered by lascivious Energy",
		image: "/guide/img/undraw_docusaurus_react.svg",
		description: (
			<>
				The human mind should never be underestimated, our desires can lead the
				way to amazing creations and breakthroughs in history.
			</>
		),
	},
];

function Feature({ title, image, description }: FeatureItem): JSX.Element {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<img className={styles.featureSvg} alt={title} src={image} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
