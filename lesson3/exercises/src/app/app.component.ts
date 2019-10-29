import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  heightInKilo = this.height/100;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;
  hideUp = false;
  hideDown = false;
  hideLeft = false;
  hideRight = false;

  gutterCheck(width, height) {
    if (width >= 460000 || width < 0 || height <= 20000 || height >= 400000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }

    if (height > 420000) {
      alert("maximum safe orbit level achieved");
      this.hideUp = true; 
    } else {
      this.hideUp = false;
    }

    if (height <= 10000) {
      alert("Ground Proximity Warning!!! Pull Up or Engage Landing Sequence!!!");
      this.hideDown = true; 
    } else {
      this.hideDown = false;
    }

    if (width > 460000) {
      alert("Earthbound Orbital Decay!!! Adjust Left or Burn in Atmosphere!!!");
      this.hideRight = true; 
    } else {
      this.hideRight = false;
    }

    if (width <= -20000) {
      alert("Spacebound Orbital Decay!! Adjust Right or Fly into Interplanetary Space!!!");
      this.hideLeft = true; 
    } else {
      this.hideLeft = false;
    }
  }


  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';
      this.color = 'blue';
      this.height = 10000;
      this.heightInKilo = 10;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false;
    }
 }

  handleLanding(rocketImage) {
    let result2 = window.confirm('Are you sure the shuttle is ready for landing?');
    if (result2) {
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';
      this.color = 'green';
      this.height = 0;
      this.heightInKilo = 0;
      this.width = 0;
      this.message = 'Shuttle has landed.';
      this.takeOffEnabled = true;
    }
  }

  handleAbortMission(rocketImage) {
    let result3 = window.confirm('Abort the mission?');
    if (result3) {
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';
      this.color = 'green';
      this.height = 0;
      this.heightInKilo = 0;
      this.width = 0;
      this.message = 'Aborting Mission.';
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    } else if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      this.heightInKilo = this.height/1000;
    } else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
      this.heightInKilo = this.height/1000;
      }
    this.gutterCheck(this.width, this.height);
    //console.log("this.height is ", this.height, "this.heightInKilo is ", this.heightInKilo, this.height/100);
 }
}







