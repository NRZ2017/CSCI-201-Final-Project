import "./Session.css";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "./API";
import ReactPlayer from "react-player";

/* This is referenced from https://www.videosdk.live/blog/react-js-video-calling*/

function JoinScreen({ getMeetingAndToken }) {
    const [meetingId, setMeetingId] = useState(null);
    const onClick = async () => {
      await getMeetingAndToken(meetingId);
    };
    return (
      <>
      <div className="meetingID">
        <input
          type="text"
          placeholder="Enter Meeting ID"
          onChange={(e) => {
            setMeetingId(e.target.value);
          }}
        />
        <button onClick={onClick}>Join</button>
        <br></br>
        {" or "}
        <div className="createM">
          <button onClick={onClick}>Create Meeting</button>
        </div>
        <br></br>
        <div>
        Display name: <input type="text" id="dName"/>
      </div>
      </div>
      </>
    );
  }

  function ParticipantView(props) {
    const micRef = useRef(null);
    const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
      useParticipant(props.participantId);
  
    const videoStream = useMemo(() => {
      if (webcamOn && webcamStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);
        return mediaStream;
      }
    }, [webcamStream, webcamOn]);
  
    useEffect(() => {
      if (micRef.current) {
        if (micOn && micStream) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(micStream.track);
  
          micRef.current.srcObject = mediaStream;
          micRef.current
            .play()
            .catch((error) =>
              console.error("videoElem.current.play() failed", error)
            );
        } else {
          micRef.current.srcObject = null;
        }
      }
    }, [micStream, micOn]);
  
    return (
      <>
      <div>
        <p>
          Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
          {micOn ? "ON" : "OFF"}
        </p>
        <audio ref={micRef} autoPlay playsInline muted={isLocal} />
        {webcamOn && (
          <ReactPlayer
            playsinline
            pip={false}
            light={false}
            controls={false}
            muted={true}
            playing={true}
            //
            url={videoStream}
            //
            height={"300px"}
            width={"300px"}
            onError={(err) => {
              console.log(err, "participant video error");
            }}
          />
        )}
      </div>
      <div>
        // insert button here
          <button /*onClick = {downloadScreenShot}*/>Take Screentshot</button>

      </div>
      </>
    );
  }

function Controls() {
    const { leave, toggleMic, toggleWebcam } = useMeeting();
    return (
      <div>
        <button onClick={() => leave()}>Leave</button>
        <button onClick={() => toggleMic()}>toggleMic</button>
        <button onClick={() => toggleWebcam()}>toggleWebcam</button>
      </div>
    );
  }

function MeetingView(props) {
    const [joined, setJoined] = useState(null);
    //Get the method which will be used to join the meeting.
    //We will also get the participants list to display all participants
    const { join, participants } = useMeeting({
      //callback for when meeting is joined successfully
      onMeetingJoined: () => {
        setJoined("JOINED");
      },
      //callback for when meeting is left
      onMeetingLeft: () => {
        props.onMeetingLeave();
      },
    });
    const joinMeeting = () => {
      setJoined("JOINING");
      join();
    };
  
    return (
      <div className="container">
        <h3>Meeting Id: {props.meetingId}</h3>
        {joined && joined == "JOINED" ? (
          <div>
            <Controls />
            {[...participants.keys()].map((participantId) => (
              <ParticipantView
                participantId={participantId}
                key={participantId}
              />
            ))}
          </div>
        ) : joined && joined == "JOINING" ? (
          <p>Joining the meeting...</p>
        ) : (
          <button onClick={joinMeeting}>Join</button>
        )}
      </div>
    );
  }

function App() {
  const [meetingId, setMeetingId] = useState(null);

  //Getting the meeting id by calling the api we just wrote
  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  //This will set Meeting Id to null when meeting is left or ended
  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: getName(),
      }}
      token={authToken}
    >
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}

function getName() {
  return document.getElementById("dName").value;
}

export default App;