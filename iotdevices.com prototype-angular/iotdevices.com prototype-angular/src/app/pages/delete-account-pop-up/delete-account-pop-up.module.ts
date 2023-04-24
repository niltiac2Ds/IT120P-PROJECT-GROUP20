import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { DeleteAccountPopUp } from './delete-account-pop-up.component'

const routes = [
  {
    path: '',
    component: DeleteAccountPopUp,
  },
]

@NgModule({
  declarations: [DeleteAccountPopUp],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [DeleteAccountPopUp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeleteAccountPopUpModule {}
