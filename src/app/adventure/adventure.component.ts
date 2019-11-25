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
    
    if(this.averageDistance == 0) { this.firstRun = true;}

    this.updateStats();

    //Get Player's Stats (from Database)
    this.playerEndurance = Number(this.storage.getItem("endurance"));
    this.playerStrength = Number(this.storage.getItem("strength"));
    this.playerGold = Number(this.storage.getItem("gold"));
  }

  updateStats()
  {
    if(Number(this.storage.getItem("runSuccess")) > 3)
    {
      this.storage.setItem("endurance", String(Number(this.storage.getItem("endurance")) + 1));
      this.storage.setItem("runSuccess", '0');
      this.storage.setItem("lastEnduranceDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
      alert("Your endurance has increased!");
    }
    if(Number(this.storage.getItem("swimSuccess")) > 3)
    {
      this.storage.setItem("endurance", String(Number(this.storage.getItem("endurance")) + 1));
      this.storage.setItem("swimSuccess", '0');
      this.storage.setItem("lastEnduranceDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
      alert("Your endurance has increased!");
    }
    if(Number(this.storage.getItem("bikeSuccess")) > 3)
    {
      this.storage.setItem("endurance", String(Number(this.storage.getItem("endurance")) + 1));
      this.storage.setItem("bikeSuccess", '0');
      this.storage.setItem("lastEnduranceDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
      alert("Your endurance has increased!");
    }

    if(Number(this.storage.getItem("weightSuccess")) > 3)
    {
      this.storage.setItem("strength", String(Number(this.storage.getItem("strength")) + 1));
      this.storage.setItem("weightSuccess", '0');
      this.storage.setItem("lastStrengthDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
      alert("Your strength has increased!");
    }
    if(Number(this.storage.getItem("pushSuccess")) > 3)
    {
      this.storage.setItem("strength", String(Number(this.storage.getItem("strength")) + 1));
      this.storage.setItem("pushSuccess", '0');
      this.storage.setItem("lastStrengthDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
      alert("Your strength has increased!");
    }
    if(Number(this.storage.getItem("sitSuccess")) > 3)
    {
      this.storage.setItem("strength", String(Number(this.storage.getItem("strength")) + 1));
      this.storage.setItem("sitSuccess", '0');
      this.storage.setItem("lastStrengthDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
      alert("Your strength has increased!");
    }
    if(Number(this.storage.getItem("chinSuccess")) > 3)
    {
      this.storage.setItem("strength", String(Number(this.storage.getItem("strength")) + 1));
      this.storage.setItem("chinSuccess", '0');
      this.storage.setItem("lastStrengthDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
      alert("Your strength has increased!");
    }
  }

}
