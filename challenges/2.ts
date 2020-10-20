import {challenge} from '../challenges';

const challengeBody = `
<p>
Did you know that files have fingerprints just like us? They <em>are</em> just 0s and
  1s but they too have fingerprints. The entropy(randomness) lies is how their
  contents(0s and 1s) are arranged. This fingerprint is often calculated using
  hash functions, such as SHA256.
</p>
<p>
  The flag for this challenge is the fingerprint of this
  <a href="/file.txt" target="_blank"> file</a> calculated using SHA256 hash function.
</p> `;

const CHALLENGE_2: challenge = {
  id: 2,
  challengeTitle: 'iam_uniqu3',
  challengeBody,
  score: 10,
};

export default CHALLENGE_2;
