import {createContext,useContext,useState,useEffect} from "react"
import { AppContext } from "./context_args";

// const AppContext = createContext();
// export const useAppContext = ()=>useContext(AppContext);





export const AppProvider = ({children})=>{
            const [currUser,setCurrUser] = useState({});
            const [auth, setAuth] = useState(false)
            const [data,setData] = useState([]);
            const [trendingData,setTrendingData] = useState([]);
            const [clientData,setClientData] = useState([]);
            const [clientShows, setClientShows] = useState({});
            const [bookMarkData,setBookMarkData] = useState(JSON.parse(localStorage.getItem("bookmarked")) || []);

            const [resultsTitle,setResultsTitle] = useState("Recommended for you")
            


            useEffect(()=>{
                fetch("data.json")
                .then(res=>res.json())
                .then(res=>{
                     console.log("Res",res)
                    setData(res);

                    setTrendingData(res.slice(0,5));
                    setClientData(res.slice(5,res.length-1));
                })
            },[])


            const demoAuth=()=>{
                setAuth(true);
            }

            const logout=()=>{
                setAuth(false);
            }


            const restoreData=()=>{
                let temp = data;
                setTrendingData(temp.slice(0,5));
                setClientData(temp.slice(5,data.length-1));
                setResultsTitle("Recommended for you")

            }


            const getMovies=()=>{
                    console.log("getMovies fired")
                    setTrendingData([]);
                    let movies = data.filter(d=>d.category != "TV Series");
                    setClientData(movies)
                    setResultsTitle("Movies")
            }

            const getTv=()=>{
                    console.log('getTv fired')
                    let shows = data.filter(d=>d.category == "TV Series");
                    setClientData(shows)
                    setTrendingData([])
                    setResultsTitle("Tv Shows")

            }


            const filterTitles=(title)=>{
                if(title == ""){
                    restoreData();
                    return;
                }
                title = title.toLowerCase();
                console.log(title);
                let temp = data;
                let matches = [];

                temp.forEach(movie=>{
                    let newTitle = movie.title.split("").splice(0,title.length)
                    newTitle = newTitle.join("").toLowerCase();
                    // console.log(newTitle)
                    if(newTitle == title){
                        matches.push(movie)
                    }
                })
                setTrendingData([]);
                setResultsTitle(`Your results (${matches.length})`)
                setClientData(matches)
            }

            const bookmarkItem=(item)=>{
                    let temp = bookMarkData;
                    let idx = temp.findIndex(t=>t.title == item.title);
                    console.log("IDx",idx)
                    
                    if(idx >= 0){
                        console.log("movies alreayd bookmarked");
                        return;
                    }
                    temp.push(item);
                    localStorage.setItem("bookmarked",JSON.stringify(temp));
                    setBookMarkData(temp)
            }


            const getBookmarks=()=>{
                console.log("get book marks!")
                let movies = bookMarkData.filter(t=>t.category == "Movie")
                let tvShows = bookMarkData.filter(t=>t.category != "Movie")
                setClientData(movies);
                setTrendingData([]);
                setResultsTitle("Bookmarked Movies");
                setClientShows({title:"Bookmarked Shows",data:tvShows})

            }

            const removeItem=(item)=>{
                let temp = bookMarkData;
                temp = temp.filter(t=>t.title != item.title);
                localStorage.setItem("bookmarked",JSON.stringify(temp));
                setBookMarkData(temp);
                


            }


            const values={
                currUser,
                auth,
                trendingData,
                clientData,
                resultsTitle,
                clientShows,
                demoAuth,
                logout,

                bookmarkItem,
                getMovies,
                getTv,
                restoreData,
                getBookmarks,
                removeItem,
                filterTitles,

            }

    return (<AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>)
}