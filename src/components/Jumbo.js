import React, { Component } from 'react'
import { socket } from '../index'
import { Jumbotron, Button } from 'react-bootstrap'

export class Jumbo extends Component {
  constructor(props) {
    super(props)
    this.createRoom = this.createRoom.bind(this)
  }
  createRoom() {
    socket.emit('createRoom')
  }
  render() {
    return (
      <div className="splash">
        <div className="jumbo-wrap">
          <div className="container main-container">
            <Jumbotron>         
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="16em" height="10em" viewBox="0 0 896.000000 614.000000"
              preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,614.000000) scale(0.100000,-0.100000)"
              fill="#137eb4" stroke="none">
              <path d="M3581 6038 c2 -46 2 -111 1 -145 l-2 -62 -57 0 c-53 1 -98 -2 -313
              -16 -41 -3 -109 -9 -150 -14 -41 -5 -82 -9 -90 -9 -14 0 -59 -6 -137 -18 -18
              -2 -48 -6 -65 -9 -333 -45 -773 -167 -1077 -297 -142 -60 -324 -155 -451 -233
              -335 -208 -666 -538 -858 -857 -177 -294 -322 -703 -357 -1013 -25 -222 -24
              -376 5 -550 5 -33 12 -76 14 -95 18 -129 100 -399 178 -580 128 -298 289 -532
              537 -781 436 -436 990 -712 1746 -869 83 -18 168 -34 190 -36 22 -3 67 -9 100
              -15 33 -6 78 -13 100 -15 22 -2 83 -8 135 -14 177 -20 268 -26 543 -35 l207
              -7 0 108 0 109 -217 0 c-252 0 -452 9 -633 30 -19 2 -62 6 -95 10 -358 38
              -793 159 -1128 314 -571 264 -1040 743 -1277 1304 -88 209 -168 478 -186 630
              -3 23 -8 65 -11 92 -9 66 -9 217 -1 280 4 28 10 68 13 90 24 182 113 473 203
              669 315 683 869 1162 1627 1409 197 64 453 126 584 142 23 3 46 7 50 9 3 2 35
              7 71 11 36 4 79 9 95 11 38 4 114 12 190 20 33 3 165 8 293 11 l232 5 1 -48
              c0 -27 3 -58 6 -69 12 -48 14 -85 6 -85 -6 0 -11 -37 -12 -82 -2 -66 0 -79 11
              -71 7 6 195 113 418 238 223 125 411 233 418 239 10 10 -79 51 -415 194 -235
              100 -432 182 -437 182 -4 0 -7 -37 -5 -82z"/>
              <path d="M5170 5725 l0 -110 303 0 c330 0 439 -6 687 -39 14 -2 48 -7 75 -10
              28 -3 84 -13 125 -21 41 -9 89 -18 106 -20 75 -11 328 -80 448 -122 343 -119
              642 -281 896 -486 278 -224 545 -572 696 -906 88 -195 182 -496 198 -634 3
              -27 8 -52 10 -56 7 -10 20 -157 20 -216 0 -46 -5 -98 -19 -215 -27 -209 -118
              -501 -230 -735 -342 -718 -985 -1217 -1851 -1434 -111 -28 -360 -78 -394 -79
              -28 -2 -89 -10 -107 -16 -10 -3 -54 -8 -98 -12 -44 -3 -100 -8 -125 -10 -150
              -14 -222 -17 -470 -19 l-275 -3 0 145 c1 79 -3 147 -7 149 -5 3 -199 -76 -431
              -175 -233 -100 -430 -181 -438 -181 -7 0 9 -12 36 -27 85 -45 809 -455 821
              -464 11 -9 24 78 24 170 0 36 -3 42 -16 37 -12 -5 -15 -2 -10 10 3 8 6 19 6
              22 0 4 5 0 11 -8 8 -11 9 0 6 43 -3 52 -2 58 17 62 12 2 107 7 211 10 294 9
              481 23 682 51 18 2 48 6 65 9 52 6 321 55 339 61 10 2 30 7 45 9 49 7 324 82
              434 118 372 122 725 307 1010 527 118 91 344 317 432 430 199 257 342 534 441
              856 25 80 75 298 83 364 2 19 7 53 9 75 9 67 12 388 4 425 -4 19 -10 60 -13
              90 -3 30 -16 107 -30 170 -225 1046 -991 1783 -2177 2094 -131 35 -419 98
              -449 98 -8 0 -37 5 -65 10 -27 5 -66 11 -85 13 -19 2 -75 9 -125 15 -86 11
              -112 14 -235 24 -95 8 -279 16 -437 19 l-153 3 0 -111z"/>
              <path d="M3350 4819 c-545 -16 -865 -37 -975 -64 -167 -41 -326 -161 -397
              -300 -119 -232 -156 -520 -164 -1285 -10 -887 42 -1316 185 -1537 74 -114 213
              -212 355 -248 204 -52 627 -74 1721 -91 703 -11 1935 28 2160 67 156 28 308
              118 395 236 160 217 212 579 211 1473 -2 804 -38 1121 -156 1366 -37 77 -56
              103 -121 163 -123 115 -235 159 -454 180 -453 44 -1931 65 -2760 40z m520
              -1025 c25 -14 169 -90 320 -169 151 -78 325 -168 385 -200 364 -191 543 -283
              563 -289 12 -4 22 -13 22 -19 0 -7 -96 -62 -212 -122 -447 -231 -591 -306
              -857 -444 -150 -78 -275 -141 -276 -139 -4 4 -9 942 -6 1231 0 97 4 177 9 177
              4 0 27 -12 52 -26z"/>
              </g>
              </svg>
              <h1>Experience Youtube together.</h1>
              <p>Let's sync up lets you syncronize playback of youtube videos between users in a room.</p>
              {/*<p>All you need to get started is a youtube url for the video source.
                The user that creates the room will have control options to set the video time, start/stop playback and kick users from the room.
              </p>*/}
              {/*<p>To get started click "Create a room"</p>*/}
              <Button type="button" bsStyle="custom" onClick={this.createRoom}>Create a room</Button>
            </Jumbotron>
          </div>
          <div className="directions-wrap">
            <div className="directions-container">
              <div className="directions-block">
                <p className="directions-title">Create a room.</p>
                <p className="directions-text">Use the create a room button to get started with a generated room i.d. or click join room to create
                  one with a custom name.
                </p>
              </div>
              <div className="directions-block">
                <p className="directions-title">Get a youtube URL.</p>
                <p className="directions-text">Find a youtube video to share with the room, grab the url and use the "Set input video" button to set the
                  video for the room.
                </p>
              </div>
              <div className="directions-block">
                <p className="directions-title">Enjoy the video.</p>
                <p className="directions-text">Once you have set the video, you will need to wait until all users in the room have flagged
                  themselves as "ready". Once everyone is ready you can hit play!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbo
