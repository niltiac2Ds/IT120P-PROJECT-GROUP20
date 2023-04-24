import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-update',
  templateUrl: 'update.component.html',
  styleUrls: ['update.component.css'],
})
export class Update {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
