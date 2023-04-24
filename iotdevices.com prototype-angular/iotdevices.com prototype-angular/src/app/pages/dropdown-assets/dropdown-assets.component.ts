import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'dropdown-assets',
  templateUrl: 'dropdown-assets.component.html',
  styleUrls: ['dropdown-assets.component.css'],
})
export class DropdownAssets {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
