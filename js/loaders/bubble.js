export const BUBBLE = [
    {
        id: "5s44kmptpx",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  box-sizing: border-box;
  animation: zeroRotation 1s linear infinite alternate;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  background: #FF3D00;
  width: 16px;
  height: 16px;
  transform: translate(-50%, 50%);
  border-radius: 50%;
}
.loader::before {
  left: auto;
  right: 0;
  transform: translate(50%, 100%);
}

@keyframes zeroRotation {
  0% {
    transform: scale(1) rotate(0deg);
  }
  100% {
    transform: scale(0) rotate(360deg);
  }
} `,
    }, {
        id: "w216qsky6id",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  display: block;
  margin:15px auto;
  position: relative;
  color: #FFF;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  background-color: #FFF;
  border-radius: 50%;
  animation: scale50 1s infinite ease-in-out;
}
.loader::before {
  top: auto;
  bottom: 0;
  background-color: #FF3D00;
  animation-delay: 0.5s;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
@keyframes scale50 {
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
} `,
    }, {
        id: "e53631pwlqi",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  display: block;
  margin:15px auto;
  position: relative;
  color: #FFF;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  left: 50%;
  transform: scale(0.5) translate(0, 0);
  background-color: #FFF;
  border-radius: 50%;
  animation: animloader 1s infinite ease-in-out;
}
.loader::before {
  background-color: #FF3D00;
  transform: scale(0.5) translate(-48px, -48px);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
@keyframes animloader {
    50% {
      transform: scale(1) translate(-50%, -50%);
}
}
    `,
    },
    
  {
    id: "prePresLding34",
    html: `<span class="loader"></span>`,
    css: `.loader {
        position: relative;
      }
      .loader:before ,  .loader:after {
          content: '';
          width: 15px;
          height: 15px;
          display: block;
          position: relative;
          margin: 10px auto ;
          border-radius: 50%;
          background: #fff;
          animation: left 1s infinite ease-in-out;
        }
        .loader:after {
          background: #FF3D00;
          animation: right 1s infinite ease-in-out;
        }


      @keyframes right {
        0% , 100%{transform: translate(-15px) }
        50% { transform: translate(15px) }
      }

      @keyframes left {
        0% , 100%{ transform: translate(15px) }
        50% { transform: translate(-15px) }
      }
      `
    },
  {
    id: "msgerBblLdan3xbl",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 32px 0 #fff, -32px 0 #fff;
  position: relative;
  animation: flash 0.5s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 32px 0 rgba(255, 255, 255, 0.25), -32px 0 rgba(255, 255, 255, 1);
  }
  50% {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 32px 0 rgba(255, 255, 255, 0.25), -32px 0 rgba(255, 255, 255, 0.25);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 32px 0 rgba(255, 255, 255, 1), -32px 0 rgba(255, 255, 255, 0.25);
  }
}
      `
    },
    
    
    
    
    {
        id: "qt4al5cwmmg",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  background: #FFF;
  box-sizing: border-box;
  animation: shadowExpandX 2s linear infinite alternate;
}

@keyframes shadowExpandX {
  0% {
    box-shadow: 0 0, 0 0;
    color: rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: -24px 0, 24px 0;
    color: rgba(255, 255, 255, 0.8);
  }
}`,
    }, {
        id: "1jxkx6vu7vj",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  background: #FFF;
  box-shadow: -24px 0 #FFF, 24px 0 #FFF;
  box-sizing: border-box;
  animation: shadowPulse 2s linear infinite;
}

@keyframes shadowPulse {
  33% {
    background: #FFF;
    box-shadow: -24px 0 #FF3D00, 24px 0 #FFF;
  }
  66% {
    background: #FF3D00;
    box-shadow: -24px 0 #FFF, 24px 0 #FFF;
  }
  100% {
    background: #FFF;
    box-shadow: -24px 0 #FFF, 24px 0 #FF3D00;
  }
}
`,
    }, {
        id: "h36psmkc5la",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  background: #FF3D00;
  color: #FFF;
  box-shadow: -24px 0, 24px 0;
  box-sizing: border-box;
  animation: rotation 2s ease-in-out infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
`,
    },
  {
    id: "collution2BallJp1x",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 82px;
  height: 18px;
  position: relative;
}
.loader::before , .loader::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translate(-50% , 10%);
  top: 0;
  background: #FF3D00;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  animation: jump 0.5s ease-in infinite alternate;
}

.loader::after {
  background: #0000;
  color: #fff;
  top: 100%;
  box-shadow: 32px -20px , -32px -20px;
  animation: split 0.5s ease-out infinite alternate;
}

@keyframes split {
  0% { box-shadow: 8px -20px, -8px -20px}
  100% { box-shadow: 32px -20px , -32px -20px}
}
@keyframes jump {
 0% { transform: translate(-50% , -150%)}
 100% { transform: translate(-50% , 10%)}
}
`,
    },
    
    
    {
        id: "b4bqez184d",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    box-shadow: -38px -6px, -14px 6px,  14px -6px;
  }
  33% {
    box-shadow: -38px 6px, -14px -6px,  14px 6px;
  }
  66% {
    box-shadow: -38px -6px, -14px 6px, 14px -6px;
  }
  100% {
    box-shadow: -38px 6px, -14px -6px, 14px 6px;
  }
}`,
    }, {
        id: "jk3s5paxg1",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  color: #FFF;
  left: -100px;
  box-sizing: border-box;
  animation: shadowRolling 2s linear infinite;
}

@keyframes shadowRolling {
  0% {
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  12% {
    box-shadow: 100px 0 white, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  25% {
    box-shadow: 110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  36% {
    box-shadow: 120px 0 white, 110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 130px 0 white, 120px 0 white, 110px 0 white, 100px 0 white;
  }
  62% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white, 110px 0 white;
  }
  75% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white;
  }
  87% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 white;
  }
  100% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
  }
}`,
    }, {
        id: "v6gj5f7r1a",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
  25% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 2px;
  }
  50% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 2px,  -38px 0 0 -2px;
  }
  75% {
    box-shadow: 14px 0 0 2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
  100% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
}`,
    },
    
    {
        id: "mdqx53v2ufl",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    box-shadow: -38px -12px ,  -14px 0,  14px 0, 38px 0;
  }
  33% {
    box-shadow: -38px 0px, -14px -12px,  14px 0, 38px 0;
  }
  66% {
    box-shadow: -38px 0px , -14px 0, 14px -12px, 38px 0;
  }
  100% {
    box-shadow: -38px 0 , -14px 0, 14px 0 , 38px -12px;
  }
}

`,
    },

  {
    id: "bbl4flowBrix",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 16px;
  height: 16px;
  position: relative;
  left: -32px;
  border-radius: 50%;
  color: #fff;
  background: currentColor;
  box-shadow: 32px 0 , -32px 0 ,  64px 0;
}

.loader::after {
  content: '';
  position: absolute;
  left: -32px;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 10px;
  background:#FF3D00;
  animation: move 3s linear infinite alternate;
}

@keyframes move {
  0% , 5%{
    left: -32px;
    width: 16px;
  }
  15% , 20%{
    left: -32px;
    width: 48px;
  }
  30% , 35%{
    left: 0px;
    width: 16px;
  }
  45% , 50%{
    left: 0px;
    width: 48px;
  }
  60% , 65%{
    left: 32px;
    width: 16px;
  }

  75% , 80% {
    left: 32px;
    width: 48px;
  }
  95%, 100% {
    left: 64px;
    width: 16px;
  }
`,
    },

  {
    id: "ntonPend5Xbal",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 32px 0 #fff, -32px 0 #fff;
  position: relative;
  animation: flash 0.3s ease-in infinite alternate;
}
.loader::before , .loader::after {
  content: '';
  position: absolute;
  left: -64px;
  top: 0;
  background: #FFF;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform-origin: 35px -35px;
  transform: rotate(45deg);
  animation: hitL 0.3s ease-in infinite alternate;
}

.loader::after {
  left: 64px;
  transform: rotate(-45deg);
  transform-origin: -35px -35px;
  animation: hitR 0.3s ease-out infinite alternate;
}

@keyframes flash {
  0%  , 100%{
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 32px 0 rgba(255, 255, 255, 0.25), -32px 0 rgba(255, 255, 255, 0.25);
  }
  25% {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 32px 0 rgba(255, 255, 255, 0.25), -32px 0 rgba(255, 255, 255, 1);
  }
  50% {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 32px 0 rgba(255, 255, 255, 0.25), -32px 0 rgba(255, 255, 255, 0.25);
  }
  75% {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 32px 0 rgba(255, 255, 255, 1), -32px 0 rgba(255, 255, 255, 0.25);
  }
}

@keyframes hitL {
 0% {
   transform: rotate(45deg);
   background-color: rgba(255, 255, 255, 1);
  }
25% , 100% {
   transform: rotate(0deg);
  background-color: rgba(255, 255, 255, 0.25);
  }
}

@keyframes hitR {
 0% , 75% {
   transform: rotate(0deg);
   background-color: rgba(255, 255, 255, 0.25);
  }
 100% {
   transform: rotate(-45deg);
  background-color: rgba(255, 255, 255, 1);
  }
}
`,
    },
  {
    id: "cyclo5xballx",
    html: `<span class="loader"></span>`,
    css: `.loader {
        position: relative;
  width: 15px;
  height: 64px;
}
.loader::after , .loader::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  background: currentColor;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  box-shadow: 45px 0 , -45px 0;
  animation: move 0.5s linear infinite alternate;
}

.loader::before {
  top: 100%;
  box-shadow: 50px 0 ;
  left: -25px;
  animation-direction: alternate-reverse;
}

@keyframes move {
  0% { top: 0 }
  50% { top: 50% }
  100% { top: 100% }
}`,
    },




    {
        id: "bbleHrSpinShdw34f",
        html: `<span class="loader"></span>`,
        css: `.loader {
          position: relative;
          display: flex;
        }
        .loader:before , .loader:after {
            content: '';
            width: 15px;
            height: 15px;
            display: inline-block;
            position: relative;
            margin: 0  5px  ;
            border-radius: 50%;
            color: #FFF;
            background: currentColor;
            box-shadow: 50px 0 ,  -50px 0;
            animation: left 1s infinite ease-in-out;
          }
          .loader:after {
            color: #FF3D00;
            animation: right 1.1s infinite ease-in-out;
          }


        @keyframes right {
          0% , 100%{transform: translateY(-10px) }
          50% { transform: translateY(10px) }
        }

        @keyframes left {
          0% , 100%{ transform: translateY(10px) }
          50% { transform: translateY(-10px) }
        }
`,
    },
    {
        id: "bbleVrncgShdw34f",
        html: `<span class="loader"></span>`,
        css: `.loader {
            height: 150px;
            position: relative;
          }
          .loader:before , .loader:after {
              content: '';
              width: 15px;
              height: 15px;
              display: block;
              position: relative;
              margin: 10px auto ;
              border-radius: 50%;
              color: #FFF;
              background: currentColor;
              box-shadow: 0 50px , 0 100px;
              animation: left 1s infinite ease-in-out;
            }
            .loader:after {
              animation: right 1.1s infinite ease-in-out;
            }


          @keyframes right {
            0% , 100%{transform: translate(-15px) }
            50% { transform: translate(15px) }
          }

          @keyframes left {
            0% , 100%{ transform: translate(15px) }
            50% { transform: translate(-15px) }
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
    
]