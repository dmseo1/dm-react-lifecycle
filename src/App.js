import React, { Component } from 'react';
//import React from 'react';
//import logo from './logo.svg';
import './App.css';

//export default: 바깥으로 가져다 쓰고 싶을 때 사용. export default가 없으면 바깥에서 호출할 때 중괄호로 묶어서 호출한다.

//클래스 기반 컴포넌트
//recommend: 클래스명은 첫 자는 대문자, 파일명과 같은 것으로
class App extends Component { //React.Component가 아닌 Component라고 하면 오류난다. 하지만 위에서 { Component } 를 import하는 경우 그냥 Component라고 쓸 수 있다.

  state = {
    number: 0
  }

  //가장 먼저 체크됨
  constructor(props) {
    super(props);
    this.state = {
      number : 0
    } //state 초기화 가능. state 값은 변하지 않으며, 복사본만 만들 뿐이다.
    console.log('constructor');
  }

  //deprecated; 더 이상 사용하지 않음
  componentWillMount() {
    console.log('componentWillMount (deprecated)');
  }


  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false; //false 반환시 다음 과정을 실행하지 않는다
    return true;
  }
  

  //페이지 변경//


  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  
  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }
  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    );
  }


  //렌더 메소드 실행
  render() {
    console.log('render');
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
  //렌더 메소드 안에서 '보여주고 싶은 element, component'를 리턴한다.
}



//함수 기반 컴포넌트
// function App() {
//   return (
//     <div></div>
//   );
// }

export default App;


//생명주기 확인 결과
//constructor -> componentWillMount -> render -> componentDidMount

//화면 갱신
//shouldComponentUpdate -> componentWillUpdate ->  render -> componentDidUpdate