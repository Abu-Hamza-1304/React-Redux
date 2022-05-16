import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyCake from "../redux/cake/CakeAction";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes : {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;

/*
    useSelector is a hook the react-redux library provides
    which acts as a close equivalent to the mapStateToProps
    function.
    To get hold of any state that is maintained in the redux
    store, we make use of useSelector hook.
*/
