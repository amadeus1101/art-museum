module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
			'identity-obj-proxy',
	},
};
