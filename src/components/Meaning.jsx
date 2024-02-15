function Meaning(props) {
  return (
    <>
      {props.showMean && props.text == props.term ? (
        <div className="absolute w-64 left-44 top-0  px-4 py-2 rounded-md m-4 border-2 border-white  duration-500 ">
          {props.mean}
        </div>
      ) : null}
    </>
  );
}
export default Meaning;
