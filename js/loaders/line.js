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
}`,
    }, {
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