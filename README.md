onsen.io
====

[![Circle CI](https://circleci.com/gh/OnsenUI/OnsenUI.svg?style=svg)](https://circleci.com/gh/OnsenUI/onsen.io)

[![devDependency Status](https://david-dm.org/OnsenUI/onsen.io/dev-status.svg)](https://david-dm.org/OnsenUI/onsen.io#info=devDependencies)

This repository contains the assets in Onsen UI Website, available on http://onsen.io.
Please Visit [Onsen UI](https://github.com/OnsenUI/OnsenUI) if you need access to the framework itself.

Installation
----

```bash
git clone https://github.com/OnsenUI/onsen.io.git
cd onsen.io
yarn global add gulp
yarn install

# Checkout submodules
git submodule init
git submodule update

# Checkout and build the latest revision of Onsen UI 1
pushd dist/v1/OnsenUI/
git checkout 1.3.19 # change this
yarn install
gulp build
popd

# Checkout and build the latest revision of Onsen UI 2
pushd dist/v2/OnsenUI/
git checkout 2.0.3 # change this
yarn install
gulp build
popd
```

How to Build
----

```bash
gulp generate --lang en
gulp generate --lang ja
```

Edit & Serve
------------

```bash
gulp serve --lang en
```

Deploying the Onsen UI Website to S3
------------------------------------

```bash
gulp deploy --lang en
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
gulp deploy --leng en --production
```

This time it will read a file called `aws_en_prod.json`.

How to contribute
-----------------

We will happily accept contributions to Onsen UI Website and the framework. It can be both fixes for bugs and incorrect descriptions, typos or even new features. The basic workflow when making contributions is the following:

1. Fork the repository
2. Commit your changes
3. Make a pull request to master branch.
4. After you've made a pull request we will review it. If everything is fine and we like the change the contribution will be pulled into the repository. In the case where there are some issues with the code or we disagree with how it's been implemented we will describe the issues in the comments so they can be corrected.

How to add a blog post
-----------------

If you are interested in publishing your own article in the [Monaca x Onsen UI blog](http://onsen.io/blog/), please take a look at the following guide.

### Adding a new author

Create a file called **{{your_id}}.markdown** in [**blog/authors/**](https://github.com/OnsenUI/onsen.io/tree/master/blog/authors) observing the following layout:

```
---
id: your_id
name: "Your Name"
gravatar: Gravatar hash (you can create one [here](https://en.gravatar.com/))
url: https://example.com/
---

Write something about yourself in Markdown.
```

Also, add yourself to the **authors** variable in **config.js** file in the root directory, observing the following layout:

```
your_id: {
  name: 'your name',
  email: 'your email'
}
```

### Where to add the blog post and the resources

* Add the blog post in [**blog/posts**](https://github.com/OnsenUI/onsen.io/tree/master/blog/posts) directory.

* Add the images to the  [**blog/content/images/YEAR/MONTH**](https://github.com/OnsenUI/onsen.io/tree/master/blog/content/images) directory. If it doesn't exist, create it.

### Blog post layout

All the blog posts are written in Markdown. If you are not practical with it, you can take a look at https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet.

The post file name is related with its publication date. For example, if you want the article to be published on January 15, 2016, call the file **2016-01-15.markdown**

The post should use the following layout:

```
---
author: your_id
date: publication_date (for example **2014-02-04**, it should be the same of the file's name)
id: blog-post-id (for example, if the title is "Introducing Onsen UI 2.0", the id should be something like **introducing-onsen-ui-2-0**)
title: "Blog Post Title"
tags: List of tags (comma separated list)
---

A short preview of the blog post.

<!-- more -->  //This tag indicates the end of the preview

Post's main content.
```

### Publish the blog post

In order to see your blog post published, you need to create a pull request at https://github.com/OnsenUI/onsen.io by referring the master branch. If you have never made a pull request before, take a look at [this guide](https://help.github.com/articles/using-pull-requests/).

We will review it as soon as possible and publish it if the guidelines have been correctly followed and the quality of the post is satisfying. Otherwise, we may ask you to edit it and improve the overall content quality and layout.

Getting support
---------------

If anything about Onsen UI is unclear, please ask a question on [Stack Overflow](http://stackoverflow.com/questions/tagged/onsen-ui), and tag it "onsen-ui". An Onsen UI support engineer will answer it.

If you have any requests or comments regarding the development of Onsen UI, please feel free to direct them to the Twitter account ([@Onsen_UI](https://twitter.com/Onsen_UI)).
