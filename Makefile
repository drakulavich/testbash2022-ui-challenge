install:
	npm ci

install-playwright:
	npx playwright install --with-deps

test:
	npx playwright test

test-chromium:
	npx playwright test --project=chromium
