import {challenge} from '../challenges';

const challengeAnswer = 'nCTF{91QGh7kJxl0bBYt3tu96GnfqN8i9oSI}';
const challengeBody = `
<p>
  You are are R2-D2, a cute robot from the Star Wars franchise are R2-D2. You
  are tasked with hacking into the most secure valut of the Death Star to
  retrive it's blueprints. The vault is controlled by a computer and requires a
  password to open. The source code for the vault was obtained by one of our
  comrades.
  <br />
  Please find the password(the flag) hidden in the source code and help the
  rebels live to fight another day.
  <br />
  Vault:
  <a href="https://deathstarvault.herokuapp.com/" target="_blank"
    >https://deathstarvault.herokuapp.com/</a
  >
  <br />
  Source code:
  <a href="https://srcleak.herokuapp.com/" target="_blank">
    https://srcleak.herokuapp.com/</a
  >
</p>
`;

const CHALLENGE_7: challenge = {
  id: 7,
  challengeTitle: 'R2^_^3_&s%',
  challengeAnswer,
  challengeBody,
  score: 20,
};

export default CHALLENGE_7;
