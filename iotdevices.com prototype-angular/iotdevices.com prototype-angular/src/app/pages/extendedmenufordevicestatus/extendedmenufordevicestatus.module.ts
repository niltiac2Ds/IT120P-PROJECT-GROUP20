import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Extendedmenufordevicestatus } from './extendedmenufordevicestatus.component'

const routes = [
  {
    path: '',
    component: Extendedmenufordevicestatus,
  },
]

@NgModule({
  declarations: [Extendedmenufordevicestatus],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Extendedmenufordevicestatus],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExtendedmenufordevicestatusModule {}
