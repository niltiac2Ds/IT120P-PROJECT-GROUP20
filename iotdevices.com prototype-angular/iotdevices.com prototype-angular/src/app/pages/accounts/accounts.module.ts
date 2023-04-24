import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Accounts } from './accounts.component'

const routes = [
  {
    path: '',
    component: Accounts,
  },
]

@NgModule({
  declarations: [Accounts],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Accounts],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccountsModule {}
