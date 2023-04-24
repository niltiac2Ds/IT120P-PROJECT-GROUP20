import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'access-error',
  templateUrl: 'access-error.component.html',
  styleUrls: ['access-error.component.css'],
})
export class AccessError {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
