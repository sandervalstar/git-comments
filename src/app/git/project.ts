import { assertDefined } from '../util/assert.util';

export class Project {

  constructor(public readonly owner: string,
              public readonly repo: string) {
    console.log('project', owner, repo);

    assertDefined(owner, 'project owner');
    assertDefined(repo, 'project repo');
  }

  public static createFromJsObject(p: any) {
    return new Project(p.owner, p.repo);
  }

  public static createFromJson(json: string): Project {
    const p = JSON.parse(json) as Project;
    return Project.createFromJsObject(p);
  }

}
