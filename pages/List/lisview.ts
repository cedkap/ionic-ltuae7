import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { FilmDetailsPage } from '../detail/film-details';
import { map } from 'rxjs/operators';



@Component({
  selector: 'page-list',
  templateUrl: 'lisview.html'
})

export class ListView {

apiUrl ='https://swapi.co/api/films';
users: [];
searchTerm : any="";
items:any;
  jsonData : any;
 filteredData: Observable<any[]>;
 
 results: Observable<any>;
  searchTerm: string = '';
  data: any;
 
  
  constructor(public navCtrl: NavController,public httpClient: HttpClient) {
//this.getUsers();
this.users = this.httpClient.get('https://swapi.co/api/films');
 //console.log(this.users);
this.loadData();
    
  }

  
// lire
   openDetails(event,user) {
    this.navCtrl.push(FilmDetailsPage, {user: user});
    
  }

/*
  filterItemss(searchTerm){
 console.log(this.users.filter((item) => {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        })  );
       return this.users.filter((item) => {
           console.log('frrr');
        });  
 
    }

    ionViewDidLoad(){
    this.setFilteredItems();
  }

  setFilteredItems() {
 
        this.jsonData = this.data.filterItems(this.searchTerm);
 
    }

getItems(ev) {
  

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.users.subscribe(result => {
      this.items = result;
      this.filterItems= this.items;
    });
       
    }
  }
*/
   filterItemss(ev: any){
     this.users.subscribe(result => {
      this.items = result;
      this.filterItems= this.items;
      
    });
     console.log(this.items);
    this.filterItems = this.items.filter(item =>  item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
     )
    }

    filterTechnologies(param : any) : void
   {
      


      let val : string 	= param;
console.log(val);
      // DON'T filter the technologies IF the supplied input is an empty string
      if (val.trim() !== '')
      {
      
         this.filteredData = this.users.filter((item) =>
         {
           console.log(item);
           return item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
         })
          
      }
   }

   doFilter(val) {
      this.data = Observable.of(this.users);
    this.filteredData =  data.map(data => this.users.title).map(options =>
      options.filter(option => option.title.toLowerCase().indexOf(val.value.toLowerCase()) > -1)
    )

  }

searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.searchData(this.searchTerm);
  }

  searchData(title: string): Observable<any> {
    console.log(title);
    return this.httpClient.get('https://swapi.co/api/films/').pipe(
      map(results => results['Search'])
    );
  }


loadData(){
  /*
  let apiURL = `${this.apiUrl}/1/`;
  console.log(apiURL);
  return this.httpClient.get(apiURL) 
      .map(res => { 
        return res.users.results.map(item => { 
          return new SearchItem( 
            item.title,
            
          );
          console.log( item.title);
        });
      });
}
 */
 let data:Observable<any>;
    data = this.httpClient.get(this.apiUrl);
    data.subscribe(result => {
      this.items = result;
      this.filterItems= this.items;
      //console.log( result);
    }) 
}

initiazileItems(){
   this.items= this.items;
 }

 getItems(ev:any){
   this.initiazileItems();
   let val = ev.target.value;
 }

 filterItems(ev:any)  {
    this.loadData();
    let val = ev.target.value;
   // let val : string 	= param;
    console.log( val);
     console.log( this.filterItems);
    if (val.trim() !== '') {
      this.filterItems = this.items.filter(item =>  item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
      console.log( this.filterItems);
    }
    
  }
  public fetchUsers() {
        return this.httpClient.get("https://swapi.co/api/films/1/").map((res: Response) => res.json())
    }
 get_products(){
  
;
   //console.log(this.users);
      this.users = this.httpClient.get("https://swapi.co/api/vehicles/");
       /* this.httpClient.get("https://swapi.co/api/films/1/").subscribe(res =>{
          this.users =  res;
             console.log(this.users.title);
        });*/
        //this.users = this.fetchUsers()
       
    }

    
  
}