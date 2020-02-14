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
import '@polymer/paper-input/paper-input';
import '@polymer/paper-button/paper-button';
import '@polymer/iron-form/iron-form';
import '@vaadin/vaadin-upload/vaadin-upload.js';
import './components/poly-richtext';
import 'fontawesome-icon';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        
        }
      </style>

      <div class="card">
        <div class="card">
          <iron-form id="postForm" >
            <form method="post" action="http://localhost:3000/posts" is="iron-form">
              <paper-input decorator type="text" label="Post Author" id="post_author" name="post_author" value="admin">
              </paper-input>

              <paper-input decorator type="text" label="Post Categories" id="post_categories" name="post_categories">
              </paper-input>
              <vaadin-upload target="http://localhost:3000/upload" max-files="20" accept="application/json, jpg, image/*" 
              method="POST" files="{{files}}">
                <div slot="file-list">
                  <h4>Files</h4>
                  <ul>
                    <template is="dom-repeat" items="{{files}}" as="file">
                      <paper-input decorator type="text" label="Post Images" id="post_images" name="post_images" value="[[file.name]]">
                      </paper-input>        
                    </template>
                  </ul>
                </div>
              </vaadin-upload>

              <paper-input decorator type="date" label="Post Date" id="post_date" name="post_date">
              </paper-input>

              <paper-input decorator type="text" label="Post Title" id="post_title" name="post_title">
              </paper-input>
            
              <poly-richtext id="richtexteditor"></poly-richtext>

              <paper-input decorator type="text" label="Post Content" id="post_content" name="post_content">
              </paper-input>

              <paper-input decorator type="text" label="Post Excerpt" id="post_excerpt" name="post_excerpt">
              </paper-input>
              
              <paper-button raised type="submit" on-click="submitForm">Submit</paper-button>
            </form>
          </iron-form>
        </div>
      </div>
    `;
  }
  connectedCallback(){
    super.connectedCallback();
    const richtextvalue = this.$.richtexteditor.$.richtext.contentDocument.body;
    const editmode = this.$.richtexteditor.$.richtext.contentDocument;
    editmode.designMode = 'on';
    console.log(richtextvalue);
  }
  submitForm(err){
    debugger;
    const richtextvalue = this.$.richtexteditor.$.richtext.contentDocument.body;
    const richtextcontent = this.$.post_content;
    richtextcontent.value = richtextvalue.innerHTML;
    var submitted = this.$.postForm.submit();
    submitted;
    if(err){
      console.log(err);
    }
    alert("success");
    console.log("success");
  }
}

window.customElements.define('my-view1', MyView1);
