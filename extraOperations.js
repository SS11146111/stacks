const stack_arr=new Array(5);
let top=-1;

function push(data)
{
    top++
    if(top>stack_arr.length-1)
    {
        console.log(`Cannot push ${data} as stack is full`);
        top--;
        return false
    }

    stack_arr[top]=data;
    return true;
}

function pop()
{
    if(top<0)
    {
        console.log("Stack is empty")
        return false
    }
    else
    {
        top--;
    }
}

function topElement()
{
    if(top<0)
    {
        console.log("Stack is empty")
        return false
    }
    else
    {
        return stack_arr[top]
    }
}

function isEmpty()
{
    if(top<0)
        {
            console.log("Stack is empty")
            return true
        }
    
    return false

}


function isFull()
{
    if(top==stack_arr.length-1)
    {
        console.log("Stack is full")
        return true
    }

    return false
}

function print()
{
    for(let i=top;i>=0;i--)
    {
        console.log(stack_arr[i])
    }
}

push(10);
push(20);
push(30);
push(40);
push(50);

console.log(topElement())

isFull();

pop();
pop();
pop();
pop();
pop();

isEmpty();


//TC: O(1)
//SC: O(n)