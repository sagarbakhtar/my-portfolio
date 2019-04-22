import React, {PureComponent} from 'react';
import { Stage, Layer, Line } from 'react-konva';
import { parabolaConstant, STROKE_WIDTH} from '../../util/util';

class HorizontalCarPath extends PureComponent { 
    constructor(props) {
        super(props);
        this.state = {
            wrapperWidth: 0,
            wrapperHeight: 0,            
            points: []
        }
        
        this.canvasWrapperRef = React.createRef();
        this.calculatePathPoints = this.calculatePathPoints.bind(this);
    }
    componentDidMount() {
        const { canvasWrapperRef } = this;
        const wrapperWidth = canvasWrapperRef.current.offsetWidth;
        const wrapperHeight = canvasWrapperRef.current.offsetHeight;

        this.setState({
            wrapperWidth: parseInt(wrapperWidth, 10),
            wrapperHeight: parseInt(wrapperHeight, 10),
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot){        
        const {wrapperWidth: prevWidth, wrapperHeight: prevHeight} = prevState;
        const {wrapperWidth, wrapperHeight} = this.state;

        if(prevWidth !== wrapperWidth || prevHeight !== wrapperHeight || !Object.is(prevProps, this.props)) {            
            this.calculatePathPoints();
        }
    }
    calculatePathPoints() {
        const {wrapperWidth: _width, wrapperHeight: _height} = this.state;
        const { prevEndPoints } = this.props;
        if (_width === 0 || _height === 0 || prevEndPoints === undefined || prevEndPoints.width === undefined) {
            this.setState({points: []});
            return;
        }

        let points = [];
        let widthEnd = Math.floor(9.5 * _width / 12);
        let heightEnd = Math.round(1.2 * _height / 2);
        const stepForWidth = Math.floor((_width / 11) / 2);
        const a = parabolaConstant(0 , 0, widthEnd, heightEnd);
        let { width } =  prevEndPoints ;
        let height = 5;
        let counter = 0;
        while(width < widthEnd && counter < 100) {
            points = [...points, width , height];
            width += stepForWidth;
            height = Math.sqrt(width / a);            
        }
        points = [...points, width + STROKE_WIDTH, height];
        this.setState({points});
    }
    render() {
        const { wrapperWidth, wrapperHeight, points } = this.state;                    
        return (
        <div style={{height: '15vh'}} ref={this.canvasWrapperRef}>
            <Stage width={wrapperWidth} height={wrapperHeight}>
                <Layer>
                <Line 
                    points= {points}
                    stroke= '#007AFF'
                    strokeWidth = {STROKE_WIDTH}
                    lineCap= 'round'
                    lineJoin= 'round'
                    dash = {[29, 20, 0.001, 20]}
                    tension= {0.7}
                />
                </Layer>
            </Stage>
        </div>
        )
    }
}

export { HorizontalCarPath };