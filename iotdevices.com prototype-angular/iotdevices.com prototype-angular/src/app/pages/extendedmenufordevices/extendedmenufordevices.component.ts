import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-extendedmenufordevices',
  templateUrl: 'extendedmenufordevices.component.html',
  styleUrls: ['extendedmenufordevices.component.css'],
})
export class Extendedmenufordevices {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
