gulp-transifex
==============

Gulp plugin for uploading resources and downloading translations in Transifex

Feel free to fork and improve

Usage
------

```javascript
var options = {
    host: <String optional. Defaults to 'www.transifex.com'>,
    base_path: <String optional. Defaults to '/api/2/project/'>,
    user: <String required. Transifex username>,
    password: <String required. Transifex Password>,
    project: <String required. Transifex projects name>,
    local_path: <String optional. Local root path for the translations>,
    custom_language_codes:{
        <ISO 639-1 language code>: <custom language code>
    },
    use_custom_language_codes: <Boolean>,
    language_codes_as_objects: <Boolean>
}
```

Using Custom Language Codes
---------------------------

Transifex uses ISO 639-1 to code languages. If you want to use your custom language code (another standard or just map `es` to Klingon) use the `custom_language_codes` option with `use_custom_language_codes` set to `true`.

###`language_codes_as_objects`
By default the `languages()` method returns an array of strings with the language codes. If you specify `custom_language_codes` _AND_ `use_custom_language_codes` is set to true, it will return an array of strings with your own custom codes.
Additionally, if `language_codes_as_objects` is set to `true` it will return an array of object in the form:

```javascript
[
    {
        <ISO 639-1 language code>: <custom language code>
    },
    ...
]
```


Uploading Resource files:
-------------------------
gulp-transifex will go file by file uploading them to the project as a resource
Transifex will check if the file has changed and will store the changes

```javascript
var transifex = require('transifex').createClient(options)
var gulp = require('gulp')

gulp.task('upstream', function(){
    return gulp.src('path/to/source/language/*')
        .pipe(transifex.pushResource())
})
```

Downloading translation files:
------------------------------
Similarly, for every resource file, gulp-transifex will check on the server for the languages and will start going to every file in each language and copy it in the local translation folder: `options.local_path`

```javascript
var transifex = require('transifex').createClient(options)
var gulp = require('gulp')

gulp.task('downstream', function(){
    return gulp.src('path/to/source/language/*')
        .pipe(transifex.pullResource())
})
```

Chaining Tasks with gulp-transifex
-----------------------------------

Since this plugins makes remote requests you have to call it asynchronously if you
need the translation files in next tasks, just return the stream:

```javascript
var transifex = require('transifex').createClient(options)
var gulp = require('gulp')

gulp.task('downstream', function(){
    return gulp.src('path/to/source/language/*')
        .pipe(transifex.pullResource())
});

gulp.task('requireTransifexFiles', ['downstream'], function () {
    ...
});
```

Other methods exposed
---------------------

There are other methods exposed that doesn't return streams but accepts callbacks:

###resources()

Gets an array of resources in the project

```javascript
var transifex = require('transifex').createClient(options)

transifex.resources(function(data){
    ...
})
```

###languages()

Gets an array of language codes in the project

```javascript
var transifex = require('transifex').createClient(options)

transifex.languages(function (data){
    ...
})
```

TODO
----

* ~~Add local modifications check. If there's no local modifications, don't bother check the file in transifex~~
* Add updates check in translation files. If there ain't new translation why download the file.
* Better division of concerns (Modularize further, separate transform function from stream declarations)
