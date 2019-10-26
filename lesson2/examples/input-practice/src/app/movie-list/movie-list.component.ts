import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   // addMovie (newTitle: string) {
   //    if(!this.movies.includes(newTitle) && (newTitle.length!==0)){
   //       this.movies.push(newTitle);
   //    }
   // }


 // The following code is one solution to the bonus task.
   // Comment out lines 16 - 20, then uncomment lines 25 - 35 to use it.
   
   addMovie (newTitle: string) {
      let errorMsg = '';
      if(newTitle === ''){
         errorMsg = 'Please enter a movie title.';
      } else if (this.movies.includes(newTitle)) {
         errorMsg = `${newTitle} is already in your movie list.`;
      } else {
         this.movies.push(newTitle);
      }
      return errorMsg;
   }
   
}
// Modify addMovie to reject the empty string as a title.
// Use *ngIf to display an error message if the user does not enter a title or submits a title that is already on the list.
// Add CSS to change the color of the error message.

// The example-solutions branch of the Angular repo shows completed code for the bonus tasks.
