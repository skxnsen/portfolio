# Playwright Test Reports

This repository contains Playwright test results from CI (GitHub Actions)

## 📁 Reports Directory Structure

- `ci-reports/`: Contains CI-generated test reports (committed to repo)
- `test-results/`: Contains local test results (gitignored)

## 🔍 Viewing Reports

### CI Reports
```bash
npx playwright show-report ci-reports/path
```

### Local Reports
```bash
npx playwright show-report test-results/path
```

## 🔬 Viewing Trace Files

### CI Trace
```bash
npx playwright show-trace ci-reports/path/trace.zip
```

### Local Trace
```bash
npx playwright show-trace test-results/path/trace.zip
