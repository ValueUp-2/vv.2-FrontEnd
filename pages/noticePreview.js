import { useEffect } from 'react';
import axios from 'axios';

const API = '3.34.99.135:8080';

export default function NoticePreview() {
  //   useEffect(() => {
  //     fetch(`/data/noticePreview.json`)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   }, []);

  useEffect(() => {
    axios
      .get(`${API}/v1/users/announcement`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  });
  return <></>;
}
