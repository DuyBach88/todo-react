import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isActive, setActive] = useState(false);
  const [state, setState] = useState(false);
 // tăng số lượng
  const handleClickIncrement = () => {
    setCount((prevCount) =>{
     return prevCount + 1
    } );
  };

  // giảm số lượng
  const handleClickDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
// kiểm tra true false
  const handleEffect = () => {
    setActive(!isActive);
    console.log(">>>check isActive", isActive);
  };
// ẩn hiện content
  const ChangeStatus = () => {
    setState(!state);
  };

 

  return (
    <>
      <div>
        {state === false ? (
          <div>
            <button onClick={ChangeStatus??'not exist'} type="button">
              Show
            </button>
          </div>
        ) : (
          <>
            <span>Count:{count}$</span><br></br>
           <button onClick={handleClickIncrement}>
                        Increment
                    </button> <></>
                    <button onClick={handleClickDecrement}>
                        Decrement
                    </button>
                    <br />
            <button onClick={handleEffect}>Click for activate effect</button>
            <br></br>
            <button onClick={ChangeStatus} type="button">
              hide
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default MyComponent;
// initialization
// mounting
// updation / updating
// unmounting
