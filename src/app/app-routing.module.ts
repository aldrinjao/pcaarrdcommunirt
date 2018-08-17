import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainpageComponent } from './mainpage/mainpage.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  {path: 'search', component: SearchComponent}

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})

export class AppRoutingModule {}
