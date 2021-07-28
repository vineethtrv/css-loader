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
} `,
    }, {
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