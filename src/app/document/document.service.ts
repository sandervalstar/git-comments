import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private doc: Document;
  private elements: NodeListOf<Element>;
  private lines: string[];
  private offset = 0;

  constructor(private http: HttpClient) {
    console.log('created document service', document.childElementCount, document.firstElementChild);
  }

  setDocument(doc: Document) {
    this.doc = doc;

    this.elements = this.doc.getElementsByTagName('*');
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].setAttribute('data-index', `${i}`);
    }

    this.lines = this.doc.firstElementChild.outerHTML.split('\n');

    this.doc.body.onclick = e => {
      const lineNr = this.getLineNumber(e.toElement);
      console.log('iframe clicked', e.target, lineNr, this.getLineNumberEnd(e.toElement, lineNr));

    };
  }

  setOffset(offset: number) {
    this.offset = offset;
  }

  getLineNumber(element: Element): number {
    for (let i = 0; i < this.lines.length; i++) {
      const index = this.lines[i].indexOf(`data-index="${element.getAttribute('data-index')}"`);
      if (index !== -1) {
        return i + this.offset;
      }
    }
    return -1;
  }

  getLineNumberEnd(element: Element, lineNumberStart: number): number {
    return lineNumberStart + element.outerHTML.split('\n').length - 1;
  }

}
