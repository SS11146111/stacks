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
push(60);

print()

//TC for push: O(1)
//SC: O(n)




