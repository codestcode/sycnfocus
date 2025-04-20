import 'D:/habeba/habeba/new work of DOM/dashbor--/src/styles/index.css'

function Items(props) {
  return (
    <a
      className={`-ml-3 transform hover:scale-105 transition duration-300 shadow-xl rounded-lg cards ${props.width} translate-y-26 translate-x-2  `}
      href="#"
    >
      <div className="p-5 flex flex-col justify-between h-full ">
        <div className="flex justify-between items-center">
          <img
            src={props.svg}
            alt={props.nameofitem}
            className="h-7 w-7"
          />
          <div className="bg-[#6a00ff] rounded-full h-6 px-2 flex items-center text-white font-semibold text-sm">
            {props.pers}
          </div>
        </div>

        <div className="mt-3">
          <div className="text-3xl font-bold leading-8">{props.numberoftotal}</div>
          <div className="mt-1 text-base text-gray-600">{props.nameofitem}</div>
        </div>
      </div>
    </a>
  );
}

export default Items;