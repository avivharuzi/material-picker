import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../services/color/color.service';
import { fadeInAnimation } from './../../animations/fade-in.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInAnimation]
})
export class HomeComponent implements OnInit {
  public colors: any[];

  constructor(public colorService: ColorService) { }

  ngOnInit() {
    this.getColors();
  }

  getColors(): void {
    this.colorService.getColors().subscribe((res) => {
      if (res.length) {
        this.colors = res;
      }
    });
  }
}
