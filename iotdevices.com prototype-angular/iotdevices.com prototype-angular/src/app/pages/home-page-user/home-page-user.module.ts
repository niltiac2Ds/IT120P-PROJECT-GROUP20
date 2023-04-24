import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { HomePageUser } from './home-page-user.component'

const routes = [
  {
    path: '',
    component: HomePageUser,
  },
]

@NgModule({
  declarations: [HomePageUser],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [HomePageUser],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageUserModule {}
