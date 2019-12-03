import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'rpg';
  storage = window.localStorage;

  constructor(private router: Router) { }
  ngOnInit() {
    
    document.addEventListener("deviceready", function () {
      document.addEventListener("backbutton", function (e) {
        e.preventDefault();
      }, false);
      var storage = window.localStorage;

      if (!Number(storage.getItem("firstTime"))) { storage.setItem("firstTime", "true"); }

      if (!Number(storage.getItem("runDistance"))) { storage.setItem("runDistance", "0"); }
      if (!Number(storage.getItem("runTime"))) { storage.setItem("runTime", "0"); }
      if (!Number(storage.getItem("runNumber"))) { storage.setItem("runNumber", "0"); }
      if (!Number(storage.getItem("runSuccess"))) { storage.setItem("runSuccess", "0"); }

      if (!Number(storage.getItem("swimDistance"))) { storage.setItem("swimDistance", "0"); }
      if (!Number(storage.getItem("swimTime"))) { storage.setItem("swimTime", "0"); }
      if (!Number(storage.getItem("swimNumber"))) { storage.setItem("swimNumber", "0"); }
      if (!Number(storage.getItem("swimSuccess"))) { storage.setItem("swimSuccess", "0"); }

      if (!Number(storage.getItem("bikeDistance"))) { storage.setItem("bikeDistance", "0"); }
      if (!Number(storage.getItem("bikeTime"))) { storage.setItem("bikeTime", "0"); }
      if (!Number(storage.getItem("bikeNumber"))) { storage.setItem("bikeNumber", "0"); }
      if (!Number(storage.getItem("bikeSuccess"))) { storage.setItem("bikeSuccess", "0"); }

      if (!Number(storage.getItem("weightWeight"))) { storage.setItem("weightWeight", "0"); }
      if (!Number(storage.getItem("weightReps"))) { storage.setItem("weightReps", "0"); }
      if (!Number(storage.getItem("weightSets"))) { storage.setItem("weightSets", "0"); }
      if (!Number(storage.getItem("weightNumber"))) { storage.setItem("weightNumber", "0"); }
      if (!Number(storage.getItem("weightSuccess"))) { storage.setItem("weightSuccess", "0"); }

      if (!Number(storage.getItem("pushReps"))) { storage.setItem("pushReps", "0"); }
      if (!Number(storage.getItem("pushSets"))) { storage.setItem("pushSets", "0"); }
      if (!Number(storage.getItem("pushNumber"))) { storage.setItem("pushNumber", "0"); }
      if (!Number(storage.getItem("pushSuccess"))) { storage.setItem("pushSuccess", "0"); }


      if (!Number(storage.getItem("sitReps"))) { storage.setItem("sitReps", "0"); }
      if (!Number(storage.getItem("sitSets"))) { storage.setItem("sitSets", "0"); }
      if (!Number(storage.getItem("sitNumber"))) { storage.setItem("sitNumber", "0"); }
      if (!Number(storage.getItem("sitSuccess"))) { storage.setItem("sitSuccess", "0"); }

      if (!Number(storage.getItem("chinReps"))) { storage.setItem("chinReps", "0"); }
      if (!Number(storage.getItem("chinSets"))) { storage.setItem("chinSets", "0"); }
      if (!Number(storage.getItem("chinNumber"))) { storage.setItem("chinNumber", "0"); }
      if (!Number(storage.getItem("chinSuccess"))) { storage.setItem("chinSuccess", "0"); }

      if (!Number(storage.getItem("endurance"))) { storage.setItem("endurance", "10"); }
      if (!Number(storage.getItem("strength"))) { storage.setItem("strength", "10"); }
      if (!Number(storage.getItem("gold"))) { storage.setItem("gold", "0"); }

    }, false);
  }
}



