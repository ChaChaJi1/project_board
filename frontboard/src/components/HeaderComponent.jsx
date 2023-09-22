import React, {Component} from "react";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="http://localhost:3000/" className="navbar-brand"> 헤더 부분 </a> </div>
                    </nav>
                </header>
            </div>
        );
    }
}

// 기존의 class 컴포넌트에서는 hooks 사용x
// 기존의 class 컴포넌트 구조 유지, function 함수에서 class 함수를 감싸고
// 재호출하는 방식으로 hooks 사용
function withHookClassComponent(Component){
    return function WrappedComponent(props){
        return <Component {...props} />;
    }
}
export default withHookClassComponent(HeaderComponent);