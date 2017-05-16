import { InjectionToken } from '@angular/core';
import { AppConfig } from './app.config';

export interface AppConfig {
    API_ENDPOINT: string;
    API_ENDPOINT_PERSON: string;
}

export const APP_ENDPOINTS: AppConfig = {
    API_ENDPOINT: 'https://parseapi.back4app.com/classe/',
    API_ENDPOINT_PERSON: `${this.API_ENDPOINT} + Person`
}

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');