import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Extendedmenuforaccounts } from './extendedmenuforaccounts.component'

const routes = [
  {
    path: '',
    component: Extendedmenuforaccounts,
  },
]

@NgModule({
  declarations: [Extendedmenuforaccounts],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Extendedmenuforaccounts],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExtendedmenuforaccountsModule {}
