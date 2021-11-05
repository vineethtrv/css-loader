export const OBJECTS = [

  
  {
    id: "linQbFll",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
  font-size: 16px;
  width:  5.5em;
  height: 5.5em;
  }
  .loader:before{
    content: '';
    position: absolute;
    transform: translate(-50%, -50%) rotate(45deg);
    height: 100%;
    width: 4px;
    background: #fff;
    left: 50%;
    top: 50%;
  }
  .loader:after{
    content: '';
    position: absolute;
    left: 0.2em;
    bottom: 0.18em;
    width: 1em;
    height: 1em;
    background-color: #de3500;
    border-radius: 15%;
    animation: rollingRock 2.5s cubic-bezier(.79, 0, .47, .97) infinite;
  }
@keyframes rollingRock {
  0% {transform: translate(0, -1em) rotate(-45deg)}
  5% {transform: translate(0, -1em) rotate(-50deg)}
  20% {transform: translate(1em, -2em) rotate(47deg)}
  25% {transform: translate(1em, -2em) rotate(45deg)}
  30% {transform: translate(1em, -2em) rotate(40deg)}
  45% {transform: translate(2em, -3em) rotate(137deg)}
  50% {transform: translate(2em, -3em) rotate(135deg)}
  55% {transform: translate(2em, -3em) rotate(130deg)}
  70% {transform: translate(3em, -4em) rotate(217deg)}
  75% {transform: translate(3em, -4em) rotate(220deg)}
  100% {transform: translate(0, -1em) rotate(-225deg)}
}
      `,
  },
  {
    id: "pngPong",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
  height: 40px;
  width: 6px;
  color: #FFF;
  animation: paddles 0.75s ease-out infinite;
}
.loader:before {
  content: "";
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 15px;
  width: 12px;
  height: 12px;
  background-color: #de3500;
  border-radius: 50%;
  animation: ballbounce 0.6s ease-out infinite;
}

@keyframes paddles {
  0% { box-shadow: -25px -10px, 25px 10px}
  50% { box-shadow: -25px 8px, 25px -10px }
  100% { box-shadow: -25px -10px, 25px 10px}
}
@keyframes ballbounce {
  0% { transform: translateX(-20px) scale(1, 1.2) }
  25% { transform: scale(1.2, 1) }
  50% { transform: translateX(15px) scale(1, 1.2) }
  75% { transform: scale(1.2, 1) }
  100% { transform: translateX(-20px) }
}
      `,
  },

  {
    id: "brckBblUp",
    html: `<span class="loader"></span>`,
    css: `.loader {
    color: #fff;
    font-family: Consolas, Menlo, Monaco, monospace;
    font-weight: bold;
    font-size: 78px;
    opacity: 0.8;
  }
  .loader:before {
    content: "{";
    display: inline-block;
    animation: pulse 0.4s alternate infinite ease-in-out;
  }
  .loader:after {
    content: "}";
    display: inline-block;
    animation: pulse 0.4s 0.3s alternate infinite ease-in-out;
  }

  @keyframes pulse {
    to {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
      `,
  },
  {
    id: "wifiLd",
    html: `<span class="loader"></span>`,
    css: `.loader, .loader:before {
	display: inline-block;
	border: 20px double transparent;
	border-top-color: #fff;
	border-radius: 50%;
  box-sizing: border-box;
}
.loader {
	padding: 8px;
  animation: wifiLoading 1s ease-in infinite;
}
.loader:before {
	content: '';
	width: 0; height: 0;
}
@keyframes wifiLoading {
  0% { border-style: none}
  100% { border-style: double}
}
      `,
  },
  {
    id: "strShw",
    html: `<span class="loader"></span>`,
    css: `.loader {
      position: relative;
      color: #de3500;
      width: 0;
      height: 0;
      border-right: 50px solid transparent;
      border-bottom: 35px solid #de3500;
      border-left: 50px solid transparent;
      animation: 3s starRotate linear infinite;
    }
    .loader:before {
      border-bottom: 40px solid #de3500;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      position: absolute;
      height: 0;
      width: 0;
      top: -22px;
      left: -31px;
      display: block;
      content: '';
      transform: rotate(-35deg);
    }
    .loader:after {
      content: '';
      position: absolute;
      display: block;
      color: #de3500;
      top: 1.5px;
      transform: rotate(-70deg);
      left: -52px;
      width: 0px;
      height: 0px;
      border-right: 50px solid transparent;
      border-bottom: 35px solid #de3500;
      border-left: 50px solid transparent;
    }

  @keyframes starRotate {
    0%{    transform: rotate(0deg) scale(0.15)}
    50%{    transform: rotate(360deg) scale(1)}
    100%{    transform: rotate(720deg) scale(0.15)}
  }
      `,
  },
  {
    id: "glCoinFlip",
    html: `<span class="loader"></span>`,
    css: `.loader {
  transform: translateZ(1px);
}
.loader:after {
  content: '$';
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  text-align: center;
  line-height:40px;
  font-size: 32px;
  font-weight: bold;
  background: #FFD700;
  color: #DAA520;
  border: 4px double ;
  box-sizing: border-box;
  box-shadow:  2px 2px 2px 1px rgba(0, 0, 0, .1);
  animation: coin-flip 4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes coin-flip {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
      `,
  },
  {
    id: "heartBeat",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
  width: 40px;
  height: 60px;
  animation: heartBeat 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}

.loader:before,
.loader:after {
  content: "";
  background: #ff3d00 ;
  width: 40px;
  height: 60px;
  border-radius: 50px 50px 0 0;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: rotate(45deg);
  transform-origin: 50% 68%;
  box-shadow: 5px 4px 5px #0004 inset;
}
.loader:after {
  transform: rotate(-45deg);
}
@keyframes heartBeat {
  0% { transform: scale(0.95) }
  5% { transform: scale(1.1) }
  39% { transform: scale(0.85) }
  45% { transform: scale(1) }
  60% { transform: scale(0.95) }
  100% { transform: scale(0.9) }
}
      `,
  },

  {
    id: "colorPalatteSpltex3",
    html: `<span class="loader"></span>`,
    css: `.loader {
      width: 32px;
      height: 84px;
      border-radius: 0 0 20px 20px;
      position: relative;
      background: #FFF radial-gradient(circle 5px at 50% 85%, #FF3D00 100%, transparent 0);
    }
    .loader:before , .loader:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 32px;
      height: 84px;
      border-radius: 0 0 20px 20px;
      background: #FFF;
      opacity: 0.8;
      transform: rotate(60deg);
      transform-origin: 50% 85%;
      z-index: -2;
      animation: rotate 1s infinite linear alternate;
    }
    .loader:after {
      animation: rotate2 1s infinite linear alternate;
      opacity: 0.5;
    }
    @keyframes rotate {
      0% , 20% { transform: rotate(0deg) }
      80% , 100% { transform: rotate(30deg) }
    }
    @keyframes rotate2 {
      0% , 20% { transform: rotate(0deg) }
      80% , 100% { transform: rotate(60deg) }
    }
  `,
  },




  {
    id: "stepLoaderBallStepping",
    html: `<span class="loader"></span>`,
    css: `.loader {
          position: relative;
          width: 120px;
          height: 90px;
          margin: 0 auto;
        }
        .loader:before {
          content: "";
          position: absolute;
          bottom: 30px;
          left: 50px;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background: #FF3D00;
          animation: loading-bounce 0.5s ease-in-out infinite alternate;
        }
        .loader:after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          height: 7px;
          width: 45px;
          border-radius: 4px;
          box-shadow: 0 5px 0 #fff, -35px 50px 0 #fff, -70px 95px 0 #fff;
          animation: loading-step 1s ease-in-out infinite;
        }

        @keyframes loading-bounce {
          0% { transform: scale(1, 0.7)}
          40% { transform: scale(0.8, 1.2)}
          60% { transform: scale(1, 1)}
          100% { bottom: 140px }
        }
        @keyframes loading-step {
          0% {
            box-shadow: 0 10px 0 rgba(0,0,0,0),
                        0 10px 0 #fff,
                      -35px 50px 0 #fff,
                      -70px 90px 0 #fff;
          }
          100% {
            box-shadow: 0 10px 0 #fff,
                      -35px 50px 0 #fff,
                      -70px 90px 0 #fff,
                      -70px 90px 0 rgba(0,0,0,0);
          }
        }
  `,
  },
  {
    id: "spincVsSroadgd4f",
    html: `<span class="loader"></span>`,
    css: `.loader {
      width: 86px;
      height: 50px;
      border-radius: 50px;
      background:
        radial-gradient(farthest-side,#0000 calc(100% - 10px),#FFF calc(100% - 10px) 100%,#0000) left,
        radial-gradient(farthest-side,#0000 calc(100% - 10px),#FFF calc(100% - 10px) 100%,#0000) right;
      background-size: calc(50% + 5px) 100%;
      background-repeat: no-repeat;
      position: relative;
      animation: flipX 1s infinite linear;
    }
    .loader:before {
      content: "";
      position: absolute;
      inset:0;
      margin:auto;
      width:10px;
      height: 10px;
      border-radius: 50%;
      background:#FF3D00;
      transform-origin: -14px 50%;
      animation: rotate 0.5s infinite linear;
    }

    @keyframes flipX {
        0%,49.99% { transform:scaleX(1)}
        50%,100% { transform:scaleX(-1)}
    }

    @keyframes rotate {
        100% { transform:rotate(360deg)}
    }
        `,
  },

  {
    id: "pendRoxy-2x",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
  width: 164px;
  height: 164px;
  perspective: 300px;
}
.loader::before  {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-image:
    radial-gradient(circle 15px, #FF3D00 100%, transparent 0),
    radial-gradient(circle 15px, #FF3D00 100%, transparent 0),
    linear-gradient(#FF3D00 100px, transparent 0),
    linear-gradient(#FF3D00 100px, transparent 0);
  background-repeat: no-repeat;
  background-size: 30px 30px, 30px 30px, 40% 2px, 40% 2px;
  background-position: left center, right center, left center, right center;
  animation: rotateY 1s linear infinite;
}
.loader::after  {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-image:
    radial-gradient(circle 15px, #fff 100%, transparent 0),
    radial-gradient(circle 15px, #fff 100%, transparent 0),
    linear-gradient(#fff 100px, transparent 0),
    linear-gradient(#fff 100px, transparent 0);
  background-repeat: no-repeat;
  background-size: 30px 30px, 30px 30px, 2px 40% , 2px 40%;
  background-position: top center, bottom center, top center, bottom center;
  animation: rotateX 1s linear infinite;
}

@keyframes rotateY {
  0%{ transform: rotateY(0deg)}
  100% { transform: rotateY(-180deg)}
}
@keyframes rotateX {
  0%, 25% { transform: rotateX(0deg)}
  75%,  100% { transform: rotateX(-180deg)}
}
  `,
  },
   
  {
    id: "packManEt2Xb",
    html: `<span class="loader"></span>`,
    css: `.loader {
        position: relative;
        border: 24px solid #FFF;
        border-radius: 50%;
        box-sizing: border-box;
        animation: eat 1s linear infinite;
      }
      .loader::after , .loader::before {
        content: '';
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
        background: #fff;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        box-sizing: border-box;
        opacity: 0;
        animation: move 2s linear infinite;
      }

      .loader::before {
        animation-delay: 1s;
      }

      @keyframes eat {
        0% , 49% { border-right-color: #FFF }
        50% , 100% { border-right-color: #0000 }
      }
      @keyframes move {
        0% { left: 75px ; opacity: 1}
        50% { left: 0px; opacity: 1 }
        52%, 100% { left: -5px; opacity: 0; }
      }
`,
    },




  {
    id: "imgSunMuntRase2",
    html: `<span class="loader"></span>`,
    css: `.loader {
      width: 64px;
      height: 64px;
      position: relative;
      background: #FFF;
      border-radius: 4px;
      overflow: hidden;
    }
    .loader:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 40px;
      height: 40px;
      transform: rotate(45deg) translate(30%, 40%);
      background: #ff9371;
      box-shadow: 32px -34px 0 5px #ff3d00;
      animation: slide 2s infinite ease-in-out alternate;
    }
    .loader:after {
      content: "";
      position: absolute;
      left: 10px;
      top: 10px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #ff3d00;
      transform: rotate(0deg);
      transform-origin: 35px 145px;
      animation: rotate 2s infinite ease-in-out;
    }

    @keyframes slide {
      0% , 100%{ bottom: -35px}
      25% , 75%{ bottom: -2px}
      20% , 80%{ bottom: 2px}
    }
    @keyframes rotate {
      0% { transform: rotate(-15deg)}
      25% , 75%{ transform: rotate(0deg)}
      100% {  transform: rotate(25deg)}
    }
  `,
    },

  {
    id: "navigator2SpinLding",
    html: `<span class="loader"></span>`,
    css: `.loader {
      width: 64px;
      height: 64px;
      position: relative;
      background: #FFF;
      border-radius: 50%;
      transform: rotate(45deg);
      animation: rotate 2s linear infinite;
    }
    .loader:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 15px;
      height: 30px;
      background: #FF3D00;
      transform: skew(5deg , 60deg) translate(-50%, -5%);
    }

    .loader:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #FFF;
      transform:translate(-50% , -50%);
    }

    @keyframes rotate {
      0% { transform: rotate(45deg)}
      30% , 50% , 70%  { transform: rotate(230deg)}
      40% , 60% , 80% { transform: rotate(240deg)}
      100% {  transform: rotate(245deg)}
   }
  `,
    },

  {
    id: "globArRot",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width: 120px;
    height: 140px;
    background-image: radial-gradient(circle 30px, #fff 100%, transparent 0),
    radial-gradient(circle 5px, #fff 100%, transparent 0),
    radial-gradient(circle 5px, #fff 100%, transparent 0),
    linear-gradient(#FFF 20px, transparent 0);
    background-position: center 127px , 94px 102px , 16px 18px, center 114px;
    background-size: 60px 60px, 10px 10px , 10px 10px , 4px 14px;
    background-repeat: no-repeat;
    z-index: 10;
    perspective: 500px;
  }
  .loader::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius:50%;
    border: 3px solid #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -55%) rotate(-45deg);
    border-right-color: transparent;
    box-sizing: border-box;
}
  .loader::after {
    content: '';
    position: absolute;
    height: 80px;
    width: 80px;
    transform: translate(-50%, -55%) rotate(-45deg) rotateY(0deg) ;
    left: 50%;
    top: 50%;
    box-sizing: border-box;
    border: 7px solid #FF3D00;
    border-radius:50%;
    animation: rotate 0.5s linear infinite;
  }

@keyframes rotate {
  to{transform: translate(-50%, -55%) rotate(-45deg) rotateY(360deg)   }
}
    `,
    },

  {
    id: "fillSandClock",
    html: `<span class="loader"></span>`,
    css: `.loader {
  box-sizing: border-box;
  display: inline-block;
  width: 50px;
  height: 80px;
  border-top: 5px solid #fff;
  border-bottom: 5px solid #fff;
  position: relative;
  background: linear-gradient(#FF3D00 30px, transparent 0) no-repeat;
  background-size: 2px 40px;
  background-position: 50% 0px;
  animation: spinx 5s linear infinite;
}
.loader:before, .loader:after {
  content: "";
  width: 40px;
  left: 50%;
  height: 35px;
  position: absolute;
  top: 0;
  transform: translatex(-50%);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0 0 20px 20px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 0 0px;
  animation: lqt 5s linear infinite;
}
.loader:after {
  top: auto;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  animation: lqb 5s linear infinite;
}
@keyframes lqt {
  0%, 100% {
    background-image: linear-gradient(#FF3D00 40px, transparent 0);
    background-position: 0% 0px;
  }
  50% {
    background-image: linear-gradient(#FF3D00 40px, transparent 0);
    background-position: 0% 40px;
  }
  50.1% {
    background-image: linear-gradient(#FF3D00 40px, transparent 0);
    background-position: 0% -40px;
  }
}
@keyframes lqb {
  0% {
    background-image: linear-gradient(#FF3D00 40px, transparent 0);
    background-position: 0 40px;
  }
  100% {
    background-image: linear-gradient(#FF3D00 40px, transparent 0);
    background-position: 0 -40px;
  }
}
@keyframes spinx {
  0%, 49% {
    transform: rotate(0deg);
    background-position: 50% 36px;
  }
  51%, 98% {
    transform: rotate(180deg);
    background-position: 50% 4px;
  }
  100% {
    transform: rotate(360deg);
    background-position: 50% 36px;
  }
}
    `,
  },

    {
        id: "eyeBallMoveSinleo6e",
        html: `<span class="loader"></span>`,
        css: `.loader {
          position: relative;
          width: 78px;
          height: 78px;
          border-radius: 50%;
          box-sizing: border-box;
          background: #fff;
          border: 8px solid #131a1d;
          overflow: hidden;
          box-sizing: border-box;
        }
        .loader::after {
          content: '';
          position: absolute;
          left: 0;
          top: -50%;
          width: 100%;
          height: 100%;
          background: #263238 ;
          z-index: 5;
          border-bottom: 8px solid #131a1d;
          box-sizing: border-box;
          animation: eyeShade 3s infinite;
        }
        .loader::before {
          content: '';
          position: absolute;
          left: 20px;
          bottom: 15px;
          width: 32px;
          z-index: 2;
          height: 32px;
          background: #111;
          border-radius: 50%;
          animation: eyeMove 3s infinite;
        }
        @keyframes eyeShade {
          0%   { transform: translateY(0)}
          20%   { transform: translateY(5px)}
          40% , 50%   { transform: translateY(-5px)}
          60%   { transform: translateY( -8px)}
          75%   { transform: translateY( 5px)}
          100%   { transform: translateY(10px)}
        }
        @keyframes eyeMove {
          0%   { transform: translate(0 , 0)}
          20%   { transform: translate(0px , 5px)}
          40% , 50%   { transform: translate(0px , -5px)}
          60%   { transform: translate(-10px , -5px)}
          75%   { transform: translate(-20px , 5px)}
          100%   { transform: translate(0 , 10px)}
        }
`,
    },
    {
        id: "lookingEyesmove",
        html: `<span class="loader"></span>`,
        css: `.loader {
            position: relative;
            width: 108px;
            display: flex;
            justify-content: space-between;
          }
          .loader::after , .loader::before  {
            content: '';
            display: inline-block;
            width: 48px;
            height: 48px;
            background-color: #FFF;
            background-image:  radial-gradient(circle 14px, #0d161b 100%, transparent 0);
            background-repeat: no-repeat;
            border-radius: 50%;
            animation: eyeMove 10s infinite , blink 10s infinite;
          }
          @keyframes eyeMove {
            0%  , 10% {     background-position: 0px 0px}
            13%  , 40% {     background-position: -15px 0px}
            43%  , 70% {     background-position: 15px 0px}
            73%  , 90% {     background-position: 0px 15px}
            93%  , 100% {     background-position: 0px 0px}
          }
          @keyframes blink {
            0%  , 10% , 12% , 20%, 22%, 40%, 42% , 60%, 62%,  70%, 72% , 90%, 92%, 98% , 100%
            { height: 48px}
            11% , 21% ,41% , 61% , 71% , 91% , 99%
            { height: 18px}
          }
`,
    },
 

    {
        id: "h7vm0fttsne",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  background-color: #FFF;
  background: radial-gradient(ellipse at center, #FF3D00 0%, #FF3D00 14%, #FFF 15%, #FFF 100%);
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}
.loader::after,
.loader::before {
  content: '';  
  position: absolute;
  height: 16px;
  width: 4px;
  background: #FF3D00;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) rotate(0deg);
  transform-origin: 25% 0;
  box-sizing: border-box;
  animation: rotation 10s linear infinite;
}
.loader::before {
  height: 22px;
  width: 2px;
  transform: translateX(-50%) rotate(0deg);
  animation-duration: 1s;
} 
@keyframes rotation {
  0%    { transform: rotate(0deg)}
  100%  { transform: rotate(360deg)}
} 
`,
    },
  
    {
        id: "52ma1rva0kd",
        note: 'Set background',
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 60px;
  height: 40px;
  position: relative;
  display: inline-block;
  --base-color: #263238; /*use your base color*/
}
.loader::before {
  content: '';  
  left: 0;
  top: 0;
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #FFF;
  background-image: radial-gradient(circle 8px at 18px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 18px 0px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 0px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 36px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 18px 36px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 30px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 5px 30px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 5px 5px, var(--base-color) 100%, transparent 0);
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: rotationBack 3s linear infinite;
}
.loader::after {
  content: '';  
  left: 35px;
  top: 15px;
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #FFF;
  background-image: radial-gradient(circle 5px at 12px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 12px 0px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 0px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 24px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 12px 24px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 20px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 3px 20px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 3px 3px, var(--base-color) 100%, transparent 0);
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: rotationBack 4s linear infinite reverse;
}
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}  `,
    }, {
        id: "ndepi68izxb",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 15px;
  height: 20px;
  margin-left: 15px;
  background: #FFF;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: bump 0.4s ease-in infinite alternate;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0);
  position: absolute;
  border: 15px solid transparent;
  border-top-color: #FFF;
}

@keyframes bump {
  0% {
    transform: translate(-50%, 5px);
  }
  100% {
    transform: translate(-50%, -5px);
  }
}
    `,
    }, {
        id: "d98dr90vrl4",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 15px;
  height: 20px;
  background: #FFF;
  margin-left: 15px;
  margin-top: 15px;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: bump 0.4s linear infinite alternate;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  left: 50%;
  bottom: 100%;
  transform: translate(-50%, 0);
  position: absolute;
  border: 15px solid transparent;
  border-bottom-color: #FFF;
}

@keyframes bump {
  0% {
    transform: translate(-50%, 5px);
  }
  100% {
    transform: translate(-50%, -5px);
  }
}
    `,
    }, {
        id: "vzbf4u0evp",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 12px;
  background: #FFF;
  margin-top: 40px;
  display: inline-block;
  position: relative;
}
.loader::after {
  content: '';  
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  position: absolute;
  border: 15px solid transparent;
  border-top-color: #FFF;
  box-sizing: border-box;
  animation: bump 0.4s ease-in-out infinite alternate;
}
.loader::before {
  content: '';  
  left: 50%;
  bottom: 25px;
  transform: translate(-50%, 0);
  position: absolute;
  width: 15px;
  height: 20px;
  background: #FFF;
  box-sizing: border-box;
  animation: bump 0.4s ease-in-out infinite alternate;
}

@keyframes bump {
  0% {
    transform: translate(-50%, 5px);
  }
  100% {
    transform: translate(-50%, -5px);
  }
}
    `,
    }, {
        id: "4vrwgk8hm4e",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 12px;
  margin-top: 40px;
  background: #FFF;
  display: inline-block;
  position: relative;
}
.loader::after {
  content: '';  
  left: 50%;
  top: -47px;
  transform: translate(-50%, 0);
  position: absolute;
  border: 15px solid transparent;
  border-bottom-color: #FFF;
  box-sizing: border-box;
  animation: bump 0.4s ease-in-out infinite alternate;
}
.loader::before {
  content: '';  
  left: 50%;
  bottom: 15px;
  transform: translate(-50%, 0);
  position: absolute;
  width: 15px;
  height: 20px;
  background: #FFF;
  box-sizing: border-box;
  animation: bump 0.4s ease-in-out infinite alternate;
}

@keyframes bump {
  0% {
    transform: translate(-50%, 5px);
  }
  100% {
    transform: translate(-50%, -5px);
  }
}
    `,
    },
    
  {
    id: "locakHackPrcess",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 64px;
  height: 44px;
  position: relative;
  border: 5px solid #fff;
  border-radius: 8px;
}
.loader::before {
  content: '';
  position: absolute;
  border: 5px solid #fff;
  width: 32px;
  height: 28px;
  border-radius: 50% 50% 0 0;
  left: 50%;
  top: 0;
  transform: translate(-50% , -100%)

}
.loader::after {
  content: '';
  position: absolute;
  transform: translate(-50% , -50%);
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 16px 0 #fff, -16px 0 #fff;
  animation: flash 0.5s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 16px 0 rgba(255, 255, 255, 0.25), -16px 0 rgba(255, 255, 255, 1);
  }
  50% {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 16px 0 rgba(255, 255, 255, 0.25), -16px 0 rgba(255, 255, 255, 0.25);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 16px 0 rgba(255, 255, 255, 1), -16px 0 rgba(255, 255, 255, 0.25);
  }
}
    `,
    },
    
    
    {
        id: "4z17obmn46s",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 24px;
  display: inline-block;
  position: relative;
  color: #FFF;
  border: 1px solid;
  box-sizing: border-box;
  animation: fillX 2s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  background: #FFF;
  width: 5px;
  height: 12px;
}

@keyframes fillX {
  0% {
    box-shadow: 0 0 inset;
  }
  100% {
    box-shadow: 48px 0 inset;
  }
}
    `,
    },
    
    
    
    
    {
        id: "n4oiol4um1g",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 24px;
  display: inline-block;
  position: relative;
  border: 1px solid #FFF;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid #FFF;
  width: 5px;
  height: 12px;
}
.loader::before {
  content: '';  
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  height: 80%;
  width: 6px;
  box-sizing: border-box;
  animation: animloader  2s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 11px 0 rgba(255, 255, 255, 0), 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
  }
  25% {
    box-shadow: 11px 0 white, 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 11px 0 white, 22px 0 white, 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
  }
  75% {
    box-shadow: 11px 0 white, 22px 0 white, 33px 0 white, 44px 0 rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 11px 0 white, 22px 0 white, 33px 0 white, 44px 0 white;
  }
}
    `,
    },
  {
    id: "snapChatLoading",
    html: `<span class="loader"></span>`,
    css: `.loader{
  width: 100px;
  height: 75px;
  margin: 0 auto;
  background: #fff;
  position: relative;
  border-radius: 100%;
}
.loader:before {
  content: '';
  position: absolute;
  box-sizing: border-box;
  border: 15px solid transparent;
  border-top: 25px solid #fff;
  transform: rotate(45deg);
  top: 50px;
  left: -15px;
}

.loader:after {
  content: '';
  width: 12px;
  height: 12px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50% , -50%);
  border-radius: 50%;
  background-color: #FF3D00;
  box-shadow: 20px 0 #FF3D00, -20px 0 #FF3D00;
  animation: flash 0.5s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: rgba(255, 60, 0, 0.25);
    box-shadow: 20px 0 rgba(255, 60, 0, 0.25), -20px 0 #FF3D00;
  }
  50% {
    background-color: #FF3D00;
    box-shadow: 20px 0 rgba(255, 60, 0, 0.25), -20px 0 rgba(255, 60, 0, 0.25);
  }
  100% {
    background-color: rgba(255, 60, 0, 0.25);
    box-shadow: 20px 0 #FF3D00, -20px 0 rgba(255, 60, 0, 0.25);
  }
}
      `,
    },
    
    {
      id: "pl-thras-blan",
      html: `<span class="loader"></span>`,
      css: `.loader{
        display: block;
        position: relative;
        height: 32px;
        width: 120px;
        border-bottom: 5px solid #fff;
        box-sizing: border-box;
        animation: balancing 2s linear infinite alternate;
        transform-origin: 50% 100%;
      }
      .loader:before{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: #FF3D00;
        animation: ballbns 2s linear infinite alternate;
      }
      .loader:after{
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        height: 20px;
        width: 20px;
        transform: translate(-50%, 100%);
        border-radius: 50%;
        border: 6px solid #fff;
      }
      @keyframes ballbns {
        0% {  left: 0; transform: translateX(0%); }
        100% {  left: 100%; transform: translateX(-100%); }
      }
      @keyframes balancing {
        0% {  transform: rotate(-15deg); }
        50% {  transform: rotate(0deg); }
        100% {  transform: rotate(15deg); }
      }`
    },
    
    {
        id: "ra8ufhusqs",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  border: 4px solid #FFF;
  box-sizing: border-box;
  animation: fill 2s linear infinite alternate;
  color: rgba(255, 61, 0, 0.9);
  border-radius: 0 0 4px 4px;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 4px solid #FFF;
  width: 20px;
  height: 25px;
  border-radius: 0 4px 4px 0;
}

@keyframes fill {
  0% {
    box-shadow: 0 0  inset;
  }
  100% {
    box-shadow: 0 -48px inset;
  }
} `,
    },

 {
        id: "4iqbx9mqg3e",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 32px;
  height: 72px;
  display: inline-block;
  left: 5px;
  position: relative;
  border: 2px solid #FFF;
  box-sizing: border-box;
  animation: animloader 2s linear infinite alternate;
  color: #FF3D00;
  border-radius: 0 0 4px 4px;
  transform: perspective(140px) rotateX(-45deg);
}

@keyframes animloader {
  0% {
    box-shadow: 0 0  inset;
  }
  100% {
    box-shadow: 0 -70px inset;
  }
}
`,
    },

 {
        id: "bottleOfwineFill",
        html: `<span class="loader"></span>`,
        css: `.loader {
          width: 40px;
          height: 98px;
          display: inline-block;
          position: relative;
          border: 2px solid #FFF;
          box-sizing: border-box;
          color: rgba(255, 61, 0, 0.9);
          border-radius: 20px 20px 4px 4px;
          background: #fff;
          animation: fill 2s linear infinite alternate;
        }
        .loader::after {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 50%;
          top: 0%;
          transform: translate(-50% , -95%);
          border: 2px solid #FFF;
          border-bottom: none;
          background: #fff;
          width: 15px;
          height: 35px;
          animation: fillNeck 2s linear infinite alternate;
        }

        @keyframes fill {
          0% { box-shadow: 0 0  inset }
          50% , 100% { box-shadow: 0 -98px inset }
        }


        @keyframes fillNeck {
          0% , 50%{ box-shadow: 0 0  inset }
          100% { box-shadow: 0 -20px inset }
        }
    `,
  },
    
    
    
    
    {
        id: "ofqzm8c3y98",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 40px;
  margin-top: 30px;
  display: inline-block;
  position: relative;
  background: #FFF;
  border-radius: 15% 15% 35% 35%;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 45px;
  top: 8px;
  border: 4px solid #FFF;
  width: 16px;
  height: 20px;
  border-radius: 0 4px 4px 0;
}
.loader::before {
  content: '';  
  position: absolute;
  width: 1px;
  height: 10px;
  color: #FFF;
  top: -15px;
  left: 11px;
  box-sizing: border-box;
  animation: animloader 1s ease infinite;
}

@keyframes animloader {
    0% {
  box-shadow: 2px 0px rgba(255, 255, 255, 0), 12px 0px rgba(255, 255, 255, 0.3), 20px 0px rgba(255, 255, 255, 0);
}
    50% {
  box-shadow: 2px -5px rgba(255, 255, 255, 0.5), 12px -3px rgba(255, 255, 255, 0.5), 20px -2px rgba(255, 255, 255, 0.6);
}
    100% {
  box-shadow: 2px -8px rgba(255, 255, 255, 0), 12px -5px rgba(255, 255, 255, 0), 20px -5px rgba(255, 255, 255, 0);
}
  }`,
    }, {
        id: "q6a6szttdf",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 96px;
  height: 48px;
  display: inline-block;
  position: relative;
  background: #FFF;
  border-radius: 48px 48px 0 0;
  box-sizing: border-box;
  overflow: hidden;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  width: 24px;
  height: 12px;
  border-radius: 24px 24px 0 0;
  background: #FF3D00;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
}
.loader::before {
  content: '';  
  position: absolute;
  width: 4px;
  height: 32px;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  background: #FF3D00;
  transform-origin: 50% 100%;
  box-sizing: border-box;
  animation: animloader 2s linear infinite alternate;
}

@keyframes animloader {
  0% {
    transform: rotate(-70deg);
  }
  10% {
    transform: rotate(-40deg);
  }
  20%, 45%, 35% {
    transform: rotate(-10deg);
  }
  40%, 30% {
    transform: rotate(-30deg);
  }
  50%, 60% {
    transform: rotate(20deg);
  }
  55%, 65%, 75% {
    transform: rotate(40deg);
  }
  70% {
    transform: rotate(45deg);
  }
  85%, 90% {
    transform: rotate(50deg);
  }
  95% {
    transform: rotate(75deg);
  }
  100%, 93% {
    transform: rotate(70deg);
  }
}
`,
    }, 
    
    
    
    {
        id: "sbxrg21wokq",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  display: block;
  margin: 20px auto;
  position: relative;
  border: 3px solid #FFF;
  border-radius: 50%;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  width: 6px;
  height: 24px;
  background: #FFF;
  transform: rotate(-45deg);
  position: absolute;
  bottom: -20px;
  left: 46px;
}

@keyframes animloader {
  0% {
    transform: translate(-10px, -10px);
  }
  25% {
    transform: translate(-10px, 10px);
  }
  50% {
    transform: translate(10px, 10px);
  }
  75% {
    transform: translate(10px, -10px);
  }
  100% {
    transform: translate(-10px, -10px);
  }
}
    `,
    }, {
        id: "4drk3f63i44",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  display: block;
  margin: 20px auto;
  box-sizing: border-box;
  position: relative;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  left: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50% 50% 0;
  border: 15px solid #FFF;
  transform: rotate(45deg) translate(0, 0);
  box-sizing: border-box;
  animation: animMarker 0.4s ease-in-out infinite alternate;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 150%;
  width: 24px;
  height: 4px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  animation: animShadow 0.4s ease-in-out infinite alternate;
}

@keyframes animMarker {
  0% {
    transform: rotate(45deg) translate(5px, 5px);
  }
  100% {
    transform: rotate(45deg) translate(-5px, -5px);
  }
}

@keyframes animShadow {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
    `,
    }, {
        id: "9p7nroeguim",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  background: #FF3D00;
  display: block;
  margin: 20px auto;
  position: relative;
  box-sizing: border-box;
  animation: rotationBack 1s ease-in-out infinite reverse;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  left: 0;
  top: 0;
  transform: rotate(45deg);
  position: absolute;
  width: 48px;
  height: 48px;
  background: #FF3D00;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  background: #FFF;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
`,
    }, {
        id: "cctrtq4l314",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 60px;
  height: 60px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: radial-gradient(ellipse at center, #FFF 69%, rgba(0, 0, 0, 0) 70%), linear-gradient(to right, rgba(0, 0, 0, 0) 47%, #FFF 48%, #FFF 52%, rgba(0, 0, 0, 0) 53%);
  background-size: 20px 20px , 20px auto;
  background-repeat: repeat-x;
  background-position: center bottom, center -5px;
  box-sizing: border-box;
}
.loader::before,
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: -20px;
  top: 0;
  width: 20px;
  height: 60px;
  background: radial-gradient(ellipse at center, #FFF 69%, rgba(0, 0, 0, 0) 70%), linear-gradient(to right, rgba(0, 0, 0, 0) 47%, #FFF 48%, #FFF 52%, rgba(0, 0, 0, 0) 53%);
  background-size: 20px 20px , 20px auto;
  background-repeat: no-repeat;
  background-position: center bottom, center -5px;
  transform: rotate(0deg);
  transform-origin: 50% 0%;
  animation: animPend 1s linear infinite alternate;
}
.loader::after {
  animation: animPend2 1s linear infinite alternate;
  left: 100%;
}

@keyframes animPend {
  0% {
    transform: rotate(22deg);
  }
  50% {
    transform: rotate(0deg);
  }
}

@keyframes animPend2 {
  0%, 55% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-22deg);
  }
}
`,
    },
    
    
  {
    id: "anbeLighup",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 4px;
  height: 86px;
  background: #fff;
  margin: auto;
  position: relative;
  animation: shake 1s linear infinite alternate,
             lightup 1s linear infinite;
  transform-origin: 0 0;
}

.loader::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  width: 32px;
  height: 16px;
  box-sizing:border-box;
  border: 5px solid #FF3D00;
  border-top: none;
  border-radius: 0 0 20px 20px;
}
.loader::after {
  content: '';
  left: 50%;
  bottom: 0;
  position: absolute;
  transform: translateX(-50%);
  width: 64px;
  height: 32px;
  border-radius: 50px 50px 0 0;
  background: #fff;
}

@keyframes shake {
  0% { transform: rotate(10deg)  }
  100% { transform: rotate(-10deg)  }
}
@keyframes lightup {
  0% ,20% , 40% {
    opacity: 0
  }
  10%, 30% , 50% , 100% {
    opacity: 1
  }
}
    `
  },
    
    
    
    {
        id: "2hmjm05ufjc",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 24px;
  height: 80px;
  display: block;
  margin: 35px auto 0;
  border: 1px solid #FFF;
  border-radius: 0 0 50px 50px;
  position: relative;
  box-shadow: 0px 0px #FF3D00 inset;
  background-image: linear-gradient(#FF3D00 100px, transparent 0);
  background-position: 0px 0px;
  background-size: 22px 80px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  border: 1px solid #FFF;
  border-radius: 50%;
  width: 28px;
  height: 6px;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  left: 0;
  bottom: -4px;
  border-radius: 50%;
  position: absolute;
  width: 6px;
  height: 6px;
  animation: animloader1 6s linear infinite;
}

@keyframes animloader {
  0% {
    background-position: 0px 80px;
  }
  100% {
    background-position: 0px 0px;
  }
}

@keyframes animloader1 {
  0% {
    box-shadow: 4px -10px rgba(255, 255, 255, 0), 6px 0px rgba(255, 255, 255, 0), 8px -15px rgba(255, 255, 255, 0), 12px 0px rgba(255, 255, 255, 0);
  }
  20% {
    box-shadow: 4px -20px rgba(255, 255, 255, 0), 8px -10px rgba(255, 255, 255, 0), 10px -30px rgba(255, 255, 255, 0.5), 15px -5px rgba(255, 255, 255, 0);
  }
  40% {
    box-shadow: 2px -40px rgba(255, 255, 255, 0.5), 8px -30px rgba(255, 255, 255, 0.4), 8px -60px rgba(255, 255, 255, 0.5), 12px -15px rgba(255, 255, 255, 0.5);
  }
  60% {
    box-shadow: 4px -60px rgba(255, 255, 255, 0.5), 6px -50px rgba(255, 255, 255, 0.4), 10px -90px rgba(255, 255, 255, 0.5), 15px -25px rgba(255, 255, 255, 0.5);
  }
  80% {
    box-shadow: 2px -80px rgba(255, 255, 255, 0.5), 4px -70px rgba(255, 255, 255, 0.4), 8px -120px rgba(255, 255, 255, 0), 12px -35px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow: 4px -100px rgba(255, 255, 255, 0), 8px -90px rgba(255, 255, 255, 0), 10px -120px rgba(255, 255, 255, 0), 15px -45px rgba(255, 255, 255, 0);
  }
}

`,
    },

        
    {
        id: "bakenLoading89frbbl",
        html: `<span class="loader"></span>`,
        css: `.loader {
              width: 64px;
              height: 64px;
              display: block;
              border: 1px solid #FFF;
              border-radius: 50px ;
              position: relative;
              box-shadow: 0px 0px #FF3D00 inset;
              background-color: #fff;
              background-image: linear-gradient(#FF3D00 100px, transparent 0);
              background-position: 0  20px;
              background-size: 100% auto;
              background-repeat: no-repeat;
              box-sizing: border-box;
            }
            .loader::after {
              content: '';
              box-sizing: border-box;
              position: absolute;
              left: 50%;
              top: 0%;
              transform: translate(-50% , -95%);
              border: 2px solid #FFF;
              border-bottom: none;
              background: #fff;
              width: 15px;
              height: 35px;
            }
            .loader::before {
              content: '';
              box-sizing: border-box;
              left: 50%;
              transform: translateX(-125%);
              bottom: -4px;
              border-radius: 50%;
              position: absolute;
              width: 6px;
              height: 6px;
              z-index: 10;
              animation: bubbles 6s linear infinite;
            }
            @keyframes bubbles {
              0% {
                box-shadow: 4px -10px rgba(255, 0, 0, 0), 6px 0px rgba(255, 0, 0, 0), 8px -15px rgba(255, 0, 0, 0), 12px 0px rgba(255, 0, 0, 0);
              }
              20% {
                box-shadow: 4px -20px rgba(255, 0, 0, 0), 8px -10px rgba(255, 0, 0, 0), 10px -30px rgba(255, 255, 255, 0.5), 15px -5px rgba(255, 0, 0, 0);
              }
              40% {
                box-shadow: 2px -40px rgba(255, 255, 255, 0.5), 8px -30px rgba(255, 0, 0, 0.4), 8px -60px rgba(255, 255, 255, 0.5), 12px -15px rgba(255, 255, 255, 0.5);
              }
              60% {
                box-shadow: 4px -60px rgba(255, 255, 255, 0.5), 6px -50px rgba(255, 0, 0, 0.4), 10px -90px rgba(255, 255, 255, 0.5), 15px -25px rgba(255, 255, 255, 0.5);
              }
              80% {
                box-shadow: 2px -80px rgba(255, 0, 0, 0.5), 4px -70px rgba(255, 0, 0, 0.4), 8px -120px rgba(255, 0, 0, 0), 12px -35px rgba(255, 0, 0, 0.5);
              }
              100% {
                box-shadow: 4px -100px rgba(255, 0, 0, 0), 8px -90px rgba(255, 0, 0, 0), 10px -120px rgba(255, 0, 0, 0), 15px -45px rgba(255, 0, 0, 0);
              }
            }
    `,
    },


  {
    id: "spearGlassFillre",
    html: `<span class="loader"></span>`,
    css: `.loader {
        position: relative;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        box-shadow: inset 0 0 20px -5px rgba(255, 255, 255, 0.5),
                inset 0 -40px 40px -20px rgba(255, 255, 255, 0.5);
        background: linear-gradient(#FF3D00 120px, transparent 0) no-repeat;
        background-position: 0px 120px;
        animation: fillLq 10s linear infinite alternate;
      }
      .loader:before {
        position: absolute;
        content: '';
        width: 40%;
        height: 25%;
        top: 20px;
        left: 10px;
        background: rgba(255,255,255,0.1);
        border-radius: 50%;
        transform: rotate(-45deg);
      }

      @keyframes fillLq {
        0% , 10% { background-position: 0 120px}
        90% , 100% { background-position: 0 0}
      }
    `,
    },

    
    {
        id: "c0g9cavcnfd",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 20px;
  height: 20px;
  display: block;
  margin: 80px auto 20px;
  border-radius: 50%;
  background: #FF3D00;
  border: 5px solid #FFF;
  position: relative;
  box-sizing: border-box;
}
.loader::before {
  content: '';  
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  width: 8px;
  height: 80px;
  border: 2px solid #FFF;
  border-bottom: none;
  background: #FFF;
  color: #FF3D00;
  border-radius: 50px 50px 0 0;
  box-shadow: 0px 0px  inset;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 0px 0px  inset;
  }
  100% {
    box-shadow: 0px -80px  inset;
  }
}
`,
    },
  {
    id: "sprLgLdg",
    html: `<span class="loader"></span>`,
    css: `.loader {
    width: 150px;
    height: 150px;
    background-color: #ff3d00;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.5) inset,
      0 5px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 45%;
    top: -40%;
    background-color: #fff;
    animation: wave 5s linear infinite;
  }
  .loader:before {
    border-radius: 30%;
    background: rgba(255, 255, 255, 0.4);
    animation: wave 5s linear infinite;
  }
  @keyframes wave {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,
  },

  {
    id: "cheLoad",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 96px;
  box-sizing: content-box;
  height: 48px;
  background: #FFF;
  border-color: #de3500;
  border-style: solid;
  border-width: 2px 2px 50px 2px;
  border-radius: 100%;
  position: relative;
  animation: 3s yinYang linear infinite;
}
.loader:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  background: #FFF;
  border: 18px solid #de3500;
  border-radius: 100%;
  width: 12px;
  height: 12px;
  box-sizing: content-box;
}
.loader:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background: #de3500;
  border: 18px solid #FFF;
  border-radius: 100%;
  width: 12px;
  height: 12px;
  box-sizing: content-box;
}
@keyframes yinYang {
  100%{transform: rotate(360deg)}
}
`,
  },

  {
  id: "mouseScrDwn",
  html: `<span class="loader"></span>`,
  css: `.loader {
  width: 48px;
  height: 78px;
  box-sizing: border-box;
  border: 2px solid #fff;
  position: relative;
  border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
}

.loader::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50% , 50%);
  width: 10px;
  height: 10px;
  background: #FFF;
  border-radius: 50%;
  animation: fadeDown 1s ease-out infinite;
}

@keyframes fadeDown {
  0% {
    top: 0%;
    opacity: 1;
  }
  100% {
    top: 60%;
    opacity: 0;
  }
}
`,
  },
{
  id: "mouseLnScrDwn",
  html: `<span class="loader"></span>`,
  css: `.loader {
  width: 48px;
  height: 78px;
  position: relative;
  box-sizing: border-box;
  border: 2px solid #fff;
  margin: auto;
  border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
}
.loader::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 10px;
  animation: scrollDown 1.5s linear infinite;
}
@keyframes scrollDown {
  0% {
    top: 15px;
    height: 4px;
    opacity: 1;
  }
  33% {
    top: 15px;
    height: 40px;
  }
  66% {
    top: 50px;
    height: 10px;
    opacity: 1;
  }
  100% {
    top: 56px;
    height: 4px;
    opacity: 0;
  }
}
`,
  },
  {
    id: "mouseBallBounce",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 86px;
  position: relative;
}

.loader::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50% , 50%);
  width: 10px;
  height: 10px;
  background: #FFF;
  border-radius: 50%;
  animation: bounce 1s ease-in infinite alternate;
}
.loader::after {
  content: '';
  left: 0;
  top: 0;
  position: absolute;
  width: 48px;
  height: 86px;
  box-sizing: border-box;
  border: 2px solid #fff;
  border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
  animation: kick 1s ease-in infinite alternate;
}

@keyframes bounce {
  0% {
    top: 0%;
    opacity: 1;
  }
  100% {
    top: 75%;
    opacity: 0.2;
  }
}
@keyframes kick {
  0% , 75% {
    height: 86px
  }
   100% {
    height: 78px
  }
}
`,
  },




     {
        id: "8fzm1l50fw4",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 180px;
  height: 140px;
  display: block;
  margin: 0 auto 20px;
  background-image: radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 15px at 15px 15px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
  background-size: 50px 50px, 100px 75px, 50px 50px, 30px 32px, 136px 20px;
  background-repeat: no-repeat;
  background-position: 0px 30px, 30px 0px, 113px 29px, 147px 50px, 23px 60px;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: '';  
  position: absolute;
  left: 2px;
  top: 65px;
  width: 2px;
  height: 6px;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 0.6s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 25px 0 white, 50px 0 white, 75px 0 white, 100px 0 white, 125px 0 white, 150px 0 white, 25px 0 white, 50px 0 white, 75px 0 white, 100px 0 white, 125px 0 white, 150px 0 white;
  }
  50% {
    box-shadow: 25px 20px white, 50px 60px rgba(255, 255, 255, 0), 75px 30px rgba(255, 255, 255, 0), 100px 70px rgba(255, 255, 255, 0), 125px 40px white, 150px 60px rgba(255, 255, 255, 0), 25px 20px white, 50px 30px white, 75px 10px white, 100px 30px white, 125px 30px rgba(255, 255, 255, 0), 150px 30px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 25px 60px rgba(255, 255, 255, 0), 50px 60px rgba(255, 255, 255, 0), 75px 50px rgba(255, 255, 255, 0), 100px 70px rgba(255, 255, 255, 0), 125px 70px rgba(255, 255, 255, 0), 150px 60px rgba(255, 255, 255, 0), 25px 80px rgba(255, 255, 255, 0), 50px 80px rgba(255, 255, 255, 0), 75px 70px rgba(255, 255, 255, 0), 100px 60px rgba(255, 255, 255, 0), 125px 30px rgba(255, 255, 255, 0), 150px 30px rgba(255, 255, 255, 0);
  }
}
`,
    }, {
        id: "33du42ob36g",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 175px;
  height: 80px;
  display: block;
  margin: auto;
  background-image: radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: '';  
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  position: absolute;
  border: 15px solid transparent;
  border-top-color: #FF3D00;
  box-sizing: border-box;
  animation: fadePush 1s linear infinite;
}
.loader::before {
  content: '';  
  left: 50%;
  bottom: 30px;
  transform: translate(-50%, 0);
  position: absolute;
  width: 15px;
  height: 15px;
  background: #FF3D00;
  box-sizing: border-box;
  animation: fadePush 1s linear infinite;
}

@keyframes fadePush {
  0% {
    transform: translate(-50%, -15px);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, 0px);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 15px);
    opacity: 0;
  }
}
`,
    }, {
        id: "ni0hjvor5u8",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 175px;
  height: 80px;
  display: block;
  margin: auto;
  background-image: radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: '';  
  left: 50%;
  bottom: 30px;
  transform: translate(-50%, 0);
  position: absolute;
  border: 15px solid transparent;
  border-bottom-color: #FF3D00;
  box-sizing: border-box;
  animation: fadePull 1s linear infinite;
}
.loader::before {
  content: '';  
  left: 50%;
  bottom: 15px;
  transform: translate(-50%, 0);
  position: absolute;
  width: 15px;
  height: 15px;
  background: #FF3D00;
  box-sizing: border-box;
  animation: fadePull 1s linear infinite;
}

@keyframes fadePull {
  0% {
    transform: translate(-50%, 15px);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, 0px);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -15px);
    opacity: 0;
  }
}
`,
    }, {
        id: "7j8brpzvb5b",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 175px;
  height: 80px;
  display: block;
  margin: auto;
  background-image: radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: '';  
  left: 0;
  right: 0;
  margin: auto;
  bottom: 20px;
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-color: #FF3D00 transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} `,
    }, {
        id: "n6di2ljxvon",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 175px;
  height: 80px;
  display: block;
  margin:auto;
  background-image: radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
}
.loader::before {
  content: '';  
  left: 60px;
  bottom: 18px;
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #FF3D00;
  background-image: radial-gradient(circle 8px at 18px 18px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 18px 0px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 0px 18px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 36px 18px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 18px 36px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 30px 30px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 5px 30px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 5px 5px, #FFF 100%, transparent 0);
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: rotationBack 3s linear infinite;
}
.loader::after {
  content: '';  
  left: 94px;
  bottom: 15px;
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #FF3D00;
  background-image: radial-gradient(circle 5px at 12px 12px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 12px 0px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 0px 12px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 24px 12px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 12px 24px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 20px 20px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 3px 20px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 3px 3px, #FFF 100%, transparent 0);
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: rotationBack 4s linear infinite reverse;
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
`,
    }, {
        id: "yyrv9o4qr4",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 175px;
  height: 80px;
  display: block;
  margin:auto;
  background-image: linear-gradient(#263238 50px, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
  background-size: 64px 6px, 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 55px 60px, 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: '';  
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(-180deg);
  top: 62px;
  height: 64px;
  width: 60px;
  background-color: #FFF;
  background-image: linear-gradient(#DDD 20px, transparent 0), linear-gradient(#DDD 5px, transparent 0), linear-gradient(#DDD 10px, transparent 0), linear-gradient(#DDD 10px, transparent 0);
  background-size: 50px 20px;
  background-position: 5px 36px, 5px 25px, 5px 10px;
  background-repeat: no-repeat;
  border-radius: 2px 2px 4px 4px;
  z-index: 10;
  box-shadow: 0px -4px 7px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  animation: animloader 4s linear infinite;
}

@keyframes animloader {
  0% {
    height: 64px;
  }
  90%, 100% {
    height: 0px;
  }
}
`,
    }, 
    
     {
        id: "povx9w7f6a",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 24px;
  color: #FFF;
  background: currentColor;
  border-radius: 50% 50% 0 0;
  position: relative;
  display: block;
  margin: 60px auto 0;
  box-sizing: border-box;
  animation: animloader 4s linear infinite;
}
.loader::after {
  content: '';  
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: currentColor;
  top: -34px;
  box-sizing: border-box;
  animation: animloader1 4s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 0 0 0 -2px , 0 0 0 -2px , 0 0 0 -5px , 0 0 0 -5px;
  }
  20% {
    box-shadow: 40px -1px 0 -2px , 0 0 0 -2px , 40px -1px 0 -5px , 0 0 0 -5px;
  }
  40% {
    box-shadow: 40px -1px 0 -2px , -40px -1px 0 -2px ,  40px -1px 0 -5px ,-40px -1px 0 -5px;
  }
  60% {
    box-shadow: 40px -1px 0 -2px , -40px -1px 0 -2px ,   23px -29px 0 -5px ,-40px -1px 0 -5px;
  }
  80%, 95% {
    box-shadow: 40px -1px 0 -2px , -40px -1px 0 -2px ,   23px -29px 0 -5px , -23px -29px 0 -5px;
  }
  100% {
    box-shadow: 40px -1px 0 -2px rgba(255, 255, 255, 0), -40px -1px 0 -2px rgba(255, 255, 255, 0), 23px -29px 0 -5px rgba(255, 255, 255, 0), -23px -29px 0 -5px rgba(255, 255, 255, 0);
  }
}

@keyframes animloader1 {
  0% {
    box-shadow: 0 0 0 -2px , 0 0 0 -2px , 0 0 0 -5px , 0 0 0 -5px;
  }
  20% {
    box-shadow: 40px 2px 0 -2px  , 0 0 0 -2px , 40px 2px 0 -5px , 0 0 0 -5px;
  }
  40% {
    box-shadow: 40px 2px 0 -2px  , -40px 2px 0 -2px , 40px 2px 0 -5px , -40px 2px 0 -5px;
  }
  60% {
    box-shadow: 40px 2px 0 -2px  , -40px 2px 0 -2px , 23px -23px 0 -5px , -40px 2px 0 -5px;
  }
  80%, 95% {
    box-shadow: 40px 2px 0 -2px  , -40px 2px 0 -2px , 23px -23px 0 -5px , -23px -23px 0 -5px;
  }
  100% {
    box-shadow: 40px 2px 0 -2px rgba(255, 255, 255, 0), -40px 2px 0 -2px rgba(255, 255, 255, 0), 23px -23px 0 -5px rgba(255, 255, 255, 0), -23px -23px 0 -5px rgba(255, 255, 255, 0);
  }
}
`,
    },


  {
    id: "gayoz753h8n",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 106px;
  height: 56px;
  display: block;
  margin: 30px auto;
  background-image: linear-gradient(#FFF 50px, transparent 0), linear-gradient(#FFF 50px, transparent 0), linear-gradient(#FFF 50px, transparent 0), linear-gradient(#FFF 50px, transparent 0), radial-gradient(circle 14px, #FFF 100%, transparent 0);
  background-size: 48px 15px , 15px 35px, 15px 35px, 25px 15px, 28px 28px;
  background-position: 25px 5px, 58px 20px, 25px 17px, 2px 37px, 76px 0px;
  background-repeat: no-repeat;
  position: relative;
  transform: rotate(-45deg);
  box-sizing: border-box;
}
.loader::after,
.loader::before {
  content: '';  
  position: absolute;
  width: 56px;
  height: 56px;
  border: 6px solid #FFF;
  border-radius: 50%;
  left: -45px;
  top: -10px;
  background-repeat: no-repeat;
  background-image: linear-gradient(#FFF 64px, transparent 0), linear-gradient(#FFF 66px, transparent 0), radial-gradient(circle 4px, #FFF 100%, transparent 0);
  background-size: 40px 1px , 1px 40px, 8px 8px;
  background-position: center center;
  box-sizing: border-box;
  animation: rotation 0.3s linear infinite;
}
.loader::before {
  left: 25px;
  top: 60px;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} `,
  },
  {
    id: "carDashrse",
    html: `<span class="loader"></span>`,
    css: `.loader {
          position: relative;
    width: 164px;
    height: 164px;
    border-radius: 50%;
    animation: rotate 0.75s linear infinite;
  }
  .loader::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 40px;
    border: 1px solid #FF3D00;
    border-width: 12px 2px 7px;
    border-radius: 2px 2px 1px 1px;
    box-sizing: border-box;
    transform: rotate(45deg) translate(24px, -10px);
    background-image: linear-gradient(#FF3D00 20px, transparent 0),
    linear-gradient(#FF3D00 30px, transparent 0),
    linear-gradient(#FF3D00 30px, transparent 0);
    background-size: 10px 12px , 1px 30px, 1px 30px;
    background-repeat: no-repeat;
    background-position: center , 12px 0px , 3px 0px;
}
  .loader::after {
    content: '';
    position: absolute;
    height: 4px;
    width: 4px;
    left: 20px;
    top: 47px;
    border-radius: 50%;
    color: #Fff;
    box-shadow: -4px 7px 2px, -7px 16px 3px 1px,
      -11px 24px 4px 1px, -6px 24px 4px 1px,
      -14px 35px 6px 2px, -5px 36px 8px 2px,
      -5px 45px 8px 2px, -14px 49px 8px 2px,
      6px 60px 11px 1px, -11px 66px 11px 1px,
      11px 75px 13px, -1px 82px 15px;
  }

@keyframes rotate {
  to{transform:rotate(360deg)   }
}
  `,
  },
  {
    id: "starLord-andro6e",
    html: `<span class="loader"></span>`,
    css: `.loader {
            position: relative;
            animation: flix 3s ease-in infinite alternate;
          }
          .loader:before {
            content: '';
            display: block;
            font-size: 0;
            width: 48px;
            height: 48px;
            background-color: #fff ;
            background-image:
              radial-gradient(circle 12px at 22px 22px, #FF3D00 100%, transparent 0),
              radial-gradient(circle 10px at 6px 40px, #FF3D00 100%, transparent 0),
              radial-gradient(circle 14px at 31px -6px, #FF3D00 100%, transparent 0),
              radial-gradient(circle 5px at 40px 30px, #FF3D00 100%, transparent 0);
            border-radius: 50%;
            animation: rotate 1s linear infinite;
          }
          .loader:after {
              content: '';
              position: absolute;
              top: 0%;
              transform: translate(-50% , -100%);
              left: 50%;
              width: 24px;
              height: 12px;
              background: #fff;
              border-radius: 50px 50px 0 0;
            }

          @keyframes flix {
            0%  , 60% { transform: rotate(-10deg)}
            100%  , 30% , 80% { transform: rotate(5deg)}
          }
          @keyframes rotate {
            100%   { transform: rotate(360deg)}
          }
`,
  },
  {
    id: "rockets-luncRd",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 32px;
  height: 90px;
  display: block;
  margin: 20px auto;
  position: relative;
  border-radius: 50% 50% 0 0;
  border-bottom: 10px solid #FF3D00;
  background-color: #FFF;
  background-image: radial-gradient(ellipse at center, #FFF 34%, #FF3D00 35%, #FF3D00 54%, #FFF 55%), linear-gradient(#FF3D00 10px, transparent 0);
  background-size: 28px 28px;
  background-position: center 20px , center 2px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: animloaderBack 1s linear infinite alternate;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 44px;
  border-radius: 50%;
  box-shadow: 0px 15px #FF3D00 inset;
  top: 67px;
}
.loader::after {
  content: '';  
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 34px;
  height: 34px;
  top: 112%;
  background: radial-gradient(ellipse at center, #ffdf00 8%, rgba(249, 62, 0, 0.6) 24%, rgba(0, 0, 0, 0) 100%);
  border-radius: 50% 50% 0;
  background-repeat: no-repeat;
  background-position: -44px -44px;
  background-size: 100px 100px;
  box-shadow: 4px 4px 12px 0px rgba(255, 61, 0, 0.5);
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloaderBack {
  0%, 30%, 70% {
    transform: translateY(0px);
  }
  20%, 40%, 100% {
    transform: translateY(-5px);
  }
}

@keyframes animloader {
  0% {
    box-shadow: 4px 4px 12px 2px rgba(255, 61, 0, 0.75);
    width: 34px;
    height: 34px;
    background-position: -44px -44px;
    background-size: 100px 100px;
  }
  100% {
    box-shadow: 2px 2px 8px 0px rgba(255, 61, 0, 0.5);
    width: 30px;
    height: 28px;
    background-position: -36px -36px;
    background-size: 80px 80px;
  }
}
`,
  },
  {
    id: "truckLd",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
  width: 130px;
  height: 100px;
  background-repeat: no-repeat;
  background-image: linear-gradient(#0277bd, #0277bd),
  linear-gradient(#29b6f6, #4fc3f7), linear-gradient(#29b6f6, #4fc3f7);
  background-size: 80px 70px, 30px 50px, 30px 30px;
  background-position: 0 0, 80px 20px, 100px 40px;
}
.loader:after {
  content: "";
  position: absolute;
  bottom: 10px;
  left: 12px;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  box-sizing: content-box;
  border: 10px solid #000;
  box-shadow: 78px 0 0 -10px #fff, 78px 0 #000;
  animation: wheelSk 0.75s ease-in infinite alternate;
}

.loader:before {
  content: "";
  position: absolute;
  right: 100%;
  top: 0px;
  height: 70px;
  width: 70px;
  background-image: linear-gradient(#fff 45px, transparent 0),
    linear-gradient(#fff 45px, transparent 0),
    linear-gradient(#fff 45px, transparent 0);
  background-repeat: no-repeat;
  background-size: 30px 4px;
  background-position: 0px 11px, 8px 35px, 0px 60px;
  animation: lineDropping 0.75s linear infinite;
}

@keyframes wheelSk {
  0%, 50%, 100% { transform: translatey(0) }
  30%, 90% { transform: translatey(-3px) }
}

@keyframes lineDropping {
  0% {
    background-position: 100px 11px, 115px 35px, 105px 60px;
    opacity: 1;
  }
  50% { background-position: 0px 11px, 20px 35px, 5px 60px }
  60% { background-position: -30px 11px, 0px 35px, -10px 60px }
  75%, 100% {
    background-position: -30px 11px, -30px 35px, -30px 60px;
    opacity: 0;
  }
}
`,
  },
  
]