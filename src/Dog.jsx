import { Rating } from "@mui/material"


export default function Dog(props) {
    return (
        <div style={{minWidth: '288px'}} className="bg-white h-96 w-72 rounded-3xl flex flex-col p-5 hover:-translate-y-3 transition-all">
            <img src={props.src} className='h-64 w-64 rounded-2xl mb-2 object-cover'></img>
            <Rating name="read-only" value={5} readOnly />
            <span className="flex flex-cow mt-5 justify-between" >
                <button onClick={props.onClick} className="bg-green-600 w-9 h-9 flex items-center justify-center rounded-3xl hover:-translate-y-1 transition-transform">
                    <i className="fa-solid fa-question text-lg text-white"></i>
                </button>
                <h3 className="text-2xl font-bold">{props.name}</h3>
                <button onClick={props.onClick} className="bg-red-500 w-9 h-9 flex items-center justify-center rounded-3xl hover:-translate-y-1 transition-all">
                    <i className="fa-solid fa-heart text-lg text-white"></i>
                </button>
            </span>
        </div>
    )
}