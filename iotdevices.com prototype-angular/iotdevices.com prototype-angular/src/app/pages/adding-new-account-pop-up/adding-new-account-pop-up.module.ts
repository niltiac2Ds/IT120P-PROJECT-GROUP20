import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { AddingNewAccountPopUp } from './adding-new-account-pop-up.component'

const routes = [
  {
    path: '',
    component: AddingNewAccountPopUp,
  },
]

@NgModule({
  declarations: [AddingNewAccountPopUp],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AddingNewAccountPopUp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddingNewAccountPopUpModule {}
