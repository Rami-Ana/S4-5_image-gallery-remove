import { Component, signal } from '@angular/core';
import { Image } from '../interfaces/image-interface';
import { ImageItem } from '../image-item/image-item';

@Component({
  imports: [ImageItem],
  selector: 'app-gallery',
  styleUrl: './gallery.css',
  templateUrl: './gallery.html',
})

export class Gallery {
  images = signal<Image[]>([
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
  ])

  featuredImageId = signal<string>(this.images()[0]?.id || '');

  removeImage(id: string) {
    const confirmed = window.confirm("¿Seguro quieres eliminar la imagen?");
    if (!confirmed) return;

    this.images.update(imgs => imgs.filter(img => img.id !== id));

    if (this.featuredImageId() === id) {
      this.featuredImageId.set(this.images()[0]?.id || '');
    }
  }
}