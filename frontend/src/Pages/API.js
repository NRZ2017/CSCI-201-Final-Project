//Auth token we will use to generate a meeting and connect to it
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI3Nzc0YjRjZC1lYzAyLTQ3NzAtYjdjYy1mODY0ZjEwMjY5NjIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxMzMyNzQxMywiZXhwIjoxODcxMTE1NDEzfQ.tixkoMUoEUvYHavPU47I0j4_EW3LwNBbWon3MlDd7rk";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};