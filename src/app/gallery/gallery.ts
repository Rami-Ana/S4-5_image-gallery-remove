import { Component } from '@angular/core';
import { Image } from '../interfaces/image-interface';
import { ImageItem } from '../image-item/image-item';

@Component({
  imports: [ImageItem],
  selector: 'app-gallery',
  styleUrl: './gallery.css',
  templateUrl: './gallery.html',
})

export class Gallery {
  images: Image[] = [
    {
      id: '1',
      src: 'https://picsum.photos/id/230/200/300',
      alt: 'Imagen 1'
    },
    {
      id: '2',
      src: 'https://picsum.photos/id/229/200/300',
      alt: 'Imagen 2'
    },
    {
      id: '3',
      src: 'https://picsum.photos/id/227/200/300',
      alt: 'Imagen 3'
    },
    {
      id: '4',
      src: 'https://picsum.photos/id/231/200/300',
      alt: 'Imagen 4'
    },
    {
      id: '5',
      src: 'https://picsum.photos/id/225/200/300',
      alt: 'Imagen 5'
    },
    {
      id: '6',
      src: 'https://picsum.photos/id/233/200/300',
      alt: 'Imagen 6'
    }
  ]
}
