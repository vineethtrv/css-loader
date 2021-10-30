export const TEXT = [
    {
        id: "n8abp6kko7",
        content: 'Loading',
        html: `<span class="loader">Loading</span>`,
        css: `.loader {
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  display: inline-block;
  color: #FF3D00;
  letter-spacing: 2px;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: 'Loading';
  position: absolute;
  left: 0;
  top: 0;
  color: #FFF;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}

@keyframes animloader {
  0% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
`,
    }, {
        id: "xkjlk7q886r",
        content: 'Loading',
        html: `<span class="loader">Loading</span>`,
        css: `.loader {
  font-size: 48px;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #FFF;
  letter-spacing: 2px;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: 'Loading';
  position: absolute;
  left: 0;
  top: 0;
  color: #263238;
  text-shadow: 0 0 2px #FFF, 0 0 1px #FFF, 0 0 1px #FFF;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}

@keyframes animloader {
  0% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
`,
    }, {
        id: "x5uh05vpzo",
        content: 'Loading',
        html: `<span class="loader">Loading</span>`,
        css: `.loader {
  font-size: 48px;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #263238;
  box-sizing: border-box;
  text-shadow: 0 0 2px #FFF, 0 0 1px #FFF, 0 0 1px #FFF;
  letter-spacing: 2px;
  position: relative;
}
.loader::after {
  content: 'Loading';
  position: absolute;
  left: 0;
  top: 0;
  color: #FFF;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}

@keyframes animloader {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
`,
    }, {
        id: "b8snykspq3",
        content: 'L &nbsp; ading',
        html: `<span class="loader">L &nbsp; ading</span>`,
        css: `.loader {
  display: inline-block;
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #FFF;
  position: relative;
}
.loader::before {
  content: '';  
  position: absolute;
  left: 34px;
  bottom: 8px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 5px solid #FFF;
  border-bottom-color: #FF3D00;
  box-sizing: border-box;
  animation: rotation 0.6s linear infinite;
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
        id: "96huvhm2ehv",
        content: 'Load&nbsp;ng',
        html: `<span class="loader">Load&nbsp;ng</span>`,
        css: `.loader {
  color: #FFF;
  position: relative;
  display: inline-block;
  margin-top: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  letter-spacing: 4px;
  box-sizing: border-box;
}
.loader::before {
  content: '';  
  position: absolute;
  right: 70px;
  bottom: 10px;
  height: 28px;
  width: 5.15px;
  background: currentColor;
  box-sizing: border-box;
  animation: animloader1 1s linear infinite alternate;
}
.loader::after {
  content: '';  
  width: 10px;
  height: 10px;
  position: absolute;
  left: 125px;
  top: 2px;
  border-radius: 50%;
  background: red;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    transform: translate(0px, 0px) scaleX(1);
  }
  14% {
    transform: translate(-12px, -16px) scaleX(1.05);
  }
  28% {
    transform: translate(-27px, -28px) scaleX(1.07);
  }
  42% {
    transform: translate(-46px, -35px) scaleX(1.1);
  }
  57% {
    transform: translate(-70px, -37px) scaleX(1.1);
  }
  71% {
    transform: translate(-94px, -32px) scaleX(1.07);
  }
  85% {
    transform: translate(-111px, -22px) scaleX(1.05);
  }
  100% {
    transform: translate(-125px, -9px) scaleX(1);
  }
}

@keyframes animloader1 {
  0% {
    box-shadow: 0 -6px, -122.9px -8px;
  }
  25%, 75% {
    box-shadow: 0 0px, -122.9px -8px;
  }
  100% {
    box-shadow: 0 0px, -122.9px -16px;
  }
}
`,
    },
    
    {
      id: "oq8vTeX8tt5n9",
      html: `<span class="loader">Load&nbsp;ng</span>`,
      css: `.loader{
    font-size: 48px;
    color: transparent;
    overflow:hidden;
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    text-shadow:0 0 #FFF, 5em 0 #FFF;
    animation:marquee 2s infinite ease;
  }
  .loader:before {
    content:"Loading...";
  }

  @keyframes marquee {to{text-shadow:-5em 0 #FFF, 0 0 #FFF}}
`
    },
    
    
    {
        id: "oq8v82tt5n9",
        content: 'Load&nbsp;ng',
        html: `<span class="loader">Load&nbsp;ng</span>`,
        css: `.loader {
  color: #FFF;
  position: relative;
  display: inline-block;
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  letter-spacing: 4px;
  box-sizing: border-box;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  right: 70px;
  bottom: 10px;
  height: 24px;
  width: 5.15px;
  background: currentColor;
}
.loader::after {
  content: '';  
  width: 8px;
  height: 8px;
  position: absolute;
  left: 125px;
  top: 2px;
  border-radius: 50%;
  background: red;
  box-sizing: border-box;
  animation: animloader 1s ease-in infinite;
}

@keyframes animloader {
  0% {
    transform: translateY(8px) scaleY(1) scaleX(1.25);
  }
  25%, 75% {
    transform: translateY(-5px) scaleY(1.2) scaleX(1);
  }
  50% {
    transform: translateY(-10px) scaleY(1) scaleX(1);
  }
  100% {
    transform: translateY(8px) scaleY(0.8) scaleX(0.8);
  }
}
`,
    }, {
        id: "x6aic1riy0h",
        content: 'Loading',
        html: `<span class="loader">Loading</span>`,
        css: `.loader {
  color: #FFF;
  display: inline-block;
  position: relative;
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}
.loader::after {
  content: '';  
  width: 5px;
  height: 5px;
  background: currentColor;
  position: absolute;
  bottom: 10px;
  right: -5px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 10px 0 rgba(255, 255, 255, 0), 20px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 10px 0 white, 20px 0 rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 10px 0 white, 20px 0 white;
  }
}
`,
    },
  {
    id: "text-spotlight-elate",
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader {
  font-size: 48px;
  font-weight: 600;
  display: inline-block;
  letter-spacing: 2px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  box-sizing: border-box;
  animation: spotlight 2s linear infinite alternate;
}

@keyframes spotlight {
  0% , 20% {
    opacity: 1;
    letter-spacing: 2px;
   }
 80% , 100% {
    opacity: 0;
    letter-spacing: 32px;
   }
}
      `
  },
    
    {
        id: "i9vseffpc6r",
        content: 'Load&nbsp;ng',
        html: `<span class="loader">Load&nbsp;ng</span>`,
        css: `.loader {
  color: #FFF;
  display: inline-block;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  letter-spacing: 4px;
  box-sizing: border-box;
}
.loader::before {
  content: '';  
  position: absolute;
  right: 70px;
  bottom: 10px;
  height: 24px;
  width: 5px;
  background: currentColor;
  box-sizing: border-box;
}
.loader::after {
  content: '';  
  width: 4px;
  height: 4px;
  background: currentColor;
  position: absolute;
  right: 70px;
  top: 8px;
  box-sizing: border-box;
  animation: animloader 0.6s ease-out infinite alternate;
}

@keyframes animloader {
  0% {
    top: 8px;
    transform: rotate(0deg) scale(1);
  }
  100% {
    top: 0px;
    transform: rotate(180deg) scale(1.5);
  }
}
`,
    }, {
        id: "3bdczi78s17",
        content: 'Load&nbsp;ng',
        html: `<span class="loader">Load&nbsp;ng</span>`,
        css: `.loader {
  color: #FFF;
  display: inline-block;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  letter-spacing: 4px;
  box-sizing: border-box;
}
.loader::before {
  content: '';  
  position: absolute;
  right: 68px;
  bottom: 10px;
  height: 24px;
  width: 7px;
  outline: 1px solid #FFF;
  color: #FF3D00;
  box-sizing: border-box;
  animation: animloader1 1s linear infinite alternate;
}
.loader::after {
  content: '';  
  width: 4px;
  height: 4px;
  background: #FF3D00;
  position: absolute;
  right: 70px;
  top: 8px;
  box-sizing: border-box;
  animation: animloader 1s ease-out infinite alternate;
}

@keyframes animloader {
  0% {
    top: 8px;
    transform: rotate(0deg) scale(1);
  }
  100% {
    top: 0px;
    transform: rotate(180deg) scale(1.5);
  }
}

@keyframes animloader1 {
  0% {
    box-shadow: 0 0 inset;
  }
  100% {
    box-shadow: 0 -28px inset;
  }
}
`,
    }, {
        id: "p8ibtm0n4y",
        html: `<span class="loader"></span>`,
        css: `.loader {
  position: relative;
  display: inline-block;
}
.loader::before {
  
  content: 'Loading';
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  letter-spacing: 2px;
  display: inline-block;
  box-sizing: border-box;
  animation: floating 1s ease-out infinite alternate;
}
.loader::after {
  content: '';  
  width: 100%;
  height: 10px;
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  left: 0;
  top: 100%;
  filter: blur(4px);
  border-radius: 50%;
  box-sizing: border-box;
  animation: animloader 1s ease-out infinite alternate;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-25px);
  }
}

@keyframes animloader {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1.2);
  }
}
`,
    }, {
        id: "6y36vminasy",
        content: 'Loading',
        html: `<span class="loader">Loading</span>`,
        css: `.loader {
  font-size: 48px;
  display: inline-block;
  letter-spacing: 2px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 1s ease-in infinite alternate;
}

@keyframes animloader {
  0% {
    filter: blur(0px);
    transform: skew(0deg);
  }
  100% {
    filter: blur(3px);
    transform: skew(-4deg);
  }
}
`,
    }, {
        id: "m1ofkeibm7",
        content: 'Loading',
        html: `<span class="loader">Loading</span>`,
        css: `.loader {
  font-size: 48px;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #FF3D00;
  letter-spacing: 2px;
  position: relative;
}
.loader::after {
  content: 'Loading';
  position: absolute;
  left: 0;
  top: 0;
  color: #FFF;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 10s ease-in infinite;
}

@keyframes animloader {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
`,
    },
    {
      id: "text-fkeibm",
      content: 'Loading',
      html: `<span class="loader">Loading</span>`,
      css: `.loader{
        font-size: 48px;
        color: #FFF;
        display: inline-block;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        position: relative;
      }
      .loader:after{
        content: '';
        height: 4px;
        width:0%;
        display: block;
        background: #FF3D00;
        animation: 5s lineGrow linear infinite;
      }
      
      @keyframes lineGrow {to{width: 100%;}}
`,
  },


  {
    id: "textFlowBrkbxb78im",
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader{
        display: inline-block;
        text-align: center;
        line-height: 86px;
        text-align: center;
        position: relative;
        padding: 0 48px;
        font-size: 48px;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
        }
        .loader:before, .loader:after {
          content: "";
          display: block;
          width: 15px;
          height: 15px;
          background: currentColor;
          position: absolute;
          animation: load .7s infinite alternate ease-in-out;
          top: 0;
        }
        .loader:after {
          top: auto;
          bottom: 0;
        }
      @keyframes load {
        0% {
          left: 0;
          height: 43px;
          width: 15px;
          transform: translateX(0)
        }
        50% {
          height: 10px;
          width: 40px
        }
        100% {
          left: 100%;
          height: 43px;
          width: 15px;
          transform: translateX(-100%)
        }
      }
`,
  },

    {
      id: "text-ub-prog-im",
      html: `<span class="loader"></span>`,
      css: `.loader{
      font-size: 48px;
      color: #FFF;
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      position: relative;
    }
    .loader:after{
      content: 'Loading';
      position: relative;
      z-index: 5;
    }
    .loader:before{
      content: '';
      height: 6px;
      border: 1px solid;
      border-radius: 10px;
      width: 100%;
      position: absolute;
      bottom: 0px;
      background: linear-gradient(#FF3D00 100%, transparent 0) no-repeat;
      background-size: 0% auto;
      animation: 10s lineGrow linear infinite;
    }

    @keyframes lineGrow {to {  background-size: 100% auto}}
`,
  },
  
  {
    id: "text-typ-an",
    html: `<span class="loader"></span>`,
    css: `.loader{
      font-size: 48px;
      color: #FFF;
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      position: relative;
    }
    .loader:before{
      content: '';
      animation: 5s print linear alternate infinite;
    }
    .loader:after{
      content: '';
      position: absolute;
      right: -4px;
      top: 50%;
      transform: translatey(-45%);
      width: 2px;
      height: 1.3em;
      background: currentColor;
      opacity: 0.8;
      animation: 1s blink steps(2) infinite;
    }
    
    @keyframes blink {
      0%  { visibility: hidden;}
      100%  { visibility: visible;}
    }
    @keyframes print {
      0% { content: 'L'}
      10% { content: 'Lo'}
      20% { content: 'Loa'}
      30% { content: 'Load'}
      40% { content: 'Loadi'}
      50% { content: 'Loadin'}
      60% { content: 'Loading'}
      70% { content: 'Loading.'}
      80% { content: 'Loading..'}
      90% , 100% { content: 'Loading...'}
    }
`,
},
  
  {
    id: "text-ball-spn-ar",
    html: `<span class="loader"></span>`,
    css: `.loader{
    position: relative;
    font-size: 48px;
    letter-spacing: 2px;
  }
  .loader:before {
    content: "Loading";
    color: #fff;
  }
  .loader:after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: #ff3d00;
    border-radius: 50%;
    position: absolute;
    inset: 0;
    margin: auto;
    top: -70px;
    animation: motion 3s ease-in-out infinite;
  }

  @keyframes motion {
    0%, 50%, 100% {
      transform: translateX(0) scale(1);
    }
    25% {
      transform: translateX(-100px) scale(0.3);
    }
    75% {
      transform: translateX(100px) scale(0.3);
    }
  }
`,
},
  {
    id: "text-balloon",
    html: `<span class="loader"></span>`,
    css: `.loader{
    position: relative;
    font-size: 48px;
    letter-spacing: 6px;
  }
  .loader:before {
    content: "Loading";
    color: #fff;
  }
  .loader:after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: #ff3d00;
    background-image: radial-gradient(circle 2px, #fff4 100%, transparent 0),
      radial-gradient(circle 1px, #fff3 100%, transparent 0);
    background-position: 14px -4px, 12px -1px;
    border-radius: 50%;
    position: absolute;
    margin: auto;
    top: -5px;
    right: 66px;
    transform-origin: center bottom;
    animation: fillBaloon 1s ease-in-out infinite alternate;
  }

  @keyframes fillBaloon {
    0% { transform: scale(1)}
    100% { transform: scale(3)}
  }
`,
},
  {
    id: "text-smoky",
    html: `<span class="loader"></span>`,
    css: `.loader{
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 2px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    animation: smokeOut 1s ease-in-out infinite alternate;
    text-shadow: 0 0 1px white;
  }
  .loader:before {
    content: "Loading";
  }

  @keyframes smokeOut {
    100% {
      opacity: 0.08;
      filter: blur(5px);
      letter-spacing: 4px;
    }
  }
`,
},


]


