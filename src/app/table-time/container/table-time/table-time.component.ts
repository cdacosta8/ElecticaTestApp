import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TableTimeService } from '../../services/table-time.service';

@Component({
  selector: 'app-table-time',
  templateUrl: './table-time.component.html',
  styleUrls: ['./table-time.component.scss']
})
export class TableTimeComponent { 

  constructor(private tableTimeService: TableTimeService) { }


  public tableListResults$: Observable<any[]> = this.tableTimeService.getData();


}
