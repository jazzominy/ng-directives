import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quill-inline-style',
  templateUrl: './quill-inline-style.component.html',
  styleUrls: ['./quill-inline-style.component.css']
})
export class QuillInlineStyleComponent implements OnInit {

  /* modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
  
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                          // text direction
  
      [{ 'size': ['10px', false, '16px', '32px'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
  
      ['clean'],                                         // remove formatting button
  
      ['link', 'image', 'video']                         // link and image, video
    ]
  } */

  content = `<div class=\"ql-indent\" style=\"padding-left: 3em;background-color:#003366;\">Hi there</div>`;
  constructor() { }

  ngOnInit(): void {
  }

}
