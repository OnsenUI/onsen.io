YAML = require 'yamljs'
fs = require 'fs'

# The DocPad Configuration File
# It is simply a CoffeeScript Object which is parsed by CSON
docpadConfig = {

  # Environments
  # Language specific configuration
  # $ docpad run --env en
  # $ docpad generate --env en
  environments:
        en:
            documentsPaths: ['documents_en']
            outPath: 'out_en'
            templateData:
              lang: "en"
        ja:
            documentsPaths: ['documents_ja']
            outPath: 'out_ja'
            templateData:
              lang: "ja"

  # =================================
  # Plugins configulation
  pluginsPaths: [
    "docpad_plugins",
    "node_modules"
  ]

  plugins:

    tableofcontents:
      requireMetadata: true
      requiredMetadataField: 'autotoc'
      headerSelectors: 'h3,h4'
  
  # =================================
  # Template Data
  # These are variables that will be accessible via our templates
  # To access one of these within our templates, refer to the FAQ: https://github.com/bevry/docpad/wiki/FAQ
  
  templateData:
    rootUrl: '/'

    framework:
      displayName: 'Onsen UI'
      codeName: 'ons'
      directives: [
        'ons-page',
        'ons-navigator',
        'ons-toolbar',
        'ons-bottom-toolbar',
        'ons-toolbar-button',
        'ons-tabbar',
        'ons-tab',
        'ons-sliding-menu',
        'ons-split-view',
        'ons-scroller',
        'ons-list',
        'ons-list-header',
        'ons-list-item',
        'ons-modal',
        'ons-button',
        'ons-back-button',
        'ons-switch',
        'ons-icon',
        'ons-row',
        'ons-col',
        'ons-template',
        'ons-gesture-detector',
        'ons-if-orientation',
        'ons-if-platform'
      ]

    # Specify some site properties
    site: {}
      
    # -----------------------------
    # Helper Functions

    # Get the prepared site/document title
    # Often we would like to specify particular formatting to our page's title
    # we can apply that formatting here
    getPreparedTitle: ->
      # if we have a document title, then we should use that and suffix the site's title onto it
      if @document.title
        "#{@document.title} | Onsen UI"
      # if our document does not have it's own title, then we should just use the site's title
      else
        @site.title

    # Get the prepared site/document description
    getPreparedDescription: ->
      # if we have a document description, then we should use that, otherwise use the site's description
      @document.description or @site.description

    # Get the prepared site/document keywords
    getPreparedKeywords: ->
      # Merge the document keywords with the site keywords
      @site.keywords.concat(@document.keywords or []).join(', ')

    getGruntedStyles: ->
      _ = require 'underscore'
      styles = []
      gruntConfig = require('./grunt-config.json')
      _.each gruntConfig, (value, key) ->
        styles = styles.concat _.flatten _.pluck value, 'dest'
      styles = _.filter styles, (value) ->
        return value && value.indexOf('.min.css') > -1
      _.map styles, (value) ->
        return value.replace 'out', ''

    getGruntedScripts: ->
      _ = require 'underscore'
      scripts = []
      gruntConfig = require('./grunt-config.json')
      _.each gruntConfig, (value, key) ->
        scripts = scripts.concat _.flatten _.pluck value, 'dest'
      scripts = _.filter scripts, (value) ->
        return value && value.indexOf('.min.js') > -1
      _.map scripts, (value) ->
        return value.replace 'out', ''

    fileExist: (path) ->
      return fs.existsSync(path)

    alternateLangFileExist: (doc) ->
      lang = docpad.config.env
      alternateLang = 'en';      
      alternateLang = 'ja' if lang == 'en'
      alternateFilePath = doc.fullPath.replace( '_' + lang, '_' + alternateLang);      
      exist = fs.existsSync(alternateFilePath)
      return exist

    getAlternateLangFilePath: (doc) ->
      lang = docpad.config.env
      alternateLang = 'en';      
      alternateLang = 'ja' if lang == 'en'
      alternateFilePath = doc.fullPath.replace( '_' + lang, '_' + alternateLang);
      return alternateFilePath

    getAlternateSiteURL: ->
      lang = docpad.config.env
      url = 'http://onsenui.io'
      url = 'http://ja.onsenui.io' if lang == 'en'
      return url

    getAlternateLang: ->
      lang = docpad.config.env
      alternateLang = 'en';      
      alternateLang = 'ja' if lang == 'en'
      return alternateLang

  watchOptions:
    catchupDelay: 0

  regenerateDelay: 0

  # =================================
  # Collections
  
  collections:        
    guidePages: ->
      @getCollection('html').findAllLive({relativeOutDirPath:'guide'},[title:1])

  # =================================
  # DocPad Events

  # Here we can define handlers for events that DocPad fires
  # You can find a full listing of events on the DocPad Wiki
  events:

    generateBefore: (opts) ->
      # Get current language from DocPad environment
      lang = @docpad.config.env
      # Load translated strings for current language
      @docpad.getConfig().templateData.site = (YAML.load "src/documents_#{lang}/config.yml")

      # Configure Moment.js
      # moment.lang(lang)
      # Configure Richtypo.js
      # richtypo.lang(lang)

    # Server Extend
    # Used to add our own custom routes to the server before the docpad routes are added
    serverExtend: (opts) ->
      # Extract the server from the options
      {server} = opts
      docpad = @docpad

      # As we are now running in an event,
      # ensure we are using the latest copy of the docpad configuraiton
      # and fetch our urls from it
      latestConfig = docpad.getConfig()
      oldUrls = latestConfig.templateData.site.oldUrls or []
      newUrl = latestConfig.templateData.site.url

      # Redirect any requests accessing one of our sites oldUrls to the new site url
      server.use (req,res,next) ->
        if req.headers.host in oldUrls
          res.redirect(newUrl+req.url, 301)
        else
          next()

    # Write After
    # Used to minify our assets with grunt
    # writeAfter: (opts,next) ->
    #   # Prepare
    #   docpad = @docpad
    #   rootPath = docpad.config.rootPath
    #   balUtil = require 'bal-util'
    #   _ = require 'underscore'

    #   # Make sure to register a grunt `default` task
    #   command = ["#{rootPath}/node_modules/.bin/grunt", 'default']
      
    #   # Execute
    #   balUtil.spawn command, {cwd:rootPath,output:true}, ->
    #     src = []
    #     gruntConfig = require './grunt-config.json'
    #     _.each gruntConfig, (value, key) ->
    #       src = src.concat _.flatten _.pluck value, 'src'
    #     _.each src, (value) ->
    #       balUtil.spawn ['rm', value], {cwd:rootPath, output:false}, ->
    #     balUtil.spawn ['find', '.', '-type', 'd', '-empty', '-exec', 'rmdir', '{}', '\;'], {cwd:rootPath+'/out', output:false}, ->
    #     next()

    #   # Chain
    #   @
}

# Export our DocPad Configuration
module.exports = docpadConfig
