export class AuthUser {
  constructor(public readonly uid: string,
              public readonly displayName: string,
              public readonly email: string,
              public readonly avatarUrl: string) {
  }
}
