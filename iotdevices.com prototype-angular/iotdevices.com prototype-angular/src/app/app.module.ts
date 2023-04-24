import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'welcome-login-page',
    loadChildren: () =>
      import('./pages/welcome-login-page/welcome-login-page.module').then(
        (m) => m.WelcomeLoginPageModule
      ),
  },
  {
    path: 'home-page-user',
    loadChildren: () =>
      import('./pages/home-page-user/home-page-user.module').then(
        (m) => m.HomePageUserModule
      ),
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./pages/accounts/accounts.module').then((m) => m.AccountsModule),
  },
  {
    path: 'devices',
    loadChildren: () =>
      import('./pages/devices/devices.module').then((m) => m.DevicesModule),
  },
  {
    path: 'device-status',
    loadChildren: () =>
      import('./pages/device-status/device-status.module').then(
        (m) => m.DeviceStatusModule
      ),
  },
  {
    path: 'update',
    loadChildren: () =>
      import('./pages/update/update.module').then((m) => m.UpdateModule),
  },
  {
    path: 'access-error',
    loadChildren: () =>
      import('./pages/access-error/access-error.module').then(
        (m) => m.AccessErrorModule
      ),
  },
  {
    path: 'home-page-admin',
    loadChildren: () =>
      import('./pages/home-page-admin/home-page-admin.module').then(
        (m) => m.HomePageAdminModule
      ),
  },
  {
    path: 'dropdown-assets',
    loadChildren: () =>
      import('./pages/dropdown-assets/dropdown-assets.module').then(
        (m) => m.DropdownAssetsModule
      ),
  },
  {
    path: 'editing-accounts',
    loadChildren: () =>
      import('./pages/editing-accounts/editing-accounts.module').then(
        (m) => m.EditingAccountsModule
      ),
  },
  {
    path: 'adding-new-account-pop-up',
    loadChildren: () =>
      import(
        './pages/adding-new-account-pop-up/adding-new-account-pop-up.module'
      ).then((m) => m.AddingNewAccountPopUpModule),
  },
  {
    path: 'new-account-pop-up',
    loadChildren: () =>
      import('./pages/new-account-pop-up/new-account-pop-up.module').then(
        (m) => m.NewAccountPopUpModule
      ),
  },
  {
    path: 'deleting-accounts',
    loadChildren: () =>
      import('./pages/deleting-accounts/deleting-accounts.module').then(
        (m) => m.DeletingAccountsModule
      ),
  },
  {
    path: 'delete-account-pop-up',
    loadChildren: () =>
      import('./pages/delete-account-pop-up/delete-account-pop-up.module').then(
        (m) => m.DeleteAccountPopUpModule
      ),
  },
  {
    path: 'delete-account-success-pop-up',
    loadChildren: () =>
      import(
        './pages/delete-account-success-pop-up/delete-account-success-pop-up.module'
      ).then((m) => m.DeleteAccountSuccessPopUpModule),
  },
  {
    path: 'editing-account-pop-up',
    loadChildren: () =>
      import(
        './pages/editing-account-pop-up/editing-account-pop-up.module'
      ).then((m) => m.EditingAccountPopUpModule),
  },
  {
    path: 'extendedmenuforaccounts',
    loadChildren: () =>
      import(
        './pages/extendedmenuforaccounts/extendedmenuforaccounts.module'
      ).then((m) => m.ExtendedmenuforaccountsModule),
  },
  {
    path: 'extendedmenufordevices',
    loadChildren: () =>
      import(
        './pages/extendedmenufordevices/extendedmenufordevices.module'
      ).then((m) => m.ExtendedmenufordevicesModule),
  },
  {
    path: 'extendedmenufordevicestatus',
    loadChildren: () =>
      import(
        './pages/extendedmenufordevicestatus/extendedmenufordevicestatus.module'
      ).then((m) => m.ExtendedmenufordevicestatusModule),
  },
  {
    path: 'extendedmenuforupdates',
    loadChildren: () =>
      import(
        './pages/extendedmenuforupdates/extendedmenuforupdates.module'
      ).then((m) => m.ExtendedmenuforupdatesModule),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
