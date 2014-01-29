# The DocPad Configuration File
# It is simply a CoffeeScript Object which is parsed by CSON
docpadConfig = {
	
	# =================================
	# Template Data
	# These are variables that will be accessible via our templates
	# To access one of these within our templates, refer to the FAQ: https://github.com/bevry/docpad/wiki/FAQ
	
	templateData:
		rootUrl: '/'

		CONSTANTS:
			attributes:
				en: 'Attributes',
				ja: '属性'
			methods:
				en: 'Methods',
				ja: 'メソッド'

		framework:
			displayName: 'Onsen UI'
			codeName: 'ons'
			directives: [{
				name: 'screen',
				description: {
					en: 'The root element. This is usually put inside <body> tag.',
					ja: '画面全体を切り替えるスクリーンコンポーネントです。<body>タグ内に記述して上下のアニメーションでページ表示を切り替えます。'
				},
				examplePartial: 'screen_example',
				demoURL: 'OnsenUI/demo/screen_demo.html',
				attributes: [{
					name: 'page',
					description: {
						en: 'The root page of this screen element',
						ja: '表示するページのURL'
					}
				}],
				methods: [{
					name: 'presentPage',
					parametters: '( pageUrl )',
					description: {
						en: 'Presents a page',
						ja: '指定したURLのページを画面全体にスクリーン表示します。'
					}
				}, {
					name: 'dismissPage',
					parametters: '( )',
					description: {
						en: 'Dismisses the page that was presented',
						ja: 'スクリーン表示したページを閉じて前ページに戻ります。'
					}
				}]
			}, {
				name: 'page',
				description: {
					en: 'Should be used as root component of each page. The content inside page component is not scrollable. If you need scroll behavior, you can put <ons-scroller> inside this component.',
					ja: 'ページの切り替えを管理するタブ機能を提供します。'
				},
				examplePartial: 'page_example',
				demoURL: 'OnsenUI/demo/page_demo.html',
				methods: []
			}, {
				name: 'navigator',
				description: {
					en: 'Manages the page navigation backed by page stack.',
					ja: 'ページのナビゲーションと画面上部のツールバーを提供します。遷移元ページのスタック管理を行うことができます。'
				},
				examplePartial: 'navigator_example',
				demoURL: 'OnsenUI/demo/navigator_demo.html',
				attributes: [{
					name: 'page',
					description: {
						en: 'The root page of the navigator',
						ja: 'ナビゲーションのrootとなるページURLを指定します。'
					}
				}, {
					name: 'title',
					description: {
						en: 'The title in the toolbar',
						ja: 'ナビゲーションツールバーに表示されるタイトルを指定します。'
					}
				}, {
					name: 'left-button-icon',
					description: {
						en: "The icon name of the toolbar's left button icon",
						ja: 'ナビゲーターツールバー内の左側に配置されるボタンのアイコンを指定します。'
					}
				}, {
					name: 'right-button-icon',
					description: {
						en: "The icon name of the toolbar's right button icon",
						ja: 'ナビゲーターツールバー内の右側に配置されるボタンのアイコンを指定します。'
					}
				}, {
					name: 'on-left-button-click',
					description: {
						en: "Event handler when toolbar's left button is clicked",
						ja: 'ナビゲーターツールバー内の左側に配置されるボタンのクリックイベントを指定します。'
					}
				}, {
					name: 'on-right-button-click',
					description: {
						en: "Event handler when toolbar's right button is clicked",
						ja: 'ナビゲーターツールバー内の右側に配置されるボタンのクリックイベントを指定します。'
					}
				}],
				methods: [{
					name: 'pushPage',
					parametters: '( pageUrl, options )',
					description: {
						en: "Pushes the specified pageUrl into the page stack and if options object is specified, apply the options. the options object include all the attributes of this navigator",
						ja: "遷移したいページのURLと遷移先のナビゲーターツールバーのタイトルを指定し、次のページに遷移します。遷移元のページはページスタックに保存されます。"
					}
				}, {
					name: 'popPage',
					parametters: '( )',
					description: {
						en: "Pops current page from the page stack",
						ja: "ページスタックに保存された一つ前のページに戻ります。"
					}
				}, {
					name: 'resetToPage',
					parametters: '( pageUrl, options )',
					description: {
						en: "Clears page stack and add the specified pageUrl to the page stack. If options object is specified, apply the options. the options object include all the attributes of this navigator",
						ja: "すべての遷移元ページスタックをクリアします。ページのURLとナビゲーターツールバーのタイトルを指定してページスタックに追加することが可能です。"
					}
				}]
			}, {
				name: 'navigator-toolbar',
				description: {
					en: 'Instead of specifying options object in ons.navigator.pushPage(), you can specify it inside the target page using this component.',
					ja: 'ページの切り替えを管理するタブ機能を提供します。'
				},
				methods: [],
				demoURL: 'OnsenUI/demo/navigator_with_navigator_toolbar.html',
				examplePartial: 'navigator_with_navigator_toolbar_example',
				attributes: [{
					name: 'title',
					description: {
						en: 'The title of the toolbar'
					}
				}, {
					name: 'left-button-icon',
					description: {
						en: "The icon name of the toolbar's left button icon"
					}
				}, {
					name: 'right-button-icon',
					description: {
						en: "The icon name of the toolbar's right button icon"
					}
				}, {
					name: 'on-left-button-click',
					description: {
						en: "Event handler when toolbar's left button is clicked"
					}
				}, {
					name: 'on-right-button-click',
					description: {
						en: "Event handler when toolbar's right button is clicked"
					}
				}]
			}, {
				name: 'bottom-toolbar',
				description: {
					en: 'Use this component to have toolbar position at the bottom of the page'
				},
				demoURL: 'OnsenUI/demo/bottom_toolbar_demo.html',
				examplePartial: 'bottom_toolbar_example',
				methods: []
			}, {
				name: 'tabbar',
				description: {
					en: 'Used with tabbar-item to manage pages using tabs.'
				},
				methods: []
			}, {
				name: 'tabbar-item',
				description: {
					en: 'Represents a tab inside tabbar. Each tabbar-item represents a page',
					ja: '<ons-tabbar-item>タグでタブバー内に配置されるタブ項目を定義します。'
				},
				examplePartial: 'tabbar_example',
				demoURL: 'OnsenUI/demo/tabbar_demo.html',
				attributes: [{
					name: 'page',
					description: {
						en: 'The page that this tabbar-item points to'
					}
				}, {
					name: 'icon',
					description: {
						en: 'The icon of the tab. To use font-awesome icon, just set the icon name without "fa-" prefix. eg. to use "fa-home" icon, set it to "home". If you need to use your own icon, create a css class with background-image or any css properties and specify the name of your css class here'
					}
				}, {
					name: 'label',
					description: {
						en: 'The label of the tab'
					}
				}, {
					name: 'active',
					description: {
						en: 'Set wether this tab should be active or not. Valid values are [true/false]'
					}
				}],
				methods: []
			}, {
				name: 'sliding-menu',
				description: {
					en: "Facebook/Path like sliding UI where one page is overlayed over another page. The above page can be slided aside to reveal the page behind."					
				},
				examplePartial: 'sliding_menu_example',
				demoURL: 'OnsenUI/demo/sliding_menu_demo.html',
				attributes: [{
					name: 'behind-page',
					description: {
						en: 'The url of the page to be set to the behind layer.'
					}
				}, {
					name: 'above-page',
					description: {
						en: 'The url of the page to be set to the above layer.'
					}
				}],
				methods: [{
					name: 'setAbovePage',
					parametters: '( pageUrl )',
					description: {
						en: "Show the page specified in pageUrl in the above layer"
					}
				}, {
					name: 'setBehindPage',
					parametters: '( pageUrl )',
					description: {
						en: "Show the page specified in pageUrl in the behind layer"
					}
				}, {
					name: 'openMenu',
					parametters: '( )',
					description: {
						en: "Slide the above layer to reveal the layer behind."
					}
				}, {
					name: 'closeMenu',
					parametters: '( )',
					description: {
						en: "Slide the above layer to hide the layer behind."
					}
				}, {
					name: 'toggleMenu',
					parametters: '( )',
					description: {
						en: "Slide the above layer to reveal the layer behind if it is currently hidden, otherwies, hide the layer behind"
					}
				}]
			}, {
				name: 'split-view',
				description: {
					en: "devids the screen into left and right section. This component can also act as sliding menu which can be controlled by 'collapse' attribute"
				},
				examplePartial: 'split_view_example',
				demoURL: 'OnsenUI/demo/split_view_demo_width.html',
				attributes: [{
					name: 'secondary-page',
					description: {
						en: 'The url of the page on the left'
					}
				}, {
					name: 'main-page',
					description: {
						en: 'The url of the page on the right'
					}
				},{
					name: 'main-page-width',
					description: {
						en: "Main page's width percentage. The width of secondary page take the remaining percentage"
					}
				},{
					name: 'collapse',
					description: {
						en: 'Specify the collapse behavior. Valid values are [portrait/landscape/width ##px]. "portrait" means the view will collapse when device is in portrait orientation. "landscape" means the view will collapse when device is in landscape orientation. "width ##px" means the view will collapse when the window width is smaller than the specified ##px'
					}
				}],
				methods: [{
					name: 'setMainPage',
					parametters: '( pageUrl )',
					description: {
						en: "Show the page specified in pageUrl in the right section"
					}
				}, {
					name: 'setSecondaryPage',
					parametters: '( pageUrl )',
					description: {
						en: "Show the page specified in pageUrl in the left section"
					}
				}, {
					name: 'open',
					parametters: '( )',
					description: {
						en: "Reveal the secondary page if the view is in collapse mode"
					}
				}, {
					name: 'close',
					parametters: '( )',
					description: {
						en: "hide the secondary page if the view is in collapse mode"
					}
				}, {
					name: 'toggle',
					parametters: '( )',
					description: {
						en: "Reveal the secondary page if it is currently hidden, otherwies, reveal it"
					}
				}]
			}, {
				name: 'scroller',
				description: {
					en: "Makes the content inside this tag scrollable."
				},
				examplePartial: 'scroller_example',
				demoURL: 'OnsenUI/demo/scroller_demo.html',
				methods: []
			}, {
				name: 'list',
				description: {
					en: "The container for list-item. Similar to <ul> but styled for mobile."
				},
				examplePartial: 'list_example',
				demoURL: 'OnsenUI/demo/list_demo.html',
				methods: []
			}, {
				name: 'list-item',
				description: {
					en: "Works like <li> but styled for mobile. Must be put inside list tag."
				},
				methods: []
			}, {
				name: 'button',
				description: {
					en: "Button component. It includes a spinner useful for showing work in progress"
				},
				examplePartial: 'button_example',
				demoURL: 'OnsenUI/demo/button_demo.html',
				attributes: [{
					name: 'type',
					description: {
						en: "The type of the button. Can be any of [ 'quiet', 'large', 'large--quiet', 'cta', 'large--cta' ]"
					}
				}, {
					name: 'should-spin',
					description: {
						en: 'Wether the button shoud switch to show spinner'						
					}
				}, {
					name: 'animation',
					description: {
						en: "The animation when the button transitions to and from the spinner. Can be any of [ 'expand-left', 'expand-right', 'expand-up', 'expand-down', 'slide-left', 'slide-right', 'slide-up', 'slide-down', 'zoom-out', 'zoom-in' ]. The default is 'slide-left'"
					}
				}, {
					name: 'disabled',
					description: {
						en: 'Wether the button shoud be disabled.'
					}
				}],
				methods: []
			}, {
				name: 'radio-button',
				description: {
					en: "Radio button component"
				},
				examplePartial: 'radio_button_example',
				demoURL: 'OnsenUI/demo/radio_button_demo.html',
				attributes: [{
					name: 'ng-model',
					description: {
						en: "The model to bind to"
					}
				}, {
					name: 'value',
					description: {
						en: 'The value to be set to the model when this button is selected'						
					}
				}, {
					name: 'left-label',
					description: {
						en: "The label to be shown on the left of the button"
					}
				}, {
					name: 'right-label',
					description: {
						en: 'The label to be shown on the right of the button'
					}
				}, {
					name: 'name',
					description: {
						en: 'The group name of this radio button'
					}
				}],
				methods: []
			}, {
				name: 'checkbox',
				description: {
					en: "Checkbox component"
				},
				examplePartial: 'checkbox_example',
				demoURL: 'OnsenUI/demo/checkbox_demo.html',
				attributes: [{
					name: 'ng-model',
					description: {
						en: "The model to bind to"
					}
				}, {
					name: 'ng-true-value',
					description: {
						en: 'The value to be set to the model when this checkbox is checked'
					}
				}, {
					name: 'ng-false-value',
					description: {
						en: "The value to be set to the model when this checkbox is unchecked"
					}
				}],
				methods: []
			}, {
				name: 'select',
				description: {
					en: "Wrapper around select tag but styled for mobile."
				},
				examplePartial: 'select_example',
				demoURL: 'OnsenUI/demo/select_demo.html',
				attributes: [],
				methods: []
			}, {
				name: 'text-input',
				description: {
					en: "Component for doing text input."
				},
				examplePartial: 'text_input_example',
				demoURL: 'OnsenUI/demo/text_input_demo.html',
				attributes: [{
					name: 'placeholder',
					description: {
						en: "The placeholder inside the input area."
					}
				}, {
					name: 'disabled',
					description: {
						en: 'Wether the input should be disabled.'
					}
				}],
				methods: []
			}, {
				name: 'search-input',
				description: {
					en: "Component for inputting search text."
				},
				examplePartial: 'search_input_example',
				demoURL: 'OnsenUI/demo/search_input_demo.html',
				attributes: [{
					name: 'placeholder',
					description: {
						en: "The placeholder inside the search input."
					}
				}, {
					name: 'disabled',
					description: {
						en: 'Wether the input should be disabled.',
						ja: '検索フィールドの入力可否を[true/false]で指定します。'
					}
				}],
				methods: []
			}, {
				name: 'text-area',
				description: {
					en: "Component for inputting text."
				},
				examplePartial: 'text_area_example',
				demoURL: 'OnsenUI/demo/text_area_demo.html',
				attributes: [{
					name: 'rows',
					description: {
						en: "The number of rows."
					}
				}, {
					name: 'cols',
					description: {
						en: "The number of columns."
					}
				}, {
					name: 'placeholder',
					description: {
						en: "The placeholder inside the text area."
					}
				}, {
					name: 'disabled',
					description: {
						en: 'Wether the input should be disabled.'
					}
				}],
				methods: []
			}, {
				name: 'if-orientation',
				description: {
					en: "Conditionally display content depending on screen orientation. Valid values are [portrait/landscape]. Different from other components, this component is used as attribute in any element. See example on how to use"
				},
				examplePartial: 'if_orientation_example',
				demoURL: 'OnsenUI/demo/if_orientation_demo.html',
				attributes: [],
				methods: []
			}, {
				name: 'if-platform',
				description: {
					en: "Conditionally display content depending on the platform/browser. Valid values are [ios/android/blackberry/chrome/safari/firefox/opera]. Different from other components, this component is used as attribute in any element. See example on how to use"
				},
				examplePartial: 'if_platform_example',
				demoURL: 'OnsenUI/demo/if_platform_demo.html',
				attributes: [],
				methods: []
			}, {
				name: 'icon',
				description: {
					en: "Wrapper for font-awesome icon [ http://fontawesome.io/icons/ ]."
				},
				examplePartial: 'icon_example',
				demoURL: 'OnsenUI/demo/icon_demo.html',
				attributes: [{
					name: 'rows',
					description: {
						en: "The number of rows."
					}
				}, {
					name: 'cols',
					description: {
						en: "The number of columns."
					}
				}, {
					name: 'placeholder',
					description: {
						en: "The placeholder inside the text area."
					}
				}, {
					name: 'disabled',
					description: {
						en: 'Wether the input should be disabled.'
					}
				}],
				methods: []
			}];	

		# Specify some site properties
		site:
			# The production url of our website
			url: "http://docs.monaca.mobi/onsen/en"

			# Here are some old site urls that you would like to redirect from
			oldUrls: [
				'www.website.com',
				'website.herokuapp.com'
			]

			# The default title of our website
			title: "Onsen UI"

			# The website description (for SEO)
			description: """
				Onsen UI, HTML5 UI framework for modern mobile application.
				"""

			# The website keywords (for SEO) separated by commas
			keywords: """
				onsen, ui, html5, monaca, framework, mobile, app, hybrid, simple, powerful, fast.
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