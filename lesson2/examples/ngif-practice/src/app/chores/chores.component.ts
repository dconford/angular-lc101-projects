import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher', 'Complete LaunchCode prep work','feed fish'];
   //chores = [];
   //finishedChores = ['Make Beds', 'Take Out Trash', 'Clean Litter Box', 'Clean Bathroom', 'Rake leaves', 'Bale Hay'];
   //finishedChores = ['Make Beds', 'Take Out Trash', 'Buy groceries'];
   finishedChores = ['Make Beds', 'Buy groceries'];

   trophyImage = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';

   constructor() { }

   ngOnInit() {
   }

}

