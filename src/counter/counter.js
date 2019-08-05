import React from "react"

/**
 * 计数器组件
 * 实现点击一个按钮，然后统计点击这个按钮的次数的功能
 */
class Counter extends React.Component {

    constructor(p) {
        super(p);

        this.state = {
            count: 0
        };

        //绑定this到函数上面，
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        console.log("this = " + this);
        this.setState({
            count: ++this.state.count
        });
    };

    /**
     * 匿名函数不需要显示绑定this变量
     */
    handleClick2 = () => {

        this.setState({
            count: ++this.state.count
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>点击此按钮实现计数器增加</button>
                <p>你总共点击了{this.state.count}次上面的按钮</p>
            </div>
        );
    }
}

/**
 * 组件需要导出，才能被引用到
 */
export {Counter}