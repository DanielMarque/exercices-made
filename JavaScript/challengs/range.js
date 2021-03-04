
function range(a = null, b = null, c = null){

    if (a != null && b == null){
        i = 1
        while(i <= a){
            console.log(i)
            i++
        }        
    }

    if (a != null && b != null && c == null){
        
        let list = []
        if (a > b) {
            let x = a 
            a = b
            b = x
        }
        while(a <= b){            
            list.push(a)
            a++
        }        
        console.log(list.reverse())
    }

    if (a != null && b != null && c != null){
        
        while(a <= b){
            console.log(a)
            a += c
        }        
    }
   
}

range(6, 2)