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
      case 'Cupra':
        return 'https://www.youtube.com/embed/7Q5KZ2LLM9c?si=NqK7w69tmwa02jRF';
      case 'Mustang':
        return 'https://www.youtube.com/embed/5oFP0YgSoDM?si=uFtI7TV3nMq_PBiH';
      case 'Camaro':
        return 'https://www.youtube.com/embed/G-P8LzAp8hI?si=l3iy8zovCtOqHtlm';
      case 'Alfa Romeo':
        return 'https://www.youtube.com/embed/o_YK0QcK4hw?si=UKr9XE6bmkOe2AfN';
      default:
        return '';
    }
  }
}

