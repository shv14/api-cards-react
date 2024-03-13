import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function About(props) {
  const noteInitial = []
  const [page, setpage] = useState(1);

  const [note, setnotes] = useState(noteInitial);

  const getnotes = async () => {
    props.setprogress(50)
    const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`);
    const json = await response.json();
    setnotes((prev) => [...prev, ...json])
    console.log(json)
    props.setprogress(100)
  }

  const handleInfiniteScroll = async () => {
    try {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        setpage((prev) => prev + 1)
        console.log(page)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getnotes();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll)
    return () => { window.removeEventListener("scroll", handleInfiniteScroll) }
  }, []);


  var { input } = props;
  const filteredData = note.filter((el) => {
    if (input === '') {
      return el;
    }
    else {
      return el.name.toLowerCase().includes(input)
    }
  })

  return (
    <>
      <div className="container my-3">
        <h2 className="my-1 text-light">Posts</h2>
        <div className="row">
          {filteredData.map((element) => {
            return <div key={element.id} className="col-md-4">
              <Card image_url={element.image_url} name={element.name} description={element.description} tagline={element.tagline} note={element} />
            </div>
          })}
        </div>
      </div>
    </>
  );
}
