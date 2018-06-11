import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private document: Document;
  private offset = 0;

  constructor(private http: HttpClient) {
    this.document = window.document;
    console.log('created document service', document.childElementCount, document.firstElementChild);

    this.document.body.onclick = e => {
      console.log('iframe clicked', e.target, this.getLineNumber(e.toElement));

    }
  }

  setOffset(offset: number) {
    this.offset = offset;
  }

  setDocument(url: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'text/html');

    this.http.get(url, {headers: headers, responseType: 'text'}).subscribe(r => {
      // console.log('r', r);
      let doc = document.implementation.createHTMLDocument('blaat');

      doc.firstElementChild.innerHTML = r;

      this.document = doc;
    });

  }

  doSomething() {

  }

  getLineNumber(element: Element): number {
    console.log('ss', element.outerHTML);
    const lines = this.document.firstElementChild.outerHTML.split('\n');
    for (var i = 0; i < lines.length; i++) {
      const matches = [];
      if (lines[i].indexOf(element.outerHTML.split('\n')[0]) > -1) {
        console.log('asdf', element.outerHTML, 'line', lines[i])
        matches.push(lines[i]);
      }

      matches.forEach(m => {
        console.log('match', m, '\nelement', element.parentElement.outerHTML);
      })
      // var index = lines[i].indexOf("data-index=\"" + id + "\"");
      // if (index !== -1) return i;// + headLength + 5;
    }
    return -1;
  }
}
