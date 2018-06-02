export class GitUser {
  constructor(public readonly id: string,
              public readonly login: string,
              public readonly avatar_url: string,
              public readonly html_url: string) {
  }
}
