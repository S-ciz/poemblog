var cardTEmp = document.createElement('template')

cardTEmp.innerHTML = 
` 
<style> 
.card 
{   
    display: grid;
    width: 200px;
    height: 300px;
    object-fit: cover; 
    border-radius: 1rem;
    background: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

.card:hover
{
    cursor: pointer;
}

.card img 
{
    width: 200px;
    height: 150px;
    object-fit: cover;
    border: none;
    border-radius: 1rem 1rem 0 0;

}


.card h3 
{
    color: #333;
    text-align: center;
    padding: 0 1rem;
    font-size: 15px;
}

.card small 
{
    padding: 0 1rem;
}

button:hover{
    cursor: pointer;
}

.card button 
{
   border-radius: 0 0 1rem 1rem;
   border: none;
   padding: .5rem;
   background: var(--blue-dark);
   color:var(--white);
}


</style>

       <div class="card">
           <img  alt=""> 
           <h3>Changing Seasons</h3>
           <small> Leaves fall and bloom anew with each passing season...</small>
           <button>Read more</button>
        </div>
  
`


class Card extends HTMLElement 
{
    constructor()
    {
        super() 
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(cardTEmp.content.cloneNode(true))
        this.shadowRoot.querySelector('img').src = this.getAttribute('imgsrc')
        
    }
}


window.customElements.define('my-card', Card)