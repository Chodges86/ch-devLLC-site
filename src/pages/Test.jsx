import axios from "axios";
import { useEffect, useState } from "react";

const Test = () => {
  const [members, setMembers] = useState();

  // const baseURL = `https://lobster-app-oiavg.ondigitalocean.app/api`;
  const localHost = "http://localhost:4004"

  useEffect(() => {
    async function fetchMembers() {
      setMembers(null);
      const result = await axios.get('http://157.230.82.216:4004/api/members');
      if (!ignore) {
        setMembers(result);
      }
    }

    let ignore = false;
    fetchMembers();
    return () => {
      ignore = true;
    };
  }, []);


  console.log(members);
  // if (members) {
  // }

  return (
    <div>
      {members ? 
      members.data.map(member => <h1 key={member.id}>{member.name}</h1>)
      : 
      <h1>Data Has Been Not Recieved</h1>
      }
    </div>
  )
  // return <h1>Test Page</h1>
};

export default Test;

// const Test = () => {
//     return <h1>Now Showing the Test Page</h1>
// }

// export default Test;
