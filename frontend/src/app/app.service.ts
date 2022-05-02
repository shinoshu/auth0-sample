import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUser(id: string) {
    return this.http.get<any>(`${this.baseURL}/users/${id}`);
  }

  getUsers() {
    return this.http.get<any>(`${this.baseURL}/users`);
  }

  createUser(user: any) {
    return this.http.post<any>(`${this.baseURL}/users`, user);
  }

  updateUser(id: string, user: any) {
    return this.http.put<any>(`${this.baseURL}/users/${id}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete<any>(`${this.baseURL}/users/${id}`);
  }

  getUserOrganizations(id: string) {
    return this.http.get<any>(`${this.baseURL}/users/${id}/organizations`);
  }

  getOrganization(id: string) {
    return this.http.get<any>(`${this.baseURL}/organizations/${id}`);
  }

  getOrganizations() {
    return this.http.get<any>(`${this.baseURL}/organizations`);
  }

  createOrganization(organization: any) {
    return this.http.post<any>(`${this.baseURL}/organizations`, organization);
  }

  updateOrganization(id: string, organization: any) {
    // prettier-ignore
    return this.http.post<any>(`${this.baseURL}/organizations/${id}`, organization);
  }

  deleteOrganization(id: string) {
    return this.http.delete<any>(`${this.baseURL}/organizations/${id}`);
  }

  getInvitations(id: string) {
    // prettier-ignore
    return this.http.get<any>(`${this.baseURL}/organizations/${id}/invitations`);
  }

  createInvitation(id: string, invitation: any) {
    // prettier-ignore
    return this.http.post<any>(`${this.baseURL}/organizations/${id}/invitations`, invitation);
  }
}
