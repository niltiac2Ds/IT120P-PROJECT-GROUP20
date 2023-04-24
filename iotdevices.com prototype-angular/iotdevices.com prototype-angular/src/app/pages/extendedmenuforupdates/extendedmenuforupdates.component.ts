import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-extendedmenuforupdates',
  templateUrl: 'extendedmenuforupdates.component.html',
  styleUrls: ['extendedmenuforupdates.component.css'],
})
export class Extendedmenuforupdates {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
