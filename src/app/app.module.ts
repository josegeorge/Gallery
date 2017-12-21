import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageService } from './services/image.service';
import { ImageFilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [ImageService,ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
