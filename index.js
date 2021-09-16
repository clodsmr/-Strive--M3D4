window.onload = () => {
    loadBooks()
}


const loadBooks = () => {

    fetch("https://striveschool-api.herokuapp.com/books")

        
        .then(response => response.json()
        )
        .then(body => {

           
           

            const row = document.querySelector(".row")

            for (let i = 0; i < body.length; i++) {
                const obj = body[i]

                const col = document.createElement("div")
                col.className = "col-3"
                col.classList.add("d-flex")

                col.innerHTML = `
                
                <div class="card h-100 w-100">
                    <img src="${obj.img}" class="card-img-top" alt="..." style= "height: 300px;">
                    <div class="card-body">
                        <h5 class="card-title">${obj.title}</h5>
                        <button type="button" class="btn btn-success">Add to cart</button>
                    </div>
                </div>
                `

                row.appendChild(col)
                
            }


        })
        .catch(error => console.error(error))

}

    document.getElementsByClassName("btn").forEach(
    (btn) =>
    (btn.onclick = (e) => {

        let Col = document.querySelector(".col-3")
        const row = document.querySelector(".row")

        for (let i=0; i<Col.length; i++) {

        Col.className = "col-4"}

   let newCol = document.createElement("div")
    newCol.classList.add("col-4")
    row.appendChild(newCol)

 }))

  


    



