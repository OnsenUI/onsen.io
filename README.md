# onsen.io

[![Circle CI](https://circleci.com/gh/OnsenUI/OnsenUI.svg?style=svg)](https://circleci.com/gh/OnsenUI/onsen.io)

This repository contains the assets in Onsen UI Website, available on http://onsen.io.
Please Visit [Onsen UI](https://github.com/OnsenUI/OnsenUI) if you need access to the framework itself.

## Installation

```bash
git clone --recurse-submodules git@github.com:OnsenUI/onsen.io.git
cd onsen.io
yarn global add gulp
yarn install

# Update necessary submodules
git submodule update --remote dist/v2/OnsenUI dist/playground

# Build Onsen UI
(cd dist/v2/OnsenUI/css-components && yarn install)
(cd dist/v2/OnsenUI && yarn install && yarn build)
(cd dist/v2/OnsenUI/bindings/react && yarn install && yarn gen-docs)
```

## How to Build

```bash
gulp generate --lang en
gulp generate --lang ja
```

## Edit & Serve

```bash
gulp serve --lang en
```

## Translate

```bash
1. $ gulp i18n-extract # This will generate POT files into src/i18n/gettext
2. And use PO editor to generate po files
3. $ gulp i18n-translate # This will translate and overwrite files into src/documents_ja/
```

## Releasing to Production
This repository is set up on [CircleCI](https://circleci.com/gh/OnsenUI/onsen.io) to automatically build with every commit. Commits to `master` are automatically deployed to the staging website at `s.onsen.io`. To deploy to production, merge `master` into the `production` branch. Typically this merge is done through a pull request on GitHub, even if you immediately merge it yourself. Once merged, CircleCI will automatically deploy everything in the `production` branch.

## How to contribute

We will happily accept contributions to the onsen.io website. However, it is much more likely that it is another repository that you want to make your pull request to. This repository contains the Onsen UI marketing materials, and brings in most of the rest of the content from other repositories.

### Which repository to choose?
Here is where you should make changes:

- Onsen UI Framework: https://github.com/OnsenUI/OnsenUI
- Documentation
  - API Definitions: https://github.com/OnsenUI/OnsenUI (see its [documentation guide](https://github.com/OnsenUI/OnsenUI/blob/master/CONTRIBUTING.md#documentation) for how this works)
  - Tutorials: https://github.com/OnsenUI/playground (taken from the examples in the Playground)
  - Guides: This repository
  - Design: This repository
- Theme Roller: https://github.com/OnsenUI/theme-roller
- Playground: https://github.com/OnsenUI/playground
- News Dropdown: https://github.com/OnsenUI/recent-activities
- Homepage Kitchensink Example: https://github.com/OnsenUI/vue-onsenui-kitchensink
- Onsen.io Landing Pages: This repository
- Community Forum: Runs on NodeBB and is not part of a repository on GitHub

### Contributing to this repository
If the repository you need to make changes to is this one, then the workflow is simple, and the same as you will see in other open source projects.

1. Fork the repository
2. Commit your changes. Please squash commits where possible.
3. Make a pull request to `master`.
4. After you've made a pull request we will review it. If everything is fine and we like the change the contribution will be pulled into the repository. In the case where there are some issues with the code or we disagree with how it's been implemented we will describe the issues in the comments so they can be corrected.
