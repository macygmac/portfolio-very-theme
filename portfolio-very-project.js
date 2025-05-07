/**
 * Copyright 2025 macygmac
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-very-project`
 * 
 * @demo index.html
 * @element portfolio-very-project
 */
export class PortfolioVeryProject extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-project";
  }

  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.link = "";
    this.link2 = "";
    this.image = "";
  }
 
  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
      link: { type: String },
      link2: { type: String },
      image: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-default-info);
        background-color: var(--ddd-theme-default-linkLight);
        font-family: var(--ddd-font-navigation);
        padding: var(--ddd-spacing-4);
        margin: var(--ddd-spacing-2);
        border-radius: var(--ddd-radius-lg);            
        max-width: 1000px;
        

        
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      
      }
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }
      a {
          color: var(--ddd-theme-default-beaverBlue);
          background-color: var(--ddd-theme-default-slateGray);
          font-weight: var(--ddd-font-weight-bold);
          text-decoration: none;
      }
      h3 {
          margin-top: var(--ddd-spacing-0);
      }
      img {
          width: 500px;
          height: 300px;
          height: auto;
          border-radius: var(--ddd-radius-sm);
          border: 4px solid var(--ddd-theme-primary);
          object-fit: cover;
        }
        .project-content {
          padding: var(--ddd-spacing-19);
          display: flex;
          gap: var(---ddd-spacing-4);
          align-items: center;
          justify-content: center;
          box-shadow: var(--ddd-box-shadow-1);
          border: 2px dotted var(--ddd-theme-default-beaverBlue);
        }
        .text-project-content {
          flex: 1;
        }
        p {
          margin: var(--ddd-spacing-4);
        }
      



    `];
  }

  // Lit render the HTML
  render() {
    return html`
     <div class="project-content">
        <img src="${this.image}" alt="Project Preview" />
        <div class="text-project-content">
          <h3>${this.title}</h3>
          <p>${this.description}</p>
          <ul>
            ${this.link
              ? html`<li>
                  <a href="${this.link}" target="_blank"
                    >View Project on Vercel</a
                  >
                </li>`
              : ""}
            ${this.link2
              ? html`<li>
                  <a href="${this.link2}" target="_blank">Access GitHub</a>
                </li>`
              : ""}
          </ul>
        </div>
      </div>
    `;
  }



  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryProject.tag, PortfolioVeryProject);