import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authInterceptor} from '@/app/interceptors/auth.interceptor';
import {apiUrlInterceptor} from '@/app/interceptors/api-url.interceptor';
import {httpErrorResponseInterceptor} from '@/app/interceptors/http-error-response.interceptor';

ModuleRegistry.registerModules([AllCommunityModule]);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([apiUrlInterceptor, authInterceptor, httpErrorResponseInterceptor])),
  ]
};
