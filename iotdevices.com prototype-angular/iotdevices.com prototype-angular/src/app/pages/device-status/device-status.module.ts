import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { DeviceStatus } from './device-status.component'

const routes = [
  {
    path: '',
    component: DeviceStatus,
  },
]

@NgModule({
  declarations: [DeviceStatus],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [DeviceStatus],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeviceStatusModule {}
