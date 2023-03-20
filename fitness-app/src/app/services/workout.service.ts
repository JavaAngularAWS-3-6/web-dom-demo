import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from '../models/workout';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private favoriteWorkouts : Workout[] = [];


  constructor(private http : HttpClient) { }
  /**
   * get the workout from the spring backend
   */
  getWorkoutsAPI() : Observable<Workout[]>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Workout[]>("http://127.0.0.1:9000/workout", {headers: header});
  }
  /**
   * post a workout to the spring backend
   */
  postWorkoutAPI(workout : Workout) : Observable<Workout>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Workout>("http://127.0.0.1:9000/workout", workout, {headers: header});
  }
  addToFavorites(workout : Workout) : void{
    this.favoriteWorkouts.push(workout); 
  }
  getFavorites() : Workout[]{
    return this.favoriteWorkouts; 

  }
}