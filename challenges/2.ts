import {challenge} from '../challenges';

const challengeAnswer =
  'db108f489f3b14e228b3b35f365b3b6d4f64a6f653287347ad3bde203c70cae7';
const challengeBody = `
<p>
Did you know that files have fingerprints just like us? They <em>are</em> just 0s and
  1s but they too have fingerprints. The entropy(randomness) lies is how their
  contents(0s and 1s) are arranged. This fingerprint is often calculated using
  hash functions, such as SHA256.
</p>
<p>
  The flag for this challenge is the SHA256 checksum(fingerprint) of this
  <a href="/file.txt" target="_blank">file</a> calculated using SHA256 hash function.
  <br />
  <br />
  File: 
  <a href="/file.txt" target="_blank">file.txt</a>
</p> `;

const CHALLENGE_2: challenge = {
  id: 2,
  challengeTitle: 'iam_uniqu3',
  challengeBody,
  challengeAnswer,
  score: 10,
};

export default CHALLENGE_2;
