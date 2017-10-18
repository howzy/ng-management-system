import { Component, OnDestroy, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'text-editor',
  templateUrl: './text-editor.component.html'
})
export class TextEditorComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: string;
  @Output() onEditorKeyup = new EventEmitter<any>();

  public editor;

  ngAfterViewInit() {
    //关于Tinymce的完整文档，请查看这里https://www.tinymce.com/docs/
    tinymce.init({
      selector: '#' + this.elementId,
      skin_url: '/assets/tinymce/skins/lightgray',
      theme: 'modern',
      height: 500,
      plugins: [
        'advlist autosave autolink lists link image charmap print preview anchor textcolor wordcount',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table contextmenu paste code help'
      ],
      toolbar1: 'undo redo | formatselect | fontsizeselect | bold italic strikethrough forecolor backcolor | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat | link image',
      file_picker_types: 'image',
      file_picker_callback: function (cb, value, meta) {
        let fileInput = document.getElementById('img_input');

        fileInput.onchange = function (e) {
          let file = e.target['files'][0];

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

        fileInput.click();
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
