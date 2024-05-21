const Card = (props) => {
  // console.log(props);
  const { id, name, image, features } = props.item;

  const handleModal = (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        props.setUniqData(data.data);
        // setData(data.data);
      });
    // calling modal
    my_modal_5.showModal();
  };

  return (
    <>
      <div className="flex">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image} alt="img" />
          </figure>
          <div className="card-body  ">
            <h2 className="card-title text-2xl">{name}</h2>
            {features.map((element, index) => (
              // eslint-disable-next-line react/jsx-key
              <p index={index}>
                {index + 1}: {element}
              </p>
            ))}
            <button className="btn" onClick={() => handleModal(id)}>
              open modal
            </button>
          </div>
        </div>
      </div>
      {/* <Modal /> */}
    </>
  );
};

export default Card;
