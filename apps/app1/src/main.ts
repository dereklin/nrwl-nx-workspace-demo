import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { hmrModule } from '@angularclass/hmr';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.production) {
  enableProdMode();
}

if (environment.hmr) {
  if (module['hot']) {
    bootstrap().then((ngModuleRef: any) => {
      // `module` global ref for webpack hmr
      return hmrModule(ngModuleRef, module);
    });
  } else {
    // since this will never run on production, console log is used until we adopt a better logger
    console.error('HMR is not enabled for webpack-dev-server.');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap();
}
