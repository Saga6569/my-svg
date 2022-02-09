import * as React from "react"

const Ball = (props: any) => {
    
    const left = props.props.left ?? 0
    const top = props.props.top ?? 0

    const [point, setPoint] = React.useState({ top: 300, left: 300 })

    const randomColor  = () => {
        const arrCollor = ['red', 'aqua', 'silver', 'blue' ];
        const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
        return arrCollor[randomNumber(0, 3)]
    };

    const pointRender = () => {


        if (point.top <= 0) {
            setPoint({...point, top: 200 })
            return;
        }

        const xPointCentr = props.props.top;
        const yPointCentr = props.props.left;

        if (xPointCentr + 50 <= point.top - 50) {
            console.log('квадрат выше мячика')
            return
        }

        if (xPointCentr - 50 >= point.top + 50) {
            console.log('квадрат ниже мячика')
            return
        }

        if (yPointCentr + 50 <= point.left - 50) {
            console.log('квадрат левее мяча')
            return
        }

        if (yPointCentr - 50 >= point.left + 50) {
            console.log('квадрат правее мяча')
            return
        }

////////////////////

        if (xPointCentr > point.top ) {
          const differenceX  = 100 - (xPointCentr - point.top)
          if (yPointCentr > point.left ) {
            const differenceY = 100 - (yPointCentr - point.left)
            setPoint({top: point.top - differenceX, left: point.left - differenceY})
            console.log('отскочит в верх')
            console.log('отскачить в лево')
            return
          }
          console.log('отскочит в верх')
          console.log('отскачить на право')
          const differenceY = 100 - (point.left - yPointCentr)
          console.log(differenceY)
          setPoint({top: point.top - differenceX, left: point.left + differenceY})
          return
        }
            const differenceX = point.top - xPointCentr
            console.log(differenceX)
            console.log('отскачить в низ')
            if (yPointCentr > point.left ) {
                console.log('отскачить в лево')
            }
    
            if (yPointCentr < point.left ) {
                console.log('отскачить в право')
            }


        // if (yPointCentr > point.left ) {
        //     console.log('отскачить в лево')
        // }

        // if (yPointCentr < point.left ) {
        //     console.log('отскачить в право')
        // }
       

    //    console.log(xPointCentr, 'центр X')
    //    console.log(xPointCentr + 50, 'нижняя точка X')
    //    console.log(xPointCentr - 50, 'верхняя точка X')
    //    console.log(yPointCentr, 'центр Y')
    //    console.log(yPointCentr + 50, 'верхняя точка Y')
    //    console.log(yPointCentr - 50, 'нижняя точка Y')
    };
    pointRender()

    return (
    <div className="Ball" style={{top: `${point.top}px`, left: `${point.left}px`, 'position': 'absolute'}} >
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="100" height="100" viewBox="0 0 1274.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet">
       <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
       fill="current" stroke="none">
       <path d="M5995 12794 c-738 -43 -1318 -159 -1934 -385 -567 -209 -1168 -554
       -1651 -947 -1267 -1033 -2122 -2586 -2349 -4267 -43 -320 -55 -512 -55 -890 0
       -350 5 -455 40 -750 69 -586 214 -1095 480 -1682 766 -1692 2296 -3062 4014
       -3596 632 -196 1147 -269 1915 -271 424 -1 555 8 920 60 757 108 1524 372
       2207 760 653 371 1205 834 1699 1424 62 74 137 164 167 199 89 104 242 315
       344 471 434 666 741 1479 867 2295 59 379 75 608 75 1025 1 565 -51 1019 -175
       1540 -385 1613 -1429 3123 -2784 4027 -427 286 -943 537 -1415 691 -215 71
       -671 174 -955 216 -199 30 -295 41 -525 62 -154 14 -752 26 -885 18z m925
       -235 c333 -25 771 -106 1104 -205 139 -41 390 -138 561 -216 401 -185 660
       -402 797 -669 55 -107 54 -129 -7 -289 -152 -401 -398 -792 -739 -1175 -75
       -85 -83 -91 -142 -107 -86 -23 -216 -37 -438 -48 -105 -6 -234 -15 -286 -20
       -241 -25 -837 -59 -1150 -66 l-285 -6 -160 168 c-500 527 -947 1026 -1037
       1159 -82 122 -108 274 -74 429 63 280 360 625 776 901 215 142 218 143 520
       154 202 8 369 4 560 -10z m3024 -1414 c87 -23 185 -67 351 -159 83 -46 173
       -95 201 -109 131 -66 513 -449 750 -752 493 -630 856 -1433 1007 -2230 35
       -181 40 -254 27 -371 -36 -333 -179 -610 -588 -1144 -117 -152 -119 -155 -174
       -172 l-56 -17 -124 56 c-640 287 -1221 618 -1669 949 l-126 93 -51 109 c-140
       299 -249 606 -448 1267 -80 264 -161 527 -179 585 -49 151 -56 189 -56 314 0
       147 30 264 109 428 71 148 145 261 370 562 94 126 198 277 233 335 119 202
       150 238 225 261 46 13 135 11 198 -5z m-5220 -70 c139 -25 265 -106 352 -228
       41 -57 122 -151 284 -327 344 -376 479 -554 580 -765 81 -170 108 -271 117
       -436 6 -113 5 -119 -27 -210 -17 -52 -73 -211 -122 -354 -182 -525 -369 -1098
       -419 -1278 l-24 -88 -405 -228 c-450 -255 -740 -414 -995 -546 -93 -49 -192
       -106 -220 -128 -117 -93 -273 -145 -395 -132 -74 8 -182 44 -256 86 -144 82
       -372 290 -651 595 -355 389 -469 557 -526 779 l-21 84 22 68 c12 37 79 243
       148 457 69 214 150 454 179 535 269 741 540 1182 923 1502 139 115 239 178
       506 317 417 217 583 281 791 305 58 7 81 6 159 -8z m-2402 -397 c156 -78 266
       -239 298 -439 l12 -76 -67 -121 c-353 -644 -676 -1520 -855 -2327 -42 -187
       -121 -312 -370 -585 -72 -80 -153 -172 -178 -205 -26 -33 -117 -143 -203 -245
       -98 -117 -170 -212 -194 -257 -20 -40 -55 -93 -76 -117 -42 -47 -127 -96 -167
       -96 -49 0 -105 25 -146 65 -92 89 -128 232 -108 421 6 60 14 159 17 219 8 150
       22 282 51 464 157 979 599 1945 1349 2951 39 52 86 121 105 153 62 103 158
       186 258 224 23 8 68 12 118 11 70 -3 90 -8 156 -40z m3384 -3727 c368 -159
       729 -400 1114 -741 128 -113 420 -383 462 -427 l37 -38 -45 -350 c-98 -780
       -182 -1300 -285 -1765 -55 -245 -92 -315 -248 -470 -169 -167 -365 -279 -721
       -412 -537 -200 -672 -238 -834 -238 -156 0 -399 66 -581 158 -179 89 -341 197
       -701 467 -133 99 -278 207 -324 240 -157 114 -302 289 -398 480 -93 186 -132
       340 -139 555 -6 161 5 272 41 430 14 58 30 159 36 225 56 593 301 1016 705
       1218 39 19 110 49 159 66 113 40 213 87 396 186 501 271 634 334 840 394 115
       34 254 59 341 60 44 1 74 -7 145 -38z m4046 -124 c718 -350 1142 -608 1536
       -933 l105 -86 -7 -62 c-3 -33 -17 -198 -31 -366 -52 -641 -79 -862 -141 -1150
       -43 -200 -153 -377 -364 -591 -189 -191 -312 -282 -892 -664 -117 -77 -267
       -181 -333 -230 -270 -203 -465 -308 -618 -334 -64 -11 -75 -10 -181 18 -454
       121 -930 363 -1476 749 -117 83 -160 119 -160 134 0 34 49 398 86 643 43 282
       203 1246 209 1255 2 4 16 94 30 201 47 356 66 394 300 569 61 46 202 158 315
       249 269 218 392 313 520 399 297 199 551 301 817 331 6 0 135 -59 285 -132z
       m-9268 -929 c3 -13 16 -97 31 -188 83 -522 251 -1096 476 -1625 77 -183 277
       -590 321 -652 77 -113 98 -276 58 -457 -11 -49 -21 -91 -23 -93 -5 -5 -243
       394 -347 581 -118 212 -287 564 -363 756 -99 249 -253 777 -309 1060 -18 92
       -23 149 -23 285 0 163 1 172 26 225 31 64 60 97 103 116 42 18 45 17 50 -8z
       m11194 -2185 c96 -45 114 -187 47 -368 -44 -119 -90 -196 -314 -530 -366 -546
       -885 -1049 -1516 -1472 -415 -277 -974 -570 -1225 -641 -83 -23 -114 -26 -240
       -27 -130 0 -150 2 -194 23 -71 32 -112 66 -142 117 l-26 44 108 158 c311 456
       488 684 718 920 168 174 265 254 411 344 272 165 520 336 1105 759 457 331
       564 406 791 557 157 104 171 112 240 123 41 6 81 13 89 15 28 6 115 -7 148
       -22z m-8863 -68 c108 -14 156 -35 275 -123 152 -113 304 -232 535 -422 533
       -438 749 -596 1037 -759 111 -63 128 -77 175 -138 167 -223 306 -521 365 -789
       17 -76 22 -133 22 -249 1 -176 -17 -252 -84 -353 -39 -58 -43 -61 -113 -82
       -179 -55 -372 -80 -617 -80 l-158 0 -138 46 c-635 210 -1275 600 -1874 1143
       -219 199 -392 368 -429 421 -88 126 -148 283 -177 465 -9 62 -18 200 -21 361
       l-6 261 49 12 c26 7 123 39 214 73 491 178 577 204 730 218 84 7 118 7 215 -5z
       m3980 -3005 c153 -13 320 -34 510 -64 83 -14 186 -30 230 -36 164 -25 265 -72
       251 -117 -12 -37 -115 -72 -266 -92 -41 -5 -136 -19 -210 -30 -74 -12 -250
       -32 -390 -46 -804 -80 -1388 -29 -1815 160 -71 32 -72 31 90 79 299 88 567
       132 975 160 88 6 494 -3 625 -14z"/>
       </g>
       </svg>
    </div>
    )
};

export default Ball;