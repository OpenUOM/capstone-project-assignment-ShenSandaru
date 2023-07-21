import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:8080'
}
    if(environment.production == false){
      this.ROOT_URL = 'test'
    }else{
      this.ROOT_URL = 'api'
    }
  }

  initializeDB(){
    return this.http.get(`/api/dbinitialize`)
    return this.http.get(`/${this.ROOT_URL}/dbinitialize`)
  }

  getTeacherData(){
    return this.http.get(`/${this.ROOT_URL}/listTeachers`)
  }

  getTeacherData() {
    return this.http.get('/api/listTeachers')
}
  getStudentData(){
    return this.http.get(`/api/listStudents`)
    return this.http.get(`/${this.ROOT_URL}/listStudents`)
  }

  getOneStudentData(payload: Object){
    return this.http.post(`/api/getStudentInfo`, payload)
    return this.http.post(`/${this.ROOT_URL}/getStudentInfo`, payload)
  }

  getOneTeacherData(payload: Object) {
    return this.http.post('/api/getTeacherInfo', payload)
}
  getOneTeacherData(payload: Object){
    return this.http.post(`/${this.ROOT_URL}/getTeacherInfo`, payload)
  }