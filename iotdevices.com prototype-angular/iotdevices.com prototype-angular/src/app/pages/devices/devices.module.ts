import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Devices } from './devices.component'

const routes = [
  {
    path: '',
    component: Devices,
  },
]

@NgModule({
  declarations: [Devices],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Devices],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DevicesModule {}
