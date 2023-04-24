import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'device-status',
  templateUrl: 'device-status.component.html',
  styleUrls: ['device-status.component.css'],
})
export class DeviceStatus {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
