import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Extendedmenuforupdates } from './extendedmenuforupdates.component'

const routes = [
  {
    path: '',
    component: Extendedmenuforupdates,
  },
]

@NgModule({
  declarations: [Extendedmenuforupdates],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Extendedmenuforupdates],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExtendedmenuforupdatesModule {}
