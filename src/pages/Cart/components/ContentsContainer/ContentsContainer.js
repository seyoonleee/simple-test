import React from 'react';
import ContentsCart from './ContentsCart/ContentsCart';
import ContentsOrder from './ContentsOrder/ContentsOrder';

import './ContentsContainer.scss';

const ContentsContainer = ({
  cartItems,
  totalPrice,
  checkedItemHandler,
  allCheckedHandler,
  checkedItems,
  setCartItems,
  setCheckedItems,
}) => {
  return (
    <div className="contentsContainer">
      <ContentsCart
        cartItems={cartItems}
        totalPrice={totalPrice}
        checkedItemHandler={checkedItemHandler}
        allCheckedHandler={allCheckedHandler}
        checkedItems={checkedItems}
        setCartItems={setCartItems}
        setCheckedItems={setCheckedItems}
      />
      {/* <ContentsOrder /> */}
    </div>
  );
};

export default ContentsContainer;
