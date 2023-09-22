import React, {Component} from "react";

class FooterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted"> 푸터부분</span>
                </footer>
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

export default withHookClassComponent(FooterComponent);
