import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Update } from './update.component'

const routes = [
  {
    path: '',
    component: Update,
  },
]

@NgModule({
  declarations: [Update],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Update],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UpdateModule {}
