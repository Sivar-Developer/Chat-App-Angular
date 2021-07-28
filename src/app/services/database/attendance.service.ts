import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from '../ui/core.service';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }

  dashboard() {
    return this.http.get<any>(this.core.api_url + '/api/dashboard/attendance')
  }

  attendanceIndex(pageIndex: number) {
    return this.http.get<any>(this.core.api_url + `/api/attendance?page=${pageIndex}`)
  }

  attendanceDetails(id: any) {
    return this.http.get<any>(this.core.api_url + `/api/attendance/${id}`)
  }

  attendanceStore(value: { business_name: string, contact_person: string, turn_over_usd: number, phone_number: string, category: string, location: string }) {
    return this.http.post<any>(this.core.api_url + '/api/attendance', value)
  }

  attendanceUpdate(attendanceId: any, value: { business_name: string, contact_person: string, turn_over_usd: number, phone_number: string, category: string, location: string }) {
    return this.http.patch<any>(this.core.api_url + `/api/attendance/${attendanceId}`, value)
  }

  attendanceDelete(attendanceId: any, password: string) {
    return this.http.post(this.core.api_url + `/api/attendance/${attendanceId}/delete`, { password: password })
  }
}
