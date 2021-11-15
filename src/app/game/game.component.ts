import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  constructor() {
    for (let i= 0; i <10; i++){
      this.arr15.sort(()=>Math.random() -0.5)
    }
    console.log(this.arr15);
  }

  public arr15 = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  ngOnInit(): void {
  }

}
