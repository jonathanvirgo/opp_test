import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NhanVienComponent } from './components/nhan-vien/nhan-vien.component';

const routes: Routes = [
  { path: 'opp', component: TestComponent},
  { path: '**', component: NhanVienComponent}
];

@NgModule({
  declarations:[TestComponent, NhanVienComponent],
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
