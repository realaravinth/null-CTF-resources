export type challenge = {
  id: number,
  challengeTitle: string,
  challengeBody: string,
  score: number
}
const CHALLENGES  = {
  challenges: [
    {
      id: 1,
      challengeTitle: 'be3p_b00p_be3p_b00p',
//      challengeBody: CHALLENGE_1,
      score: 10,
    },
    {
      id: 2,
      challengeTitle: 'iam_uniqu3',
      challengeBody:
        "<p> Did you know that files have fingerprints just like us? They *are* just 0s and 1s but they too have fingerprints. The entropy(randomness) lies is how their contents(0s and 1s) are arranged. This fingerprint is often calculated using hash functions, such as SHA256.</p><p> The flag for this challenge is the fingerprint of this <a href='/file.txt'> file</a> calculated using SHA256 hash function. ",
      score: 10,
    },
    {
      id: 3,
      challengeTitle: '.... --- .-- -.. -.--',
      challengeBody:
        "<p> What does <insert-base64-encoded-flag> mean? I think it has something to do with a binary-to-text encoding that's popular on the World Wide Web</p>",
      score: 20,
    },
    {
      id: 4,
      challengeTitle: 'catch_m3_if_u_can',
      challengeBody:
        "<p> We wanted this challenge to be very easy. In fact, we wanted to just give the flag away without any ceremony. Because of how simple this challenge is, we figured we'll put our laziest server up to this task. We asked it to just give it away when you ask for it.  But it looks like it is feeling particularly energetic tonight and is pulling tricks on us. We are sorry but you are going to have to retrieve this flag to clear this challenge. http://dev.shuttlecraft.io:8081/</p> <br>",
      score: 20,
    },
    {
      id: 5,
      challengeTitle: 'hidd3n_in_p1ain_sight',
      challengeBody:
        "<p> The flag is hidden in <a href='./voodo.txt'>this file</a>.It would be very tedious if you look for it manually, something tells me there's a better way.</p>",
      score: 10,
    },
    {
      id: 6,
      challengeTitle: 'hack_the_gibson',
      challengeBody:
        "<script>sessionStorage.setItem('yo', 'testing')</script><p> Hack this page to retrieve the flag for this challenge</p>",
      score: 20,
    },
    {
      id: 7,
      challengeTitle: 'cryptic323^_^3_&s%',
      challengeBody:
        "<p> You are tasked with hacking into Dr. Evil's lab and retrieving the blueprints for his Doomsday Project. The lab is protected by a state-of-the-art locked vault door. The door is controlled by a computer and requires a password to open. The source code for the vault was            obtained by one of our agents. Please find the password(the flag) hidden in the source code.<a href='./authentication.py'>source code</a></p> <br>",
      score: 20,
    },
  ],
};

export default CHALLENGES;
