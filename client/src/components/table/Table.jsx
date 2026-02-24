import { useContext, useEffect, useState } from "react"
import "./Table.css"
import { AppContext } from "../../context/GameProvider";
import { FaBomb } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Table() {

    const { boardSize, bombLeft, setBombLeft } = useContext(AppContext)
    const [myTable, setMyTable] = useState([])
    const bombPosition = [0, 1, 2, 3, 4]

    function createTable() {
        const myTab = []
        for (let i = 0; i <= boardSize; i++) {
            myTab.push(i)
        }
        setMyTable(myTab)
    }

    useEffect(() => {
        createTable()
    }, [])

    function isBomb(index) {
        const isBomb = bombPosition.includes(index)
        if (isBomb) {
            setMyTable(prev => prev.map((value, i)=> i === index ? <FaBomb /> : value))    
        } else {
            setMyTable(prev => prev.map((value, i)=> i === index ? <RxCross2 /> : value))  
        }
    }

    return (
        <div>
            <div id="my_table">
                {myTable.map((cell, index) =>
                    <button key={index} onClick={() => isBomb(index)}>{cell} </button>
                )}
            </div>
        </div>
    )
}

export default Table
