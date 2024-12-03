const Card = ({title, price, image, addToCart}) => {

  return (
    <>
      <div className="flex flex-col items-center justify-around shadow-xl p-1 rounded-lg min-w-[300px] max-w-[300px] text-center font-medium min-h-[400px]">
        <div className="flex justify-center items-center w-[100%] h-[180px] bg-white">
          <img
            className="w-[100%] h-[100%] object-contain"
            src={image}
            alt={title}
          />
        </div>
        <div>
            <p>{title}</p>
            <p>${price}</p>
        </div>
        <button onClick={addToCart} className="bg-gray-200 w-[80%] p-1 rounded-lg hover:bg-gray-300">Add to cart</button>
      </div>
    </>
  );
};

export default Card;
