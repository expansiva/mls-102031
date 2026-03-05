/// <mls fileReference="_102031_/l2/www/en/landingpage2.ts" enhancement="_102020_enhancementAura" />

import { CollabPageElement } from '/_100554_/l2/collabPageElement.js';
import { customElement } from 'lit/decorators.js';
import { globalState, initState, setState } from '/_100554_/l2/collabState.js';

@customElement('www--en--landingpage2-102031')
export class Landingpage2102031 extends CollabPageElement {
initPage() {
        this.setEvents();
    }

    setEvents() {
        this.prepareClickLoginButton();    
    }

    prepareClickLoginButton() {
        const btnLogin = document.querySelector('#btnLogin');
        if (btnLogin) {
            btnLogin.addEventListener('click', this._handleSignIn);
        }
    }

    _handleSignIn() {
        const params = {
            type: 'iframeL7',
            action: 'login'
        };
        window.parent.postMessage(params, '*');
    }
}

