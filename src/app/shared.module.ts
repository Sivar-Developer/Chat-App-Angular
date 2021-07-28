import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

// antd components module
import { AntdModule } from 'src/app/antd.module'

const MODULES = [CommonModule, RouterModule, AntdModule, FormsModule]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule { }
