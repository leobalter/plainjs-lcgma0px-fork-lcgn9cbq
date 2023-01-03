const template = document.createElement("template");
template.innerHTML = /*html*/`
  <style>
    :host {
      border: 1px solid #000;
      display: block;
      padding: 10px;
    }

    slot {
      display: inline-block;
      background: #f0f0f0;
    }
  </style>
  <my-lightelem>
    <p>
      <span>Hello, </span>
      <slot name="my-slot">placeholder</slot>
      <span>!</span>
    </p>
  </my-lightelem>`;

class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

class MyLightElem extends HTMLElement {}

customElements.define("my-counter", MyCounter);
customElements.define("my-lightelem", MyLightElem);
