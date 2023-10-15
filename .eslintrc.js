'use strict';

module.exports = {
	"root": true,
	"parserOptions": {
		"ecmaVersion": 3,
		"sourceType": "script"
	},
	"env": {
		"node": true,
		"browser": true
	},
	"globals": {
		// Libraries
		"_": false, "$": false, "Backbone": false, "d3": false, "html": false, "html4": false, "jQuery": false, "SockJS": false, "ColorThief": false,

		// Environment-specific
		"fs": false, "gui": false, "ga": false, "macgap": false, "nwWindow": false, "webkitNotifications": false, "nw": false,

		// Battle stuff
		"Battle": true, "Pokemon": true, "BattleSound": true, "BattleTooltips": true, "BattleLog": true,
		"BattleAbilities": false, "BattleAliases": false, "BattleBackdrops": false, "BattleBackdropsFive": false, "BattleBackdropsFour": false, "BattleBackdropsThree": false, "BattleEffects": false,
		"BattleFormats": false, "BattleFormatsData": false, "BattleLearnsets": false, "BattleItems": false, "BattleMoveAnims": false, "BattleMovedex": false, "BattleNatures": false,
		"BattleOtherAnims": false,  "BattlePokedex": false,"BattlePokemonSprites": false, "BattlePokemonSpritesBW": false, "BattleSearchCountIndex": false, "BattleSearchIndex": false, "BattleArticleTitles": false,
		"BattleSearchIndexOffset": false, "BattleSearchIndexType": false, "BattleStatIDs": false, "BattleStatNames": false, "BattleStatusAnims": false, "BattleStatuses": false, "BattleTeambuilderTable": false,
		"ModifiableValue": false, "BattleStatGuesser": false, "BattleText": true, "BattleTextAFD": false, "BattleTextNotAFD": false,
		"BattleTextParser": false,

		// Generic global variables
		"Config": false, "BattleSearch": false, "Storage": false, "Dex": false, "DexSearch": false,
		"ModConfig": false, "ModSprites": false,
		"app": false, "toID": false, "toRoomid": false, "toUserid": false, "toName": false, "PSUtils": false, "MD5": false,
		"ChatHistory": false, "Topbar": false, "UserList": false,

		// Rooms
		"Room": false, "BattleRoom": false, "ChatRoom": false, "ConsoleRoom": false, "HTMLRoom": false, "LadderRoom": false, "MainMenuRoom": false, "RoomsRoom": false, "BattlesRoom": false, "TeambuilderRoom": false,

		// Tons of popups
		"Popup": false, "ForfeitPopup": false, "BracketPopup": false, "LoginPasswordPopup": false, "UserPopup": false, "UserOptionsPopup": false, "UserOptions": false, "TeamPopup": false,
		"AvatarsPopup": false, "CreditsPopup": false, "FormatPopup": false, "FormattingPopup": false, "LoginPopup": false,
		"MovePopup": false, "SoundsPopup": false, "OptionsPopup": false, "PromptPopup": false, "ProxyPopup": false, "ReconnectPopup": false,
		"RegisterPopup": false, "ReplayUploadedPopup": false, "RulesPopup": false, "TabListPopup": false, "TournamentBox": false,
		"CustomBackgroundPopup": false,

		// Test client
		"POKEMON_SHOWDOWN_TESTCLIENT_KEY": false
	},
	"extends": "eslint:recommended",
	"rules": {
		"no-cond-assign": ["error", "except-parens"],
		"no-console": "off",
		"no-constant-condition": "off",
		"no-control-regex": "off",
		"no-empty": ["error", {"allowEmptyCatch": true}],
		"no-inner-declarations": ["error", "functions"],
		"no-redeclare": "off",
		"valid-jsdoc": "off",

		// TODO: actually fix useless escapes
		"no-useless-escape": "off",

		"array-callback-return": "error",
		"complexity": "off",
		"consistent-return": "off",
		"default-case": "off",
		"dot-location": ["error", "property"],
		"dot-notation": "off",
		"eqeqeq": "off",
		"guard-for-in": "off",
		"no-caller": "error",
		"no-case-declarations": "off",
		"no-div-regex": "error",
		"no-else-return": "off",
		"no-labels": ["error", {"allowLoop": true, "allowSwitch": true}],
		"no-eval": "off",
		"no-implied-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "warn",
		"no-extra-label": "error",
		"no-extra-parens": "off",
		"no-implicit-coercion": "off",
		"no-invalid-this": "off",
		"no-iterator": "error",
		"no-lone-blocks": "off",
		"no-loop-func": "off",
		"no-magic-numbers": "off",
		"no-multi-spaces": "warn",
		"no-multi-str": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "off",
		"no-proto": "error",
		"no-prototype-builtins": "error",
		"no-return-assign": ["error", "except-parens"],
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": "error",
		"no-useless-call": "error",
		"no-useless-concat": "off",
		"no-void": "off",
		"no-warning-comments": "off",
		"no-with": "error",
		"radix": ["error", "always"],
		"vars-on-top": "off",
		"wrap-iife": ["error", "inside"],
		"yoda": "off",

		"init-declarations": "off",
		"no-catch-shadow": "off",
		"no-label-var": "error",
		"no-restricted-globals": ["error", "Proxy", "Reflect", "Symbol", "WeakSet"],
		"no-shadow-restricted-names": "error",
		"no-shadow": "off",
		"no-undef-init": "off",
		"no-undef": ["error", {"typeof": true}],
		"no-undefined": "off",
		"no-unused-vars": "off",

		"no-mixed-requires": "error",
		"no-new-require": "error",
		"no-path-concat": "off",
		"no-process-env": "off",
		"no-process-exit": "off",
		"no-restricted-modules": ["error", "moment", "request", "sugar"],
		"no-sync": "off",

		"array-bracket-spacing": ["error", "never"],
		"block-spacing": "off",
		"brace-style": ["error", "1tbs", {"allowSingleLine": true}],
		"camelcase": "off",
		"comma-spacing": ["error", {"before": false, "after": true}],
		"comma-style": ["error", "last"],
		"computed-property-spacing": ["error", "never"],
		"consistent-this": "off",
		"func-names": "off",
		"func-style": "off",
		"id-length": "off",
		"id-match": "off",
		"indent": ["error", "tab"],
		"key-spacing": "off",
		"lines-around-comment": "off",
		"max-nested-callbacks": "off",
		"max-statements-per-line": "off",
		"new-parens": "error",
		"newline-after-var": "off",
		"newline-before-return": "off",
		"no-array-constructor": "error",
		"no-continue": "off",
		"no-inline-comments": "off",
		"no-lonely-if": "off",
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-multiple-empty-lines": ["error", {"max": 2, "maxEOF": 1}],
		"no-negated-condition": "off",
		"no-nested-ternary": "off",
		"no-new-object": "error",
		"no-spaced-func": "error",
		"no-ternary": "off",
		"no-trailing-spaces": ["error", {"ignoreComments": false}],
		"no-underscore-dangle": "off",
		"no-unneeded-ternary": "error",
		"object-curly-spacing": ["error", "never"],
		"one-var": "off",
		"operator-assignment": "off",
		"operator-linebreak": ["error", "after"],
		"quote-props": "off",
		"quotes": "off",
		"require-jsdoc": "off",
		"semi-spacing": ["error", {"before": false, "after": true}],
		"semi": ["error", "always"],
		"sort-vars": "off",
		"keyword-spacing": ["error", {"before": true, "after": true}],
		"space-before-blocks": ["error", "always"],
		"space-before-function-paren": ["error", {"anonymous": "always", "named": "never"}],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": ["error", {"words": true, "nonwords": false}],
		"wrap-regex": "off",

		"arrow-parens": ["error", "as-needed"],
		"arrow-spacing": ["error", {"before": true, "after": true}],
		"no-confusing-arrow": "off",
		"no-useless-computed-key": "error",
		"no-useless-rename": "error",
		"prefer-arrow-callback": "off",
		"rest-spread-spacing": ["error", "never"],
		"template-curly-spacing": ["error", "never"],
		"no-restricted-syntax": ["error", "TaggedTemplateExpression", "ObjectPattern", "ArrayPattern"],

		// Rules enabled in the server code, but disabled here
		/*
		"block-scoped-var": "error",
		"callback-return": [2, ["callback", "cb", "done"]],
		"comma-dangle": ["error", "always-multiline"],
		"curly": ["error", "multi-line", "consistent"],
		"eqeqeq": "error",
		"no-constant-condition": "error",
		"no-floating-decimal": "error",
		"no-new": "error",
		"no-redeclare": "error",
		"no-unused-vars": ["warn", {"args": "none"}],
		"no-use-before-define": ["error", {"functions": false, "classes": false}],
		"no-var": "error",
		"new-cap": ["error", {"newIsCap": true, "capIsNew: false}],
		"padded-blocks": ["error", "never"],
		"strict": ["error", "global"]
		*/
	}
};
