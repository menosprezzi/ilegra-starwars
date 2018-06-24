import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input() useLuke: boolean;
  @Output() tryAgain: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() { }

  ngOnInit() {}

  handleTryAgain(ev: Event) {
    this.tryAgain.emit(ev);
  }

}
