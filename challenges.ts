import CHALLENGE_1 from './challenges/1';
import CHALLENGE_2 from './challenges/2';
import CHALLENGE_3 from './challenges/3';
import CHALLENGE_4 from './challenges/4';
import CHALLENGE_5 from './challenges/5';
import CHALLENGE_6 from './challenges/6';
import CHALLENGE_7 from './challenges/7';

export type challenge = {
  id: number;
  challengeTitle: string;
  challengeBody: string;
  challengeAnswer: string;
  score: number;
};
const CHALLENGES = {
  challenges: [
    CHALLENGE_1,
    CHALLENGE_2,
    CHALLENGE_3,
    CHALLENGE_4,
    CHALLENGE_5,
    CHALLENGE_6,
    CHALLENGE_7,
  ],
};

export default CHALLENGES;
