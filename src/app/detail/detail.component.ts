import { Component, Input } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  @Input() game?: Game;
}
