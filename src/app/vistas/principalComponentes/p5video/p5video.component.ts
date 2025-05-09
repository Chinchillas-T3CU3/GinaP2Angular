import { Component, Input } from '@angular/core';
import { SafeUrlPipe } from "../../../safe-url.pipe";

@Component({
  selector: 'app-p5video',
  imports: [SafeUrlPipe],
  templateUrl: './p5video.component.html',
  styleUrl: './p5video.component.css'
})
export class P5videoComponent {
  @Input() auto:string="";

  getVideoUrl(): string  {
    switch (this.auto) {
      case 'Formentor':
        return 'https://www.youtube.com/embed/KTf4jpMng8c?si=T8AJUx0CSvoaQ8F-';
      case 'Ateca':
        return 'https://www.youtube.com/embed/1q4kbj5pcvc?si=C4siKx9Nf-gOB8zn';
      case 'Leon':
        return 'https://www.youtube.com/embed/VUx2rxc6rao?si=jgbsl8-k0Eeyj-hL';
      
      default:
        return '';
    }
  }
}

