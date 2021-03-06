import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [UiModule, TemplatesModule, IconsModule],
})
export class CoreModule {}
