import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cursos: string[] = ['java', 'php', 'C#'];
  links: any[] = ['http://java.com', 'http://php.com', 'http://docs.microsoft.com/pt-br/dotnet/articles/csharp/programming-guide/index'];

  constructor() {

    for (let i=0 ; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }
    for (let j=0; j<this.links.length; j++){
      let link = this.links[j];
    }

  }

  ngOnInit() {
  }

}
