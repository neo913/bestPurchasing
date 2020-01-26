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

  faqItem: faqItem;
  faqList: faqItem[];
  category = '';

  constructor() { }

  ngOnInit() {
    this.faqList = new Array<faqItem>();
    this.testGenerator();
    this.category = '';
  }

  testGenerator() {
    this.addItem('How I can access to my account?', 'Account', "Sorry. The menu is not available yet.");
    this.addItem('Where is my package?', 'Shop', 'Sorry. We are woring on it.');
    this.addItem('What is your phone number?', 'Contact', 'Please check Contact page.');
    this.addItem('I cannot buy the product', 'Shop', 'Sorry. The page is in progress.');
    this.addItem('Your logo looks silly.', 'Web', 'Sorry. I did my best. :)');
  }

  addItem(question:string, category: string, answer: string) {

    let faqItem: faqItem = { question: '', category: '', answer: '' };  // init
    
    faqItem.question = question;
    faqItem.category = category;
    faqItem.answer = answer;
    
    this.faqList.push(faqItem);
  }

  categoryFilter(category: string) {
    if(!this.category) { return true;
    } else {
      if(this.category == category) { return true; }
      else {return false;}
    }
  }
}
