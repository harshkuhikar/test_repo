const IntialValue = 0;

const changeData = (state=IntialValue,action)=>
{
    switch(action.type)
    {
        case 'Increment':
            return state+=1;
        case'Decrement':
            return state -=1
        default:return state;    
    }
}
export default changeData;