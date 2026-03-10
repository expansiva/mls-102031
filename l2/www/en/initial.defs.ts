/// <mls fileReference="_102031_/l2/www/en/initial.defs.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const asis: mls.defs.AsIs = {
  "meta": {
    "fileReference": "_102031_/l2/www/en/initial.ts",
    "componentType": "page",
    "componentScope": "appFrontEnd"
  },
  "references": {
    "imports": [
      {
        "ref": "/_100554_/l2/collabPageElement.js",
        "dependencies": [
          {
            "name": "CollabPageElement",
            "type": "class",
            "purpose": "Base class for page component"
          }
        ]
      },
      {
        "ref": "lit",
        "dependencies": [
          {
            "name": "html",
            "type": "function",
            "purpose": "Template literal function for Lit templates"
          }
        ]
      },
      {
        "ref": "lit/decorators.js",
        "dependencies": [
          {
            "name": "customElement",
            "type": "function",
            "purpose": "Lit decorator to register custom element"
          }
        ]
      }
    ],
    "statesWO": [
      "ui.iframeL7.action"
    ]
  },
  "asIs": {
    "semantic": {
      "generalDescription": "Initial landing page with sign-in button that triggers iframe-based login via postMessage",
      "businessCapabilities": [
        "User authentication initiation",
        "Cross-frame communication for login flow"
      ],
      "technicalCapabilities": [
        "Custom element registration with Lit",
        "DOM event listener attachment",
        "postMessage API communication to parent window"
      ],
      "implementedFeatures": [
        "Sign-in button click handler",
        "iframeL7 login action dispatch",
        "Window parent message posting"
      ],
      "constraints": [
        "Hardcoded button selector '#btnSignIn'",
        "Wildcard postMessage target origin '*'",
        "No origin validation for postMessage"
      ]
    }
  }
}
    