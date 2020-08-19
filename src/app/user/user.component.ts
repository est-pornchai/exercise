import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ViewChild ,Input} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {
    @ViewChild("agGrid",{static: false})agGrid : AgGridAngular;
    title = 'app'
    public gridApi
    public gridColumnApi
    
  
    //checkbox
    Check1 : boolean = false;
    Check2 : boolean = true;
  
    //file
    file : File = null
    fileN : any =''
    fileS : any =''
    sum :number = 0
  
    selectedAll:any
    addName : any
    addNo : any
    addOcc : any
    addBirth : any
    addAddress : any
    addPs : any
    addFilen : any
    addFiles : any
  
  
    defaultColDef = {
      resizable: true, width:120,};
  columnDefs = [
  {headerName: 'No', field: 'no',width:70,resizable: false},
  {headerName: 'Name', field: 'name'},
  {headerName: 'Occupation', field: 'occ'},
  {headerName: 'Birthdate', field: 'bd'},
  {headerName: 'Address', field: 'ad'},
  {headerName: 'PS', field: 'ps'},
  {headerName: 'File Name', field: 'filen'},
  {headerName: 'File Size', field: 'files'}
  ]
  
  rowData = [
      {no: 1, name: "Johny", occ: "Nut Seller",bd:" ",ad:" ",ps:" ",filen:" ",files:" "},
      {no: 2, name: "Smith", occ: "Nut Seller",bd:" ",ad:" ",ps:" ",filen:" ",files:" "},
      {no: 3, name: "Jinny", occ: "Nut Seller",bd:" ",ad:" ",ps:" ",filen:" ",files:" "},
      {no: 4, name: "Anthony", occ: "Nut Seller",bd:" ",ad:" ",ps:" ",filen:" ",files:" "}
  ]
  rowSelection='single'
  
  gridOption = {
      getRowNodeId : function(data){
      return data.no
  }
  }
  
  constructor (){}
  
  onSelectionChanged(event){
  if(event)
  this.selectedAll = this.gridApi.getSelectedRows();
  this.selectedAll = this.selectedAll.length === 1 ? this.selectedAll[0] : '';
  
  }
  
  register(){
  this.addName = this.selectedAll.name
  this.addNo = this.selectedAll.no
  this.addOcc = this.selectedAll.occ
  this.addBirth = this.selectedAll.bd
  this.addAddress = this.selectedAll.ad
  this.addPs = this.selectedAll.ps
  this.addFilen = this.fileN
  this.addFiles = this.fileS
  
  var rowNode = this.gridApi.getRowNode(this.selectedAll.no-1)
  var newData = {
      no:this.addNo,
      name:this.addName,
      occ:this.addOcc,
      bd:this.addBirth,
      ad:this.addAddress,
      ps:this.addPs,
      filen:this.addFilen,
      files:this.addFiles,
  };
  
  rowNode.updateData(newData)
  this.Check1 = false
  this.Check2 = true
  this.fileN = " "
  this.fileS = " ";
  
  }
  onGridReady(params){
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
  
  }

  file_check(file){
  this.file = file.item(0)
  this.fileN = this.file.name
  let x = this.file.size
  let n1 = Math.round((x / 1024));
  this.fileS = n1+'kb'
  }


  check_btn(){
    console.log(this.sum)
  
  if (this.sum %2 ==0) 
  {
      this.Check1 = true
      this.Check2 = false
      this.sum+=1
  }
  else if (this.sum %2!=0)
  {
      this.sum+=1
      this.Check2 = true
  }
  console.log(this.sum)
  }
  }
  