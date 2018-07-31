
import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h1>{{welcome}}</h1>
                <table class="table">
                    <tr>
                        <th>#</th>
                        <th>Game</th>
                        <th>Platform</th>
                        <th>Release</th>
                    </tr>
                    <tr *ngFor="let game of games | paginate: {itemsPerPage:9, currentPage:page, id: '1'}; let i = index">
                        <td>{{i + 1}}</td>
                        <td>{{game.game}}</td>
                        <td>{{game.platform}}</td>
                        <td>{{game.release}}</td>
                    </tr>
                </table>
             <pagination-controls (pageChange)="page = $event" id="1"
                      maxSize="9"
                    
                      directionLinks="true"
                      autoHide="true">
                </pagination-controls>`
})
export class HomeComponent {
  welcome : string;
  games : [{
    game: string,
    platform : string,
    release : string
  }];
  constructor(){
    this.welcome = "Display List using ngFor in Angular 2"

    this.games = [{
      game : "Deus Ex: Mankind Divided",
      platform: " Xbox One, PS4, PC",
      release : "August 23"
    },
      {
        game : "Hue",
        platform: " Xbox One, PS4, Vita, PC",
        release : "August 23"
      },
      {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
      },
      {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
      },
      {
        game : "Deus Ex: Mankind Divided",
        platform: " Xbox One, PS4, PC",
        release : "August 23"
      },
      {
        game : "Hue",
        platform: " Xbox One, PS4, Vita, PC",
        release : "August 23"
      },
      {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
      },
      {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
      },
      {
        game : "Deus Ex: Mankind Divided",
        platform: " Xbox One, PS4, PC",
        release : "August 23"
      },
      {
        game : "Hue",
        platform: " Xbox One, PS4, Vita, PC",
        release : "August 23"
      },
      {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
      },
      {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
      },
      {
        game : "Deus Ex: Mankind Divided",
        platform: " Xbox One, PS4, PC",
        release : "August 23"
      },
      {
        game : "Hue",
        platform: " Xbox One, PS4, Vita, PC",
        release : "August 23"
      },
      {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
      },
      {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
      },
      {
        game : "Deus Ex: Mankind Divided",
        platform: " Xbox One, PS4, PC",
        release : "August 23"
      },
      {
        game : "Hue",
        platform: " Xbox One, PS4, Vita, PC",
        release : "August 23"
      },
      {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
      },
      {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
      }]
  };
};
