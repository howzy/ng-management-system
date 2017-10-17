import { Component, OnDestroy, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'text-editor',
  templateUrl: './text-editor.component.html'
})
export class TextEditorComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: string;
  @Output() onEditorKeyup = new EventEmitter<any>();

  public editor;

  fileInputChangeHandler(e): void {
    let file = e.files[0];

    let reader = new FileReader();
    reader.onload = function () {
      let base64 = reader.result.split(',')[1];
    };
    reader.readAsDataURL(file);
  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      skin_url: '/assets/tinymce/skins/lightgray',
      plugins: [
        'advlist autolink lists link image charmap print preview anchor textcolor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table contextmenu paste code help'
      ],
      // file_browser_callback_types: 'image',
      // file_browser_callback: function (file_name, url, type, win) {
      //   if (type == 'image') {
      //     let fileInput = document.getElementById('img_input');
      //     fileInput.click();
      //   }
      // },
      file_picker_types: 'image',
      file_picker_callback: function (cb, value, meta) {
        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');

        input.onchange = function (e) {
          let dom = <HTMLInputElement>e.target;
          let file = dom.files[0];
          

          var reader = new FileReader();
          reader.onload = function () {
            var id = 'blobid' + (new Date()).getTime();
            var blobCache = tinymce.activeEditor.editorUpload.blobCache;
            var base64 = reader.result.split(',')[1];
            var blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);

            cb(blobInfo.blobUri(), { title: file.name });
          };
          reader.readAsDataURL(file);
        };

        input.click();
      },
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
      language_url: '/assets/tinymce/langs/zh_CN.js'
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
