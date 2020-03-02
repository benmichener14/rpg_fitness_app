import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  storage = window.localStorage;
  collapsed: boolean;
  category = ["User Data",
    "Running",
    "Swimming",
    "Biking",
    "Weights",
    "Push Ups",
    "Sit Ups",
    "Chin Ups"];

  index;

  runDistance;
  runTime;
  runNumber;
  runSuccess;

  swimDistance;
  swimTime;
  swimNumber;
  swimSuccess;

  bikeDistance;
  bikeTime;
  bikeNumber;
  bikeSuccess;

  weightWeight;
  weightReps;
  weightSets;
  weightNumber;
  weightSuccess;

  pushReps;
  pushSets;
  pushNumber;
  pushSuccess;

  sitReps;
  sitSets;
  sitNumber;
  sitSuccess;

  chinReps;
  chinSets;
  chinNumber;
  chinSuccess;

  endurance;
  strength;
  gold;

  constructor() { }

  ngOnInit() {
    this.collapsed = true;
    this.index = 0;

    this.runDistance = this.storage.getItem("runDistance");
    this.runTime = new Date(0, 0, 0, 0, 0, 0);
    this.runTime.setSeconds(Number(this.storage.getItem("runTime")) / 1000);
    this.runNumber = this.storage.getItem("runNumber");
    this.runSuccess = this.storage.getItem("runSuccess");

    this.swimDistance = this.storage.getItem("swimDistance");
    this.swimTime = new Date(0, 0, 0, 0, 0, 0);
    this.swimTime.setSeconds(Number(this.storage.getItem("swimTime")) / 1000);
    this.swimNumber = this.storage.getItem("swimNumber");
    this.swimSuccess = this.storage.getItem("swimSuccess");

    this.bikeDistance = this.storage.getItem("bikeDistance");
    this.bikeTime = new Date(0, 0, 0, 0, 0, 0);
    this.bikeTime.setSeconds(Number(this.storage.getItem("bikeTime")) / 1000);
    this.bikeNumber = this.storage.getItem("bikeNumber");
    this.bikeSuccess = this.storage.getItem("bikeSuccess");

    this.weightWeight = this.storage.getItem("weightWeight");
    this.weightReps = this.storage.getItem("weightReps");
    this.weightSets = this.storage.getItem("weightSets");
    this.weightNumber = this.storage.getItem("weightNumber");
    this.weightSuccess = this.storage.getItem("weightSuccess");

    this.pushReps = this.storage.getItem("pushReps");
    this.pushSets = this.storage.getItem("pushSets");
    this.pushNumber = this.storage.getItem("pushNumber");
    this.pushSuccess = this.storage.getItem("pushSuccess");

    this.sitReps = this.storage.getItem("sitReps");
    this.sitSets = this.storage.getItem("sitSets");
    this.sitNumber = this.storage.getItem("sitNumber");
    this.sitSuccess = this.storage.getItem("sitSuccess");

    this.chinReps = this.storage.getItem("chinReps");
    this.chinSets = this.storage.getItem("chinSets");
    this.chinNumber = this.storage.getItem("chinNumber");
    this.chinSuccess = this.storage.getItem("chinSuccess");

    this.endurance = this.storage.getItem("endurance");
    this.strength = this.storage.getItem("strength");
    this.gold = this.storage.getItem("gold");
  }

  catUp(){
    this.index ++;

    if(this.index >= this.category.length)
    {
      this.index = 0;
    }
    console.log(this.index);
  }

  catDown(){
    this.index --;

    if(this.index == -1)
    {
      this.index = this.category.length - 1;
    }
    console.log(this.index);
  }

  help(){
    if(confirm("This is the page where you can view all of the data collected by the app! Feel free to poke around. There is some cool stuff here."))
    {}
  }
}
