import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class MagicComponent extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
				color: var(--<%= elementName %>-color, #000);
			}
    </style>

    <h1>This is my new component: <%= elementName %> [[text]]</h1>
    `;
	}
	
	static get properties() {
		return {
			text: {
				type: String,
				value: 'uhuuul'
			}
		}
	}
};

customElements.define('<%= elementName %>', MagicComponent);
