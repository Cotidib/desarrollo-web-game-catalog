import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnChanges {
  @Input() navCompressed: boolean = true;

  ngOnChanges(changes: SimpleChanges) {
      console.log("hola")
      console.log(changes)
  }
}
