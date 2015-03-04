onsen.io
====

[![Circle CI](https://circleci.com/gh/OnsenUI/OnsenUI.svg?style=svg)](https://circleci.com/gh/OnsenUI/onsen.io)

[![devDependency Status](https://david-dm.org/OnsenUI/onsen.io/dev-status.svg)](https://david-dm.org/OnsenUI/onsen.io#info=devDependencies)

This repository contains the assets in Onsen UI Website, available on http://onsen.io.
Please Visit [Onsen UI](https://github.com/OnsenUI/OnsenUI) if you need access to the framework itself.

Installation
----

```
$ git clone https://github.com/OnsenUI/onsen.io.git
$ cd onsen.io
$ npm install gulp -g
$ npm install
$ git submodule init
$ git submodule update
```

How to Build
----

```
$ gulp generate --lang en
$ gulp generate --lang ja
```

Edit & Serve
------------

```
$ gulp serve --lang en
```

Deploying the Onsen UI Website to S3
------------------------------------

```bash
$ gulp deploy --lang en
```

To deploy to S3 a `aws_en.json` file must be created with the following structure:

```json
{
  "key": "...",
  "secret": "...",
  "bucket": "...",
  "region": "..."
}
```

To deploy to production server use the `--production` flag:

```bash
$ gulp deploy --leng en --production
```

This time it will read a file called `aws_en_prod.json`.

How to contribute
-----------------

We will happily accept contributions to Onsen UI Website and the framework. It can be both fixes for bugs and incorrect descriptions, typos or even new features. The basic workflow when making contributions is the following:

1. Fork the repository
2. Commit your changes
3. Make a pull request to master branch.
4. After you've made a pull request we will review it. If everything is fine and we like the change the contribution will be pulled into the repository. In the case where there are some issues with the code or we disagree with how it's been implemented we will describe the issues in the comments so they can be corrected.

Getting support
---------------

If anything about Onsen UI is unclear, please ask a question on [Stack Overflow](http://stackoverflow.com/questions/tagged/onsen-ui), and tag it "onsen-ui". An Onsen UI support engineer will answer it.

If you have any requests or comments regarding the development of Onsen UI, please feel free to direct them to the Twitter account ([@Onsen_UI](https://twitter.com/Onsen_UI)).
