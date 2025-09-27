# 📦 Publishing Guide - Awesome README Templates

This guide will help you publish the Awesome README Templates package to NPM.

## 🚀 Pre-Publication Checklist

### ✅ Required Steps

1. **Update package.json version**
   ```bash
   npm version patch  # for bug fixes
   npm version minor  # for new features
   npm version major  # for breaking changes
   ```

2. **Update CHANGELOG.md**
   - Move items from `[Unreleased]` to new version
   - Add release date
   - Update version number

3. **Test the package locally**
   ```bash
   npm test
   ```

4. **Login to NPM**
   ```bash
   npm login
   ```

## 📋 Publishing Commands

### First Time Publishing
```bash
# Test the package
npm test

# Login to NPM (if not already logged in)
npm login

# Publish the package
npm publish
```

### Updating the Package
```bash
# Update version
npm version patch

# Test again
npm test

# Publish update
npm publish
```

## 🔧 Configuration Files

### package.json
- ✅ Name: `awesome-readme-templates`
- ✅ Version: `1.0.0`
- ✅ Description: Professional README templates
- ✅ Keywords: All relevant tags included
- ✅ Author: GabrielBaiano information
- ✅ License: MIT
- ✅ Repository: GitHub URL
- ✅ Bin: CLI command configured
- ✅ Files: Only necessary files included

### .npmignore
- ✅ Development files excluded
- ✅ Test files excluded
- ✅ Documentation files included
- ✅ Templates included

## 📁 File Structure for NPM

```
awesome-readme/
├── bin/
│   ├── awesome-readme.js      # CLI script
│   └── test.js               # Test script
├── templates/
│   ├── README-template.md     # English template
│   └── README-pt-template.md  # Portuguese template
├── README.md                  # Main documentation
├── LICENSE                    # MIT License
├── CHANGELOG.md              # Version history
├── CONTRIBUTING.md           # Contribution guide
├── LICENSE-GUIDE.md          # License selection guide
├── package.json              # NPM configuration
└── .npmignore               # Files to exclude
```

## 🎯 Post-Publication Steps

### 1. Verify Installation
```bash
# Install globally to test
npm install -g awesome-readme-templates

# Test the CLI
awesome-readme --help
awesome-readme --version
```

### 2. Update Documentation
- Update README.md with NPM installation instructions
- Add NPM badge to repository
- Update package description if needed

### 3. Announce Release
- Create GitHub release
- Update repository description
- Share on social media
- Update any external documentation

## 🔍 Testing Commands

### Local Testing
```bash
# Test package structure
npm test

# Test CLI functionality
node bin/awesome-readme.js --help
node bin/awesome-readme.js --version
node bin/awesome-readme.js --list
```

### Installation Testing
```bash
# Test global installation
npm install -g .

# Test CLI after installation
awesome-readme --help
```

## 📊 NPM Package Stats

After publishing, you can track:
- Downloads per day/week/month
- Package popularity
- User feedback and issues
- Version adoption

## 🛠️ Troubleshooting

### Common Issues

1. **Package name already exists**
   - Choose a different name
   - Use scoped package: `@gabrielbaiano/awesome-readme-templates`

2. **Permission denied**
   - Make sure you're logged in: `npm login`
   - Check if you own the package name

3. **Files not included**
   - Check `.npmignore` file
   - Verify `files` array in `package.json`

4. **CLI not working**
   - Check file permissions: `chmod +x bin/awesome-readme.js`
   - Verify shebang line: `#!/usr/bin/env node`

## 📈 Version Management

### Semantic Versioning
- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
- **MINOR** (1.0.0 → 1.1.0): New features, backward compatible
- **PATCH** (1.0.0 → 1.0.1): Bug fixes, backward compatible

### Release Process
```bash
# For bug fixes
npm version patch
npm publish

# For new features
npm version minor
npm publish

# For breaking changes
npm version major
npm publish
```

## 🎉 Success Metrics

After successful publication, you should have:

- ✅ Package available on NPM
- ✅ CLI command working globally
- ✅ Templates installing correctly
- ✅ Documentation accessible
- ✅ GitHub repository updated
- ✅ Community engagement

## 📞 Support

If you encounter issues:

1. Check NPM documentation
2. Review package.json configuration
3. Test locally before publishing
4. Ask for help in GitHub issues

---

**Ready to publish?** Run `npm publish` and share your awesome templates with the world! 🚀
