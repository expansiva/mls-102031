/// <mls fileReference="_102031_/l2/www/en/initial.ts" enhancement="_102020_enhancementAura"/>

import { html } from 'lit'; 
import { customElement } from 'lit/decorators.js';
import { CollabPageElement } from '/_100554_/l2/collabPageElement.js';

@customElement('www--en--initial-102031')
export class Initial102031 extends CollabPageElement {
    initPage() { 
        this.setEvents();
    }

    setEvents() {
        const btn = document.querySelector('#btnSignIn');
        if (btn) {
            btn.addEventListener('click', () => {
                const params = {
                    type: 'iframeL7',
                    action: 'login'
                }
                window.parent.postMessage(params, '*');
            });
        }        
    }
}