import { TranslateLoader } from "@ngx-translate/core";
import { Observable, of, forkJoin } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

class JnumTranslateLoader implements TranslateLoader {
    constructor(private http: HttpClient,
        public resources: { prefix: string, suffix: string }[] = [{
            prefix: '/assets/i18n/',
            suffix: '.json'
        }]) { }

    /**
     * Gets the translations from the server
     * @param lang
     * @returns {any}
     */
    public getTranslation(lang: string): any {
        return forkJoin(this.resources.map(config => {
            return this.http.get(`${config.prefix}${lang}${config.suffix}`);
        })).pipe(map(response => {
            return response.reduce((a, b) => {
                return Object.assign(a, b);
            });
        }));
    }
}

// AoT requires an exported function for factories
export function JnumTranslateLoaderFactory(http: HttpClient) {
    return new JnumTranslateLoader(http, [
        { prefix: './assets/i18n/', suffix: '.json' },
        { prefix: './assets/i18n/custom-', suffix: '.json' }
    ]);
}
