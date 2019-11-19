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
  today = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  

  constructor() { }

  ngOnInit() {
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
  }

}
