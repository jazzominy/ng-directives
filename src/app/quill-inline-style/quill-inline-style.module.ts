import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillInlineStyleComponent } from './quill-inline-style.component';
import { QuillModule } from 'ngx-quill';
import Quill from 'quill';
import { FormsModule } from '@angular/forms';
import IndentAttributor from '../quill-config/indent';

const styleSize = Quill.import('attributors/style/size');
styleSize.whitelist = ['10px', false, '24px', '32px'];
Quill.register(styleSize, true);

const fontStyle = Quill.import('attributors/style/font');
const alignStyle = Quill.import('attributors/style/align');
const directionStyle = Quill.import('attributors/style/direction');
Quill.register(directionStyle, true);
Quill.register(alignStyle, true);
Quill.register(fontStyle, true);

const CodeBlock = Quill.import('formats/code-block'); 

class InlineStyleCodeBlock extends CodeBlock {
    static create(/* value */) {
      	let node: HTMLElement = super.create();
        node.setAttribute('style', 'background-color: #23241f;color: #f8f8f2;overflow: visible;');
      	return node;
    }
} 
  
InlineStyleCodeBlock['blotName'] = "code-block";
InlineStyleCodeBlock['tagName'] = "pre";
Quill.register(InlineStyleCodeBlock, true);
Quill.register(IndentAttributor, true);

const Parchment = Quill.import('parchment');
let Block = Parchment.query('block');

Block.tagName = 'DIV';
Quill.register(Block, true);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
      
          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                          // text direction
      
          [{ 'size': styleSize.whitelist/* ['small', false, 'medium', 'large'] */ }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],
      
          ['clean'],                                         // remove formatting button
      
          ['link', 'image', 'video']                         // link and image, video
        ]
      }
    })
  ],
  declarations: [
    QuillInlineStyleComponent
  ],
  exports: [
    QuillInlineStyleComponent
  ]
})
export class QuillInlineStyleModule { }
