import { ApplicationConfig, ɵprovideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    ɵprovideZonelessChangeDetection(),
    provideRouter(routes),
    CommonModule,
    provideHttpClient(),
    provideAnimations()
  ]
};
