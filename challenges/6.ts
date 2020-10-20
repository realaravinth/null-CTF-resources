import {challenge} from '../challenges';

const challengeAnswer = 'zlZ6QPh97sg16ds856RK0DIK1waNJwy';
const challengeBody = `
<script>
  sessionStorage.setItem(
    'FR5tcymRp1n2VKz9BxWhrstyjyof17z',
    'nCTF{${challengeAnswer}}',
  );
</script>
<p>Hack this page to retrieve the flag for this challenge</p>
`;

const CHALLENGE_6: challenge = {
  id: 6,

  challengeTitle: 'hack_the_gibson',
  challengeAnswer,
  challengeBody,
  score: 20,
};

export default CHALLENGE_6;
