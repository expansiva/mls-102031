/// <mls fileReference="_102031_/l2/www/en/landingpage2.defs.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const asis: mls.defs.AsIs = {
  "meta": {
    "fileReference": "_102031_/l2/www/en/landingpage2.ts",
    "componentType": "page",
    "componentScope": "appFrontEnd",
    "languages": [
      "en"
    ]
  },
  "references": {
    "imports": [
      {
        "ref": "/_100554_/l2/collabPageElement.js",
        "dependencies": [
          {
            "name": "CollabPageElement",
            "type": "class"
          }
        ]
      },
      {
        "ref": "lit/decorators.js",
        "dependencies": [
          {
            "name": "customElement",
            "type": "function"
          }
        ]
      },
      {
        "ref": "/_100554_/l2/collabState.js",
        "dependencies": [
          {
            "name": "globalState",
            "type": "?"
          },
          {
            "name": "initState",
            "type": "?"
          },
          {
            "name": "setState",
            "type": "?"
          }
        ]
      }
    ]
  },
  "codeInsights": {
    "securityWarnings": [
      "postMessage uses wildcard target origin '*'"
    ],
    "unusedImports": [
      "globalState",
      "initState",
      "setState"
    ]
  },
  "asIs": {
    "semantic": {
      "generalDescription": "Landing page component with login button event handling",
      "businessCapabilities": [
        "Send login action message to parent window"
      ],
      "technicalCapabilities": [
        "DOM event handling",
        "Cross-origin postMessage communication"
      ],
      "implementedFeatures": [
        "Login button click event binding",
        "Parent window message posting"
      ]
    }
  }
}
    