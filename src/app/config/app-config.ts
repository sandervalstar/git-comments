import { Project } from '../git/project';
import { assertDefined } from '../util/assert.util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  public readonly project;

  constructor() {
    const config = (window as any).GIT_COMMENTS_CONFIG as AppConfig;

    assertDefined(config.project, 'project');
    this.project = Project.createFromJsObject(config.project);
  }

}
