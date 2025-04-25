/**
 * Copyright 2025 macygmac
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-very-screen`
 * 
 * @demo index.html
 * @element portfolio-very-screen
 */
export class PortfolioVeryScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-screen";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-very-screen.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }
 
  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        height: 100vh;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-default-beaverBlue);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        flex-direction: column;
        height: 100vh;
        max-width: 100vw;
        display: flex;
       
      }
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
        margin: 0;
      }
      :host(.About){
        background-color:  var(--ddd-theme-default-navy65);
        color: var(--ddd-theme-default-slateMaxLight);
      }
      :host(.Resume){
        background-color:  var(--ddd-theme-default-navy60);
        color: var(--ddd-theme-default-slateMaxLight);
      }
      :host(.Projects){
        background-color:  var(--ddd-theme-default-navy40);
        color: var(--ddd-theme-default-slateMaxLight);
      
      }
      :host(.Skills){
        background-color:  var(--ddd-theme-default-navy70);
        color: var(--ddd-theme-default-slateMaxLight);
      } 
      :host(.Contact){
        background-color:  var(--ddd-theme-default-navy80);
        color: var(--ddd-theme-default-slateMaxLight);
      }





    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h3> ${this.title}</h3>
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryScreen.tag, PortfolioVeryScreen);