/**
 * Copyright 2025 macygmac
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/scroll-button/scroll-button.js";
import "./portfolio-very-screen.js";
import "./portfolio-very-header.js";

/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
    this.title = "";
    this.pages = [];
  }
 
  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      pages: { type: Array }
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
        width: 100%;
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        background-color: var(--ddd-theme-default-slateGray);
        
      }
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-m));
      }
      scroll-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
      }


      @media (max-width: 768px) {
  .about-flex, .contact-content, .involvement-content {
    flex-direction: column;
    align-items: center;
  }

  .profile-pic, .resume-pic {
    width: 80%;
    max-width: 300px;
  }

  .involvement-content img, .contact-content img {
    width: 80%;
    max-width: 200px;
  }

  .about-flex p, .involvement-content p, .contact-content p {
    font-size: var(--ddd-font-size-s);
    text-align: center;
  }
}

@media (max-width: 425px) {
  .profile-pic, .resume-pic, .involvement-content img, .contact-content img {
    width: 90%;
    max-width: 180px;
  }

  .about-flex p, .involvement-content p, .contact-content p {
    font-size: var(--ddd-font-size-xs);
  }
}


    `];
  }

  // Lit render the HTML
  render() {
    return html`

  <portfolio-very-header></portfolio-very-header>
  <scroll-button></scroll-button>
  <portfolio-very>
    </portfolio-very>
    <div class="wrapper" @page-added="${this.addPage}">
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

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);