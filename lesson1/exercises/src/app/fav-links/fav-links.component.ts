import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
     favLinks: string[] = ['https://www.amazon.com/', 'https://www.launchcode.org']
    //favLinks: string[] = ["<a href='https://www.amazon.com'>Amazon</a>"]
  constructor() { }

  ngOnInit() {
  }

}
