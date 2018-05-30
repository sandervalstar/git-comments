export class Project {

  constructor(public readonly owner: string,
              public readonly repo: string) {
    console.log('project', owner, repo);

    Project.assertDefined(owner, 'owner');
    Project.assertDefined(repo, 'repo');
  }

  public static createFromJson(json: string): Project {
    const p = JSON.parse(json) as Project;
    return new Project(p.owner, p.repo);
  }

  private static assertDefined(subject, name) {
    console.log('sub', subject);
    if (subject == null) {
      throw(new Error(`project ${name} not defined`));
    }
  }
}
