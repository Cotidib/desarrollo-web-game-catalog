import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'desarrollo-web-game-catalog';
  navCompressed: boolean = true;

  constructor(private changeDetector: ChangeDetectorRef) {};

  //https://stackoverflow.com/questions/48264304/angular-5-ngonchanges-fires-only-once-in-child-component
  
  toggleNav = () => {
    console.log(this.navCompressed)
    let newValue = !this.navCompressed;
    this.navCompressed = newValue;
    this.changeDetector.detectChanges();
  }
}
