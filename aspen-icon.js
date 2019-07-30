import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import '@aspen-elements/aspen-icons';
/**
 * `aspen-icon` Description
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspenIcon extends PolymerElement {
    static get template(){
        return html `
        <style>
        :host {
            display: block;
        }
        iron-icon{
            --iron-icon-height: 50px;
            --iron-icon-width: 50px;
            color: #909090;
            border-radius: 50%;
            border: 1px solid #909090;
        }
        .img {
            height: 50px;
            width: 50px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
    </style>
    <template is="dom-if" if="{{isImage}}">
        <div class="img" style$="[[iconStyle]]"></div>
    </template>

    <template is="dom-if" if="{{!isImage}}">
        <iron-icon icon="[[icon]]"></iron-icon>
    </template>
        `;
    }
    
    /**
     * String providing the tag name to register the element under.
     */
    static get is() {
				return 'aspen-icon';
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
				return {
            icon:{
                type: String,
                value: ''
            },
            isImage:{
                type: Boolean,
                computed: '_computeIsImage(icon)'
            },
            iconStyle:{
                type: String,
                computed: '_computeStyle(icon)'
            }
            
				};
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
				super();
    }

    /**
     * Use for one-time configuration of your component after local DOM is initialized. 
     */
    ready() {
				super.ready();

				afterNextRender(this, function() {
            
				});
    }

    _computeStyle(icon){
				return "background-image: url('" + icon + "')";
    }

    _computeIsImage(icon){
				return (icon !== undefined && (icon.indexOf("/") != -1 || icon.endsWith("jpg") || icon.endsWith("png") || icon.endsWith("gif")));
    }


}

window.customElements.define(AspenIcon.is, AspenIcon);
