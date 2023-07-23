import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { DateTime } from 'luxon';
import { ITableTimeList } from '../../interfaces/table-time-list';
import { OneWeekRangeSelectionStrategyService } from '../../services/one-week-range-selection-strategy.service';

@Component({
  selector: 'app-table-time-list',
  templateUrl: './table-time-list.component.html',
  styleUrls: ['./table-time-list.component.scss'],
    providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: OneWeekRangeSelectionStrategyService,
    },
  ],
})
  
export class TableTimeListComponent implements OnInit {
  public displayedColumns: string[] = ['timeFrame', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  public dataSource: ITableTimeList[] = [];
  public rangeForm = new FormGroup({
    startDate: new FormControl<Date | null>(new Date('2023-07-09T05:00:00.000Z')),
    endDate: new FormControl<Date | null>(new Date('2023-07-15T05:00:00.000Z'))
  });

  private originalData: any[] | null = []

  @Input() public set tableTimeList(timeList: any[] | null) {
    this.originalData = timeList;
    this.transformData(timeList);
  }

  public myFilterPicker = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // ensure that you can only choose on Sundays
    return day === 0;
  };

  ngOnInit(): void {
    this.rangeForm.valueChanges.subscribe(() => {
      this.transformData(this.originalData);
    })
  }
  
  // Function to transform and filter the array
  private transformData(data: any[] | null): void {
    if (!data) {
      this.dataSource = [];
      return;
    }

    const { startDate, endDate } = this.rangeForm.value;
    const filterData = this.filterDataByDate(data, startDate as Date, endDate as Date);

    const transformedData: any[] = Array.from({ length: 24 }, (_, i) => {
        const startTime = DateTime.fromObject({ hour: i }).toFormat('h:mm a');
        const endTime = DateTime.fromObject({ hour: i + 1 }).toFormat('h:mm a');
        const timeFrame = startTime + ' - ' + endTime;
        return {
          timeFrame,
          sunday: 0,
          monday: 0,
          tuesday: 0,
          wednesday: 0,
          thursday: 0,
          friday: 0,
          saturday: 0,
        };
    });

    filterData.forEach(item => {
      const date = DateTime.fromISO(item.date_time, { zone: "utc" });    
      const dayOfWeek = date.weekdayLong?.toLowerCase() || "";
      const hour = date.hour;     
      transformedData[hour][dayOfWeek] = item.display_value === 0 ? "0": item.display_value;
    });
    

    this.dataSource = transformedData;
  }
  
  private filterDataByDate(data: any[] | null, startDate: Date, endDate: Date): any[] {
    if (!data) {
      return [];
    }

    const startDateUTC = DateTime.fromJSDate(startDate, { zone: "utc" }).set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
    const endDateUTC = DateTime.fromJSDate(endDate, { zone: "utc" }).set({ hour: 23, minute: 59, second: 59, millisecond: 59 });

    const filteredData = data.filter(item => {
      const date = DateTime.fromJSDate(new Date(item.date_time), { zone: "utc" });
      return date >= startDateUTC && date <= endDateUTC;
    });

    return filteredData;
}

}

