# The DocPad Configuration File
# It is simply a CoffeeScript Object which is parsed by CSON
docpadConfig = {
	
	# =================================
	# Template Data
	# These are variables that will be accessible via our templates
	# To access one of these within our templates, refer to the FAQ: https://github.com/bevry/docpad/wiki/FAQ

	templateData:
		rootUrl: '/'
		# rootUrl: '/_static/onsen/'

		CONSTANTS:
			attributes:
				en: 'Attributes',
				ja: '属性'
			methods:
				en: 'Methods',
				ja: ''

		framework:
			displayName: 'Onsen UI'
			codeName: 'ons'
			directives: [
				  {
				    name: 'screen',
				    description: {
				      en: 'The root element. This is usually put inside <body> tag.',
				      ja: ''
				    },
				    examplePartial: 'screen_example',
				    demoURL: 'http://10.0.0.60:8000/app/screen_demo.html',
				    attributes: [
				      {
				        name: 'page',
				        description: {
				          en: 'The root page of this screen element',
				          ja: ''
				        }
				      }
				    ],
				    methods: [
				      {
				        name: 'presentPage',
				        parametters: '( pageUrl )',
				        description: {
				          en: 'Presents a page',
				          ja: ''
				        }
				      }, {
				        name: 'dismissPage',
				        parametters: '( )',
				        description: {
				          en: 'Dismisses the page that was presented',
				          ja: ''
				        }
				      }
				    ]
				  }, {
				    name: 'navigator',
				    description: {
				      en: 'Manages the page navigation backed by page stack.',
				      ja: ''
				    },
				    examplePartial: 'navigator_example',
				    demoURL: 'http://10.0.0.60:8000/app/navigator_demo.html',
				    attributes: [
				      {
				        name: 'page',
				        description: {
				          en: 'The root page of the navigator',
				          ja: ''
				        }
				      }, {
				        name: 'title',
				        description: {
				          en: 'The title in the toolbar',
				          ja: ''
				        }
				      }, {
				        name: 'left-button-icon',
				        description: {
				          en: "The icon name of the toolbar's left button icon",
				          ja: ''
				        }
				      }, {
				        name: 'right-button-icon',
				        description: {
				          en: "The icon name of the toolbar's right button icon",
				          ja: ''
				        }
				      }, {
				        name: 'on-left-button-click',
				        description: {
				          en: "Event handler when toolbar's left button is clicked",
				          ja: ''
				        }
				      }, {
				        name: 'on-right-button-click',
				        description: {
				          en: "Event handler when toolbar's right button is clicked",
				          ja: ''
				        }
				      }
				    ],
				    methods: [
				      {
				        name: 'pushPage',
				        parametters: '( pageUrl, title )',
				        description: {
				          en: "Pushes the specified pageUrl into the page stack and setting the title to the Toolbar's title",
				          ja: ""
				        }
				      }, {
				        name: 'popPage',
				        parametters: '( )',
				        description: {
				          en: "Pops current page from the page stack",
				          ja: ""
				        }
				      }, {
				        name: 'resetToPage',
				        parametters: '( pageUrl, title )',
				        description: {
				          en: "Clears page stack and add the specified pageUrl to the page stack. If title is specified, it will bet set into Toolbar's title",
				          ja: ""
				        }
				      }
				    ]
				  }, 
				  {
				    name: 'tabbar',
				    description: {
				      en: 'Used with tabbar-item to manage pages using tabs.',
				      ja: ''
				    },				    
				    methods: []				      
				  }, 
				  {
				    name: 'tabbar-item',
				    description: {
				      en: 'Represents a tab inside tabbar. Each tabbar-item represents a page',
				      ja: ''
				    },
				    examplePartial: 'tabbar_example',
				    demoURL: 'http://10.0.0.60:8000/app/tabbar_demo.html',
				    attributes: [
				    	{
					        name: 'page',
					        description: {
					          en: 'The page that this tabbar-item points to',
					          ja: ''
				        	}
				        },
				        {
					        name: 'active',
					        description: {
					          en: 'Set wether this tab should be active or not. Valid values are [true/false]',
					          ja: ''
				        	}
				        }			      
				    ],
				    methods: []				      
				  }, 
				  {
				    name: 'sliding-menu',
				    description: {
				      en: "Facebook/Path like sliding UI where one page is overlayed over another page. The above page can be slided aside to reveal the page behind.",
				      ja: ""
				    },
				    examplePartial: 'sliding_menu_example',
				    demoURL: 'http://10.0.0.60:8000/app/sliding_menu_demo.html',
				    attributes: [
				      {
				        name: 'behind-page',
				        description: {
				          en: 'The url of the page to be set to the behind layer.',
				          ja: ''
				        }
				      }, {
				        name: 'above-page',
				        description: {
				          en: 'The url of the page to be set to the above layer.',
				          ja: ''
				        }
				      }
				    ],
				    methods: [
				      {
				        name: 'setAbovePage',
				        parametters: '( pageUrl )',
				        description: {
				          en: "Show the page specified in pageUrl in the above layer",
				          ja: ""
				        }
				      }, {
				        name: 'setBehindPage',
				        parametters: '( pageUrl )',
				        description: {
				          en: "Show the page specified in pageUrl in the behind layer",
				          ja: ""
				        }
				      }, {
				        name: 'openMenu',
				        parametters: '( )',
				        description: {
				          en: "Slide the above layer to reveal the layer behind.",
				          ja: ""
				        }
				      }, {
				        name: 'closeMenu',
				        parametters: '( )',
				        description: {
				          en: "Slide the above layer to hide the layer behind.",
				          ja: ""
				        }
				      }, {
				        name: 'toggleMenu',
				        parametters: '( )',
				        description: {
				          en: "Slide the above layer to reveal the layer behind if it is currently hidden, otherwies, hide the layer behind",
				          ja: ""
				        }
				      }
				    ]
				  }, {
				    name: 'scroller',
				    description: {
				      en: "Makes the content inside this tag scrollable.",
				      ja: ""
				    },
				    examplePartial: 'scroller_example',
				    demoURL: 'http://10.0.0.60:8000/app/scroller_demo.html',
				    methods: []
				  }, {
				    name: 'list',
				    description: {
				      en: "The container for list-item. Similar to <ul> but styled for mobile.",
				      ja: ""
				    },
				    examplePartial: 'list_example',
				    demoURL: 'http://10.0.0.60:8000/app/list_demo.html',
				    methods: []
				  }, {
				    name: 'list-item',
				    description: {
				      en: "Works like <li> but styled for mobile. Must be put inside list tag.",
				      ja: ""
				    },
				    methods: []
				  }
				];		

		# Specify some site properties
		site:
			# The production url of our website
			url: "http://website.com"

			# Here are some old site urls that you would like to redirect from
			oldUrls: [
				'www.website.com',
				'website.herokuapp.com'
			]

			# The default title of our website
			title: "Maccha"

			# The website description (for SEO)
			description: """
				When your website appears in search results in say Google, the text here will be shown underneath your website's title.
				"""

			# The website keywords (for SEO) separated by commas
			keywords: """
				place, your, website, keywoards, here, keep, them, related, to, the, content, of, your, website
				"""


		# -----------------------------
		# Helper Functions

		# Get the prepared site/document title
		# Often we would like to specify particular formatting to our page's title
		# we can apply that formatting here
		getPreparedTitle: ->
			# if we have a document title, then we should use that and suffix the site's title onto it
			if @document.title
				"#{@document.title} | #{@site.title}"
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
				return value.indexOf('.min.css') > -1
			_.map styles, (value) ->
				return value.replace 'out', ''

		getGruntedScripts: ->
			_ = require 'underscore'
			scripts = []
			gruntConfig = require('./grunt-config.json')
			_.each gruntConfig, (value, key) ->
				scripts = scripts.concat _.flatten _.pluck value, 'dest'
			scripts = _.filter scripts, (value) ->
				return value.indexOf('.min.js') > -1
			_.map scripts, (value) ->
				return value.replace 'out', ''

	# =================================
	# Collections
	
	collections:        
		pages: ->
			@getCollection('documents').findAllLive({relativeOutDirPath:'references'},[title:1])

	# =================================
	# DocPad Events

	# Here we can define handlers for events that DocPad fires
	# You can find a full listing of events on the DocPad Wiki
	events:

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
		# 	# Prepare
		# 	docpad = @docpad
		# 	rootPath = docpad.config.rootPath
		# 	balUtil = require 'bal-util'
		# 	_ = require 'underscore'

		# 	# Make sure to register a grunt `default` task
		# 	command = ["#{rootPath}/node_modules/.bin/grunt", 'default']
			
		# 	# Execute
		# 	balUtil.spawn command, {cwd:rootPath,output:true}, ->
		# 		src = []
		# 		gruntConfig = require './grunt-config.json'
		# 		_.each gruntConfig, (value, key) ->
		# 			src = src.concat _.flatten _.pluck value, 'src'
		# 		_.each src, (value) ->
		# 			balUtil.spawn ['rm', value], {cwd:rootPath, output:false}, ->
		# 		balUtil.spawn ['find', '.', '-type', 'd', '-empty', '-exec', 'rmdir', '{}', '\;'], {cwd:rootPath+'/out', output:false}, ->
		# 		next()

		# 	# Chain
		# 	@
}

# Export our DocPad Configuration
module.exports = docpadConfig