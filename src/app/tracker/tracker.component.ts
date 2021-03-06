import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})

export class TrackerComponent implements OnInit {

  storage = window.localStorage;

  tracking: boolean = false;
  savedLatitude;
  savedLongitude;
  currentDistance = 0;
  myLocation: any;
  watchID: number;
  //timer
  counter: number;
  timerRef;
  time: Date;

  constructor() {
  }

  public ngOnInit(): void {
    this.getLocation();
    console.log("Saved Latitude: " + this.savedLatitude);
    console.log("Saved Longitude: " + this.savedLongitude);
  }


  toggleTracking() {
    if (!this.tracking) {
      this.tracking = true;
      console.log("Beginning Tracking");
      this.startTracking();
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        this.time = new Date(0, 0, 0, 0, 0, 0);
        this.time.setSeconds(this.counter / 1000);
      });
    }
    else {
      this.tracking = false;
      clearInterval(this.timerRef);
      console.log("Ending Tracking");
      window.navigator.geolocation.clearWatch(this.watchID);
    }
  }

  startTracking() {
    let opts = { maximumAge: 1000, timeout: 5000, enableHighAccuracy: false }
    this.watchID = navigator.geolocation.watchPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      if (this.savedLatitude == null && this.savedLongitude == null) {
        this.savedLatitude = latitude;
        this.savedLongitude = longitude;
      }
      if (latitude - this.savedLatitude != 0 && longitude - this.savedLongitude != 0) {
        console.log(position);
        console.log("Current Distance: " + this.currentDistance);
        let calculatedDistance = this.calculateDistance(latitude, longitude, this.savedLatitude, this.savedLongitude);
        if (calculatedDistance > 0.0005 && calculatedDistance < 0.10) {
          this.currentDistance += calculatedDistance;
        }
        console.log("New Distance: " + this.currentDistance);
        this.savedLatitude = latitude;
        this.savedLongitude = longitude;
      }
      //setTimeout(() => {}, 5000);
    },
      (err) => {
        console.log(err);
      }, opts);
  }

  calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = 0.5 - Math.cos(dLat) / 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * (1 - Math.cos(dLon)) / 2;
    var ret = R * 2 * Math.asin(Math.sqrt(a));
    console.log(ret);
    return ret;
  }


  getLocation() {
    navigator.geolocation.getCurrentPosition((position: Position) => {
      if (position) {
        this.savedLatitude = position.coords.latitude;
        this.savedLongitude = position.coords.longitude;
      }
    },
      (error: PositionError) => console.log(error));
  }

  saveData() {
    let oldRunDistance = this.storage.getItem("runDistance");
    let oldRunTime = this.storage.getItem("runTime");

    if (Number(oldRunDistance) > 0 && Number(oldRunDistance) * .9 <= this.currentDistance) //Getting withing 10% of your regular goal marks a success for the week
    {
      let success = this.storage.getItem("runSuccess")
      success = String(Number(success) + 1);
      this.storage.setItem("runSuccess", success);
    }
    if (Number(oldRunDistance) > 0 && Number(oldRunDistance) * 1.15 < this.currentDistance) //Getting above 15% of your average marks an extra success
    {
      let success = this.storage.getItem("runSuccess")
      success = String(Number(success) + 1);
      this.storage.setItem("runSuccess", success);
    }

    if(this.currentDistance > 0)
    {
      let newRunNumber = Number(this.storage.getItem("runNumber"));
      let newRunDistance = ((Number(this.storage.getItem("runDistance")) * Number(newRunNumber)) + this.currentDistance) / (newRunNumber + 1);
      let newRunTime = ((Number(this.storage.getItem("runTime")) * Number(newRunNumber)) + this.counter) / (newRunNumber + 1);
      newRunNumber++;

      console.log(newRunNumber);
      console.log(newRunDistance);
      console.log(newRunTime);

      this.storage.setItem("runDistance", String(newRunDistance));
      this.storage.setItem("runNumber", String(newRunNumber));
      this.storage.setItem("runTime", String(newRunTime));
      this.storage.setItem("lastRunDate", formatDate(new Date(), 'yyyy/MM/dd', 'en'));
    }
  }

}
