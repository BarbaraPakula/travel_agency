import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import HappyHourAd from '../../features/HappyHourAd/HappyHourAd';
import DaysToSummer from '../../features/DaysToSummer/DaysToSummer';

const Hero = ({ variant = '', titleText, imageSrc, ...otherProps }) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image} src={imageSrc} />
    <div className={styles.daysToSummer}>
      <DaysToSummer />
    </div>
    <div className={styles.happyHour}>
      <HappyHourAd
        title={'Check our Happy Hour from 12:00 to 13:00 UTC'}
        promoDescription={' It\'s your time!. Take advantage of Happy Hour! All offers 20% off!'} />
    </div>
  </div>
);

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Hero;
