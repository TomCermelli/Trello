import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heading } from '../model/heading';

@Injectable({
  providedIn: 'root'
})
export class HeadingService {
 
  baseUrl: string;
  headings: any = {} as Heading;

  constructor(private http: HttpClient) { 
    // L'url où on va récupérer nos données
    this.baseUrl= "http://localhost:3000/heading/";
  }

  // Récupère toute les rubrique
  getAll() {
    return this.http.get<Heading[]>(this.baseUrl , {observe : "response"});
  }

  // Récupère une rubrique grâce à son id
  getById(id : number){
    return this.http.get<Heading>(this.baseUrl + id);
  }

  // Créer une rubrique , pour se faire il faut envoyé à cette méthode un objet de type Heading
  create(heading: Heading){
    return this.http.post(this.baseUrl, heading);
  }

  // Edit une rubrique , pour se faire il faut envoyé à cette méthode un objet de type Heading
  update(heading: Heading){
    return this.http.put(this.baseUrl + heading.id, heading);
  }

  // Supprime une rubrique , pour se faire il faut envoyé à cette méthode un objet de type Heading
  delete(heading : Heading){
    return this.http.delete(this.baseUrl + heading.id);
  }

  // Cette méthode permet de récupérer toute nos rubriques 
  populateHeading(): Heading[] {
    // On récupère toute nos rubriques grâce au service crée au préalable avec le méthode getAll()
    // Celui-ci nous retourne un observable c'est pour quoi on chaine avec le .subscribe
    this.getAll().subscribe((res : any) => {
      // Grâce à toute les données récupérées on peut maintenant remplir le tableau de Heading crée plus haut
      this.headings = res.body;
    })
    return this.headings
  }

}
