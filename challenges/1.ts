import {challenge} from '../challenges';

const challengeAnswer = '7641648545';

const challengeBody = `
  <p id="Obi-Wan-Kenobi">
  To a computer, everything is either a 1 or a 0. Even if you feed it an image
  of pizzas, it'll still be a bunch of 0s and 1s. This way of representing
  things is called base-2 numeral system or binary numeral system. The flag for
  this challenge is a 10-digit number in the decimal number system(ranges from 0
  to 9). <br /> <br />We have given your computer special instructions to hide it away from
  you. But you know how computers are,they are high maintenance. So maybe if you
  ask it nicely, it might tell you what the flag is!
</p>
<br />
<style>
  .hidden {
    visibility: hidden;
  }
  .show {
    visibility: visible;
  }
</style>
`;

const CHALLENGE_1: challenge = {
  id: 1,
  challengeTitle: 'be3p_b00p_be3p_b00p',
  challengeBody,
  challengeAnswer,
  score: 10,
};

export default CHALLENGE_1;
