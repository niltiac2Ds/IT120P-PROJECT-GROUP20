import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { EditingAccountPopUp } from './editing-account-pop-up.component'

const routes = [
  {
    path: '',
    component: EditingAccountPopUp,
  },
]

@NgModule({
  declarations: [EditingAccountPopUp],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [EditingAccountPopUp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EditingAccountPopUpModule {}
