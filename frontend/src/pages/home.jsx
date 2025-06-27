import RestoreIcon from '@mui/icons-material/Restore';
import { Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { AuthContext } from '../contexts/AuthContext';
import withAuth from '../utils/withAuth';

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);

  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  }

  return (
    <>
      <div className="navBar">
        <h1>VideoChat</h1>

        <div className="navRight">
          <div className="navItem" onClick={() => navigate("/history")}>
            <RestoreIcon className='navIcon' />
            <span>History</span>
          </div>
          <button className="navItem logout" onClick={() => {
            localStorage.removeItem("token");
            navigate("/auth");
          }}>
            Logout
          </button>
        </div>
      </div>


      <div className="meetContainer">
        <div className="leftPanel">
          <div>
            <h2>Providing Quality Video Call Just Like Quality Education</h2>
            <div style={{ display: 'flex', gap: "10px", marginTop:"1rem" }}>
              <TextField
                onChange={e => setMeetingCode(e.target.value)}
                id="outlined-basic"
                label="Meeting Code"
                variant="outlined"
              />
              <Button onClick={handleJoinVideoCall} variant='contained'>
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className='rightPanel'>
          <img srcSet='/logo3.png' alt="" />
        </div>
      </div>
    </>
  )
}

export default withAuth(HomeComponent)
