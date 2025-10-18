# 🎯 Playwright Senior QA Test - Arine Job Search Automation

A comprehensive end-to-end test automation project demonstrating senior QA engineering skills using Playwright and TypeScript.

## 🚀 Project Overview

This project automates the complete job search and application flow on the Arine website, specifically targeting the "Senior QA Engineer" position. It demonstrates advanced Playwright testing patterns, proper test architecture, and comprehensive automation coverage.

## 🎬 Test Flow

The automation performs the following complete user journey:

1. **🏠 Homepage Navigation**
   - Navigate to https://www.arine.io/
   - Handle cookie consent modal
   - Verify page title

2. **📋 Career Page Access**
   - Click "About" dropdown menu
   - Navigate to "Careers" page
   - Verify "Explore Positions" button

3. **🔍 Job Search Process**
   - Click "Explore Positions" (opens new tab)
   - Switch to Greenhouse.io jobs portal
   - Search for "QA" positions
   - Locate and click "Senior QA Engineer" role

4. **📝 Application Form Validation**
   - Click "Apply" button
   - Verify application form loads
   - Validate presence of required fields:
     - First Name
     - Last Name
     - Email
   - Ensure fields are scrolled into view for visibility

## 🛠️ Technical Stack

- **Framework**: Playwright v1.44.1
- **Language**: TypeScript v5.4.5
- **Test Runner**: Playwright Test
- **Browser**: Chromium (Desktop Chrome simulation)
- **Viewport**: 1920x1080 (Full HD)

## 📁 Project Structure

```
├── tests/e2e/
│   └── senior-qa-job-search.spec.ts    # Main test file
├── playwright.config.ts                 # Playwright configuration
├── package.json                        # Dependencies and scripts
├── .gitignore                          # Git ignore rules
└── README.md                           # This file
```

## 🎥 Features

- **📹 Video Recording**: All test executions are recorded
- **📊 HTML Reports**: Comprehensive test reports with timestamps
- **🕐 EST Timestamps**: All artifacts use Eastern Time for organization
- **🍪 Cookie Handling**: Automatic cookie consent management
- **🎯 Smart Locators**: Robust element selection strategies
- **📱 Cross-tab Navigation**: Proper handling of new browser tabs
- **👁️ Visual Validation**: Elements scrolled into view for better video clarity

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ciuvic2014/playwright-senior-qa-test.git
cd playwright-senior-qa-test
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 🎮 Running Tests

### Available Scripts

```bash
# Run tests in headless mode
npm test

# Run tests with browser visible (headed mode)
npm run test:headed

# Open Playwright UI for interactive testing
npm run test:ui

# Run tests in debug mode
npm run test:debug

# Show latest HTML report
npm run report

# Generate new tests with Playwright codegen
npm run codegen
```

### Test Execution Examples

```bash
# Standard test run
npm test

# Watch the test execution in browser
npm run test:headed

# Interactive test development
npm run test:ui
```

## 📊 Test Reports

After test execution, reports are generated with EST timestamps:

- **HTML Report**: `test-results/html-report-EST-{timestamp}/`
- **Videos**: `test-results/test-artifacts-EST-{timestamp}/`
- **Screenshots**: Captured on failures only

Open the HTML report:
```bash
npm run report
```

## 🎯 Test Configuration

Key configuration highlights in `playwright.config.ts`:

- **Timeout**: 30 seconds per test
- **Retries**: 2 retries in CI, 0 locally
- **Base URL**: https://www.arine.io
- **Video**: Always recorded
- **Screenshots**: On failure only
- **Trace**: On first retry

## 🔧 Advanced Features

### Cookie Management
Automatically detects and accepts cookie consent modals to ensure clean test execution.

### Multi-tab Handling
Properly manages browser tabs when "Explore Positions" opens Greenhouse.io in a new tab, ensuring video recording follows the user journey.

### Smart Waiting
Uses Playwright's intelligent waiting strategies:
- `waitForLoadState('networkidle')`
- `scrollIntoViewIfNeeded()`
- Dynamic timeouts for form interactions

### Element Highlighting
Form fields are clicked and scrolled into view to provide clear visual feedback in recorded videos.

## 🎨 Best Practices Demonstrated

- ✅ **Robust Locators**: Using semantic selectors and role-based targeting
- ✅ **Error Handling**: Graceful cookie modal detection
- ✅ **Clean Architecture**: Single-responsibility test structure
- ✅ **Visual Testing**: Ensuring elements are visible for video recording
- ✅ **Proper Assertions**: Comprehensive validation at each step
- ✅ **Resource Management**: Proper tab closure and context switching

## 🤝 Contributing

This project demonstrates senior-level QA automation skills including:

- Advanced Playwright features
- TypeScript best practices
- Test architecture design
- Cross-browser compatibility
- CI/CD readiness
- Comprehensive documentation

## 📄 License

ISC License - Feel free to use this project as a reference for your own automation initiatives.

## 👨‍💻 Author

**Senior QA Engineer Demonstration Project**

*Showcasing advanced test automation capabilities with Playwright and TypeScript*

---

**🎯 Ready to run? Execute `npm run test:headed` to see the automation in action!**
