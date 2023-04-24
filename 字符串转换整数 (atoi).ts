function myAtoi(s:string) :number {
    let index:number= 0;
    let max:number=0;
    s=s.trim();
     if(s[0]=='-'||s[0]=='+'){
        index++;
    }
    while(true){ 
        
        if(Number(s[index])||Number(s[index])==0&&s[index]!=' '){
            max = (max+Number(s[index]))*10
            index++;
        }else{
            break;
        }
    }
    max/=10
     if(s[0]=='-'){
        max = -max;
    }
    if(max<-1<<31){
        return -1<<31
    }else if(max > Math.pow(2,31)-1){
        return Math.pow(2,31)-1
    }else{
        return max
    }
    
};
