/// <mls fileReference="_102031_/l2/www/en/initial2.defs.ts" enhancement="_blank" />

// Do not change – automatically generated code. 

export const asis: mls.defs.AsIs = {
  "meta": {
    "fileReference": "_102031_/l2/www/en/initial2.ts",
    "componentType": "page",
    "componentScope": "appFrontEnd",
    "languages": [
      "en"
    ]
  },
  "references": {
    "imports": [
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
      },
      {
        "ref": "/_100554_/l2/collabPageElement.js",
        "dependencies": [
          {
            "name": "CollabPageElement",
            "type": "class"
          }
        ]
      }
    ]
  },
  "codeInsights": {
    "securityWarnings": [
      "window.parent.postMessage(params, '*') uses wildcard targetOrigin '*'"
    ],
    "unusedImports": [
      "html from 'lit'"
    ]
  },
  "asIs": {
    "semantic": {
      "generalDescription": "Initial page component for English locale handling project creation and exploration via iframe messaging",
      "businessCapabilities": [
        "Send create-project action message to parent window",
        "Send explore-projects action message to parent window"
      ],
      "technicalCapabilities": [
        "Extend CollabPageElement base class",
        "Query DOM elements by ID using document.querySelector",
        "Add click event listeners to DOM elements",
        "Communicate with parent window via postMessage API"
      ],
      "implementedFeatures": [
        "Event listener setup for btnNewProject element triggering create-project action",
        "Event listener setup for btnExploreProjects element triggering explore-projects action",
        "Page initialization via initPage method calling setEvents"
      ],
      "constraints": [
        "Requires DOM element with ID 'btnNewProject'",
        "Requires DOM element with ID 'btnExploreProjects'",
        "postMessage targetOrigin set to wildcard '*'",
        "Depends on parent window accepting messages with type 'iframeL7'"
      ]
    }
  }
}
    