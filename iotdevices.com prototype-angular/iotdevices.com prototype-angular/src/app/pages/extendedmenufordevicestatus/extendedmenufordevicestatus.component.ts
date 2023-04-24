import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-extendedmenufordevicestatus',
  templateUrl: 'extendedmenufordevicestatus.component.html',
  styleUrls: ['extendedmenufordevicestatus.component.css'],
})
export class Extendedmenufordevicestatus {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
