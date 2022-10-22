

const [count,setCount] =useState(4);
function decrementCount()
{
  setCount(count+11)
}
function incrementCount()
{
  setCount(count-1)
}

return (
  <>
  <button onClick={decrementCount}>+</button>
  <span>{count}</span>
  <button onClick={incrementCount}>-</button>
  </>

  
)