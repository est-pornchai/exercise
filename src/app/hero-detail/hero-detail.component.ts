import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ViewChild ,Input} from '@angular/core';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})


export class HeroDetailComponent  {
    @ViewChild("agGrid",{static: false})agGrid : AgGridAngular;
    title = 'app'
    public gridApi
    public gridColumnApi
  
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
  
  selected:any
  addName : any
  addNo : any
  addOcc : any
  addBirth : any
  addAddress : any
  addPs : any
  addFilen : any
  addFiles : any

  onSelectionChanged(event){
  if(event)
  this.selected = this.gridApi.getSelectedRows();
  this.selected = this.selected.length === 1 ? this.selected[0] : '';
  
  }
  
  register(){
  this.addName = this.selected.name
  this.addNo = this.selected.no
  this.addOcc = this.selected.occ
  this.addBirth = this.selected.bd
  this.addAddress = this.selected.ad
  this.addPs = this.selected.ps
  this.addFilen = this.fileN
  this.addFiles = this.fileS
  
  var rowNode = this.gridApi.getRowNode(this.selected.no-1)
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
  onGridReady(test){
  this.gridApi = test.api;
  this.gridColumnApi.columnApi;
  
  }

//file
file : File = null
fileN : any =''
fileS : any =''
sum :number = 0  
  file_check(file){
  this.file = file.item(0)
  this.fileN = this.file.name
  let x = this.file.size
  let n1 = Math.round((x / 1024));
  this.fileS = n1+' kb'
  }

//checkbox
Check1 : boolean = false;
Check2 : boolean = true;
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
  