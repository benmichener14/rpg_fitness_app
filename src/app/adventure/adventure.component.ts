import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

  storage = window.localStorage;
  collapsed: boolean;

  firstRun: boolean;
  averageDistance: number;
  averageTime: Date;
  playerEndurance: number;
  playerStrength: number;
  playerGold: number;

  constructor() { }

  ngOnInit() {
    this.collapsed = true;
    this.averageDistance = Number(this.storage.getItem("runDistance"));
    this.averageTime = new Date(0, 0, 0, 0, 0, 0);
    this.averageTime.setSeconds(Number(this.storage.getItem("runTime")) / 1000);

    if (this.averageDistance == 0) { this.firstRun = true; }

    this.updateStats();

    //Get Player's Stats (from Database)
    this.playerEndurance = Number(this.storage.getItem("endurance"));
    this.playerStrength = Number(this.storage.getItem("strength"));
    this.playerGold = Number(this.storage.getItem("gold"));
  }

  updateStats() {
    if (Number(this.storage.getItem("runSuccess")) > 3) {
      this.storage.setItem("endurance", String(Number(this.storage.getItem("endurance")) + 1));
      this.storage.setItem("runSuccess", '0');
      this.storage.setItem("lastEnduranceDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
      alert("Your endurance has increased!");
    }
    if (Number(this.storage.getItem("swimSuccess")) > 3) {
      this.storage.setItem("endurance", String(Number(this.storage.getItem("endurance")) + 1));
      this.storage.setItem("swimSuccess", '0');
      this.storage.setItem("lastEnduranceDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
      alert("Your endurance has increased!");
    }
    if (Number(this.storage.getItem("bikeSuccess")) > 3) {
      this.storage.setItem("endurance", String(Number(this.storage.getItem("endurance")) + 1));
      this.storage.setItem("bikeSuccess", '0');
      this.storage.setItem("lastEnduranceDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
      alert("Your endurance has increased!");
    }

    if (Number(this.storage.getItem("weightSuccess")) > 3) {
      this.storage.setItem("strength", String(Number(this.storage.getItem("strength")) + 1));
      this.storage.setItem("weightSuccess", '0');
      this.storage.setItem("lastStrengthDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
      alert("Your strength has increased!");
    }
    if (Number(this.storage.getItem("pushSuccess")) > 3) {
      this.storage.setItem("strength", String(Number(this.storage.getItem("strength")) + 1));
      this.storage.setItem("pushSuccess", '0');
      this.storage.setItem("lastStrengthDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
      alert("Your strength has increased!");
    }
    if (Number(this.storage.getItem("sitSuccess")) > 3) {
      this.storage.setItem("strength", String(Number(this.storage.getItem("strength")) + 1));
      this.storage.setItem("sitSuccess", '0');
      this.storage.setItem("lastStrengthDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
      alert("Your strength has increased!");
    }
    if (Number(this.storage.getItem("chinSuccess")) > 3) {
      this.storage.setItem("strength", String(Number(this.storage.getItem("strength")) + 1));
      this.storage.setItem("chinSuccess", '0');
      this.storage.setItem("lastStrengthDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
      alert("Your strength has increased!");
    }
  }

  help() {
    if (confirm("This is the hub for working out, where you can either go on a tracked workout, or an untracked workout.")) {
      if (confirm("In a tracked workout, the app will use the phone's GPS to get an approximation of the distance traveled during your run.")) {
        if (confirm("In an untracked workout, you will be able to report a previously completed but unreported workout by filling out the information in text format. Here you will also be able to record information about other types of exercise besides running, such as weight lifting, push ups, or swimming.")) {
          if (confirm("Your goal for each workout is to get withing 10% of your average. Doing so will count as one \"success\" towards a stat increase. If you manage to go at least 15% above your average, you will be rewarded with a second \"success\".")) { }
        }
      }
    }
  }
}
