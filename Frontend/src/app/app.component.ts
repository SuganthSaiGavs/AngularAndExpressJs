import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendaccessService } from './backendaccess.service';

 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title='angularexpress'
  userList:any=[];
  data:any;
  expresponse:string='';
  constructor(private http:HttpClient, private baccess:BackendaccessService){

  }

  getAllUsers(){
    this.userList=this.baccess.getAllUsers();
  };

  addUser(udata :any){
    this.expresponse=this.baccess.addUser(udata);
    }

    deleteUser(uid: string) {
      this.http
        .delete(`http://localhost:4000/delete/${uid}`)
        .subscribe(
          (response) => {
            console.log(`User with ID ${uid} deleted successfully.`,response);
            this.expresponse = `User with ID ${uid} deleted successfully.`;
            // Optionally, you can remove the deleted user from your userList if needed.
             //this.userList = this.userList.filter((user) => user.userid !== uid);
          },
          (error) => {
            console.error('Error deleting user:', error);
            this.expresponse = 'Error deleting user: ' + error.message;
          }
        );
    }
    
        
    
  
}