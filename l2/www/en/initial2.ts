/// <mls fileReference="_102031_/l2/www/en/initial2.ts" enhancement="_102020_enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CollabPageElement } from '/_100554_/l2/collabPageElement.js';


@customElement('www--en--initial2-102031')
export class Initial2En102031 extends CollabPageElement {
    initPage() {
        this.setEvents();
    }

    setEvents() {
        const btnNew = document.querySelector('#btnNewProject');
        const btnExplore = document.querySelector('#btnExploreProjects');
        if (btnNew) {
            btnNew.addEventListener('click', () => {
                const params = {
                    type: 'iframeL7',
                    action: 'create-project'
                }
                window.parent.postMessage(params, '*');
            });
        }
        if (btnExplore) {
            btnExplore.addEventListener('click', () => {
                const params = {
                    type: 'iframeL7',
                    action: 'explore-projects'
                }
                window.parent.postMessage(params, '*');
            });
        }
    }
}