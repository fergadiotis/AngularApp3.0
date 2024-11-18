import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Schedule } from '../models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private schedules: Schedule[] = [];
  private schedulesSubject = new BehaviorSubject<Schedule[]>([]);

  getSchedules(): Observable<Schedule[]> {
    return this.schedulesSubject.asObservable();
  }

  addSchedule(schedule: Schedule): void {
    schedule.id = this.schedules.length + 1;
    this.schedules.push(schedule);
    this.schedulesSubject.next([...this.schedules]);
  }

  deleteSchedule(id: number): void {
    this.schedules = this.schedules.filter(schedule => schedule.id !== id);
    this.schedulesSubject.next([...this.schedules]);
  }
}
