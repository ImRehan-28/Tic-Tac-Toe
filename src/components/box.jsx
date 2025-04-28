import { useRef, useState } from 'react';
import './box.css'
// import circleicon from '../assets/circle.png'
// import crossicon from '../assets/cross.png'
// import { useRef, useState } from 'react';
function Box() {
    const [data, newdata] = useState(["", "", "", "", "", "", "", "", ""]);
    const [count, setcount] = useState(0);
    const inputref = useRef(null);

    const toggle = (e, num) => {
        if (data[num] !== "") {
            return;
        }
        let setda = [...data];

        if (count % 2 == 0) {
            e.target.innerHTML = "O";
            setda[num] = "O";
        }
        else {
            e.target.innerHTML = "X";
            setda[num] = "X";
        }
        newdata(setda);
        setcount(count + 1);
        checkwin(setda);

        const winner = checkwin(setda);
        if (!winner && count + 1 == 9) {
            inputref.current.innerHTML = "Game Ended Draw";
        }
    }

    const checkwin = (setda) => {

        const winpattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let pattern of winpattern) {
            const [a, b, c] = pattern;
            if (setda[a] && setda[a] === setda[b] && setda[b] === setda[c]) {
                won(setda[a]);
                return;
            }
        }
    }

    const won = (winner) => {
        if (winner == "X") {
            inputref.current.innerHTML = 'Congrats X win';
            setTimeout(autoreset, 2000);
        }
        else {
            inputref.current.innerHTML = 'Congrats O win';
            setTimeout(autoreset, 2000);
        }
    }

    function autoreset(){
        newdata(["", "", "", "", "", "", "", "", ""]);
        setcount(0);
        // Reset the board cells
        document.querySelectorAll('[class*="bg-blue-500"]').forEach(cell => 
        {
            cell.innerHTML = "";
        });
    }



    const resetbut = () => {
        newdata(["", "", "", "", "", "", "", "", ""]);
        setcount(0);
        // Reset the board cells
        document.querySelectorAll('[class*="bg-blue-500"]').forEach(cell => {
            cell.innerHTML = "";
        });
        // Reset the title
        inputref.current.innerHTML = 'Tic Tac Toe <span class="text-blue-600">React</span>';
    };


    return (
        <div className='flex flex-col items-center text-white '>
            <h1 className='mt-10 text-3xl font-bold mb-10' ref={inputref}>Tic Tac Toe <span className='text-blue-600'>React</span></h1>

            <div className='grid grid-rows-3 grid-cols-3 gap-x-1 gap-y-1 bg-black rounded-lg p-1 mb-10'>
                <div className="cursor-pointer bg-blue-500 text-white flex items-center justify-center h-24 w-24 rounded-md p-3 text-5xl" onClick={(e) => {
                    toggle(e, 0);
                }}></div>
                <div className="cursor-pointer bg-blue-500 text-white flex items-center justify-center h-24 w-24 rounded-md p-3 text-5xl" onClick={(e) => {
                    toggle(e, 1);
                }}></div>
                <div className="cursor-pointer bg-blue-500 text-white flex items-center justify-center h-24 w-24 rounded-md p-3 text-5xl" onClick={(e) => {
                    toggle(e, 2);
                }}></div>
                <div className="cursor-pointer bg-blue-500 text-white flex items-center justify-center h-24 w-24 rounded-md p-3 text-5xl" onClick={(e) => {
                    toggle(e, 3);
                }}></div>
                <div className="cursor-pointer bg-blue-500 text-white flex items-center justify-center h-24 w-24 rounded-md p-3 text-5xl" onClick={(e) => {
                    toggle(e, 4);
                }}></div>
                <div className="cursor-pointer bg-blue-500 text-white flex items-center justify-center h-24 w-24 rounded-md p-3 text-5xl" onClick={(e) => {
                    toggle(e, 5);
                }}></div>
                <div className="cursor-pointer bg-blue-500 text-white flex items-center justify-center h-24 w-24 rounded-md p-3 text-5xl" onClick={(e) => {
                    toggle(e, 6);
                }}></div>
                <div className="cursor-pointer bg-blue-500 text-white flex items-center justify-center h-24 w-24 rounded-md p-3 text-5xl" onClick={(e) => {
                    toggle(e, 7);
                }}></div>
                <div className="cursor-pointer bg-blue-500 text-white flex items-center justify-center h-24 w-24 rounded-md p-3 text-5xl" onClick={(e) => {
                    toggle(e, 8);
                }}></div>
            </div>

            <button className='text-cyan-300 bg-gray-700 hover:bg-gray-800 rounded-full h-12 w-30 text-xl tracking-wider cursor-pointer' onClick={(e) => {
                resetbut(e);
            }}>Reset</button>
        </div>
    )
}

export default Box;