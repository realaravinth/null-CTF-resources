import {challenge} from '../challenges';

const challengeAnswer = ' SC2INcxcddmV2';
const challengeBody = `
<p>
  The flag is hidden in <a href="./voodo.txt" target="_blank">this file</a>. It
  would be very tedious if you look for it manually, something tells me there's
  a better way.
</p>
`;

const CHALLENGE_5: challenge = {
  id: 5,
  challengeTitle: 'hidd3n_in_p1ain_sight',
  challengeAnswer,
  challengeBody,
  score: 10,
};

export default CHALLENGE_5;
