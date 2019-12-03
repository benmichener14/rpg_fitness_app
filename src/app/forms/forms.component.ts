import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  storage = window.localStorage;

  distance: number;
  time: Date;
  hours: number;
  minutes: number;
  seconds: number;
  weight: number;
  reps: number;
  sets: number;
  collapsed: boolean;

  selectedExercise = { id: -1, name: "Default" };
  data: Array<Object> = [
    { id: 0, name: "Run" },
    { id: 1, name: "Swim" },
    { id: 2, name: "Bike" },
    { id: 3, name: "Lift Weights" },
    { id: 4, name: "Push Ups" },
    { id: 5, name: "Sit Ups" },
    { id: 6, name: "Chin Ups" }
  ];;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.collapsed = true;
  }

  selected() {
    console.log(this.selectedExercise);
    this.distance = null;
    this.time = null;
    this.hours = null;
    this.minutes = null;
    this.seconds = null;
    this.weight = null;
    this.reps = null;
    this.sets = null;
  }

  submit() {
    if (this.selectedExercise.name == "Run") {
      if (this.hours >= 0 && this.hours <= 12 && this.minutes >= 0 && this.minutes <= 59 && this.seconds >= 0 && this.seconds <= 59 && this.distance > 0) {
        let counter = this.hours * 3600000 + this.minutes * 60000 + this.seconds * 1000;

        let oldRunDistance = this.storage.getItem("runDistance");
        let oldRunTime = this.storage.getItem("runTime");

        if(Number(oldRunDistance) * .9 <= this.distance) //Getting withing 10% of your regular goal marks a success for the week
        {
          let success = this.storage.getItem("runSuccess")
          success = String(Number(success) + 1);
          this.storage.setItem("runSuccess", success);
        }
        else if (Number(oldRunDistance) * 1.15 < this.distance) //Getting above 15% of your average marks an extra success
        {
          let success = this.storage.getItem("runSuccess")
          success = String(Number(success) + 2);
          this.storage.setItem("runSuccess", success);
        }

        let newRunNumber = Number(this.storage.getItem("runNumber"));
        let newRunDistance = ((Number(this.storage.getItem("runDistance")) * Number(newRunNumber)) + this.distance) / (newRunNumber + 1);
        let newRunTime = ((Number(this.storage.getItem("runTime")) * Number(newRunNumber)) + counter) / (newRunNumber + 1);
        newRunNumber++;

        this.storage.setItem("runDistance", String(newRunDistance));
        this.storage.setItem("runNumber", String(newRunNumber));
        this.storage.setItem("runTime", String(newRunTime));

        this.router.navigateByUrl("/adventure");
      }
      else {
        alert("Please enter valid numbers for time!")
      }
    }
    if (this.selectedExercise.name == "Swim") {
      if (this.hours >= 0 && this.hours <= 12 && this.minutes >= 0 && this.minutes <= 59 && this.seconds >= 0 && this.seconds <= 59 && this.distance > 0) {
        let counter = this.hours * 3600000 + this.minutes * 60000 + this.seconds * 1000;

        let oldSwimDistance = this.storage.getItem("swimDistance");
        let oldSwimTime = this.storage.getItem("swimTime");

        if(Number(oldSwimDistance) * .9 <= this.distance) //Getting withing 10% of your regular goal marks a success for the week
        {
          let success = this.storage.getItem("swimSuccess")
          success = String(Number(success) + 1);
          this.storage.setItem("swimSuccess", success);
        }
        else if (Number(oldSwimDistance) * 1.15 < this.distance) //Getting above 15% of your average marks an extra success
        {
          let success = this.storage.getItem("swimSuccess")
          success = String(Number(success) + 2);
          this.storage.setItem("swimSuccess", success);
        }

        let newSwimNumber = Number(this.storage.getItem("swimNumber"));
        let newSwimDistance = ((Number(this.storage.getItem("swimDistance")) * Number(newSwimNumber)) + this.distance) / (newSwimNumber + 1);
        let newSwimTime = ((Number(this.storage.getItem("swimTime")) * Number(newSwimNumber)) + counter) / (newSwimNumber + 1);
        newSwimNumber++;

        this.storage.setItem("swimDistance", String(newSwimDistance));
        this.storage.setItem("swimNumber", String(newSwimNumber));
        this.storage.setItem("swimTime", String(newSwimTime));

        this.router.navigateByUrl("/adventure");
      }
      else {
        alert("Please enter valid numbers for time!")
      }
    }
    if (this.selectedExercise.name == "Bike") {
      if (this.hours >= 0 && this.hours <= 12 && this.minutes >= 0 && this.minutes <= 59 && this.seconds >= 0 && this.seconds <= 59 && this.distance > 0) {
        let counter = this.hours * 3600000 + this.minutes * 60000 + this.seconds * 1000;

        let oldBikeDistance = this.storage.getItem("bikeDistance");
        let oldBikeTime = this.storage.getItem("bikeTime");

        if(Number(oldBikeDistance) * .9 <= this.distance) //Getting withing 10% of your regular goal marks a success for the week
        {
          let success = this.storage.getItem("bikeSuccess")
          success = String(Number(success) + 1);
          this.storage.setItem("bikeSuccess", success);
        }
        else if (Number(oldBikeDistance) * 1.15 < this.distance) //Getting above 15% of your average marks an extra success
        {
          let success = this.storage.getItem("bikeSuccess")
          success = String(Number(success) + 2);
          this.storage.setItem("bikeSuccess", success);
        }

        let newBikeNumber = Number(this.storage.getItem("bikeNumber"));
        let newBikeDistance = ((Number(this.storage.getItem("bikeDistance")) * Number(newBikeNumber)) + this.distance) / (newBikeNumber + 1);
        let newBikeTime = ((Number(this.storage.getItem("bikeTime")) * Number(newBikeNumber)) + counter) / (newBikeNumber + 1);
        newBikeNumber++;

        this.storage.setItem("bikeDistance", String(newBikeDistance));
        this.storage.setItem("bikeNumber", String(newBikeNumber));
        this.storage.setItem("bikeTime", String(newBikeTime));

        this.router.navigateByUrl("/adventure");
      }
      else {
        alert("Please enter valid numbers for time!")
      }
    }
    if (this.selectedExercise.name == "Lift Weights") {
      if (this.weight >= 0 && this.reps >= 0 && this.sets >= 0) {

        let oldWeightWeight = this.storage.getItem("weightWeight");
        let oldWeightReps = this.storage.getItem("weightReps");
        let oldWeightSets = this.storage.getItem("weightSets");

        if(Number(oldWeightWeight) * Number(oldWeightReps) * Number(oldWeightSets) * .9 <= this.weight * this.reps * this.sets) //Getting withing 10% of your regular goal marks a success for the week
        {
          let success = this.storage.getItem("weightSuccess")
          success = String(Number(success) + 1);
          this.storage.setItem("weightSuccess", success);
        }
        else if (Number(oldWeightWeight) * Number(oldWeightReps) * Number(oldWeightSets) * 1.15 <= this.weight * this.reps * this.sets) //Getting above 15% of your average marks an extra success
        {
          let success = this.storage.getItem("weightSuccess")
          success = String(Number(success) + 2);
          this.storage.setItem("weightSuccess", success);
        }

        let newWeightNumber = Number(this.storage.getItem("weightNumber"));
        let newWeightWeight = ((Number(this.storage.getItem("weightWeight")) * Number(newWeightNumber)) + this.weight) / (newWeightNumber + 1);
        let newWeightReps = ((Number(this.storage.getItem("weightReps")) * Number(newWeightNumber)) + this.reps) / (newWeightNumber + 1);
        let newWeightSets = ((Number(this.storage.getItem("weightSets")) * Number(newWeightNumber)) + this.sets) / (newWeightNumber + 1);
        newWeightNumber++;

        this.storage.setItem("weightWeight", String(newWeightWeight));
        this.storage.setItem("weightReps", String(newWeightReps));
        this.storage.setItem("weightSets", String(newWeightSets));
        this.storage.setItem("weightNumber", String(newWeightNumber));

        this.router.navigateByUrl("/adventure");
      }
      else {
        alert("Please enter nonegative numbers for your values!")
      }
    }
    if (this.selectedExercise.name == "Push Ups") {
      if (this.reps >= 0 && this.sets >= 0) {

        let oldPushReps = this.storage.getItem("pushReps");
        let oldPushSets = this.storage.getItem("pushSets");

        if(Number(oldPushReps) * Number(oldPushSets) * .9 <= this.reps * this.sets) //Getting withing 10% of your regular goal marks a success for the week
        {
          let success = this.storage.getItem("pushSuccess")
          success = String(Number(success) + 1);
          this.storage.setItem("pushSuccess", success);
        }
        else if (Number(oldPushReps) * Number(oldPushSets) * 1.15 <= this.reps * this.sets) //Getting above 15% of your average marks an extra success
        {
          let success = this.storage.getItem("pushSuccess")
          success = String(Number(success) + 2);
          this.storage.setItem("pushSuccess", success);
        }

        let newPushNumber = Number(this.storage.getItem("pushNumber"));
        let newPushReps = ((Number(this.storage.getItem("pushReps")) * Number(newPushNumber)) + this.reps) / (newPushNumber + 1);
        let newPushSets = ((Number(this.storage.getItem("pushSets")) * Number(newPushNumber)) + this.sets) / (newPushNumber + 1);
        newPushNumber++;

        this.storage.setItem("pushReps", String(newPushReps));
        this.storage.setItem("pushSets", String(newPushSets));
        this.storage.setItem("pushNumber", String(newPushNumber));

        this.router.navigateByUrl("/adventure");
      }
      else {
        alert("Please enter nonegative numbers for your values!")
      }
    }
    if (this.selectedExercise.name == "Sit Ups") {
      if (this.reps >= 0 && this.sets >= 0) {

        let oldSitReps = this.storage.getItem("sitReps");
        let oldSitSets = this.storage.getItem("sitSets");

        if(Number(oldSitReps) * Number(oldSitSets) * .9 <= this.reps * this.sets) //Getting withing 10% of your regular goal marks a success for the week
        {
          let success = this.storage.getItem("sitSuccess")
          success = String(Number(success) + 1);
          this.storage.setItem("sitSuccess", success);
        }
        else if (Number(oldSitReps) * Number(oldSitSets) * 1.15 <= this.reps * this.sets) //Getting above 15% of your average marks an extra success
        {
          let success = this.storage.getItem("sitSuccess")
          success = String(Number(success) + 2);
          this.storage.setItem("sitSuccess", success);
        }

        let newSitNumber = Number(this.storage.getItem("sitNumber"));
        let newSitReps = ((Number(this.storage.getItem("sitReps")) * Number(newSitNumber)) + this.reps) / (newSitNumber + 1);
        let newSitSets = ((Number(this.storage.getItem("sitSets")) * Number(newSitNumber)) + this.sets) / (newSitNumber + 1);
        newSitNumber++;

        this.storage.setItem("sitReps", String(newSitReps));
        this.storage.setItem("sitSets", String(newSitSets));
        this.storage.setItem("sitNumber", String(newSitNumber));

        this.router.navigateByUrl("/adventure");
      }
      else {
        alert("Please enter nonegative numbers for your values!")
      }
    }
    if (this.selectedExercise.name == "Chin Ups") {
      if (this.reps >= 0 && this.sets >= 0) {

        let oldChinReps = this.storage.getItem("chinReps");
        let oldChinSets = this.storage.getItem("chinSets");
        console.log(oldChinReps + ", " + oldChinSets);

        if(Number(oldChinReps) * Number(oldChinSets) * .9 <= this.reps * this.sets) //Getting withing 10% of your regular goal marks a success for the week
        {
          let success = this.storage.getItem("chinSuccess")
          success = String(Number(success) + 1);
          this.storage.setItem("chinSuccess", success);
        }
        if (Number(oldChinReps) * Number(oldChinSets) * 1.15 <= this.reps * this.sets) //Getting above 15% of your average marks an extra success
        {
          let success = this.storage.getItem("chinSuccess")
          success = String(Number(success) + 1);
          this.storage.setItem("chinSuccess", success);
        }

        let newChinNumber = Number(this.storage.getItem("chinNumber"));
        let newChinReps = ((Number(this.storage.getItem("chinReps")) * Number(newChinNumber)) + this.reps) / (newChinNumber + 1);
        let newChinSets = ((Number(this.storage.getItem("chinSets")) * Number(newChinNumber)) + this.sets) / (newChinNumber + 1);
        newChinNumber++;

        this.storage.setItem("chinReps", String(newChinReps));
        this.storage.setItem("chinSets", String(newChinSets));
        this.storage.setItem("chinNumber", String(newChinNumber));

        this.router.navigateByUrl("/adventure");
      }
      else {
        alert("Please enter nonegative numbers for your values!")
      }
    }
  }

}
