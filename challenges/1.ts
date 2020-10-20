import {challenge} from '../challenges';

const challengeAnswer = '7641648545';

const challengeBody = `
  <p id="Obi-Wan-Kenobi">
  To a computer, everything is either a 1 or a 0. Even if you feed it an image
  of pizzas, it'll still be a bunch of 0s and 1s. This way of representing
  things is called base-2 numeral system or binary numeral system. The flag for
  this challenge is a 10-digit number in the decimal number system(ranges from 0
  to 9). We have given your computer special instructions to hide it away from
  you. But you know how computers are,they are high maintenance. So maybe if you
  ask it nicely, it might tell you what the flag is!
</p>
<br />
<button type="submit" onclick="askNicely()">Ask computer nicely</button><br />
<p id="flag" class="hidden">000111000111011110100100110110100001</p>
<input
  class="textInput"
  id="skywalker"
  autocomplete="username"
  name="userId"
  type="text"
  placeholder="User ID"
  value=""
/>
<br />
<button type="submit" id="falcon" onclick="alert('asda')">
  Submit</button
><br />
<p id="yoda" class="hidden">
  Well, the flag that you have entered might be correct but there's no way of
  verifying it. We, unlike computers, only speak decimal.So can you please
  present the flag in a way that we understand?
</p>
<script>
  const submitButton = document.getElementById('falcon');
  const originalOnclick = submitButton.getAttribute('onclick');
  const hint = document.getElementById('yoda');
  const makeVisible = id => {
    const element = document.getElementById(id);
    element.className =  'show';
  };
  const binarySet = new RegExp('^[0-1]+$');
  let firstRecurstion = true;
  submitButton.setAttribute('onclick', 'checkBinaryHandler()');
  const askNicely = () => makeVisible('flag');
  const checkBinaryHandler = () => {
    const userAnswer = document.getElementById('skywalker').value;
    if (binarySet.test(userAnswer)) {
      makeVisible('yoda');
    } else if (firstRecurstion) {
      submitButton.setAttribute('onclick', originalOnclick);
      firstRecurstion = false;
      checkBinaryHandler();
    } else {
    }
  };
</script>
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
