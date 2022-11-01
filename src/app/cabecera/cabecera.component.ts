import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent implements OnInit {
  @Output('ToggleEvent') imageEvent = new EventEmitter<boolean>();

  @Output('DesparecerEvent') imageEvent2 = new EventEmitter<boolean>();

  isOpened: boolean = false;
  wasClicked: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  childClickEventEmitting() {
    this.isOpened = !this.isOpened;
    this.imageEvent.emit(this.isOpened);
  }

  desparecerEventEmitting() {
    this.wasClicked = !this.wasClicked;
    this.imageEvent2.emit(this.wasClicked);
  }
}
