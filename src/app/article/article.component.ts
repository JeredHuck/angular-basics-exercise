import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  title = 'Ocarina of Time';
  content = 'Kokiri Forest, Deku Tree, Master Sword, blah blah blah';
  isTechRelated = false;
}
