import { Component } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent {
  games: Game[] = [];
  selectedGame?: Game;

  constructor(private gameService: GameService) {}

  onSelect(game: Game): void {
    this.gameService.getGame(game.id)
      .subscribe(game => this.selectedGame = game)
  }

  getGames(): void {
    this.gameService.getGames()
        .subscribe(games => this.games = games);
  }

  searchGames(term: string): void {
    this.gameService.searchGame(term)
        .subscribe(games => this.games = games);
  }

  ngOnInit(): void {
    this.getGames();
  }

}
