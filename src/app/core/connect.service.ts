import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class ConnectService {
  constructor(private http: HttpClient) { }

  public baseurl:any = 'http://sonoorarecords.com.br/api/rest.php';
  public data:any;

  httpOptions = {
    headers: new HttpHeaders()
  }

  getAllReleases(): Observable<any> {
    return this.http.post<any>(this.baseurl, {acao: 'get-all-releases'}, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandl)
    )
  }

  getReleaseById(): Observable<any> {
    return this.http.post<any>(this.baseurl, {acao: 'get-release'}, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandl)
    )
  }

  getAllArtists(): Observable<any> {
    return this.http.post<any>(this.baseurl, {acao: 'get-all-artists'}, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandl)
    )
  }

  getArtist(id): Observable<any> {
    return this.http.post<any>(this.baseurl, {acao: 'get-artist', id: id}, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandl)
    )
  }

  getPerfilPicture(id): Observable<any> {
    return this.http.post<any>(this.baseurl, {acao: 'get-perfil-picture', id: id}, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandl)
    )
  }

  getPerfilPictureByList(list): Observable<any> {
    return this.http.post<any>(this.baseurl, {acao: 'get-perfil-picture-by-list', list: list}, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandl)
    )
  }

  getReleasePictureByList(list): Observable<any> {
    return this.http.post<any>(this.baseurl, {acao: 'get-release-picture-by-list', list: list}, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandl)
    )
  }

  getArtistPicture(id): Observable<any> {
    return this.http.post<any>(this.baseurl, {acao: 'get-artist-picture', id: id}, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandl)
    )
  }

  getReleasePicture(id): Observable<any> {
    return this.http.post<any>(this.baseurl, {acao: 'get-release-picture', id: id}, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandl)
    )
  }

  getAllProducts(): Observable<any> {
    return this.http.post<any>(this.baseurl, {acao: 'get-all-products'}, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandl)
    )
  }

  getProduct(): Observable<any> {
    return this.http.post<any>(this.baseurl, {acao: 'get-product'}, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandl)
    )
  }

  sendMail(params): Observable<any> {
    return this.http.post<any>(this.baseurl, {acao: 'send-mail', params: params}, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandl)
    )
  }

  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}