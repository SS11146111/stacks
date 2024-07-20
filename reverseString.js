class Stack
{
    constructor(data)
    {
        this.top=-1;
        this.size=data;
        this.arr=new Array(this.size);
    }

    push(data)
    {
        this.top++
        if(this.top>this.size-1)
        {
            console.log(`Stack is full`);
            this.top--;
            return
        }

        this.arr[this.top]=data;
        return
    }

    pop()
    {
        if(this.top<0)
            {
                console.log("Stack is empty")
                return false
            }
            
                let x = this.arr[this.top]
                this.top--;
                return x
            
    }

}

function reverse(str)
{
    let length = str.length;
    const stack_arr = new Stack(length);
    let reversedString="";

    for(let i=0;i<length;i++)
    {
        stack_arr.push(str[i])
    }

    for(let j=0;j<length;j++)
    {
       let x=stack_arr.pop()
       reversedString=reversedString.concat(x);
    }

    return reversedString
        

}

const result = reverse("Internshala");
console.log(result);

//TC: O(n)
//SC: O(n)