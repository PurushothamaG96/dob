const btn = document.getElementById("btn")
btn.addEventListener("click", (e)=>{
    debugger
    e.preventDefault()
    let d1 = document.getElementById("d1").value
    let m1 = document.getElementById("m1").value
    let y1 = document.getElementById("y1").value

    const date = new Date()
    let d2 = date.getDate()
    let m2 = date.getMonth()+1
    let y2 = date.getFullYear()

    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if(d1> d2){
        d2 = d2 + month[m2-1]
        m2 = m2-1;
    }
    if(m1 > m2){
        m2 = m2+12;
        y2 = y2-1;
    }

    let d= d2-d1,
    m = m2-m1,
    y = y2-y1

    document.getElementById("age").innerHTML = "Your Age is " +y +" Years "+ m+ " Months, " +d +" Days."
})

