import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Navbar.scss';
import {
  updateArrayList,
  mergeSortArray,
  sortingFinish,
  sortingStart,
} from '../../redux/actions/arrayList.actions';
import { getMergeSortAnimations } from '../../mergeSortAlg';
import { createStructuredSelector } from 'reselect';
import {
  selectArray,
  selectSorting,
} from '../../redux/selectors/arrayList.selector';

const Navbar = ({
  updateRangeValue,
  mergeSortArray,
  arrayList,
  sortingFinish,
  sortingStart,
  isSorting,
}: any) => {
  const [range, setRange] = useState(0);
  const [active, setActive] = useState('Merge Sort');

  const makeActive = (name: any) => {
    setActive(name);
  };

  const updateRange = (e: any) => {
    console.log(parseInt(e.target.value));
    setRange(parseInt(e.target.value));
    const arrayBars: any = document.querySelectorAll('.arrayElement');
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = '#48E5C2';
    }

    updateRangeValue(parseInt(e.target.value) + 1);
    // sortingFinish();
  };

  const handleStartClick = () => {
    sortingStart();
    mergeSortArray();
  };

  // console.log(isSorting);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="title">Sorting Visualizer</div>
      <div className="speed-container">
        <div className="speed-title">Change Array Size &amp; Sorting Speed</div>

        <input
          type="range"
          min="0"
          max="100"
          className="speed"
          // value={value}
          defaultValue="0"
          onChange={updateRange}
        />
      </div>
      <div className="sort-types">
        <div className="btn-group" role="group" aria-label="Basic example">
          {['Merge Sort', 'Quick Sort', 'Heap Sort', 'Bubble Sort'].map(
            (el, i) => (
              <button
                type="button"
                className={
                  active === el ? 'btn btn-success' : 'btn btn-secondary'
                }
                key={i}
                onClick={() => makeActive(el)}
              >
                {el}
              </button>
            ),
          )}
        </div>
      </div>
      {isSorting ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => sortingFinish()}
        >
          Reset!
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleStartClick}
        >
          Sort!
        </button>
      )}
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  arrayList: selectArray,
  isSorting: selectSorting,
});
const mapDispatchToProps = {
  updateRangeValue: updateArrayList,
  mergeSortArray,
  sortingFinish,
  sortingStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
