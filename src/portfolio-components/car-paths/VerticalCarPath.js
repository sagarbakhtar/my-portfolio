import React, {PureComponent} from 'react';
import { Stage, Layer, Line } from 'react-konva';
import { parabolaConstant, STROKE_WIDTH} from '../../util/util';

class VerticalCarPath extends PureComponent { 
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

        if(prevWidth !== wrapperWidth || prevHeight !== wrapperHeight) {            
            this.calculatePathPoints();
        }
    }
    calculatePathPoints() {
        const {wrapperWidth: _width, wrapperHeight: _height} = this.state;
        if (_width === 0 || _height === 0) {
            this.setState({points: []});
            return;
        }
        let points = [];
        let widthEnd = Math.round(1.2 * _width / 4) + STROKE_WIDTH;
        let heightEnd = _height;
        const stepForHeight = Math.floor((_height / 11) / 2);
        const a = parabolaConstant(0 , 0, widthEnd, heightEnd);
        let width = STROKE_WIDTH;        
        let height = 0;
        let counter = 0;
        while(height < heightEnd && counter < 100) {
            widthEnd = width;
            points = [...points, width , height];
            height += stepForHeight;
            width = a * height * height + STROKE_WIDTH;                   
        }        
        points = [...points, widthEnd, heightEnd];

        const { updateLastPoints, canvasKey } = this.props;
        updateLastPoints(canvasKey, { width: widthEnd, height: heightEnd});

        this.setState({points});
    }
    render() {
        const { wrapperWidth, wrapperHeight, points } = this.state;            
        return (
        <div style={{height: '100%'}} ref={this.canvasWrapperRef}>
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

export { VerticalCarPath };