import axios from "axios";
import { useEffect, useState } from "react";

const port = process.env.PORT || 3000

const Test = () => {
  const [members, setMembers] = useState();

  const baseURL = `http://localhost:${port}/api`;

  useEffect(() => {
    async function fetchMembers() {
      setMembers(null);
      const result = await axios.get(`${baseURL}/members`);
      if (!ignore) {
        setMembers(result);
      }
    }

    let ignore = false;
    fetchMembers();
    return () => {
      ignore = true;
    };
  }, [baseURL]);

  if (members) {
    console.log(members.data);
  }

  return <div>{members && members.data.map(member => <h1 key={member.id}>{member.name}</h1>)}</div>;
};

export default Test;

// const Test = () => {
//     return <h1>Now Showing the Test Page</h1>
// }

// export default Test;
