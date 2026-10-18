import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Image } from '../interfaces/image-interface';

@Component({
  imports: [],
  selector: 'app-image-item',
  styleUrl: './image-item.css',
  templateUrl: './image-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ImageItem {
  image = input.required<Image>();
  isFeatured = input.required<boolean>();
  deleteImage = output<string>();

  onDeleteClick(event: MouseEvent) {
    event.stopPropagation();
    this.deleteImage.emit(this.image().id);
  }
}
