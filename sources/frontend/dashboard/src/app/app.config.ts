import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
    API_BASE_URL: string;
    API_PERSON: string
}

export const AppConfig: IAppConfig = {    
    API_BASE_URL: "https://parseapi.back4app.com/classes/",
    API_PERSON : this.API_BASE_URL + "Person"
};