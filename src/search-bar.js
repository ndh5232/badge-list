import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class SearchBar extends LitElement {
  static properties = {
    topic: { type: String },
    word: { type: String }
  }

  static styles = css`
    :host {
      
    }
    #searchBar {
      width: 120%;
      box-sizing: border-box;
      border: 1px solid #c8c8c8;
      font-size: 16px;
      background-color: white;
      padding: 12px 20px 12px 40px;
      box-shadow: 10px 5px 5px rgba(0,0,0,0.50);
      background-size: 22px;
    }
    
    
  `;

  constructor() {
    super();
    this.topic = 'Search Content, Topics, and People';
    this.word = "";    
  }

  inputChange(e) {
    this.word = this.shadowRoot.querySelector('input').value;
  }

  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has('word')) {
      this.dispatchEvent(new CustomEvent('word-changed', {
        detail: {
          value: this.word
        }
      }));
    }
  }
 
  render() {
    return html`
    <div class="myBar">
      <input type="text" id="searchBar" placeholder="${this.topic}" @input="${this.inputChange}" />
      
    </div>

    
    `;
  }
}





customElements.define('search-bar', SearchBar);