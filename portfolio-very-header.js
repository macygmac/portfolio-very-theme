/**
 * Copyright 2025 macygmac
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-very-header`
 * 
 * @demo index.html
 * @element portfolio-very-header
 */
export class PortfolioVeryHeader extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-header";
  }

  constructor() {
    super();
    this.title = "";
   
   
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
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }


      .your-banner a {
  border: 2px dotted var(--ddd-theme-default-beaverBlue);
  padding: var(--ddd-spacing-3);
  display: inline-block;
  margin: var(--ddd-spacing-3);
  background-color: var(--ddd-theme-default-beaverBlue);
  color: var(--ddd-theme-default-linkLight);
  text-decoration: none;
}

.your-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #283d9a83;
  position: fixed;
  top: var(--ddd-spacing-20);
  left: var(--ddd-spacing-0);
  height: 100px;
  right: var(--ddd-spacing-0);
  z-index: 1;
}

    `];
  }

  // Lit render the HTML
  render() {
    return html`

  <div class="your-banner">
      <a href="#1">About</a>
      <a href="#2">Resume</a>
      <a href="#3">Projects</a>
      <a href="#4">Involvement and Skills</a>
      <a href="#5">Contact</a>
  </div>
    
  
  <slot></slot>
`;
  }

  /**
   * haxProperties integration via file reference
   */

}

globalThis.customElements.define(PortfolioVeryHeader.tag, PortfolioVeryHeader);