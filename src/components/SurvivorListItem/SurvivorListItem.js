import React from 'react';
import styles from './SurvivorListItem.module.css';

const SurvivorListItem = ({ name, gender, attributes, onClick }) => {
  return (
    <li onClick={onClick} className={styles.listItem}>
      <span className={styles.name}>{name}</span>
      <span>Sex: {gender === 1 ? 'M' : 'F'}</span>
      <span>Movement: {attributes.movement}</span>
      <span>Strength: {attributes.strength}</span>
      <span>Accuracy: {attributes.accuracy}</span>
      <span>Evasion: {attributes.evasion}</span>
      <span>Luck: {attributes.luck}</span>
      <span>Speed: {attributes.speed}</span>
    </li>
  )
}

export default SurvivorListItem;