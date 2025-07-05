
class SDK{
  constructor(){
    this.queue=[];
    this.count=1;
  }
  
  logEvent(event){
    this.queue.push(event);
  }
  
  wait = async()=>{
     return await new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(this.count%5===0){
          reject();
        }
        else{
          resolve();
        }
      }, 1000);
    })
  }
  
  sendAnalytics = async()=>{
   
   if(this.queue.length===0){
     return;
   }
   
   const current = this.queue.shift();
   try{
     await this.wait();
     console.log('LogEvent ',current);
     this.count++;
     
   }catch(err){
     console.log('----------------------');
     console.log('Falied log event ', current);
     console.log('Retrying the log event again',current);
     console.log('----------------------');
     this.count=1;
     this.queue.unshift(current);
   }finally{
     await new Promise((res) => setTimeout(res, 100));
     await this.sendAnalytics();
   }
  }
  
  send=async()=>{
    await this.sendAnalytics();
  }
}






const sdk = new SDK();

sdk.logEvent("event 1");
sdk.logEvent("event 2");
sdk.logEvent("event 3");
sdk.logEvent("event 4");
sdk.logEvent("event 5");
sdk.logEvent("event 6");
sdk.logEvent("event 7");
sdk.logEvent("event 8");
sdk.logEvent("event 9");
sdk.logEvent("event 10");

sdk.send();
