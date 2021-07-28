import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'
import { AdvancedRouterModule } from './advanced-routing.module'
import { WidgetsComponentsModule } from 'src/app/components/kit/widgets/widgets-components.module'

// layout
import { AdvancedTypographyComponent } from 'src/app/@kit/pages/advanced/typography/typography.component'
import { AdvancedMailTemplatesComponent } from 'src/app/@kit/pages/advanced/mail-templates/mail-templates.component'
import { AdvancedUtilitiesComponent } from 'src/app/@kit/pages/advanced/utilities/utilities.component'
import { AdvancedGridComponent } from 'src/app/@kit/pages/advanced/grid/grid.component'
import { AdvancedFormExamplesComponent } from 'src/app/@kit/pages/advanced/form-examples/form-examples.component'
import { AdvancedInvoiceComponent } from 'src/app/@kit/pages/advanced/invoice/invoice.component'
import { AdvancedPricingTablesComponent } from 'src/app/@kit/pages/advanced/pricing-tables/pricing-tables.component'
import { AdvancedColorsComponent } from 'src/app/@kit/pages/advanced/colors/colors.component'

const COMPONENTS = [
  AdvancedMailTemplatesComponent,
  AdvancedTypographyComponent,
  AdvancedUtilitiesComponent,
  AdvancedGridComponent,
  AdvancedFormExamplesComponent,
  AdvancedInvoiceComponent,
  AdvancedPricingTablesComponent,
  AdvancedColorsComponent,
]

@NgModule({
  imports: [
    SharedModule,
    AdvancedRouterModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetsComponentsModule,
  ],
  declarations: [...COMPONENTS],
})
export class AdvancedModule {}
