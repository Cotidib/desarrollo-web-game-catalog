import { Component, Input } from '@angular/core';
import { Details } from '../details';
import { GameService } from '../game.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  @Input() game?: Details;
  @Input() id: number = 0;

  constructor(private gameService: GameService) {}

  detailLoaded: boolean = false

  getGameById(id: number): void {
    this.gameService.getGame(id)
      .subscribe(game => {
        this.game = game;
        this.detailLoaded = true;
    })
  }

  ngOnInit(): void {
    this.getGameById(this.id);
  }
}
