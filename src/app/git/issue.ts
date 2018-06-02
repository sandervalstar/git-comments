import { GitUser } from './git-user';

export class Issue {
  constructor(public readonly id: string,
              public readonly title: string,
              public readonly body: string,
              public readonly created_at: string,
              public readonly user: GitUser,
              public readonly comments: string,
              public readonly comments_url: string) {
  }

  public getLineNumber(): number {
    const match = this.title.match(/^Reader-issue L([0-9]+)($|-L[0-9]+)/i);
    if (match && match.length > 1) {
      return +match[1];
    }
  }


  public static getTestIssues() {
    return JSON.parse(`[
  {
    "url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/14",
    "repository_url": "https://api.github.com/repos/sandervalstar/java-spring-basics",
    "labels_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/14/labels{/name}",
    "comments_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/14/comments",
    "events_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/14/events",
    "html_url": "https://github.com/sandervalstar/java-spring-basics/issues/14",
    "id": 327581721,
    "node_id": "MDU6SXNzdWUzMjc1ODE3MjE=",
    "number": 14,
    "title": "Reader-issue L831",
    "user": {
      "login": "sandervalstar",
      "id": 28596489,
      "node_id": "MDQ6VXNlcjI4NTk2NDg5",
      "avatar_url": "https://avatars1.githubusercontent.com/u/28596489?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sandervalstar",
      "html_url": "https://github.com/sandervalstar",
      "followers_url": "https://api.github.com/users/sandervalstar/followers",
      "following_url": "https://api.github.com/users/sandervalstar/following{/other_user}",
      "gists_url": "https://api.github.com/users/sandervalstar/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sandervalstar/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sandervalstar/subscriptions",
      "organizations_url": "https://api.github.com/users/sandervalstar/orgs",
      "repos_url": "https://api.github.com/users/sandervalstar/repos",
      "events_url": "https://api.github.com/users/sandervalstar/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sandervalstar/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-05-30T05:44:53Z",
    "updated_at": "2018-05-30T05:44:53Z",
    "closed_at": null,
    "author_association": "OWNER",
    "body": "https://github.com/sandervalstar/java-spring-basics/blob/ca747a928ad6743be43048faf59fb6e24d02a2ce/index.html#L831 \\n\\ntest"
  },
  {
    "url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/13",
    "repository_url": "https://api.github.com/repos/sandervalstar/java-spring-basics",
    "labels_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/13/labels{/name}",
    "comments_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/13/comments",
    "events_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/13/events",
    "html_url": "https://github.com/sandervalstar/java-spring-basics/issues/13",
    "id": 327581719,
    "node_id": "MDU6SXNzdWUzMjc1ODE3MTk=",
    "number": 13,
    "title": "Reader-issue L831",
    "user": {
      "login": "sandervalstar",
      "id": 28596489,
      "node_id": "MDQ6VXNlcjI4NTk2NDg5",
      "avatar_url": "https://avatars1.githubusercontent.com/u/28596489?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sandervalstar",
      "html_url": "https://github.com/sandervalstar",
      "followers_url": "https://api.github.com/users/sandervalstar/followers",
      "following_url": "https://api.github.com/users/sandervalstar/following{/other_user}",
      "gists_url": "https://api.github.com/users/sandervalstar/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sandervalstar/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sandervalstar/subscriptions",
      "organizations_url": "https://api.github.com/users/sandervalstar/orgs",
      "repos_url": "https://api.github.com/users/sandervalstar/repos",
      "events_url": "https://api.github.com/users/sandervalstar/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sandervalstar/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-05-30T05:44:53Z",
    "updated_at": "2018-05-30T05:44:53Z",
    "closed_at": null,
    "author_association": "OWNER",
    "body": "https://github.com/sandervalstar/java-spring-basics/blob/ca747a928ad6743be43048faf59fb6e24d02a2ce/index.html#L831 \\n\\ntest"
  },
  {
    "url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/12",
    "repository_url": "https://api.github.com/repos/sandervalstar/java-spring-basics",
    "labels_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/12/labels{/name}",
    "comments_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/12/comments",
    "events_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/12/events",
    "html_url": "https://github.com/sandervalstar/java-spring-basics/issues/12",
    "id": 327581717,
    "node_id": "MDU6SXNzdWUzMjc1ODE3MTc=",
    "number": 12,
    "title": "Reader-issue L831",
    "user": {
      "login": "sandervalstar",
      "id": 28596489,
      "node_id": "MDQ6VXNlcjI4NTk2NDg5",
      "avatar_url": "https://avatars1.githubusercontent.com/u/28596489?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sandervalstar",
      "html_url": "https://github.com/sandervalstar",
      "followers_url": "https://api.github.com/users/sandervalstar/followers",
      "following_url": "https://api.github.com/users/sandervalstar/following{/other_user}",
      "gists_url": "https://api.github.com/users/sandervalstar/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sandervalstar/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sandervalstar/subscriptions",
      "organizations_url": "https://api.github.com/users/sandervalstar/orgs",
      "repos_url": "https://api.github.com/users/sandervalstar/repos",
      "events_url": "https://api.github.com/users/sandervalstar/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sandervalstar/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-05-30T05:44:52Z",
    "updated_at": "2018-05-30T05:44:52Z",
    "closed_at": null,
    "author_association": "OWNER",
    "body": "https://github.com/sandervalstar/java-spring-basics/blob/ca747a928ad6743be43048faf59fb6e24d02a2ce/index.html#L831 \\n\\ntest"
  },
  {
    "url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/11",
    "repository_url": "https://api.github.com/repos/sandervalstar/java-spring-basics",
    "labels_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/11/labels{/name}",
    "comments_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/11/comments",
    "events_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/11/events",
    "html_url": "https://github.com/sandervalstar/java-spring-basics/issues/11",
    "id": 327581629,
    "node_id": "MDU6SXNzdWUzMjc1ODE2Mjk=",
    "number": 11,
    "title": "Reader-issue L834-L835",
    "user": {
      "login": "sandervalstar",
      "id": 28596489,
      "node_id": "MDQ6VXNlcjI4NTk2NDg5",
      "avatar_url": "https://avatars1.githubusercontent.com/u/28596489?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sandervalstar",
      "html_url": "https://github.com/sandervalstar",
      "followers_url": "https://api.github.com/users/sandervalstar/followers",
      "following_url": "https://api.github.com/users/sandervalstar/following{/other_user}",
      "gists_url": "https://api.github.com/users/sandervalstar/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sandervalstar/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sandervalstar/subscriptions",
      "organizations_url": "https://api.github.com/users/sandervalstar/orgs",
      "repos_url": "https://api.github.com/users/sandervalstar/repos",
      "events_url": "https://api.github.com/users/sandervalstar/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sandervalstar/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-05-30T05:44:24Z",
    "updated_at": "2018-05-30T05:44:24Z",
    "closed_at": null,
    "author_association": "OWNER",
    "body": "https://github.com/sandervalstar/java-spring-basics/blob/ca747a928ad6743be43048faf59fb6e24d02a2ce/index.html#L834-L835 \\n\\ntest"
  },
  {
    "url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/10",
    "repository_url": "https://api.github.com/repos/sandervalstar/java-spring-basics",
    "labels_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/10/labels{/name}",
    "comments_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/10/comments",
    "events_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/10/events",
    "html_url": "https://github.com/sandervalstar/java-spring-basics/issues/10",
    "id": 327581573,
    "node_id": "MDU6SXNzdWUzMjc1ODE1NzM=",
    "number": 10,
    "title": "Reader-issue L793",
    "user": {
      "login": "sandervalstar",
      "id": 28596489,
      "node_id": "MDQ6VXNlcjI4NTk2NDg5",
      "avatar_url": "https://avatars1.githubusercontent.com/u/28596489?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sandervalstar",
      "html_url": "https://github.com/sandervalstar",
      "followers_url": "https://api.github.com/users/sandervalstar/followers",
      "following_url": "https://api.github.com/users/sandervalstar/following{/other_user}",
      "gists_url": "https://api.github.com/users/sandervalstar/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sandervalstar/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sandervalstar/subscriptions",
      "organizations_url": "https://api.github.com/users/sandervalstar/orgs",
      "repos_url": "https://api.github.com/users/sandervalstar/repos",
      "events_url": "https://api.github.com/users/sandervalstar/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sandervalstar/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-05-30T05:44:04Z",
    "updated_at": "2018-05-30T05:44:04Z",
    "closed_at": null,
    "author_association": "OWNER",
    "body": "https://github.com/sandervalstar/java-spring-basics/blob/ca747a928ad6743be43048faf59fb6e24d02a2ce/index.html#L793 \\n\\ntest"
  },
  {
    "url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/9",
    "repository_url": "https://api.github.com/repos/sandervalstar/java-spring-basics",
    "labels_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/9/labels{/name}",
    "comments_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/9/comments",
    "events_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/9/events",
    "html_url": "https://github.com/sandervalstar/java-spring-basics/issues/9",
    "id": 327581464,
    "node_id": "MDU6SXNzdWUzMjc1ODE0NjQ=",
    "number": 9,
    "title": "Reader-issue L789-L790",
    "user": {
      "login": "sandervalstar",
      "id": 28596489,
      "node_id": "MDQ6VXNlcjI4NTk2NDg5",
      "avatar_url": "https://avatars1.githubusercontent.com/u/28596489?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sandervalstar",
      "html_url": "https://github.com/sandervalstar",
      "followers_url": "https://api.github.com/users/sandervalstar/followers",
      "following_url": "https://api.github.com/users/sandervalstar/following{/other_user}",
      "gists_url": "https://api.github.com/users/sandervalstar/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sandervalstar/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sandervalstar/subscriptions",
      "organizations_url": "https://api.github.com/users/sandervalstar/orgs",
      "repos_url": "https://api.github.com/users/sandervalstar/repos",
      "events_url": "https://api.github.com/users/sandervalstar/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sandervalstar/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-05-30T05:43:23Z",
    "updated_at": "2018-05-30T05:43:23Z",
    "closed_at": null,
    "author_association": "OWNER",
    "body": "https://github.com/sandervalstar/java-spring-basics/blob/ca747a928ad6743be43048faf59fb6e24d02a2ce/index.html#L789-L790 \\n\\ntest"
  },
  {
    "url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/8",
    "repository_url": "https://api.github.com/repos/sandervalstar/java-spring-basics",
    "labels_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/8/labels{/name}",
    "comments_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/8/comments",
    "events_url": "https://api.github.com/repos/sandervalstar/java-spring-basics/issues/8/events",
    "html_url": "https://github.com/sandervalstar/java-spring-basics/issues/8",
    "id": 327581258,
    "node_id": "MDU6SXNzdWUzMjc1ODEyNTg=",
    "number": 8,
    "title": "Reader-issue L697",
    "user": {
      "login": "sandervalstar",
      "id": 28596489,
      "node_id": "MDQ6VXNlcjI4NTk2NDg5",
      "avatar_url": "https://avatars1.githubusercontent.com/u/28596489?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sandervalstar",
      "html_url": "https://github.com/sandervalstar",
      "followers_url": "https://api.github.com/users/sandervalstar/followers",
      "following_url": "https://api.github.com/users/sandervalstar/following{/other_user}",
      "gists_url": "https://api.github.com/users/sandervalstar/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sandervalstar/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sandervalstar/subscriptions",
      "organizations_url": "https://api.github.com/users/sandervalstar/orgs",
      "repos_url": "https://api.github.com/users/sandervalstar/repos",
      "events_url": "https://api.github.com/users/sandervalstar/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sandervalstar/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-05-30T05:42:03Z",
    "updated_at": "2018-05-30T05:42:03Z",
    "closed_at": null,
    "author_association": "OWNER",
    "body": "https://github.com/sandervalstar/java-spring-basics/blob/ca747a928ad6743be43048faf59fb6e24d02a2ce/index.html#L697 \\n\\ntest"
  }
]`);
  }

}
