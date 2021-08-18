export const RECT = [

    
{
	id: "778qvxwuxps",
  html: `<span class="loader"></span>`,
	css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}
.loader::after,
.loader::before {
  content: '';
  width: 48px;
  height: 48px;
  border: 2px solid #FFF;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  animation: rotation 2s ease-in-out infinite;
}
.loader::after {
  border-color: #FF3D00;
  animation-delay: 1s;
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
	id: "5c6oxb7ativ",
  html: `<span class="loader"></span>`,
	css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border: 4px solid #FFF;
  position: absolute;
  left: 0;
  top: 0;
  animation: animloader 2s ease-in-out infinite;
}
.loader::after {
  border-color: #FF3D00;
  animation-delay: 1s;
}

@keyframes animloader {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
    `,
  }, {
    id: "h7hdstj15pb",
    html: `<span class="loader"></span>`,
	css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border: 2px solid #FFF;
  position: absolute;
  left: 0;
  top: 0;
  animation: rotation 2s ease-in-out infinite alternate;
}
.loader::after {
  border-color: #FF3D00;
  animation-direction: alternate-reverse;
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
	id: "9j8u5jers2t",
  html: `<span class="loader"></span>`,
	css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border: 2px solid #FFF;
  position: absolute;
  left: 0;
  top: 0;
  animation: scaleOut 2s ease-in-out infinite;
}
.loader::after {
  border-color: #FF3D00;
  animation-delay: 1s;
}

@keyframes scaleOut {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}`,
}, {
	id: "qqooho5c05n",
  html: `<span class="loader"></span>`,
	css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border: 2px solid #FFF;
  position: absolute;
  left: 0;
  top: 0;
  animation: rotationBreak 3s ease-in-out infinite alternate;
}
.loader::after {
  border-color: #FF3D00;
  animation-direction: alternate-reverse;
}

@keyframes rotationBreak {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
    `,
  }, {
    id: "jcffa36l7ol",
    html: `<span class="loader"></span>`,
	css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  border: 2px solid #FFF;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 2px solid #FF3D00;
  width: 38px;
  height: 38px;
  animation: rotationBack 1.5s linear infinite;
  transform-origin: center center;
}
.loader::before {
  width: 28px;
  height: 28px;
  border-color: #FFF;
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
} 
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}`,
}, {
	id: "tcrxas6ttns",
  html: `<span class="loader"></span>`,
	css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  background: #FFF;
  box-sizing: border-box;
  animation: flipX 1s linear infinite;
}

@keyframes flipX {
  0% {
    transform: perspective(200px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(200px) rotateX(-180deg) rotateY(0deg);
  }
  100% {
    transform: perspective(200px) rotateX(-180deg) rotateY(-180deg);
  }
}
    `,
  }, {
    id: "l3vyieqr44p",
    html: `<span class="loader"></span>`,
	css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  color: #FFF;
  border: 1px solid;
  box-sizing: border-box;
  animation: fill 2s linear infinite alternate;
}

@keyframes fill {
  0% {
    box-shadow: 0 0  inset;
  }
  100% {
    box-shadow: 0 -48px inset;
  }
}
    `,
  }, {
    id: "56x5ay7i99j",
    html: `<span class="loader"></span>`,
	css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  background: #FFF;
  box-sizing: border-box;
  animation: zeroRotation 1s ease infinite alternate-reverse;
}

@keyframes zeroRotation {
  0% {
    transform: scale(1) rotate(0deg);
  }
  100% {
    transform: scale(0) rotate(360deg);
  }
}
    `,
  },
  {
    id: "sqr-trf-crl",
    html: `<span class="loader"></span>`,
	  css: `.loader{
    display: block;
    position: relative;
    height: 32px;
    width: 100px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .loader:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 24px;
    height: 24px;
    animation: ballbns 2s ease-in infinite;
  }
  
  @keyframes ballbns {
    0% {  
      left: 0; 
      transform: translateX(-100%) rotate(0deg);
      border-radius: 0; 
      background: #FFF;
    }
    100% {  
      left: 100%; 
      transform: translateX(0%) rotate(360deg); 
      border-radius: 50%;
      background: #FFF; 
    }
  } 
  `,
  },
  
  {
    id: "dstrShfl-scrn",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
}
.loader:after {
  content: '';
  background: #FFF;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 32px;
  height: 32px;
  border-radius:4px;
  transform-origin: -16px -32px;
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
   0% , 100% {
      transform: rotate(-45deg)  translate(-50% , -50%)
    }
   50% {
      transform: rotate(-245deg)  translate(-50% , -50%)
   }
}
  `,
  },


  
  {
    id: "gnyax6fzljk",
    html: `<span class="loader"></span>`,
	css: `.loader {
  width: 24px;
  height: 24px;
  display: inline-block;
  position: relative;
  background: #FFF;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}

@keyframes animloader {
  0% {
    transform: translate(0, 0) rotateX(0) rotateY(0);
  }
  25% {
    transform: translate(100%, 0) rotateX(0) rotateY(180deg);
  }
  50% {
    transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
  }
  75% {
    transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
  }
  100% {
    transform: translate(0, 0) rotateX(0) rotateY(360deg);
  }
}
    `,
  }, {
    id: "5i0njgizuv4",
    html: `<span class="loader"></span>`,
	css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  position: absolute;
  left: 0;
  top: 0;
  background: #FFF;
  color: #FFF;
  animation: animloader 2s linear infinite alternate;
}

@keyframes animloader {
  0% {
    box-shadow: 0 0, 0 0, 0 0;
  }
  33% {
    box-shadow: 24px 0px, 24px 0px, 24px 0px;
  }
  66% {
    box-shadow: 24px 24px, 24px 24px, 24px 0px;
  }
  100% {
    box-shadow: 0px 24px, 24px 24px, 24px 0px;
  }
}
    `,
  }, {
    id: "bcwq451ytzu",
    html: `<span class="loader"></span>`,
	css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  position: absolute;
  left: 0;
  top: -24px;
  animation: animloader1 2s linear infinite alternate;
}
.loader::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  animation: animloader2 2s linear infinite alternate;
}

@keyframes animloader1 {
  0%, 32% {
    box-shadow: 0 24px white, 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
  }
  33%, 65% {
    box-shadow: 0 24px white, 24px 24px white, 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
  }
  66%, 99% {
    box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px white;
  }
}

@keyframes animloader2 {
  0% {
    transform: translate(0, 0) rotateX(0) rotateY(0);
  }
  33% {
    transform: translate(100%, 0) rotateX(0) rotateY(180deg);
  }
  66% {
    transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
  }
  100% {
    transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
  }
}
    `,
  },


  {
    id: "nyvy2vxxdig",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  transform: rotate(45deg);
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  position: absolute;
  left: 0;
  top: -24px;
  animation: animloader 4s ease infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  animation: animloader2 2s ease infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
  }
  12% {
    box-shadow: 0 24px white, 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
  }
  25% {
    box-shadow: 0 24px white, 24px 24px white, 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
  }
  37% {
    box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px white;
  }
  62% {
    box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px white, 24px 48px white, 0px 48px white;
  }
  75% {
    box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px white, 0px 48px white;
  }
  87% {
    box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px white;
  }
  100% {
    box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
  }
}

@keyframes animloader2 {
  0% {
    transform: translate(0, 0) rotateX(0) rotateY(0);
  }
  25% {
    transform: translate(100%, 0) rotateX(0) rotateY(180deg);
  }
  50% {
    transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
  }
  75% {
    transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
  }
  100% {
    transform: translate(0, 0) rotateX(0) rotateY(360deg);
  }
}
    `,
  },
  {
    id: "sqr4xmlt2clrRotSpn",
    html: `<span class="loader"></span>`,
    css: `.loader {
        width: 64px;
        height: 64px;
        position: relative;
        background-image:
          linear-gradient(#FFF 16px, transparent 0) ,
          linear-gradient(#FF3D00 16px, transparent 0) ,
          linear-gradient(#FF3D00 16px, transparent 0) ,
          linear-gradient(#FFF 16px, transparent 0);
        background-repeat: no-repeat;
        background-size: 16px 16px;
        background-position: left top , left bottom , right top , right bottom;
        animation: rotate 1s linear infinite;
      }
      @keyframes rotate {
        0% {
          width: 64px;
          height: 64px;
          transform: rotate(0deg)
        }
        50% {
          width: 30px;
          height: 30px;
          transform: rotate(180deg)
        }
        100% {
          width: 64px;
          height: 64px;
          transform: rotate(360deg)
        }
      }
    `,
  },

  {
    id: "sqrFlwupShdw67",
    html: `<span class="loader"></span>`,
    css: `.loader {
        height: 5px;
        width: 5px;
        color: #fff;
        box-shadow: -10px -10px 0 5px,
                    -10px -10px 0 5px,
                    -10px -10px 0 5px,
                    -10px -10px 0 5px;
        animation: loader-38 6s infinite;
      }

      @keyframes loader-38 {
        0% {
          box-shadow: -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      -10px -10px 0 5px;
        }
        8.33% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px -10px 0 5px;
        }
        16.66% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      10px 10px 0 5px;
        }
        24.99% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        33.32% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      -10px -10px 0 5px;
        }
        41.65% {
          box-shadow: 10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      10px -10px 0 5px;
        }
        49.98% {
          box-shadow: 10px 10px 0 5px,
                    10px 10px 0 5px,
                    10px 10px 0 5px,
                    10px 10px 0 5px;
        }
        58.31% {
          box-shadow: -10px 10px 0 5px,
                      -10px 10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        66.64% {
          box-shadow: -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        74.97% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        83.3% {
          box-shadow: -10px -10px 0 5px,
                      10px 10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        91.63% {
          box-shadow: -10px -10px 0 5px,
                      -10px 10px 0 5px,
                      -10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        100% {
          box-shadow: -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      -10px -10px 0 5px;
        }
      }

    `,
  },


  
  {
    id: "rspltt-rects",
    html: `<span class="loader"></span>`,
	css: `.loader {
        width: 48px;
        height: 48px;
      }
      .loader:before,
      .loader:after {
        content:"";
        display: block;
        height: 24px;
        background:#fff;
        animation: mvx 0.3s infinite ease-in alternate;
      }
      .loader:before {
        animation-name:mvrx;
      }
      @keyframes mvx {
        100% {transform: translateY(50%)}
      }
      @keyframes mvrx {
        100% {transform: translateY(-50%)}
      }

    `,
  },

  
  {
    id: "rot-addig",
    html: `<span class="loader"></span>`,
	css: `.loader {
        width: 48px;
        height: 48px;
        display: flex;
        transform-origin:50% 125%;
        animation: mov-y 1s infinite linear;
      }
      .loader:before,
      .loader:after {
        content:"";
        flex:1;
        background:#fff;
        transform-origin: 0% 100%;
        animation: rtr-x 1s infinite linear;
      }
      .loader:before {
        transform-origin: 100% 100%;
        animation-name: rtr-rx;
      }

      @keyframes mov-y {
        0%,25%   {transform:translateY(0)     scaleY(1)}
        49%   {transform:translateY(-75%)  scaleY(1)}
        50%      {transform:translateY(-75%)  scaleY(-1)}
        75%,100% {transform:translateY(-150%) scaleY(-1)}
      }
      @keyframes rtr-x {
        25%,75% {transform: rotate(0deg)}
        50%     {transform: rotate(90deg)}
      }
      @keyframes rtr-rx {
        25%,75% {transform: rotate(0deg)}
        50%     {transform: rotate(-90deg)}
      }
    `,
  },
  
  {
    id: "rtbr-clr",
    html: `<span class="loader"></span>`,
	css: `.loader {
      width: 48px;
      height: 48px;
      display: flex;
      animation: rotate 1.5s infinite linear;
    }
    .loader:before,
    .loader:after {
      content:"";
      flex:1;
      background:#fff;
      animation: mvx 0.5s infinite linear alternate;
    }
    .loader:before {
      background: #FF3D00;
      animation-name:mvrx;
    }

    @keyframes rotate {
      100% {transform: rotate(360deg)}
    }
    @keyframes mvx {
      0% {transform: translateX(-15px)}
      100% {transform: translateX(15px)}
    }
    @keyframes mvrx {
      0% {transform: translateX(15px)}
      100% {transform: translateX(-15px)}
    }
    `,
  },
  
  {
    id: "brix-shake-clr",
    html: `<span class="loader"></span>`,
	css: `.loader {
          width: 48px;
          height: 48px;
          display: flex;
          animation : rotate 2s linear infinite;
        }
        .loader:before,
        .loader:after {
          content:"";
          flex:1;
          background:#fff;
          animation: mvx 0.5s infinite linear alternate;
        }
        .loader:before {
          background: #FF3D00;
          animation-name:mvrx;
        }

        @keyframes rotate {
          100% {transform: rotate(360deg)}
        }
        @keyframes mvx {
          0% , 40% {transform: translateX(0px)}
          20% , 60% {transform: translateX(8px)}
          100% {transform: translateX(15px)}
        }
        @keyframes mvrx {
          0% , 40% {transform: translateX(0px)}
          20% , 60% {transform: translateX(-8px)}
          100% {transform: translateX(-15px)}
        }

    `,
  },




  {
    id: "prima-split-rects",
    html: `<span class="loader"></span>`,
    css: `.loader {
        width: 48px;
        height: 48px;
        position: relative;
      }
      .loader:before,
      .loader:after {
        content:"";
        display: block;
        border: 24px solid transparent;
        border-color: transparent transparent #fff  #fff;
        position: absolute;
        left: 0;
        top: 0;
        animation: mvx 1s infinite ease-in;
      }
      .loader:before {
        left: -1px;
        top: 1px;
        border-color:#fff  #fff transparent transparent;
        animation-name:mvrx;
      }
      @keyframes mvx {
        0% , 25% {transform: translate(0 , 0) rotate(0deg)}
        50% {transform: translate(-50% , 50%) rotate(180deg)}
        100% {transform: translate(0% , 0%) rotate(180deg)}
      }
      @keyframes mvrx {
        0% , 25%  {transform: translate(0 , 0) rotate(0deg)}
        50% {transform: translate(50% , -50%) rotate(180deg)}
        100% {transform: translate(0% , 0%) rotate(180deg)}
      }
    `,
  },


  {
    id: "prm-slice-rts",
    html: `<span class="loader"></span>`,
    css: `.loader {
          width: 47px;
          height: 47px;
          position: relative;
        }
        .loader:before,
        .loader:after {
          content:"";
          display: block;
          border: 24px solid;
          border-color: transparent transparent #fff  #fff;
          position: absolute;
          left: 0;
          top: 0;
          animation: mvx 1.2s infinite ease-in;
        }
        .loader:before {
          border-color:#fff  #fff transparent transparent;
          animation-name:mvrx;
        }
        @keyframes mvx {
          0% , 10%  {transform: translate(0 , 0) rotate(0deg)}
          30% {transform: translate(-50% , -50%) rotate(0deg)}
          50% {transform: translate(-50% , -50%) rotate(180deg)}
          75% , 100% {transform: translate(0, 0) rotate(180deg)}
        }
        @keyframes mvrx {
          0% , 10%  {transform: translate(0 , 0) rotate(0deg)}
          30% {transform: translate(50% , 50%) rotate(0deg)}
          50% {transform: translate(50% , 50%) rotate(180deg)}
          75% , 100% {transform: translate(0, 0) rotate(180deg)}
        }
    `,
  },


  {
    id: "prm-pus-pop-rts",
    html: `<span class="loader"></span>`,
    css: `.loader {
        position: relative;
        border: 24px solid;
        border-color: #fff  transparent #fff transparent;
        animation : rotate 2s linear infinite;
      }
      .loader:before,
      .loader:after {
        content:"";
        display: block;
        border: 24px solid transparent;
        border-left-color: #fff;
        position: absolute;
        left: -24px;
        top: -24px;
        animation: mvx 1s infinite linear;
      }
      .loader:before {
        border-color: transparent #fff transparent transparent;
        animation-name:mvrx;
        animation-delay: 0.5s;
      }
      @keyframes rotate {
        100% {transform: rotate(360deg)}
      }
      @keyframes mvx {
        20% , 80% {transform: translateX(0)}
        50% {transform: translateX(-50%)}
      }
      @keyframes mvrx {
        20% , 80% {transform: translateX(0)}
        50% {transform: translateX(50%)}
      }
    `,
  },

  {
    id: "prm-kti-pori-rts",
    html: `<span class="loader"></span>`,
    css: `.loader {
        position: relative;
        border: 24px solid;
        border-color: #fff  transparent #fff transparent;
        animation : rotate 2s linear infinite;
      }
      .loader:before,
      .loader:after {
        content:"";
        display: block;
        border: 24px solid transparent;
        border-left-color: #fff;
        position: absolute;
        left: -24px;
        top: -24px;
        animation: prix 1s infinite ease-in;
        transform-origin: 0% 100%;
      }
      .loader:before {
        border-color: transparent #fff transparent transparent;
        transform-origin: 100% 0%;
        animation-delay: 0.5s;
      }
      @keyframes rotate {
        100% {transform: rotate(360deg)}
      }
      @keyframes prix {
        20% , 80% {transform: rotate(0)}
        50% {transform: rotate(-90deg)}
      }
    `,
  },

  {
    id: "brik-splt-mv",
    html: `<span class="loader"></span>`,
    css: `.loader {
          position: relative;
          width: 48px;
          height: 48px;
        }
        .loader:before{
            content: "";
            border-left: 24px solid #fff;
            border-right: 24px solid #fff;
            position: absolute;
            height: 24px;
            width: 0;
            left: 50%;
            transform: translateX(-50%);
            top: 0px;
            animation: splitX 1s  linear infinite alternate;
        }
        .loader:after{
          content: '';
          width: 48px;
          height: 24px;
          background: #fff;
          position: absolute;
          left: 0;
          bottom:0;
          animation:moveY 1s linear infinite alternate;
        }
        @keyframes splitX {
          0% {width: 0; transform: translate(-50% , 0)}
          33% {width: 100%; transform: translate(-50% , 0)}
          66% {width: 100%; transform: translate(-50% , 24px)}
          100% {width: 0; transform: translate(-50% , 24px)}
        }

        @keyframes moveY {
          0% , 33% {transform: translateY(0)}
          66% , 100% {transform: translateY(-24px)}
        }
    `,
  },

  {
    id: "spinFloatSqr",
    html: `<span class="loader"></span>`,
    css: `.loader {
          width: 48px;
          height: 48px;
          margin: auto;
          position: relative;
        }
        .loader:before {
            content: '';
            width: 48px;
            height: 5px;
            background: #000;
            opacity: 0.25;
            position: absolute;
            top: 60px;
            left: 0;
            border-radius: 50%;
            animation: shadow 0.5s linear infinite;
          }
          .loader:after {
            content: '';
            width: 100%;
            height: 100%;
            background: #fff;
            animation: bxSpin 0.5s linear infinite;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 4px;
          }
        @keyframes bxSpin {
          17% {
            border-bottom-right-radius: 3px;
          }
          25% {
            transform: translateY(9px) rotate(22.5deg);
          }
          50% {
            transform: translateY(18px) scale(1, .9) rotate(45deg);
            border-bottom-right-radius: 40px;
          }
          75% {
            transform: translateY(9px) rotate(67.5deg);
          }
          100% {
            transform: translateY(0) rotate(90deg);
          }
        }

        @keyframes shadow {
          0%, 100% {
            transform: scale(1, 1);
          }
          50% {
            transform: scale(1.2, 1);
          }
        }
      `
  },


  {
    id: "pir-fnd-flw",
    html: `<span class="loader"></span>`,
    css: `.loader {
        border: 24px solid #fff;
        border-color: #FF3D00 #fff  #fff #fff;
        animation : rotate 2s steps(4) infinite;
      }
      @keyframes rotate {
        100% { transform: rotate(360deg); }
      }
      `
  },

  {
    id: "prm-splt-clr-rots",
    html: `<span class="loader"></span>`,
    css: `.loader {
            width: 48px;
            height: 48px;
            position: relative;
            animation : rotate 4s linear infinite;
          }
          .loader:before,
          .loader:after {
            content:"";
            display: block;
            border: 24px solid;
            border-color: transparent transparent #fff  #fff;
            position: absolute;
            left: 0;
            top: 0;
            animation: mvx 1s infinite ease-in;
          }
          .loader:before {
            left: -1px;
            top: 1px;
            border-color:#FF3D00  #FF3D00 transparent transparent;
            animation-name:mvrx;
          }

          @keyframes rotate {
            100% {transform: rotate(360deg)}
          }
          @keyframes mvx {
            0% , 15% {transform: translate(0 , 0) rotate(0deg)}
            50% {transform: translate(-50% , 50%) rotate(180deg)}
            100% {transform: translate(0% , 0%) rotate(180deg)}
          }
          @keyframes mvrx {
            0% , 15%  {transform: translate(0 , 0) rotate(0deg)}
            50% {transform: translate(50% , -50%) rotate(180deg)}
            100% {transform: translate(0% , 0%) rotate(180deg)}
          }
    `,
  },


  {
    id: "pir-weld-flw",
    html: `<span class="loader"></span>`,
    css: `.loader {
          position: relative;
          width: 48px;
          height: 48px;
        }
        .loader:before,
        .loader:after {
          content:"";
          display: block;
          border: 32px solid transparent;
          border-top-color: #fff;
          position: absolute;
          left: 0;
          top: 0;
          animation: weld-rotate 2s infinite ease-in;
        }
        .loader:before {
          border-color: transparent  transparent transparent #FF3D00;
          animation-delay: 0.5s;
        }
        @keyframes weld-rotate {
          0% , 25% {transform: rotate(0deg)}
          50% , 75% {transform: rotate(180deg)}
          100% {transform: rotate(360deg)}
        }
      `
  },
  {
    id: "pir-wottippu-flw",
    html: `<span class="loader"></span>`,
    css: `.loader {
          position: relative;
          width: 48px;
          height: 48px;
        }
        .loader:before,
        .loader:after {
          content:"";
          display: block;
          border: 32px solid transparent;
          border-top-color: #fff;
          position: absolute;
          left: 0;
          top: 0;
          animation: weld-rotate 2s infinite ease-in;
        }
        .loader:before {
          border-color: transparent  transparent transparent #FF3D00;
          animation-delay: 0.5s;
            animation-direction: reverse;
        }
        @keyframes weld-rotate {
          0% , 25% {transform: rotate(0deg)}
          50% , 75% {transform: rotate(180deg)}
          100% {transform: rotate(360deg)}
        }
      `
  },
  {
    id: "gsupn3q1npb",
    html: `<span class="loader"></span>`,
	css: `.loader {
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  display: block;
  margin: -50px auto 0;
  position: relative;
  color: #FFF;
  transform: translateY(30px);
  box-sizing: border-box;
  animation: animloader 2s ease infinite;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  color: #FFF;
  position: absolute;
  left: 30px;
  top: 0;
  animation: animloader 2s 0.2s ease infinite;
}
.loader::before {
  animation-delay: 0.4s;
  left: 60px;
}

@keyframes animloader {
  0% {
    top: 0;
    color: white;
  }
  50% {
    top: 30px;
    color: rgba(255, 255, 255, 0.2);
  }
  100% {
    top: 0;
    color: white;
  }
}
    `,
  }
]