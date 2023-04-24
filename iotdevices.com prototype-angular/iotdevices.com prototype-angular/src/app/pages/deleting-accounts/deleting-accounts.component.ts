import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'deleting-accounts',
  templateUrl: 'deleting-accounts.component.html',
  styleUrls: ['deleting-accounts.component.css'],
})
export class DeletingAccounts {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
