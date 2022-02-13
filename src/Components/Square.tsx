import * as React from "react"

const Square = (props: { props :{ left: number, top: number }}) => {

    const left = props.props.left === 0 ?  200 : props.props.left
    const top = props.props.top === 0 ?  200 : props.props.top

    const randomColor  = () => { // Функция возвращает случайный цвет 
        const arrCollor = ['red', 'aqua', 'silver', 'blue' ];
        const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
        return arrCollor[randomNumber(0, 3)];
    };

    const styleClass: {top: string, left: string} = {top: `${top}px`, left: `${left}px`};

    return (
    <div className="Square" style ={styleClass}>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" 
        width="100" height="100"viewBox="0 0 1280.000000 1278.000000"
        preserveAspectRatio="xMidYMid meet">
       <g transform="translate(0.000000,1278.000000) scale(0.100000,-0.100000)"
       fill={randomColor()} stroke="none">
       <path d="M1438 12630 c-331 -30 -643 -176 -879 -411 -205 -205 -345 -477 -396
       -769 -17 -101 -18 -309 -18 -5060 0 -4751 1 -4959 18 -5060 105 -602 556
       -1053 1167 -1167 90 -17 351 -18 5070 -18 4719 0 4980 1 5070 18 302 56 564
       191 771 398 205 205 345 477 396 769 17 101 18 309 18 5060 0 4751 -1 4959
       -18 5060 -79 455 -361 834 -774 1039 -107 53 -249 100 -383 128 -80 16 -386s
       17 -5020 19 -2714 1 -4974 -2 -5022 -6z m9930 -648 c89 -27 198 -80 261 -126
       111 -81 214 -215 270 -350 66 -158 61 244 61 -5086 0 -5306 4 -4923 -59 -5079
       -97 -237 -279 -403 -531 -483 l-75 -23 -4925 0 c-4728 0 -4928 1 -4990 18
       -272 76 -487 285 -572 557 l-23 75 0 4930 c0 4733 1 4933 18 4995 85 302 342
       539 640 589 29 5 2184 8 4952 7 l4900 -1 73 -23z"/>
       </g>
       </svg>
    </div>)
};

export default Square;