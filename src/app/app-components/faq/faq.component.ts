import { Component, OnInit } from '@angular/core';

interface faqItem {
  question: string,
  category: string,
  answer: string
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  faqItem: faqItem;
  faqList: faqItem[];

  ngOnInit() {
    this.faqList = new Array<faqItem>();
    this.testGenerator();
  }

  testGenerator() {
    this.addItem('Test Question', 'Category1', "Test Answer");
    this.addItem('Test Question', 'Category1', 'Test Answer');
    this.addItem('Test Question', 'Category1', 'Test Answer');
    this.addItem('Test Question', 'Category1', 'Test Answer');
    this.addItem('Test Question', 'Category1', 'Test Answer');
  }

  addItem(question:string, category: string, answer: string) {

    let faqItem: faqItem = { question: '', category: '', answer: '' };  // init
    
    faqItem.question = question;
    faqItem.category = category;
    faqItem.answer = answer;
    
    this.faqList.push(faqItem);
  }
  

}
