import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import firebase from 'firebase/compat/app';
import { environment } from './environments/environment';
import { enableDebugTools } from '@angular/platform-browser';
import { ApplicationRef } from '@angular/core';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((module) =>
    enableDebugTools(module.injector.get(ApplicationRef).components[0])
  )
  .catch((err) => console.error(err));
