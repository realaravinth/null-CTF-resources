import {challenge} from '../challenges';

const HEARTBEAT_LEADER="https://anxiousturtle.herokuapp.com/";
const challengeAnswer="qEizblnviY2fBtApKgQjf08Wdr9S";

const challengeBody = `
<p>
  We wanted this challenge to be very easy. In fact, we wanted to just give the
  flag away without any ceremony. Because of how simple this challenge is, we
  figured we'll put our laziest server up to this task. We asked it to just give
  it away when you ask for it. But it looks like it is feeling particularly
  energetic tonight and is pulling tricks on us. We are sorry but you are going
  to have to retrieve this flag to clear this challenge.
  <br />
  <br />
  Misbehaving server:
  <a href='${HEARTBEAT_LEADER}'>${HEARTBEAT_LEADER}</a>
  <br />
  <br />
  P.S: Apparently, Firefox is fast enough to talk to the misbehaving server!
</p> `

const CHALLENGE_4: challenge = {
  id: 4,
  challengeTitle: 'catch_m3_if_u_can',
  challengeAnswer,
  challengeBody,
  score: 20,
};

export default CHALLENGE_4;
