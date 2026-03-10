/// <mls fileReference="_102031_/l2/www/en/policy.defs.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const asis: mls.defs.AsIs = {
  "meta": {
    "fileReference": "_102031_/l2/www/en/policy.ts",
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
        "ref": "lit",
        "dependencies": [
          {
            "name": "html",
            "type": "function"
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
      }
    ]
  },
  "asIs": {
    "semantic": {
      "generalDescription": "English policy page component extending CollabPageElement",
      "businessCapabilities": [],
      "technicalCapabilities": [
        "Lit-based web component",
        "Custom element registration via decorator"
      ],
      "implementedFeatures": [
        "Empty page initialization via initPage method"
      ],
      "constraints": [
        "Extends CollabPageElement base class",
        "Uses @customElement decorator with specific tag name"
      ]
    }
  }
}
    