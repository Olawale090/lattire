class webWorker{
    constructor(){

    }

    workerFilter(){
       self.onmessage=(e)=>{

           if(e.data.lattireData !== undefined){

                self.postMessage({result:e.data.lattireData});

           }else{
               self.postMessage({result:"Object property is undefined"})
           }
       }
    }
}

const pulseWebWorker = new webWorker();
pulseWebWorker.workerFilter();