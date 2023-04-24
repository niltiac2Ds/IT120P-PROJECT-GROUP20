import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { EditingAccounts } from './editing-accounts.component'

const routes = [
  {
    path: '',
    component: EditingAccounts,
  },
]

@NgModule({
  declarations: [EditingAccounts],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [EditingAccounts],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EditingAccountsModule {}
