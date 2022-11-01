import { Component, ElementRef, ViewChild } from '@angular/core';
import { CabeceraComponent } from './cabecera/cabecera.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ejercicio-3';

  booleanContainer: boolean = false;
  despareceClicked: boolean = false;

  // @ViewChild('ImageVariavble') ImageVariavble: ElementRef<HTMLInputElement> = {} as ElementRef; empty elementRef initilizer

  @ViewChild('ImageVariavble') ImageVariavble: ElementRef = {} as ElementRef;

  onToggleReceived(isOpened: boolean) {
    this.ImageVariavble.nativeElement.hidden = false; //viewChild solution code
    this.despareceClicked = false;
    this.booleanContainer = !isOpened;

    this.ImageVariavble.nativeElement.src = isOpened
      ? '../assets/woods.jpg'
      : '../assets/bear.jpg'; //viewChild solution code
    return isOpened;
  }

  onDespareceReceived(despareceClicked: boolean) {
    this.despareceClicked = despareceClicked;

    this.ImageVariavble.nativeElement.hidden = despareceClicked ? true : false; //viewChild solution code
    return this.despareceClicked;
  }
}
