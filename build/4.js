var HEARTBEAT_LEADER = "https://anxiousturtle.herokuapp.com/";
var challengeAnswer = "qEizblnviY2fBtApKgQjf08Wdr9S";
var challengeBody = "\n<p>\n  We wanted this challenge to be very easy. In fact, we wanted to just give the\n  flag away without any ceremony. Because of how simple this challenge is, we\n  figured we'll put our laziest server up to this task. We asked it to just give\n  it away when you ask for it. But it looks like it is feeling particularly\n  energetic tonight and is pulling tricks on us. We are sorry but you are going\n  to have to retrieve this flag to clear this challenge.\n  <br />\n  <br />\n  Misbehaving server:\n  <a href='" + HEARTBEAT_LEADER + "'>\n    " + HEARTBEAT_LEADER + "\n  >\n  <br />\n  <br />\n  P.S: Apparently, Firefox is fast enough to talk to the misbehaving server!\n</p> ";
var CHALLENGE_4 = {
    id: 4,
    challengeTitle: 'catch_m3_if_u_can',
    challengeAnswer: challengeAnswer,
    challengeBody: challengeBody,
    score: 20
};
exports["default"] = CHALLENGE_4;
