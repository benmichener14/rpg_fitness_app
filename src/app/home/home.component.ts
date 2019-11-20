import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  storage = window.localStorage;
  
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
    
    this.lastEnduranceDate = this.storage.getItem("lastEnduranceDate");
    this.lastStrengthDate = this.storage.getItem("lastStrengthDate");

    let diff = Math.abs(new Date(this.storage.getItem("lastEnduranceDate")).getTime() - new Date(this.today).getTime());
    let diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    let lastdiff = Math.abs(new Date(this.storage.getItem("lastEnduranceDecrease")).getTime() - new Date(this.today).getTime());
    let lastdiffDays = Math.ceil(lastdiff / (1000 * 3600 * 24)); 
    let endurance = this.storage.getItem("endurance");

    if(diffDays > 10 && lastdiffDays > 3 && Number(endurance) > 10)
    {
      
      if(Number(endurance) > 11)
      {
        this.storage.setItem("endurance", String(Number(endurance) - 1));
        alert("Due to inactivity in endurance related activities, your endurance has decreased.")
      }
      else
      {
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
    
    if(diffDays > 10 && lastdiffDays > 3 && Number(strength) > 10)
    {
      if(Number(strength) > 11)
      {
        this.storage.setItem("strength", String(Number(strength) - 1));
        alert("Due to inactivity in strength related activities, your strength has decreased.")
      }
      else
      {
        this.storage.setItem("strength", String(11));
        alert("Due to inactivity in strength related activities, your strength is now back down to its original value of 10.")
      }

      this.storage.setItem("lastStrengthDecrease", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
    }

    this.getGoals();
  }

  getGoals(){
    let runSuccess = Number(this.storage.getItem("runSuccess"));
    let bikeSuccess = Number(this.storage.getItem("bikeSuccess"));
    let swimSuccess = Number(this.storage.getItem("swimSuccess"));

    if( runSuccess >= bikeSuccess && runSuccess >= swimSuccess )
    {
      this.enduranceType = "run";
      this.endurancePercentage = 100 * (runSuccess / 4);
    }
    else if( bikeSuccess >= runSuccess && bikeSuccess >= swimSuccess )
    {
      this.enduranceType = "swim";
      this.endurancePercentage = 100 * (swimSuccess / 4);
    }
    else if( swimSuccess >= runSuccess && swimSuccess >= bikeSuccess )
    {
      this.enduranceType = "swim";
      this.endurancePercentage = 100 * (swimSuccess / 4);
    }

    let weightSuccess = Number(this.storage.getItem("weightSuccess"));
    let pushSuccess = Number(this.storage.getItem("pushSuccess"));
    let sitSuccess = Number(this.storage.getItem("sitSuccess"));
    let chinSuccess = Number(this.storage.getItem("chinSuccess"));

    if( weightSuccess >= pushSuccess && weightSuccess >= sitSuccess && weightSuccess >= chinSuccess )
    {
      this.strengthType = "weight";
      this.strengthPercentage = 100 * (weightSuccess / 4);
    }
    else if( pushSuccess >= weightSuccess && pushSuccess >= sitSuccess && pushSuccess >= chinSuccess )
    {
      this.strengthType = "push";
      this.strengthPercentage = 100 * (pushSuccess / 4);
    }
    else if( sitSuccess >= pushSuccess && sitSuccess >= weightSuccess && sitSuccess >= chinSuccess )
    {
      this.strengthType = "sit";
      this.strengthPercentage = 100 * (sitSuccess / 4);
    }
    else if( chinSuccess >= pushSuccess && chinSuccess >= sitSuccess && chinSuccess >= weightSuccess )
    {
      this.strengthType = "chin";
      this.strengthPercentage = 100 * (chinSuccess / 4);
    }

  }

  enduranceGoal(){
    let newEnduranceGoal = 1.15 * Number(this.storage.getItem(this.enduranceType + "Distance"));
    alert("Your Next Goal: \nTry to " + this.enduranceType + " at least " + newEnduranceGoal + " km to get two more successes towards your Endurance.");
  }

  strengthGoal(){
    let newStrengthGoal = 1.15 * Number(this.storage.getItem(this.strengthType + "Reps"));

    if(this.strengthType == "weight")
    {
      alert("Your Next Goal: \nTry to lift" + this.storage.getItem("weightWeight") + " lbs for at least " + this.storage.getItem("weightSets") + " sets of " + newStrengthGoal + " reps to get two more successes towards your Strength.");
    }
    if(this.strengthType == "push")
    {
      alert("Your Next Goal: \nTry to do at least " + this.storage.getItem("pushSets") + " sets of push ups, with " + newStrengthGoal + " reps to get two more successes towards your Strength.");
    }
    if(this.strengthType == "sit")
    {
      alert("Your Next Goal: \nTry to do at least " + this.storage.getItem("sitSets") + " sets of sit ups, with " + newStrengthGoal + " reps to get two more successes towards your Strength.");
    }
    if(this.strengthType == "chin")
    {
      alert("Your Next Goal: \nTry to do at least " + this.storage.getItem("chinSets") + " sets of chin ups, with " + newStrengthGoal + " reps to get two more successes towards your Strength.");
    }
  }

}
