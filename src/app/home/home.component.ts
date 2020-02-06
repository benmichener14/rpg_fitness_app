import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  storage = window.localStorage;

  firstTime: boolean;

  lastEnduranceDate;
  lastStrengthDate;
  collapsed: boolean;
  endurancePercentage: Number;
  strengthPercentage: Number;
  enduranceType;
  strengthType;
  today = formatDate(new Date(), 'yyyy/MM/dd', 'en');


  constructor() { }

  ngOnInit() {
    this.collapsed = true;
    this.firstTime = Boolean(this.storage.getItem("firstTime"));

    this.lastEnduranceDate = this.storage.getItem("lastEnduranceDate");
    this.lastStrengthDate = this.storage.getItem("lastStrengthDate");

    let diff = Math.abs(new Date(this.storage.getItem("lastEnduranceDate")).getTime() - new Date(this.today).getTime());
    let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    let lastdiff = Math.abs(new Date(this.storage.getItem("lastEnduranceDecrease")).getTime() - new Date(this.today).getTime());
    let lastdiffDays = Math.ceil(lastdiff / (1000 * 3600 * 24));
    let endurance = this.storage.getItem("endurance");

    if (diffDays > 10 && lastdiffDays > 3 && Number(endurance) > 10) {

      if (Number(endurance) > 11) {
        this.storage.setItem("endurance", String(Number(endurance) - 1));
        alert("Due to inactivity in endurance related activities, your endurance has decreased.")
      }
      else {
        this.storage.setItem("endurance", String(11));
        alert("Due to inactivity in endurance related activities, your endurance is now back down to its original value of 10.")
      }

      this.storage.setItem("lastEnduranceDecrease", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
    }

    diff = Math.abs(new Date(this.storage.getItem("lastStrengthDate")).getTime() - new Date(this.today).getTime());
    diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    lastdiff = Math.abs(new Date(this.storage.getItem("lastStrengthDecrease")).getTime() - new Date(this.today).getTime());
    lastdiffDays = Math.ceil(lastdiff / (1000 * 3600 * 24));
    let strength = this.storage.getItem("strength");

    if (diffDays > 10 && lastdiffDays > 3 && Number(strength) > 10) {
      if (Number(strength) > 11) {
        this.storage.setItem("strength", String(Number(strength) - 1));
        alert("Due to inactivity in strength related activities, your strength has decreased.")
      }
      else {
        this.storage.setItem("strength", String(11));
        alert("Due to inactivity in strength related activities, your strength is now back down to its original value of 10.")
      }

      this.storage.setItem("lastStrengthDecrease", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
    }

    this.getGoals();
  }

  getGoals() {
    let runSuccess = Number(this.storage.getItem("runSuccess"));
    let bikeSuccess = Number(this.storage.getItem("bikeSuccess"));
    let swimSuccess = Number(this.storage.getItem("swimSuccess"));

    if (runSuccess >= bikeSuccess && runSuccess >= swimSuccess) {
      this.enduranceType = "run";
      this.endurancePercentage = 100 * (runSuccess / 4);
    }
    else if (bikeSuccess >= runSuccess && bikeSuccess >= swimSuccess) {
      this.enduranceType = "bike";
      this.endurancePercentage = 100 * (bikeSuccess / 4);
    }
    else if (swimSuccess >= runSuccess && swimSuccess >= bikeSuccess) {
      this.enduranceType = "swim";
      this.endurancePercentage = 100 * (swimSuccess / 4);
    }

    let weightSuccess = Number(this.storage.getItem("weightSuccess"));
    let pushSuccess = Number(this.storage.getItem("pushSuccess"));
    let sitSuccess = Number(this.storage.getItem("sitSuccess"));
    let chinSuccess = Number(this.storage.getItem("chinSuccess"));

    if (weightSuccess >= pushSuccess && weightSuccess >= sitSuccess && weightSuccess >= chinSuccess) {
      this.strengthType = "weight";
      this.strengthPercentage = 100 * (weightSuccess / 4);
    }
    else if (pushSuccess >= weightSuccess && pushSuccess >= sitSuccess && pushSuccess >= chinSuccess) {
      this.strengthType = "push";
      this.strengthPercentage = 100 * (pushSuccess / 4);
    }
    else if (sitSuccess >= pushSuccess && sitSuccess >= weightSuccess && sitSuccess >= chinSuccess) {
      this.strengthType = "sit";
      this.strengthPercentage = 100 * (sitSuccess / 4);
    }
    else if (chinSuccess >= pushSuccess && chinSuccess >= sitSuccess && chinSuccess >= weightSuccess) {
      this.strengthType = "chin";
      this.strengthPercentage = 100 * (chinSuccess / 4);
    }

    if (!(Number(this.storage.getItem("runDistance")) == 0 && Number(this.storage.getItem("bikeDistance")) == 0 && Number(this.storage.getItem("swimDistance")) == 0 && Number(this.storage.getItem("weightReps")) == 0 && Number(this.storage.getItem("pushReps")) == 0 && Number(this.storage.getItem("sitReps")) == 0 && Number(this.storage.getItem("chinReps")) == 0)) 
    {
      this.firstTime = false;
      this.storage.setItem("firstTime", "false");
    }

  }

  enduranceGoal() {
    if (Number(this.storage.getItem(this.enduranceType + "Distance")) > 0) {
      let newEnduranceGoal = (1.15 * Number(this.storage.getItem(this.enduranceType + "Distance"))).toFixed(3);
      alert("Your Next Goal: \nTry to " + this.enduranceType + " at least " + newEnduranceGoal + " km to get two more successes towards your Endurance.");
    }
    else {
      alert("You have not gone on an endurance related workout yet. Head on over to the Training Adventure page to get started!")
    }
  }

  strengthGoal() {
    let newStrengthGoal = (1.15 * Number(this.storage.getItem(this.strengthType + "Reps"))).toFixed(0);

    if (Number(this.storage.getItem(this.strengthType + "Reps")) > 0) {
      if (this.strengthType == "weight") {
        alert("Your Next Goal: \nTry to lift " + Number(this.storage.getItem("weightWeight")).toFixed(0) + " lbs for at least " + Number(this.storage.getItem("weightSets")).toFixed(0) + " sets of " + newStrengthGoal + " reps to get two more successes towards your Strength.");
      }
      if (this.strengthType == "push") {
        alert("Your Next Goal: \nTry to do at least " + Number(this.storage.getItem("pushSets")).toFixed(0) + " sets of push ups, with " + newStrengthGoal + " reps to get two more successes towards your Strength.");
      }
      if (this.strengthType == "sit") {
        alert("Your Next Goal: \nTry to do at least " + Number(this.storage.getItem("sitSets")).toFixed(0) + " sets of sit ups, with " + newStrengthGoal + " reps to get two more successes towards your Strength.");
      }
      if (this.strengthType == "chin") {
        alert("Your Next Goal: \nTry to do at least " + Number(this.storage.getItem("chinSets")).toFixed(0) + " sets of chin ups, with " + newStrengthGoal + " reps to get two more successes towards your Strength.");
      }
    }
    else {
      alert("You have not gone on a strength related workout yet. Head on over to the Training Adventure page to get started!")
    }
  }

  help() {
    if (confirm("This is the home page, where information about your progress towards stat increases are displayed. As you make progress towards your goals in the different exercise categories, you will get closer to increasing that exercise's governing stat.")) {
      if (confirm("This page will show the exercises that are closest to being leveled up. For information on your goals for these exercises, click the buttons associated with each exercise on this page.")) { }
    }
  }

}
