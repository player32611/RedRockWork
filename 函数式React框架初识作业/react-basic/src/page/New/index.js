import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addDate } from "../../store/modules/dateStore"
import { useState } from "react"

import './index.css'


const New = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [context, setContext] = useState('')
    const [year, setYear] = useState('2025')
    const [month, setMonth] = useState('1')
    const [day, setDay] = useState('1')
    return (
        <div>
            <div className="input">
                <textarea className="textarea" placeholder="编写你的日程" value={context} onChange={(e) => setContext(e.target.value)}></textarea>
                <div className="submit" onClick={() => {
                    const action = {
                        context: context,
                        year: year,
                        month: month,
                        day: day
                    }
                    dispatch(addDate(action))
                    navigate('/')
                }}>提交</div>
            </div>
            <div className="date">设置截止日期：
                <select className="year" value={year} onChange={(e) => setYear(e.target.value)}>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                </select>
                <select className="month" value={month} onChange={(e) => setMonth(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </select>
                <select className="day" value={day} onChange={(e) => setDay(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                </select>
            </div>
            <div className="return" onClick={() => navigate('/')}>返回</div>
        </div>
    )
}

export default New