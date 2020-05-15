import React from 'react';
import './BodyContainer.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectArray } from '../../redux/selectors/arrayList.selector';

const BodyContainer = ({ arrayList }: any) => {
  const numWidth = Math.floor(window.innerWidth / (arrayList.length * 3));

  const numMargin =
    arrayList.length < 5
      ? 10
      : arrayList.length < 8
      ? 8
      : arrayList.length < 11
      ? 6
      : arrayList.length < 20
      ? 4
      : arrayList.length < 50
      ? 3.5
      : arrayList.length < 100
      ? 3
      : arrayList.length < 130
      ? 2.5
      : 2;

  return (
    <div className="container body-container">
      {arrayList.map((el: number, i: number) => (
        <div
          key={i}
          className="arrayElement"
          style={{
            height: `${el * 3}px`,
            width: `${numWidth}px`,
            marginLeft: `${numMargin}px`,
            marginRight: `${numMargin}px`,
            backgroundColor: '#48E5C2',
            color: 'transparent',
          }}
        >
          {el}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  arrayList: selectArray,
});

export default connect(mapStateToProps, null)(BodyContainer);
