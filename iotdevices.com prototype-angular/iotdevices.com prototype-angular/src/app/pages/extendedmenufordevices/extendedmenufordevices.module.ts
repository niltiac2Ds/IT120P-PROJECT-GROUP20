import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Extendedmenufordevices } from './extendedmenufordevices.component'

const routes = [
  {
    path: '',
    component: Extendedmenufordevices,
  },
]

@NgModule({
  declarations: [Extendedmenufordevices],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Extendedmenufordevices],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExtendedmenufordevicesModule {}
