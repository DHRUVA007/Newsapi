let Home=()=>{

const xhr = new XMLHttpRequest();
xhr.open("GET",'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?language=en&domains=techcrunch.com,thenextweb.com&apiKey=14e79849092b4e6da8d003d3f038e435', true);

let element=document.getElementById('fullbody')
element.innerHTML=`<h1 class="centerText"><span>WELCOME TO</span><br> <span>THE PAGE</span><br> <hr><br>
                <div class="text-typing">
                It will take 1- 2 minutes, data to be fetched from all over the world<br><br>
                <hr><br>

                <P>wait... </P>
                </div>


                    </h1>`

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let jsn =JSON.parse(this.responseText);
        let array=jsn.articles
    let newhtml2='';    
    for(let i=0;i<array.length;i++){
      let p=i+1;
      if(array[i].author!=array[p].author){
        let newhtml=`<div>

        <div class="posts">
                        <h1 class="content-subhead">Post Number ${i}</h1>

                <!-- A single blog post -->
            <section class="post">
                <header class="post-header">
                    <img width="48" height="48" alt="Tilo Mitra&#x27;s avatar" class="post-avatar" src="${array[i].urlToImage}">

                    <h2 class="post-title">${array[i].title}</h2>

                    <p class="post-meta">
                    Author <a href="#" class="post-author">${array[i].author}</a> Source Full Link <a class="post-category post-category-design" href="${array[i].url}" target=“_blank”>${array[i].source.name}</a> 
                    </p>
                </header>

                <div class="post-description">
                    <p>
                        ${array[i].content}  <a class="post-category post-category-design" href="${array[i].url}" target=“_blank”>see More</a> 
                    </p>
                </div>
            </section>
        </div>



<section class="post">


<div class="post-description">
<div class="post-images pure-g">
    <div class="pure-u-1 pure-u-md-1-2">
        <a href="${array[i].url}">
            <img alt="Photo of someone working poolside at a resort"
                 class="pure-img-responsive"
                 src="${array[i].urlToImage}">
        </a>

        <div class="post-image-meta">
            <h3>CSSConf Photos</h3>
        </div>
    </div>

    
    </div>
</div>
</div>
</section>`
newhtml2+=newhtml;
element.innerHTML=newhtml2 +`    
</div>


</div>
</div>`
    }
        }
    }
    else {
        

                        const data = null;
                        let mlo = document.getElementById('fullbody')
                        const xhr = new XMLHttpRequest();
                        let newhtml1=''; 
                        
                        xhr.onload = function () {
                            if (this.status === 200) {
                                let jsn =JSON.parse(this.responseText);
                                
                              
                            //.title
                            //competition.name
                            for(let i=0;i<10;i++){

             newhtml=`<div>
             
           
                            <div class="posts">
                                            <h1 class="content-subhead">${jsn[i].title} : $${jsn[i].competition.name}</h1>
                    
                                    <!-- A single blog post -->
                                <section class="post">
                                    <header class="post-header">
                                    ${jsn[i].embed}
                    
                                        
                    
                                        
                                    </header>
                    
                                    
                                </section>
                            </div>
                        </div>    
                            `
                    
                    newhtml1= newhtml1 + newhtml
                    mlo.innerHTML= `<h2 class="post-title">Latest Football News</h2>` + newhtml1;   
                                                        }
                                    }
                        }
                            
                        xhr.open("GET", "https://free-football-soccer-videos.p.rapidapi.com/");
                        xhr.setRequestHeader("x-rapidapi-key", "ef3cfb755fmshc26dde9213c6781p1e6fe0jsnba6ab4f9689e");
                        xhr.setRequestHeader("x-rapidapi-host", "free-football-soccer-videos.p.rapidapi.com");
                        
                        xhr.send(data);
                        
                    }
}

xhr.send()

}

Home();
