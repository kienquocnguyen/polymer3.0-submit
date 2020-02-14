/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';

class PolyRichtext extends PolymerElement {
  static get properties () {
    return {
    };
  }
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        @import url(https://fonts.googleapis.com/css?family=Fira+Sans);
        @import url(https://fonts.googleapis.com/css?family=Nunito+Sans);
        .richTextField{
            width: 100%;
            height: 700px;
            font-family: 'Nunito Sans', sans-serif!important;
            border: 1px solid black;
        }
        .richtext-button{
            min-width: 2.54em;
        }
        .richtext-selector{
            width: 180px;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 5px;
        }
      </style>

        <div class="rich-text-container">
            <h1>Post Content</h1>
            <div>
                <paper-button raised class="richtext-button" on-click="paragraphCommand">
                    P
                </paper-button>
                <paper-button raised class="richtext-button" on-click="boldCommand">
                    <fontawesome-icon prefix="fas" name="bold" fixed-width></fontawesome-icon>
                </paper-button>
                <paper-button raised class="richtext-button" on-click="italicCommand">
                    <fontawesome-icon prefix="fas" name="italic" fixed-width></fontawesome-icon>
                </paper-button>
                <paper-button raised class="richtext-button" on-click="alignLeft">
                    <fontawesome-icon prefix="fas" name="align-left" fixed-width></fontawesome-icon>
                </paper-button>
                <paper-button raised class="richtext-button" on-click="alignCenter">
                    <fontawesome-icon prefix="fas" name="align-center" fixed-width></fontawesome-icon>
                </paper-button>
                <paper-button raised class="richtext-button" on-click="alignRight">
                    <fontawesome-icon prefix="fas" name="align-right" fixed-width></fontawesome-icon>
                </paper-button>
                <paper-button raised class="richtext-button" on-click="addLink">
                    <fontawesome-icon prefix="fas" name="link" fixed-width></fontawesome-icon>
                </paper-button>
                <select class="richtext-selector" on-change="headingCommand" id="selectHeading">
                    <option> Choose Your Heading </option>
                    <option value="H1">H1</option>
                    <option value="H2">H2</option>
                    <option value="H3">H3</option>
                    <option value="H4">H4</option>
                </select>
                <select class="richtext-selector" on-change="sizeCommand" id="selectSize">
                    <option> Choose Font Size </option>
                    <option value="16px">16px</option>
                    <option value="20px">20px</option>
                    <option value="24px">24px</option>
                    <option value="28px">28px</option>
                    <option value="32px">32px</option>
                    <option value="36px">36px</option>
                </select>
                <select class="richtext-selector" on-change="fontCommand" id="selectFont">
                    <option> Choose Your Fonts </option>
                    <option value="Nunito Sans">Nunito Sans</option>
                    <option value="Fira Sans">Fira Sans</option>
                </select>
                <vaadin-upload target="http://localhost:3000/upload" max-files="20" accept="application/json, jpg, image/*" 
                method="POST" on-upload-success="uploadSuccess">
                </vaadin-upload>
            </div>
            <iframe name="richTextField" id="richtext" class="richTextField" ></iframe>
        </div>
    `;
  }
  connectedCallback(){
    super.connectedCallback();
    const editmode = this.$.richtext.contentDocument;
    editmode.designMode = 'on';
  }
  paragraphCommand(){
    const paragraphcmd = this.$.richtext.contentDocument;
    paragraphcmd.execCommand('formatBlock', false, 'p');
  }
  boldCommand(){
      const boldcmd = this.$.richtext.contentDocument;
      boldcmd.execCommand('bold', false, null);
  }
  italicCommand(){
    const italiccmd = this.$.richtext.contentDocument;
    italiccmd.execCommand('italic', false, null);
  }
  alignLeft(){
    const alignleftcmd = this.$.richtext.contentDocument;
    alignleftcmd.execCommand("JustifyLeft", false, "");
  }
  alignCenter(){
    const aligncentercmd = this.$.richtext.contentDocument;
    aligncentercmd.execCommand("JustifyCenter", false, "");
  }
  alignRight(){
    const alignrightcmd = this.$.richtext.contentDocument;
    alignrightcmd.execCommand("JustifyRight", false, "");
  }
  addLink(){
    const addlinkcmd = this.$.richtext.contentDocument;
    var linkURL = prompt('Enter a URL:', 'http://');
    var sText = addlinkcmd.getSelection();
    addlinkcmd.execCommand('insertHTML', false, '<a href="' + linkURL + '" target="_blank">' + sText + '</a>');
  }
  headingCommand(){
    const headingcmd = this.$.richtext.contentDocument;
    const selectheader = this.$.selectHeading;
    headingcmd.execCommand('formatBlock', false, selectheader.value);
  }
  sizeCommand(){
    const sizecmd = this.$.richtext.contentDocument;
    const selectsize = this.$.selectSize;
    console.log (selectsize.value);
    sizecmd.execCommand('fontSize', false, '7');
    var fontElements = sizecmd.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "7") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = selectsize.value;
        }
    }
  }
  fontCommand(){
    const fontcmd = this.$.richtext.contentDocument;
    const selectfont = this.$.selectFont;
    fontcmd.execCommand('fontName', false, selectfont.value);
  }
  uploadSuccess(e){
    debugger;
    var imgname = e.detail.file.name;
    var id = "test";
    console.log(imgname);
    const addimage = this.$.richtext.contentDocument;
    var img = "<div style='max-width: 800px; max-height: 600px; display: block;'><img alt='polymer-3.0' style='width: 100%; text-align: center;' src='http://localhost:3000/images/" + imgname + "'</div>";
    addimage.execCommand('insertHTML', true, img);
  }
}

window.customElements.define('poly-richtext', PolyRichtext);
