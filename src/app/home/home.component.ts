import { Component, OnInit, Input } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

    currentUser: User;
    users: User[] = [];
    heroes = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    addHero(newHero: string, date: Date) {

        if (newHero) {

            this.heroes.push({date: new Date().toLocaleString(),message: newHero});
    
        }
        
      }
    
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}