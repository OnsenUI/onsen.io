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

How to add a Blog post
-----------------

If you are interested in publishing your own blog article in our blog, take a look at the following guide.

**Add a new author**

Create a file called **{{NAME}}.markdown** in **blog/authors/** observing the following layout:

```
---
id: your_id
name: "your_name"
gravatar: gravatar_hash (you can create one [here](https://en.gravatar.com/))
---

Write something about yourself.
```

Also, add yourself to the **authors** variable in **config.js** file in the root directory, observing the following layout:

```
your_id: {
      name: 'your name',
      email: 'your email'
    }
```

**Where to upload the blog post and the resources**

* Upload the blog post in **blog/posts** dir.

* Upload the images in **blog/content/images/YEAR_OF_POST'S_RELEASE/MONTH_OF_POST'S_RELEASE** dir. If it doesn't exist, create it.

**Blog post layout**

All the blog posts are written in Markdown. If you are not practical with it, you can take a look at [this guide](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
The post file name is related with its publication date. For example, if you want the article to be published on January 15, 2016, call the file **2016-01-15.markdown**

The post should observe the following layout:

```
---
author: your_id
date: publication_date (for example **2014-02-04**, it should be the same of the file's name)
id: blog_post_id (for example, if the title is "Introducing Onsen UI 1.0", the id should be something like **introducing-onsen-ui-1-0**)
title: "blog_post_title" (Uppercase the first character of important words, for example, **Introducing Onsen UI 1.0**)
---
A short preview of the blog post.

<!-- more -->  //This tag indicates the end of the preview

Post's main content.
```

**Publish the blog post**

In order to see your blog post published, you need to create a pull request at https://github.com/OnsenUI/onsen.io by referring the master branch. We will review it as soon as possible and publish it if the guidelines have been correctly followed and the quality of the post is satisfying. Otherwise, we may ask you to edit it and improve the overall content quality and layout.

Getting support
---------------

If anything about Onsen UI is unclear, please ask a question on [Stack Overflow](http://stackoverflow.com/questions/tagged/onsen-ui), and tag it "onsen-ui". An Onsen UI support engineer will answer it.

If you have any requests or comments regarding the development of Onsen UI, please feel free to direct them to the Twitter account ([@Onsen_UI](https://twitter.com/Onsen_UI)).
