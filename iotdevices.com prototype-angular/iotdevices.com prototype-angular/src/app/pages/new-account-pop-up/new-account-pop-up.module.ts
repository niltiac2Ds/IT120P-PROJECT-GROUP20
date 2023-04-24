import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { NewAccountPopUp } from './new-account-pop-up.component'

const routes = [
  {
    path: '',
    component: NewAccountPopUp,
  },
]

@NgModule({
  declarations: [NewAccountPopUp],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [NewAccountPopUp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewAccountPopUpModule {}
