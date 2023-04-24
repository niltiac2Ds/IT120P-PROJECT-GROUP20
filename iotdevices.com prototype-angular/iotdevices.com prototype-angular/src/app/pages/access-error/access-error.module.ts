import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { AccessError } from './access-error.component'

const routes = [
  {
    path: '',
    component: AccessError,
  },
]

@NgModule({
  declarations: [AccessError],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AccessError],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccessErrorModule {}
