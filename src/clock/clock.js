import React from "react"
import "./clock.css"

class Clock extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentTime: new Date().toLocaleString()
        }

    }


    /**
     * 组件挂载完成后，执行该方法，设置一个定时器，用于跟更新时间
     */
    componentDidMount() {
        setInterval(() => {
            console.log(new Date().toLocaleString());
            this.setState({currentTime: new Date().toLocaleString()});

        }, 1000);
    }

    render() {

        return (
            <div className="clock-style">
                <div className="clock-center"></div>
                <div className="line"></div>
                <p>当前时间是：{this.state.currentTime}</p>
            </div>
        );
    }
}

export {Clock}