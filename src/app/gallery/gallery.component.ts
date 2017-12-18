import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  title:string ="Recent Photos";
  visibleImages : any[];
  constructor(private imageService : ImageService) {
  //  this.visibleImages = this.imageService.getImages();
   }

  ngOnInit() {
  }

}
