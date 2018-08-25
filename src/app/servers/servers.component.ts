import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css'],
  // styles: [ '.online' {color: red;}],
  // styles: [.online {color:red;}],
})
export class ServersComponent implements OnInit {
  allNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = 'TestServer';
  serverCreated=false;
  servers = ['Testserver','Testserver 2']
  constructor() {
  	setTimeout(()=>{
  		this.allNewServer = true;
  	},2000);
   }

  ngOnInit() {
  }
  onCreateServer(){
  	this.serverCreated=true;
    this.servers.push(this.serverName);
  	this.serverCreationStatus="Server was created! Name is"+ this.serverName;
  }
  onUpdateServerName(event: any){
  	this.serverName=(<HTMLInputElement>event.target).value;
  }

}
