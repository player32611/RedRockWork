import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { deleteDate } from "../../store/modules/dateStore"
import { useState } from "react"

import './index.css'

const Main = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { count, data } = useSelector(state => state.date)
    const [all, setAll] = useState(false)
    const [selects, setsSelects] = useState(data.map(item => false))
    return (
        <div>
            <div className="top">
                <div className="count">日程条数：{count}</div>
                <div className={`all${all === true}`} onClick={() => {
                    setAll(!all)
                    if (all) setsSelects(selects.map(item => false))
                    else setsSelects(selects.map(item => true))
                }}>全选</div>
                <div className="reverse" onClick={() => {
                    setAll(false)
                    setsSelects(selects.map(item => !item))
                }
                }>反选</div>
            </div>
            <div className="dateList">{data.map((item, index) =>
                <div className="dateList-item" key={item.id}>
                    <div className="dateList-item-context">{item.context}</div>
                    <div className="dateList-item-date">截止日期：{item.date}</div>
                    <div className="dateList-item-revise">修改</div>
                    <div className="dateList-item-delete" onClick={() => { dispatch(deleteDate(item.id)) }}>删除</div>
                    <div className={`select${selects[index] === true}`} onClick={() => {
                        setsSelects(selects.map((item, thisindex) => {
                            if (thisindex === index) return !item
                            else return item
                        }))
                    }}></div>
                </div>)}
            </div>
            <div className="addDate" onClick={() => navigate('/new')}>+</div>
        </div >
    )
}

export default Main