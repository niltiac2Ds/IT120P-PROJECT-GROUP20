import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { DeleteAccountSuccessPopUp } from './delete-account-success-pop-up.component'

const routes = [
  {
    path: '',
    component: DeleteAccountSuccessPopUp,
  },
]

@NgModule({
  declarations: [DeleteAccountSuccessPopUp],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [DeleteAccountSuccessPopUp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeleteAccountSuccessPopUpModule {}
