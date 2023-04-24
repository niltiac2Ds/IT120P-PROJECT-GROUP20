import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-extendedmenuforaccounts',
  templateUrl: 'extendedmenuforaccounts.component.html',
  styleUrls: ['extendedmenuforaccounts.component.css'],
})
export class Extendedmenuforaccounts {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
