import { Component, OnInit } from '@angular/core';
import { JsonTestService } from '../../services/json-test.service';
import { Element } from '../../models/model';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  public elements: Element[];

  constructor(private jsonTestService: JsonTestService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.jsonTestService.getData().subscribe(data => {
      console.log(data);
      this.elements = data;
    });
  }
}
