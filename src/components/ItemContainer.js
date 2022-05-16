import React from "react";
import { connect } from "react-redux";
import buyCake from "../redux/cake/CakeAction";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item : {props.item}</h2>
      <button onClick={props.butItem}>Buy Items</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.state
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    butItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
