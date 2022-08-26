import classNames from 'classnames';

import classes from './index.module.css';

const Flip3D = () => {
  return (
    <div className={classes.Flip}>
      <div className={classes.Card}>
        <div className={classNames(classes.Face, classes.Front)}>
          <h2>Front</h2>
        </div>
        <div className={classNames(classes.Face, classes.Back)}>
          <h2>Back</h2>
        </div>
      </div>
    </div>
  );
};

export default Flip3D;
