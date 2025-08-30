export default {
	'**/*.{ts,tsx,css,scss}': (stagedFiles) => [
		`eslint .`,
		`prettier --write ${stagedFiles.join(' ')}`,
	],
};
