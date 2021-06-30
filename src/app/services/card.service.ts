import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl: string;

  constructor(private http: HttpClient) { 
    // L'url où on va récupérer nos données
    this.baseUrl= "http://localhost:3000/heading/";
  }

  // Récupère toute les rubrique
  getAll() {
    return this.http.get<Card[]>(this.baseUrl , {observe : "response"});
  }

  // Récupère une rubrique grâce à son id
  getById(id : number){
    return this.http.get<Card>(this.baseUrl + id);
  }

  // Récupère une rubrique grâce au nom du parent
  getByHeadingName(name : string){
    return this.http.get<Card>(this.baseUrl + name)
  }

  // Créer une rubrique , pour se faire il faut envoyé à cette méthode un objet de type Card
  create(card: Card){
    return this.http.post(this.baseUrl, card);
  }

  // Edit une rubrique , pour se faire il faut envoyé à cette méthode un objet de type Card
  update(card: Card){
    return this.http.put(this.baseUrl + card.id, card);
  }

  // Supprime une rubrique , pour se faire il faut envoyé à cette méthode un objet de type Card
  delete(card : Card){
    return this.http.delete(this.baseUrl + card.id);
  }
}
