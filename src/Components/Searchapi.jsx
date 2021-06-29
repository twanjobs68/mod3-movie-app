import React, { Component } from 'react';

class Searchapi extends Component {
    constructor(){
        super()
            // 5.code state to keep track of api call data(placeholder for api) if you will use data to display it needs to go into state.
            this.state={
                data: [],
                userinput:""
            }    
        }
      
   //1. create function to make api request.  check console for data
    fetchItems = async (query) =>{
    //define query for api call and change data to json 
   //2. api call
    const response= await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fc3ada66&t=${query}`);
    //3. get api data 
    const data = await response.json();
   //4. Check point. set data from api with setState. state is object. console.log to see if you get data
    console.log(data)

     //6.push data to state so you can use in code and console log results
    this.setState({
          data: data
     })
    //7.data is now in code - check point..is data in code
    console.log(this.state.data)
    
    }
 
    //***************************create web page first*************************************************** */

    //Es6
    /*3.we=event which is an object that is input*/
    handleinputChange = (e) =>{

    //whatever user is typing will be saved.  this is declared in state at top. data is now in line 8
        this.setState({userinput:e.target.value})
    }

    /* 4.wwhen form is submited , userinput used to make call and bring back"fetched" data requested by form in the current state*/
    handleOnSubmit = (e) =>{
        e.preventDefault()
        this.fetchItems(this.state.userinput)          
    }

    //5w. render data for output to Dom
    render() {
    return (
           
        <div className="searchcss">

           
        {/*1w. create unordered list to display api data*/}
            <h3 > {this.state.data.Title} </h3>
                <ul><strong>
                {/* <li> {this.state.data.Title}</li> */}
                    <li> <img src={this.state.data.Poster}/></li>
                    
                    <li> {this.state.data.Plot}</li> 
                    <li>{this.state.data.Rated} {this.state.data.Year}</li> 
                    </strong></ul>
        
                {/*1.w create buttons and input for data search*/}
                {/*2w <input type="text" name="query" className="input"/> */}
                
        <div className="searchBar"> 
           <div className ="namediv">
             <center><p>ADGFLIX</p></center>
           </div>
             <div id="movieSelector"><strong>MOVIE SELECTOR</strong></div><br>
             </br>
             <br>
             </br>
            <form onSubmit ={this.handleOnSubmit}>
                <input className="inputCss" type="text" name="query" placeholder="Enter Movie Name: " onChange={this.handleinputChange} 
                value={this.state.userinput}/>
                {/*3w when input is entered handleinputChange function takes user input and saves it for call to api in Onsubmit function */}
                <button className="button" >Search</button>
            </form>
                         
            <div class="myFlixbx">
                <h1><br></br>ADGFLIX</h1>
            </div>
            
        </div>
    </div>
    );}
}


export default Searchapi;