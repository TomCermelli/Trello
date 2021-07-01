import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Track } from '../model/track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  baseUrl: string;

  constructor(private http: HttpClient) { 
    // L'url où on va récupérer nos données
    this.baseUrl= "http://localhost:3000/track/";
  }

  // Récupère tous les tableaux
  getAll() {
    return this.http.get<Track[]>(this.baseUrl , {observe : "response"});
  }

  // Récupère un tableau grâce à son id
  getById(id : number){
    return this.http.get<Track>(this.baseUrl + id);
  }

  // Créer un tableau , pour se faire il faut envoyé à cette méthode un objet de type Track
  create(track: Track){
    return this.http.post(this.baseUrl, track);
  }

  // Edit un tableau , pour se faire il faut envoyé à cette méthode un objet de type Track
  update(track: Track){
    return this.http.put(this.baseUrl + track.id, track);
  }

  // Supprime un tableau , pour se faire il faut envoyé à cette méthode un objet de type Track
  delete(track : Track){
    return this.http.delete(this.baseUrl + track.id);
  }

}
