/**
 * Copyright 2025 macygmac
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";




/**
 * `portfolio-very-scroll`
 * 
 * @demo index.html
 * @element portfolio-very-scroll
 */
export class PortfolioVeryScroll extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-scroll";
  }

  constructor() {
    super();
    this.t = this.t || {};
    this.t = {
      ...this.t,
      haxTheClub: "HAX The Club",
      skip: "Skip",
    };
    this.active = {};
    this.skipped = false;
    
    this.screen = 0;
    this.screens = [];
    this.addEventListener('screen-change', (e) => {
      let tmp = this.screen + parseInt(e.detail.direction);
      if (tmp > (this.screens.length-1)) {
        tmp = this.screens.length-1;
      }
      if (tmp < 0) {
        tmp = 0;
      }
      this.screen = tmp;
    });
    this.addEventListener('screen-ready', (e) => {
      this.screens = [...this.screens, e.detail.screen];
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    // use hash in URL
    if (parseInt(globalThis.location.hash.replace("#", "")) >= 0) {
      this.screen = parseInt(globalThis.location.hash.replace("#", ""));
    }
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      screen: { type: Number, reflect: true },
      screens: { type: Array },
      skipped: { type: Boolean, reflect: true },
      active: { type: Object },  
    };
  }


  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }


    // if screen changes, update the hash
    if (this.shadowRoot && (changedProperties.has('screens') || changedProperties.has('screen')) && this.screens.length > 0) {
      globalThis.location.hash = this.screen;
      // scroll the screen into view
      let active = this.screens.find((screen => screen.sid == this.screen));
      if (active) {
        this.screens.map((screen) => {
          if (screen.sid == this.screen) {
            screen.active = true;
          }
          else {
            screen.active = false;
          }
        });
        this.active = null;
        this.active = active;
        this.active.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
        // ensure intro skipped if we jumped to something
        if (this.screen !== 0) {
          this.skipIntro();
        }
      }
    }
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
     
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h3><span>${this.t.title}:</span> ${this.title}</h3>
  <slot></slot>
 

  
</div>`;
  }



  linkChange(e) {
    let number = parseInt(e.target.getAttribute('data-index'));
    if (number >= 0) {
      this.pages[number].element.scrollIntoView();
    }
  }

  addPage(e) {
    const element = e.detail.value
    const page = {
      number: element.pagenumber,
      title: element.title,
      element: element,
    }
    this.pages = [...this.pages, page];
  }





  /**
   * haxProperties integration via file reference
   */

}

globalThis.customElements.define(PortfolioVeryScroll.tag, PortfolioVeryScroll);