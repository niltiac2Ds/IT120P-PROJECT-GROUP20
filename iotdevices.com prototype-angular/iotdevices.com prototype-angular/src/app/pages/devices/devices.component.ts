import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-devices',
  templateUrl: 'devices.component.html',
  styleUrls: ['devices.component.css'],
})
export class Devices {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
