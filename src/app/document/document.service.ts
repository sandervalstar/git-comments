import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private doc: Document;
  private offset = 0;

  constructor(private http: HttpClient) {
    console.log('created document service', document.childElementCount, document.firstElementChild);
  }

  setDocument(doc: Document) {
    this.doc = doc;

    const elements = this.doc.getElementsByTagName("*");

    for (let i = 0; i < elements.length; i++) {
      elements[i].setAttribute('data-index', `${i}`);
    }

    this.doc.body.onclick = e => {
      console.log('iframe clicked', e.target, this.getLineNumber(e.toElement));

    };
  }

  setOffset(offset: number) {
    this.offset = offset;
  }

  getLineNumber(element: Element): number {
    const lines = this.doc.firstElementChild.outerHTML.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const index = lines[i].indexOf(`data-index="${element.getAttribute('data-index')}"`);
      if (index !== -1) {
        return i + this.offset;
      }
    }
    return -1;
  }
}
