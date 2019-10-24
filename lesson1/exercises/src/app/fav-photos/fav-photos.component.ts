import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Pic of the Moment';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Statue_of_Liberty%2C_NY.jpg';
  image3 = 'https://upload.wikimedia.org/wikipedia/commons/3/30/Gateway_Arch_%28distant_view%29.jpg';

  constructor() { }

  ngOnInit() {
  }

}