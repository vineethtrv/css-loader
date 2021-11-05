export const LINE = [
    {
        id: "6bnzdi6n4z6",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 8px;
  height: 40px;
  border-radius: 4px;
  display: inline-block;
  margin-left: 20px;
  margin-top: 10px;
  position: relative;
  background: currentColor;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 0.3s 0.3s linear infinite alternate;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 8px;
  height: 40px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  bottom: 0;
  left: 20px;
  animation: animloader1 0.3s  0.45s  linear infinite alternate;
}
.loader::before {
  left: -20px;
  animation-delay: 0s;
}

@keyframes animloader {
  0% {
    height: 40px;
    transform: translateY(0);
  }
  100% {
    height: 10px;
    transform: translateY(30px);
  }
}

@keyframes animloader1 {
  0% {
    height: 48px;
  }
  100% {
    height: 4.8px;
  }
}
    `,
    }, {
        id: "3n68si8hgcw",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 8px;
  height: 40px;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: currentColor;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 0.3s 0.3s linear infinite alternate;
}

.loader::after, .loader::before {
  content: '';
  width: 8px;
  height: 40px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  box-sizing: border-box;
  animation: animloader 0.3s  0.45s  linear infinite alternate;
}
.loader::before {
  left: -20px;
  animation-delay: 0s;
}

@keyframes animloader {
  0%   { height: 48px} 
  100% { height: 4px}
}
`,
    }, {
        id: "f9tbqzhdk0u",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 8px;
  height: 48px;
  display: block;
  margin: auto;
  left: -20px;
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    box-shadow: 20px 0 rgba(255, 255, 255, 0.25), 40px 0 white, 60px 0 white;
  }
  50% {
    box-shadow: 20px 0 white, 40px 0 rgba(255, 255, 255, 0.25), 60px 0 white;
  }
  100% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 rgba(255, 255, 255, 0.25);
  }
}
    `,
    },
    
    {
        id: "dkndou5oj6o",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 8px;
  height: 48px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 0.6s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 20px -10px, 40px 10px, 60px 0px;
  }
  25% {
    box-shadow: 20px 0px, 40px  0px, 60px 10px;
  }
  50% {
    box-shadow: 20px 10px, 40px -10px, 60px 0px;
  }
  75% {
    box-shadow: 20px 0px, 40px 0px, 60px -10px;
  }
  100% {
    box-shadow: 20px -10px, 40px 10px, 60px 0px;
  }
}
    `,
    },

    {
        id: "nd6o-mtrix",
        html: `<span class="loader"></span>`,
        css: `.loader {
          width:45px;
          height:40px;
          background:
            linear-gradient(#0000 calc(1*100%/6),#fff 0 calc(3*100%/6),#0000 0),
            linear-gradient(#0000 calc(2*100%/6),#fff 0 calc(4*100%/6),#0000 0),
            linear-gradient(#0000 calc(3*100%/6),#fff 0 calc(5*100%/6),#0000 0);
          background-size:10px 400%;
          background-repeat: no-repeat;
          animation:matrix 1s infinite linear;
          }
          @keyframes matrix {
            0% {background-position: 0% 100%, 50% 100%, 100% 100% }
            100% {background-position: 0% 0%, 50% 0%, 100% 0% }
          }
    `,
    },
    
    
    {
        id: "xr1ogquld0d",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 6px;
  display: block;
  margin: auto;
  position: relative;
  border-radius: 4px;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 0.6s linear infinite;
}

@keyframes animloader {
  0% { box-shadow: -10px 20px, 10px 35px , 0px 50px }
  25% { box-shadow: 0px 20px ,  0px 35px, 10px 50px }
  50% { box-shadow: 10px 20px, -10px 35px, 0px 50px }
  75% { box-shadow: 0px 20px, 0px  35px, -10px 50px }
  100% { box-shadow: -10px 20px, 10px  35px, 0px 50px}
}
`,
    }, {
        id: "ll3kbbwjsy",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 4.8px;
  height: 4.8px;
  display: inline-block;
  margin-top: 20px;
  position: relative;
  border-radius: 4px;
  color: #FFF;
  background: currentColor;
  box-sizing: border-box;
  animation: animloader 0.3s 0.3s linear infinite alternate;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 4.8px;
  height: 4.8px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  left: 0;
  top: 15px;
  animation: animloader 0.3s 0.45s linear infinite alternate;
}
.loader::after {
  top: -15px;
  animation-delay: 0s;
}

@keyframes animloader {
  0% {
    width: 4.8px;
  }
  100% {
    width: 48px;
  }
}`,
    }, {
        id: "dvitkpqg7fa",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 4.8px;
  height: 4.8px;
  display: block;
  margin: 20px auto;
  position: relative;
  border-radius: 4px;
  color: #FFF;
  background: currentColor;
  box-sizing: border-box;
  animation: animloader 0.3s 0.3s linear infinite alternate;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 4.8px;
  height: 4.8px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15px;
  animation: animloader 0.3s 0.45s linear infinite alternate;
}
.loader::after {
    top: -15px;
    animation-delay: 0s;
}

@keyframes animloader {
    0% { width: 4.8px }
    100% { width: 48px}
}
`,
}, 
  {
    id: "linSpiLox",
    html: `<span class="loader"></span>`,
    css: `.loader {
  color: #FFF;
  position: relative;
  font-size: 11px;
  background: #FFF;
  animation: escaleY 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
  left: 2em;
  background: #FFF;
  width: 1em;
  height: 4em;
  animation: escaleY 1s infinite ease-in-out;
}
.loader:before {
  left: -2em;
  animation-delay: -0.32s;
}

@keyframes escaleY {
  0%, 80%, 100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
`,
}, 
    
{
  id: "zdy2kji5lvp",
  html: `<span class="loader"></span>`,
  css: `.loader {
  width: 8px;
  height: 48px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    box-shadow: 20px 0 rgba(255, 255, 255, 0), 40px 0 rgba(255, 255, 255, 0), 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }
  20% {
    box-shadow: 20px 0 white, 40px 0 rgba(255, 255, 255, 0), 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }
  40% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }
  60% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }
  80% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 white, 100px 0 rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 white, 100px 0 white;
  }
}
    `,
    },
  {
    id: "spnPlixShrk34glsf",
    html: `<span class="loader"></span>`,
    css: `.loader {
        height: 30px;
        width: 10px;
        border-radius: 4px;
        color: #fff;
        background: currentColor;
        position: relative;
        animation: ht 1s ease-in infinite alternate;
        box-shadow: 15px 0 0 -1px , -15px 0 0 -1px ,
                    30px 0 0 -2px , -30px 0 0 -2px,
                    45px 0 0 -3px , -45px 0 0 -3px;
      }

      @keyframes ht {
        100% { height: 0px }
      }
    `,
    },
    
  {
    id: "lnBallStpUp",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width: 75px;
    height: 100px;
    background-repeat: no-repeat;
    background-image: linear-gradient(#DDD 50px, transparent 0),
                      linear-gradient(#DDD 50px, transparent 0),
                      linear-gradient(#DDD 50px, transparent 0),
                      linear-gradient(#DDD 50px, transparent 0),
                      linear-gradient(#DDD 50px, transparent 0);
    background-size: 8px 100%;
    background-position: 0px 90px, 15px 78px, 30px 66px, 45px 58px, 60px 50px;
    animation: pillerPushUp 4s linear infinite;
  }
  .loader:after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 10px;
    height: 10px;
    background: #de3500;
    border-radius: 50%;
    animation: ballStepUp 4s linear infinite;
  }

@keyframes pillerPushUp {
  0% , 40% , 100%{background-position: 0px 90px, 15px 78px, 30px 66px, 45px 58px, 60px 50px}
  50% ,  90% {background-position: 0px 50px, 15px 58px, 30px 66px, 45px 78px, 60px 90px}
}

@keyframes ballStepUp {
  0% {transform: translate(0, 0)}
  5% {transform: translate(8px, -14px)}
  10% {transform: translate(15px, -10px)}
  17% {transform: translate(23px, -24px)}
  20% {transform: translate(30px, -20px)}
  27% {transform: translate(38px, -34px)}
  30% {transform: translate(45px, -30px)}
  37% {transform: translate(53px, -44px)}
  40% {transform: translate(60px, -40px)}
  50% {transform: translate(60px, 0)}
  57% {transform: translate(53px, -14px)}
  60% {transform: translate(45px, -10px)}
  67% {transform: translate(37px, -24px)}
  70% {transform: translate(30px, -20px)}
  77% {transform: translate(22px, -34px)}
  80% {transform: translate(15px, -30px)}
  87% {transform: translate(7px, -44px)}
  90% {transform: translate(0, -40px)}
  100% {transform: translate(0, 0);}
}
    `,
    },
  {
    id: "sndWveBr",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width: 85px;
    height: 50px;
    background-repeat: no-repeat;
    background-image: linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0);
    background-position: 0px center, 15px center, 30px center, 45px center, 60px center, 75px center, 90px center;
    animation: rikSpikeRoll 0.65s linear infinite alternate;
  }
@keyframes rikSpikeRoll {
  0% { background-size: 10px 3px;}
  16% { background-size: 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
  33% { background-size: 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
  50% { background-size: 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px}
  66% { background-size: 10px 3px, 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px}
  83% { background-size: 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px, 10px 3px}
  100% { background-size: 10px 3px, 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px}
}
    `,
    },
  {
    id: "brPpUp",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width: 55px;
    height: 55px;
    background-repeat: no-repeat;
    background-image: linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0);
    background-size: 5px 40px;
    background-position: 0px center, 10px center, 20px center, 30px center, 40px center, 50px center;
    animation: spikeUp 1s linear infinite alternate;
  }
@keyframes spikeUp {
  0% { background-size: 5px 40px}
  16% { background-size: 5px 55px, 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 40px}
  33% { background-size: 5px 40px, 5px 55px, 5px 40px, 5px 40px, 5px 40px, 5px 40px}
  50% { background-size: 5px 40px, 5px 40px, 5px 55px, 5px 40px, 5px 40px, 5px 40px}
  66% { background-size: 5px 40px, 5px 40px, 5px 40px, 5px 55px, 5px 40px, 5px 40px}
  83% { background-size: 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 55px, 5px 40px}
  100% { background-size: 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 55px}
}
      `,
    },
    
    
    
    {
        id: "ewhrfgl50sf",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 20px;
  height: 12px;
  display: block;
  margin: auto;
  position: relative;
  border-radius: 4px;
  color: #FFF;
  background: currentColor;
  box-sizing: border-box;
  animation: animloader 0.6s 0.3s ease infinite alternate;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 20px;
  height: 12px;
  background: currentColor;
  position: absolute;
  border-radius: 4px;
  top: 0;
  right: 110%;
  animation: animloader  0.6s ease infinite alternate;
}
.loader::after {
  left: 110%;
  right: auto;
  animation-delay: 0.6s;
}

@keyframes animloader {
  0% {
    width: 20px;
  }
  100% {
    width: 48px;
  }
}`,
    },
]