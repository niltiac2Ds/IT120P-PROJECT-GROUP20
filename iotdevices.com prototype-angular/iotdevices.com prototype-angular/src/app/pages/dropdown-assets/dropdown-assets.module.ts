import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { DropdownAssets } from './dropdown-assets.component'

const routes = [
  {
    path: '',
    component: DropdownAssets,
  },
]

@NgModule({
  declarations: [DropdownAssets],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [DropdownAssets],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DropdownAssetsModule {}
