<script>
    //first get element
    let start=document.querySelector("#start")
    let pause=document.querySelector("#stop")
    let reset=document.querySelector("#reset")
    //get time no
    let no1=document.getElementById("no1")
    let no2=document.getElementById("no2")
    let min=0
    let sec=0
    let interval;
    function stopwatch(){
        
        if(sec>=0 && sec<10){
            
            no2.innerHTML='0'+sec
            sec++

        }
        else if(sec>=10 && sec<=60){
            
            no2.innerHTML=sec
            sec++

        }
        
        else if(sec==61){
            sec=0
            min+=1
           
        }

        if(min>=0 && min<10){
          no1.innerHTML='0'+min
          console.log(no1)
            


        }
        else if(min>=10 && min<=99){
            no1.innerHTML=min

        }

        else if(min==99){
            min=0
        }
    

    }
    start.addEventListener('click',()=>{
        interval=setInterval(stopwatch,30)

    })
    pause.onclick=function(){
        clearInterval(interval)

    }
      
    reset.addEventListener('click',function(){
        clearInterval(interval)
        no1.innerHTML='00'
        no2.innerHTML='00'
        min=0
        sec=0

    })
</script>
