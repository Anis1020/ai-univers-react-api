import { useEffect, useState } from "react";
import Card from "../components/Home/Card";
import Modal from "../components/Home/Modal";

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);
  const [values, setValues] = useState([]);
  const [showAll, setShowAll] = useState(false);
  // const [data, setData] = useState();
  const [uniqData, setUniqData] = useState({});
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => {
        setValues(data.data.tools);
      });
  }, []);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <div>
      <div className="text-center space-y-2">
        <h1 className=" text-2xl">{count} AI University </h1>
        <button onClick={handleCount} className="btn btn-accent ">
          Sort By Use
        </button>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4 justify-center">
        {values.slice(0, showAll ? 12 : 6).map((item) => {
          // eslint-disable-next-line react/jsx-key
          return (
            <Card item={item} key={item.id} setUniqData={setUniqData}></Card>
          );
        })}
      </div>
      {!showAll && (
        <div onClick={handleShowAll} className="text-center space-y-2">
          <button className="btn btn-accent ">See More</button>
        </div>
      )}

      <Modal uniqData={uniqData} />
    </div>
  );
};

export default HomePage;
