import { Injectable } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { DateRange, MatDateRangeSelectionStrategy } from '@angular/material/datepicker';

@Injectable({
  providedIn: 'root'
})
export class OneWeekRangeSelectionStrategyService<D> implements MatDateRangeSelectionStrategy<D> {

  constructor(private _dateAdapter: DateAdapter<D>) {}

  selectionFinished(date: D | null): DateRange<D> {
    return this._createOneWeekRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createOneWeekRange(activeDate);
  }

  private _createOneWeekRange(date: D | null): DateRange<D> {
    if (date) {
      const start = this._dateAdapter.addCalendarDays(date, 0);
      const end = this._dateAdapter.addCalendarDays(date, 6);
      return new DateRange<D>(start, end);
    }

    return new DateRange<D>(null, null);
  }
}
