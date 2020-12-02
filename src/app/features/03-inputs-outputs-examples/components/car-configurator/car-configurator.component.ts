import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-car-configurator',
  templateUrl: './car-configurator.component.html',
  styleUrls: ['./car-configurator.component.css']
})
export class CarConfiguratorComponent implements OnInit {

  selectedEngine: string = null;
  engines = ['Petrol', 'Diesel', 'Tesla'];

  selectedColor: string = null;
  colors = ['Black', 'White', 'Red', 'Yellow'];

  selectedDrive: string = null;
  typeOfDrives = ['4X', 'Front-Wheel-Drive', 'Rear-Wheel-Drive'];

  selectEngine(engine) {
    console.log('selectEngine(engine)', engine);
    this.selectedEngine = engine;
  }

  selectColor(color) {
    console.log('color', color);
    this.selectedColor = color;
  }

  selectTypeOfDrive(drive) {
    this.selectedDrive = drive;
  }

  ngOnInit() {
  }
}
