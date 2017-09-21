import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit, OnChanges {
  @Input() imgUrl: string;
  @Output() getImgUrl: EventEmitter<string> = new EventEmitter();
  isChoosed: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      if (!changedProp.isFirstChange()) {
        this.isChoosed = true;
      }
    }
  }

  changeImg(e) {
    var file = e.files[0];
    var myReader = new FileReader();
    myReader.readAsDataURL(file);
    myReader.onload = (ev) => {
      this.imgUrl = ev.target["result"];
      this.isChoosed = true;

      this.getImgUrl.emit(this.imgUrl);
    }
    e.value = null;
  }

  deletImg() {
    this.imgUrl = null;
    this.isChoosed = false;
  }

}
