import { Component, signal } from '@angular/core';
import { Gallery } from './gallery/gallery';

@Component({
  imports: [Gallery],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
