import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { DeletingAccounts } from './deleting-accounts.component'

const routes = [
  {
    path: '',
    component: DeletingAccounts,
  },
]

@NgModule({
  declarations: [DeletingAccounts],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [DeletingAccounts],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeletingAccountsModule {}
