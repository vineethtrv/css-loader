export const CIRCLE = [
    {
    id: "ortrjlqlykr",
    html: `<span class="loader"></span>`,
    css: `.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
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
    }, 
  {
    id: "ortrjxx53ykr",
    html: `<span class="loader"></span>`,
    css: `.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
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
  },
  {
  id: "orj095k34jjr",
  html: `<span class="loader"></span>`,
  css: `.loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      position: relative;
      animation: rotate 1s linear infinite
    }
    .loader::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: 5px solid #FFF;
      animation: prixClipFix 2s linear infinite ;
    }

    @keyframes rotate {
      100%   {transform: rotate(360deg)}
    }

    @keyframes prixClipFix {
        0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
        25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
        50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
        75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
        100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
    }`,
  },
 
  {
  id: "spin-fllwBRbease4jr",
  html: `<span class="loader"></span>`,
  css: `.loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }
      .loader::before , .loader::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #FFF;
        animation: prixClipFix 2s linear infinite ;
      }
      .loader::after{
        transform: rotate3d(90, 90, 0, 180deg );
        border-color: #FF3D00;
      }

      @keyframes rotate {
        0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
      }

      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
      }
`,
  },
  {
  id: "spin-fllwBRbInstEase4jr",
  html: `<span class="loader"></span>`,
  css: `.loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }
      .loader::before , .loader::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #FFF;
        animation: prixClipFix 2s linear infinite ;
      }
      .loader::after{
        inset: 8px;
        transform: rotate3d(90, 90, 0, 180deg );
        border-color: #FF3D00;
      }

      @keyframes rotate {
        0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
      }

      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
      }
`,
  },
  {
  id: "spin-x2-ease4jr",
  html: `<span class="loader"></span>`,
  css: `.loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }
      .loader::before , .loader::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #FFF;
        animation: prixClipFix 2s linear infinite ;
      }
      .loader::after{
        border-color: #FF3D00;
        animation: prixClipFix 2s linear infinite , rotate 0.5s linear infinite reverse;
        inset: 6px;
      }

      @keyframes rotate {
        0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
      }

      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
      }`,
  },



    {
        id: "ckf1cjlmi0m",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border: 3px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
    content: '';  
  box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-bottom-color: #FF3D00;
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
        id: "j5av6mi6zo",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border: 3px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
} 
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-bottom-color: #FF3D00;
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
        id: "znxzf2hzg5",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border: 3px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid;
  border-color: #FF3D00 transparent;
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
        id: "8z8lfq1886d",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border: 3px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid;
  border-color: #FF3D00 transparent;
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
        id: "5vswdr9qe3x",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border: 2px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  background: #FF3D00;
  width: 6px;
  height: 6px;
  transform: translate(150%, 150%);
  border-radius: 50%;
}
.loader::before {
  left: auto;
  top: auto;
  right: 0;
  bottom: 0;
  transform: translate(-150%, -150%);
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
        id: "sn2z4w7ryzh",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border: 2px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  background: #FF3D00;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.loader::before {
  left: auto;
  top: auto;
  right: 0;
  bottom: 0;
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
        id: "cu3hszfsd6",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border: 3px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
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
    
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} `,
    }, {
        id: "ibcq0dcfc3d",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 2px solid #FF3D00;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 4px;
  top: 4px;
  border: 2px solid #FFF;
  width: 12px;
  height: 12px;
  border-radius: 50%;
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
        id: "wtkcrjte7d",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #FFF #FFF transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px solid;
  border-color: transparent #FF3D00 #FF3D00;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
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
}
    `,
    }, {
        id: "ujnxjtlwqu",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #FFF #FFF transparent transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
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
  border: 3px solid;
  border-color: transparent transparent #FF3D00 #FF3D00;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}
.loader::before {
  width: 32px;
  height: 32px;
  border-color: #FFF #FFF transparent transparent;
  animation: rotation 1.5s linear infinite;
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
}
    `,
    }, {
        id: "m8h17ktqkeh",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border: 3px dotted #FFF;
  border-style: solid solid dotted dotted;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px dotted #FF3D00;
  border-style: solid solid dotted;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  animation: rotationBack 1s linear infinite;
  transform-origin: center center;
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
} `,
    }, {
        id: "fe5gga2b3j",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border: 2px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 0;
  background: #FF3D00;
  width: 3px;
  height: 24px;
  transform: translateX(-50%);
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
    id: "lrd-grw-crl",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: pulse 1s linear infinite;
}
.loader:after {
  content: '';
  position: absolute;
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: scaleUp 1s linear infinite;
}

@keyframes scaleUp {
  0% { transform: translate(-50%, -50%) scale(0) }
  60% , 100% { transform: translate(-50%, -50%)  scale(1)}
}
@keyframes pulse {
  0% , 60% , 100%{ transform:  scale(1) }
  80% { transform:  scale(1.2)}
}
`,
    },
    
    {
        id: "0wvsnoj54ldc",
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
  border-radius: 50%;
  border: 2px solid #FFF;
  position: absolute;
  left: 0;
  top: 0;
  animation: animloader 2s linear infinite;
}
.loader::after {
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
        id: "1fyru3jzcwm",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border: 5px dotted #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
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
    id: "bblRgAl",
    html: `<span class="loader"></span>`,
    css: `.loader {
  color: #fff;
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.3s infinite linear;
  transform: translateZ(0);
}

@keyframes mulShdSpin {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 
    2em -2em 0 0em, 3em 0 0 -1em, 
    2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 -1em, -3em 0 0 -1em, 
    -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 
    3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 -1em, -3em 0 0 -1em, 
    -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 
    2em -2em 0 0, 3em 0 0 0.2em, 
    2em 2em 0 0, 0 3em 0 -1em, 
    -2em 2em 0 -1em, -3em 0 0 -1em, 
    -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
     3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, 
     -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
     3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, 
     -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
     3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, 
     -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 
    3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 
    3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
  `,
  },

{
  id: "bbMtAls",
  html: `<span class="loader"></span>`,
  css: `.loader {
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.1s infinite ease;
  transform: translateZ(0);
}
@keyframes mulShdSpin {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.5), -1.8em -1.8em 0 0em rgba(255,255,255, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.5), 1.8em -1.8em 0 0em rgba(255,255,255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.5), 2.5em 0em 0 0em rgba(255,255,255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.5), 1.75em 1.75em 0 0em rgba(255,255,255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.5), 0em 2.5em 0 0em rgba(255,255,255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.5), -1.8em 1.8em 0 0em rgba(255,255,255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.5), -2.6em 0em 0 0em rgba(255,255,255, 0.7), -1.8em -1.8em 0 0em #ffffff;
  }
}
`,
},
    {
      id: "bbMlShinf",
      html: `<span class="loader"></span>`,
      css: `.loader {
  color: #ffffff;
  font-size: 45px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  transform: translateZ(0);
  animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;
}

@keyframes mltShdSpin {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em,
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, 
    -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
     -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, 
     -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
     -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, 
     -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 
    0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}

@keyframes round {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
 `,
},

    
    {
        id: "7en5eji78kt",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  background: linear-gradient(0deg, rgba(255, 61, 0, 0.2) 33%, #ff3d00 100%);
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #263238;
}
@keyframes rotation {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg)}
} `,
    },

  {
    id: "spinxLigfrechand67",
    html: `<span class="loader"></span>`,
    css: `.loader {
        transform: rotateZ(45deg);
        perspective: 1000px;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        color: #fff;
      }
        .loader:before,
        .loader:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: inherit;
          height: inherit;
          border-radius: 50%;
          transform: rotateX(70deg);
          animation: 1s spin linear infinite;
        }
        .loader:after {
          color: #FF3D00;
          transform: rotateY(70deg);
          animation-delay: .4s;
        }

      @keyframes rotate {
        0% {
          transform: translate(-50%, -50%) rotateZ(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotateZ(360deg);
        }
      }

      @keyframes rotateccw {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(-360deg);
        }
      }

      @keyframes spin {
        0%,
        100% {
          box-shadow: .2em 0px 0 0px currentcolor;
        }
        12% {
          box-shadow: .2em .2em 0 0 currentcolor;
        }
        25% {
          box-shadow: 0 .2em 0 0px currentcolor;
        }
        37% {
          box-shadow: -.2em .2em 0 0 currentcolor;
        }
        50% {
          box-shadow: -.2em 0 0 0 currentcolor;
        }
        62% {
          box-shadow: -.2em -.2em 0 0 currentcolor;
        }
        75% {
          box-shadow: 0px -.2em 0 0 currentcolor;
        }
        87% {
          box-shadow: .2em -.2em 0 0 currentcolor;
        }
      }
   `,
    },
    
    
    {
        id: "2y7t3com146",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #FFF;
  border-right: 3px solid transparent;
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
        id: "vmout1ii0uh",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #FFF;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-bottom: 4px solid #FF3D00;
  border-left: 4px solid transparent;
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
        id: "8yvzqgag914",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #FFF;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left: 4px solid #FF3D00;
  border-bottom: 4px solid transparent;
  animation: rotation 0.5s linear infinite reverse;
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
        id: "p12aea9j53",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border: 5px solid;
  border-color: #FF3D00 transparent;
  border-radius: 50%;
  display: inline-block;
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
        id: "37zcnj0dwpi",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 10px solid;
  border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
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
        id: "loh338ayum",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 10px solid;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}
@keyframes animloader {
  0% {
    border-color: white rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  }
  33% {
    border-color: white white rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  }
  66% {
    border-color: white white white rgba(255, 255, 255, 0);
  }
  100% {
    border-color: white white white white;
  }
} `,
    },
    
  {
    id: "donut-fillClip-st",
    html: `<span class="loader"></span>`,
    css: `.loader {
      width: 48px;
      height: 48px;
      border:10px solid #FFF;
      border-radius: 50%;
      position: relative;
      transform:rotate(45deg);
      box-sizing: border-box;
    }
    .loader::before {
      content: "";
      position: absolute;
      box-sizing: border-box;
      inset:-10px;
      border-radius: 50%;
      border:10px solid #FF3D00;
      animation: prixClipFix 2s infinite linear;
    }

    @keyframes prixClipFix {
        0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
        25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
        50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
        75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
        100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
    }
      `
    },
  {
    id: "crlFillBtm",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width: 64px;
    height: 64px;
    background: #fff;
    border-radius: 50%;
    overflow: hidden;
  }
  .loader:after{
    content: '';
    position: absolute;
    inset: 8px;
    margin: auto;
    background: #222b32;
     border-radius: 50%;
  }
  .loader:before{
    content: '';
    position: absolute;
    inset: 0px;
    margin: auto;
    background: #de3500;
    animation: crlMugLoader 2s linear infinite alternate;
  }
  @keyframes crlMugLoader {
    0%  ,10% { transform: translateY(64px) }
    90% , 100% { transform: translateY(0px) }
  }
      `
    },
  {
    id: "hlafDnSpn",
    html: `<span class="loader"></span>`,
    css: `.loader {
    width: 70px;
    height: 35px;
    position: relative;
    overflow: hidden;
  }
  .loader:before {
    content: "";
    width: 70px;
    height: 70px;
    position: absolute;
    left: 0;
    top: 0;
    border: 5px solid #0000;
    border-color: #fff #fff #0000 #0000;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotate 3s ease-in-out infinite;
    transform: rotate(-200deg);
  }
  @keyframes rotate {
    0% {
      border-width: 10px;
    }
    25% {
      border-width: 3px;
    }
    50% {
      transform: rotate(115deg);
      border-width: 10px;
    }
    75% {
      border-width: 3px;
    }
    100% {
      border-width: 10px;
    }
  }
      `
    },
    
    
    {
        id: "aji4vwmkdk",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border: 3px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  position: absolute;
  box-sizing: border-box;
  left: 20px;
  top: 31px;
  border: 10px solid transparent;
  border-right-color: #FFF;
  transform: rotate(-40deg);
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
        id: "c430xwqb2e5",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border-width: 3px;
  border-style: dashed solid  solid dotted;
  border-color: #FF3D00 #FF3D00 transparent #FF3D00;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 20px;
  top: 31px;
  border: 10px solid transparent;
  border-right-color: #FF3D00;
  transform: rotate(-40deg);
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
    id: "refArw2sd",
    html: `<span class="loader"></span>`,
    css: `.loader {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    border: 3px solid;
    border-color:#de3500 #0000 #fff #0000;
    border-radius: 50%;
    box-sizing: border-box;
    animation: 1s rotate linear infinite;
 }
 .loader:before , .loader:after{
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    border: 10px solid transparent;
    border-bottom-color:#fff;
    transform: translate(-10px, 19px) rotate(-35deg);
  }
 .loader:after {
    border-color: #de3500 #0000 #0000 #0000 ;
    transform: translate(32px, 3px) rotate(-35deg);
  }
   @keyframes rotate {
    100%{    transform: rotate(360deg)}
  }
`,
    },

  {
    id: "refArw2sdDot",
    html: `<span class="loader"></span>`,
    css: `.loader {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    border-width: 3px 2px 3px 2px;
    border-style: solid dotted solid dotted;
    border-color: #de3500 rgba(255, 255, 255,0.3) #fff rgba(151, 107, 93, 0.3);
    border-radius: 50%;
    box-sizing: border-box;
    animation: 1s rotate linear infinite;
 }
 .loader:before , .loader:after{
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    border: 10px solid transparent;
    border-bottom-color:#fff;
    transform: translate(-10px, 19px) rotate(-35deg);
  }
 .loader:after {
    border-color: #de3500 #0000 #0000 #0000 ;
    transform: translate(32px, 3px) rotate(-35deg);
  }
   @keyframes rotate {
    100%{    transform: rotate(360deg)}
  }
`,
    },


    {
        id: "0pyhri7feqdc",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  background: #FFF;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  animation: animloader 1s ease-in infinite;
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
} `,
    }, {
        id: "kvwtna29uw",
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
  border-radius: 50%;
  background: #FFF;
  position: absolute;
  left: 0;
  top: 0;
  animation: animloader 2s linear infinite;
}
.loader::after {
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
        id: "1uv5glsyeok",
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
    border-radius: 50%;
    background: #FFF;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    animation: animloader 2s ease-in-out infinite;
  }
  .loader::after {
    animation-delay: 1s;
  }

@keyframes animloader {
    0%, 100% {
      transform: scale(0);
      opacity: 1;
}
    50% {
      transform: scale(1);
      opacity: 0;
}
  }
  `,
    },

  {
    id: "rippleBlixShd",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 8px;
  height: 8px;
  position: relative;
  border-radius: 50%;
  background: #fff;
  animation: wave 1s ease-in infinite;
}

@keyframes wave {
 0% {  box-shadow:
  0 0 0 0px rgba(255, 255,255, 1),
  0 0 0 20px rgba(255, 255,255, 0.2),
  0 0 0 40px rgba(255, 255,255, 0.6),
  0 0 0 60px rgba(255, 255,255, 0.4),
  0 0 0 80px rgba(255, 255,255, 0.2)
  }
  100% {  box-shadow:
    0 0 0 80px rgba(255, 255,255, 0),
    0 0 0 60px rgba(255, 255,255, 0.2),
    0 0 0 40px rgba(255, 255,255, 0.4),
    0 0 0 20px rgba(255, 255,255, 0.6),
    0 0 0 0px rgba(255, 255,255, 1)
  }
}


  `,
    },

  {
    id: "vishuChakra",
    html: `<span class="loader"></span>`,
    css: `.loader {
        font-size:48px;
        color: #FFF;
        width: 1em;
        height: 1em;
        box-sizing: border-box;
        background-color: currentcolor;
        position: relative;
        border-radius: 50%;
        transform: rotateX(-60deg) perspective(1000px);
      }
      .loader:before,
      .loader:after {
        content: '';
        display: block;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        animation: flowerFlow 1s ease-out infinite;
      }
      .loader:after {
        animation-delay: .4s;
      }

      @keyframes flowerFlow {
        0% {
          opacity: 1;
          transform: rotate(0deg);
          box-shadow: 0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor;
        }
        100% {
          opacity: 0;
          transform: rotate(180deg);
          box-shadow: -1em -1em 0 -.35em currentcolor,
          0 -1.5em 0 -.35em currentcolor,
          1em -1em 0 -.35em currentcolor,
          -1.5em 0 0 -.35em currentcolor,
          1.5em -0 0 -.35em currentcolor,
          -1em 1em 0 -.35em currentcolor,
          0 1.5em 0 -.35em currentcolor,
          1em 1em 0 -.35em currentcolor;
        }
      }
      `,
    },

  {
    id: "chkarBlast",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 48px;
  position: relative;
}
.loader::before , .loader::after{
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50% , -50%);
  width: 48em;
  height: 48em;
  background-image:
    radial-gradient(circle 10px, #FFF 100%, transparent 0),
    radial-gradient(circle 10px, #FFF 100%, transparent 0),
    radial-gradient(circle 10px, #FFF 100%, transparent 0),
    radial-gradient(circle 10px, #FFF 100%, transparent 0),
    radial-gradient(circle 10px, #FFF 100%, transparent 0),
    radial-gradient(circle 10px, #FFF 100%, transparent 0),
    radial-gradient(circle 10px, #FFF 100%, transparent 0),
    radial-gradient(circle 10px, #FFF 100%, transparent 0);
  background-position: 0em -18em, 0em 18em, 18em 0em, -18em 0em,
                       13em -13em, -13em -13em, 13em 13em, -13em 13em;
    background-repeat: no-repeat;
  font-size: 0.5px;
  border-radius: 50%;
  animation: blast 1s ease-in infinite;
}
.loader::after {
  font-size: 1px;
  background: #fff;
  animation: bounce 1s ease-in infinite;
}

@keyframes bounce {
  0% , 100%{ font-size: 0.75px }
  50% { font-size: 1.5px }
}
@keyframes blast {
  0% , 40% {
    font-size: 0.5px;
  }
  70% {
    opacity: 1;
    font-size: 4px;
  }
   100% {
     font-size: 6px;
    opacity: 0;
  }
}
`,
    },
  {
    id: "spnkInfBablRot",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: calc(100px - 24px);
  height: 50px;
  position: relative;
  animation: flippx 2s infinite linear;
}
.loader:before {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #FFF;
  transform-origin: -24px 50%;
  animation: spin 1s infinite linear;
}
.loader:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50% , -50%);
  background: #fff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

@keyframes flippx {
  0%, 49% {
    transform: scaleX(1);
  }
  50%, 100% {
    transform: scaleX(-1);
  }
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
      `,
    },
  {
    id: "fl-rl3d-crl",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    margin: auto;
    box-sizing: border-box;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.1);
    transform-origin: 50% 50%;
    transform: perspective(200px) rotateX(66deg);
    animation: spinner-wiggle 1.2s infinite;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 4px solid #0000;
    animation: spinner-spin 1.2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite,
      spinner-fade 1.2s linear infinite;
  }
  .loader:before {
    border-top-color: #fff;
  }
  .loader:after {
    border-top-color: #ff3d00;
    animation-delay: 0.4s;
  }

  @keyframes spinner-spin {
    100% { transform: rotate(360deg)}
  }
  @keyframes spinner-fade {
    25%, 75% { opacity: 0.1}
    50% { opacity: 1 }
  }
      `,
    },
  {
    id: "moon-around-light",
    html: `<span class="loader"></span>`,
    css: `.loader {
    width: 100px;
    height: 100px;
    background: linear-gradient(
      165deg,
      rgba(255, 255, 255, 1) 0%,
      rgb(220, 220, 220) 40%,
      rgb(170, 170, 170) 98%,
      rgb(10, 10, 10) 100%
    );
    border-radius: 50%;
    position: relative;
  }

  .loader:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border-bottom: 0 solid #ffffff05;
    box-shadow: 0 -10px 20px 20px #ffffff40 inset,
      0 -5px 15px 10px #ffffff50 inset, 0 -2px 5px #ffffff80 inset,
      0 -3px 2px #ffffffbb inset, 0 2px 0px #ffffff, 0 2px 3px #ffffff,
      0 5px 5px #ffffff90, 0 10px 15px #ffffff60, 0 10px 20px 20px #ffffff40;
    filter: blur(3px);
    animation: 2s rotate linear infinite;
  }

  @keyframes rotate {
    100% { transform: rotate(360deg) }
  }
      `,
    },
  {
    id: "ring-light",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 6rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: pulsOut 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75));
  }
  .loader:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem #fff;
    animation-name: pulsIn;
  }
  .loader:after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 #fff;
  }

  @keyframes pulsIn {
    0% {
      box-shadow: inset 0 0 0 1rem #fff;
      opacity: 1;
    }
    50%, 100% {
      box-shadow: inset 0 0 0 0 #fff;
      opacity: 0;
    }
  }

  @keyframes pulsOut {
    0%, 50% {
      box-shadow: 0 0 0 0 #fff;
      opacity: 0;
    }
    100% {
      box-shadow: 0 0 0 1rem #fff;
      opacity: 1;
    }
  }
      `,
    },
  {
    id: "ringMolt",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
  width: 100px;
  height: 100px;
}

.loader:before , .loader:after{
  content: '';
  border-radius: 50%;
  position: absolute;
  inset: 0;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
}
.loader:after {
  box-shadow: 0 2px 0 #FF3D00 inset;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  0% {  transform: rotate(0)}
  100% { transform: rotate(360deg)}
}`,
    },




  {
    id: "ranDrpBblHrflx",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 32px;
  height: 32px;
  transform: translateY(100%);
  border-radius: 50%;
  background: #FFF;
  position: relative;
}
.loader:before , .loader:after{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #FFF;
  left: 50%;
  transform: translateX(-50%);
  top: -200%;
}
.loader:after {
  animation: moveX 0.5s infinite linear alternate;
}

@keyframes moveX {
  0% {
    top: 0% ;
    transform: translateX(-50%) scale(1.5);
  }
  50% {
    top: -75% ;
    transform: translateX(-50%) scale(0.5);
  }
  100% {
    top: -200%;
    transform: translateX(-50%) scale(1.5);
  }
}
      `,
    },
    
    {
        id: "coin-flip-b8sp",
        html: `<span class="loader"></span>`,
        css: `.loader {
          display: inline-block;
          transform: translateZ(1px);
        }
        .loader:after {
          content: '';
          display: inline-block;
          width: 48px;
          height: 48px;
          margin: 8px;
          border-radius: 50%;
          background: #fff;
          animation: coin-flip 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
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
      }
    `,
    }, 

    
    {
        id: "b8sr9u8olsp",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: -72px 0 #FFF inset;
  }
  100% {
    box-shadow: 48px 0 #FFF inset;
  }
}
    `,
    }, 
    {
        id: "bbl-ptl-flip",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  position: relative;
  perspective: 500px;
}
.loader:before , .loader:after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 24px;
  height: 48px;
  background: #FF3D00;
  border-radius: 0 24px 24px 0;
  transform-origin: 0 0;
  animation: flip 2s linear infinite alternate;
}
.loader:after {
  left: 0;
  border-radius: 24px 0 0 24px;
  transform-origin: 100% 0;
  animation-delay: 1s;
}

@keyframes flip {
    0% , 10% { transform: rotateY(0deg)}
    90%, 100% { transform: rotateY(-180deg)}
}

    `,
    }, 
    
    
    {
        id: "pie-sprix-fill",
        html: `<span class="loader"></span>`,
        css: `.loader {
            position: relative;
            border:24px solid #0000;
            border-radius:50%;
            animation: piefill 2s linear infinite;
          }

          @keyframes piefill {
            0% , 19%{ border-color: #0000 #0000 #0000 #0000 }
            20% , 39%{ border-color: #fff #0000 #0000 #0000 }
            40% , 59%{ border-color: #fff #fff #0000 #0000 }
            60% , 79%{ border-color: #fff #fff #fff #0000 }
            80% , 100% { border-color: #fff #fff #fff #fff }

          }
`,
    },
    
    {
        id: "pie-sprix-fill",
        html: `<span class="loader"></span>`,
        css: `.loader {
          position: relative;
          border:24px solid #FFF;
          border-radius:50%;
          transform: rotate(45deg);
          animation: pieFill 3s linear infinite;
        }

        @keyframes pieFill {
          0% , 19%{ border-color: #FFF #FFF #FFF #FFF }
          20% , 39%{ border-color: #FF3D00 #FFF #FFF #FFF }
          40% , 59%{ border-color: #FF3D00 #FF3D00 #FFF #FFF }
          60% , 79%{ border-color: #FF3D00 #FF3D00 #FF3D00 #FFF }
          80% , 100% { border-color: #FF3D00 #FF3D00 #FF3D00 #FF3D00 }
        }
`,
    },
    
    {
        id: "pie-sprixEase-fill",
        html: `<span class="loader"></span>`,
        css: `.loader {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            position: relative;
            transform:rotate(45deg);
            background: #fff;
          }
          .loader::before {
            content: "";
            box-sizing: border-box;
            position: absolute;
            inset: 0px;
            border-radius: 50%;
            border:24px solid #FF3D00;
            animation: prixClipFix 2s infinite linear;
          }

          @keyframes prixClipFix {
              0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
              25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
              50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
              75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
              100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
          }
      `,
    },



    {
        id: "kyaj4z490z",
        html: `<span class="loader"></span>`,
        css: `.loader {
  border: 24px solid #FFF;
  border-bottom-color: #FF3D00;
  border-radius: 50%;
  display: inline-block;
  position: relative;
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
    },
    
    
    
    
    {
        id: "3j5s0xdxrpk",
        html: `<span class="loader"></span>`,
        css: `.loader {
  border: 2px solid #FFF;
  width: 48px;
  height: 48px;
  background: #FF3D00;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  border: 24px solid;
  border-color: transparent #FFF;
  border-radius: 50%;
  transform: translate(-50%, -50%);
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
    id: "skXsenRx78",
    html: `<span class="loader"></span>`,
    css: `.loader {
          border: 24px solid #FFF;
          border-color: #FF3D00 #FF3D00 #fff #fff;
          border-radius: 50%;
          position: relative;
          animation: rotate 1s linear infinite
        }

        .loader:before {
            content: '';
            position: absolute;
            top: 50%;
            transform: translate(-50% , -125%);
            left: 50%;
            width: 12px;
            height: 12px;
            background: #fff;
            border-radius: 50%;
          }
        @keyframes rotate {
          100%   { transform: rotate(360deg)}
        }
`,
  },
  {
    id: "thon1SqrAttam",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
  width: 64px;
  height: 60px;
}
.loader::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  background: #fff;
  width: 64px;
  height: 32px;
  border-radius: 0 0 50px 50px;
  animation: move 0.5s linear infinite alternate;
}
.loader::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  background: #FF3D00;
  width: 24px;
  height: 24px;
  transform: translateX(-50%) rotate(0deg);
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  100% { transform: translateX(-50%) rotate(360deg)}
}
@keyframes move {
  0% { transform: rotate(10deg)}
  100% { transform: rotate(-10deg)}
}
      `,
  },
  {
    id: "crlHlfVadiKotadi",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 64px;
  height: 64px;
  position: relative;
  animation: rotate 1.5s ease-in infinite alternate;
}
.loader::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  color: #FF3D00;
  background: currentColor;
  width: 64px;
  height: 32px;
  border-radius: 0 0 50px 50px;
}
.loader::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 10%;
  background: #FFF;
  width: 8px;
  height: 64px;
  animation: rotate 1.2s linear infinite alternate-reverse;
}

@keyframes rotate {
  100% { transform: rotate(360deg)}
}
      `,
  },

  {
    id: "fill-in-linspin",
    html: `<span class="loader"></span>`,
    css: `.loader {
    width: 48px;
    height: 48px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    animation: skLinRotate 1s ease-in-out infinite alternate;
  }
  .loader:after{
    content:"";
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #ff3d00;
  }
  @keyframes skLinRotate {
    95% ,100% { transform: rotate(840deg) }
  }
`,
  },

  {
    id: "fill-ln-roll",
    html: `<span class="loader"></span>`,
    css: `.loader {
    width: 48px;
    height: 48px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    animation: roll 1s ease-in-out infinite alternate;
  }
  .loader:after{
    content:"";
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 5px solid ;
    border-color: #ff3d00 transparent;
  }
  @keyframes roll {
    0% {
      transform: translateX(-150%) rotate(0deg) ;
    }
    100% {
      transform:  translateX(150%) rotate(360deg);
    }
  }
`,
  },
    
    {
        id: "s38s0s6yor",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  background: #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 6px;
  top: 10px;
  width: 12px;
  height: 12px;
  color: #FF3D00;
  background: currentColor;
  border-radius: 50%;
  box-shadow: 25px 2px, 10px 22px;
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
        id: "plq3zs4xio",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 48px;
  height: 48px;
  border: 4px solid;
  background: rgba(255, 255, 255, 0.2);
  border-color: transparent #FFF #FFF transparent;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s ease-in-out infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  border: 12px solid;
  border-color: transparent #FF3D00 #FF3D00 transparent;
  transform: translate(-50%, -50%);
  border-radius: 50%;
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
        id: "4s7pe8rbfi5",
        html: `<span class="loader"></span>`,
        css: `.loader {
  border: 2px solid;
  border-color: transparent #FFF;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  border: 24px solid;
  border-color: transparent rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  transform: translate(-50%, -50%);
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
        id: "h1sn6rg6uyh",
        html: `<span class="loader"></span>`,
        css: `.loader {
    border: 24px solid;
    border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: animloader 1s linear infinite;
  }

@keyframes animloader {
    0% {
      border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75);
}
    33% {
      border-color: rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35);
}
    66% {
      border-color: rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25);
}
    100% {
      border-color: rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15);
}
  }
  
  `,
    }, 


  {
    id: "potRoteBuble2x",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 64px;
  height: 64px;
  position: relative;
  border-radius: 50%;
  box-shadow: -10px 8px 0 18px inset #fff;
  animation: rotate 2s ease-in infinite alternate;
}
.loader::before {
  content: '';
  position: absolute;
  left: 14px;
  bottom: 16px;
  background: #FF3D00;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  animation: scale 1s ease-in infinite alternate;
}
@keyframes rotate {
  100% { transform: rotate(750deg)}
}
@keyframes scale {
 100% { transform: scale(0.5) translateY(5px)}
}
  `,
    }, 




  {
    id: "clircleSpderX3",
    html: `<span class="loader"></span>`,
    css: `.loader {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      position: relative;
      background: rgba(255, 255, 255, 0.8);
    }
    .loader:before , .loader:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #FFF;
      animation: slide 1s infinite linear alternate;
      opacity: 0.5;
    }
    .loader:after {
      animation: slide2 1s infinite linear alternate;
      opacity: 1;

    }
    @keyframes slide {
      0% , 20% {  transform: translate(0, 0)  }
      80% , 100% { transform: translate(15px, 15px) }
    }
    @keyframes slide2 {
      0% , 20% {  transform: translate(0, 0) }
      80% , 100% { transform: translate(-15px, -15px) }
    }
  `,
  },


  {
    id: "bbl2TrnsSpltMv",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 64px;
  height: 48px;
  position: relative;
  animation: split 1s ease-in infinite alternate;
}
.loader::before , .loader::after {
  content: '';
  position: absolute;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  left: 0;
  top: 0;
  transform: translateX(-10px);
  background: #FF3D00;
  opacity: 0.75;
  backdrop-filter: blur(20px);
}

.loader::after {
  left: auto;
  right: 0;
  background: #FFF;
  transform: translateX(10px);
}

@keyframes split {
 0% , 25%{ width: 64px }
 100%{ width: 148px }
}
  `,
  },


  {
    id: "bbule2pUshpPlusering",
    html: `<span class="loader"></span>`,
    css: `.loader {
      width: 84px;
      height: 84px;
      position: relative;
    }
    .loader:before , .loader:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width:64px;
      height: 64px;
      border-radius: 50%;
      background:#FFF;
      transform: translate(-50% , -100%)  scale(0);
      animation: push 2s infinite linear;
    }
    .loader:after {
      animation-delay: 1s;
    }
    @keyframes push {
        0% , 50%{ transform: translate(-50% , 0%)  scale(1) }
      100% { transform: translate(-50%, -100%) scale(0) }
    }
  `,
    }, 

  {
    id: "bubblePushBack2ls",
    html: `<span class="loader"></span>`,
    css: `.loader {
        width: 84px;
        height: 84px;
        position: relative;
      }
      .loader:before , .loader:after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        width:84px;
        height: 84px;
        border-radius: 50%;
        background:#FF3D00;
        animation: push 1s infinite linear alternate;
      }
      .loader:after {
        top: auto;
        bottom: 0;
        left: 0;
        background: #fff;
        animation-direction: alternate-reverse;
      }
      @keyframes push {
          0% {
            width:14px;
            height: 14px;
          }
          100% {
            width:84px;
            height: 84px;
          }
      }
  `,
    }, 
  {
    id: "userPushBackCrl",
    html: `<span class="loader"></span>`,
    css: `.loader {
        width: 84px;
        height: 84px;
        position: relative;
        overflow: hidden;
      }
      .loader:before , .loader:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        width:64px;
        height: 64px;
        border-radius: 50%;
        background:#FFF;
        transform: translate(-50% , 100%)  scale(0);
        animation: push 2s infinite ease-in;
      }
      .loader:after {
      animation-delay: 1s;
      }
      @keyframes push {
          0% {
            transform: translate(-50% , 100%)  scale(1);
          }
          15% , 25%{
            transform: translate(-50% , 50%)  scale(1);
          }
        50% , 75% {
            transform: translate(-50%, -30%) scale(0.5);
          }
        80%,  100% {
            transform: translate(-50%, -50%) scale(0);
          }
      }
  `,
    }, 
  {
    id: "bbClrTLin",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width: 100px;
    height: 100px;
  }
  .loader:before{
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    top: 50%;
    left: 0;
    transform: translate(-5px, -50%);
    background: linear-gradient(to right, #fff 50%, #de3500 50%) no-repeat;
    background-size: 200% auto;
    background-position: 100% 0;
    animation: colorBallMoveX 1.5s linear infinite alternate;
  }
 .loader:after{
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #de3500;
 }
@keyframes colorBallMoveX {
  0%  {
    background-position: 0% 0;
    transform: translate(-15px, -50%);
  }
  15%  , 25% {
    background-position: 0% 0;
    transform: translate(0px, -50%);
  }
  75% , 85% {
    background-position: 100% 0;
    transform: translate(50px, -50%);
  }
  100% {
    background-position: 100% 0;
    transform: translate(65px, -50%);
  }
}
  `,
    }, 


  {
    id: "doduSpiBablFil",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 32px;
  height: 32px;
  position: relative;
  border-radius: 50%;
  color: #FF3D00;
  animation: fill 1s ease-in infinite alternate;
}
.loader::before , .loader::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  left: 48px;
  top: 0;
  animation: fill 0.9s ease-in infinite alternate;
}

.loader::after {
  left: auto;
  right: 48px;
  animation-duration: 1.1s;
}

@keyframes fill {
 0% {  box-shadow: 0 0 0 2px inset }
 100%{ box-shadow: 0 0 0 10px inset }
}
  `,
    }, 
    
  
    
    {
        id: "im0eqyxwqhs",
        html: `<span class="loader"></span>`,
        css: `.loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: block;
    margin:15px auto;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
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
    background: #FFF;
    transform: translate(50%, 100%);
  }

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} `,
    }
]