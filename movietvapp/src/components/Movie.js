import React, {Component} from 'react'
import $ from 'jquery'
import { Input, Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


class Movie extends Component {
    constructor(props){
        super(props)
        this.state= {
            results: []
        } 
        this.preformSearch()
    }

        componentDidMount(){
                this.top10();
        }

        top10(){
        const top10Url="https://api.themoviedb.org/3/movie/top_rated?api_key=9dd0443589af0dc500baa06c8b00e960&language=en-US&page=1"
        $.ajax({
            url: top10Url,
            success: (top10results)=> {
                const results= top10results.results
                    this.setState({results:results})
                },
                error:(xhr, status, err)=>{
                    console.log("faild to fetch Movie data")
                }
        })
    }
        preformSearch(searchTerm){
            const searchUrl="https://api.themoviedb.org/3/search/movie?api_key=9dd0443589af0dc500baa06c8b00e960&language=en-US&page=1&include_adult=false&query="+ searchTerm;
            $.ajax({
                url: searchUrl,
                success: (searchResults)=> {
                    console.log("Fetched data successfully")
                    const results= searchResults.results
                    this.setState({results:results})
                },
                error:(xhr, status, err)=>{
                    console.log("faild to fetch data")
                }
            })
        }
        searchChangeHandler(e){
            if(e.target.value.length >2){
                const searchTerm=e.target.value
                this.preformSearch(searchTerm)
            }else{
                this.top10()
            }
        }

render() {
return(
    <div>
        <div className="input">
            <Input focus icon='search' 
            type="text" 
            name="search" 
            placeholder="Search a movie"
            onChange={this.searchChangeHandler.bind(this)} />
          </div>

<div className="flex-container">

            {this.state.results.map((movie)=> {
                const poster ="https://image.tmdb.org/t/p/w185/"+ movie.poster_path
        return (
            <div className="flex-item">
            <Card 
            image={poster}
            key={movie.id}
            href='/details'
            header={movie.title}
            meta={movie.vote_average}
            description={movie.release_date}
          />
          </div>
         ) 
        }
        )
        }
       </div>
    </div>
  );
 }
}

export default Movie;