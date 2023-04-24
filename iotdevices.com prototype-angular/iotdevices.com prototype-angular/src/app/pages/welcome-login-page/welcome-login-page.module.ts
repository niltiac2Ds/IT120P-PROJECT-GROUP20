import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { WelcomeLoginPage } from './welcome-login-page.component'

const routes = [
  {
    path: '',
    component: WelcomeLoginPage,
  },
]

@NgModule({
  declarations: [WelcomeLoginPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [WelcomeLoginPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WelcomeLoginPageModule {}
