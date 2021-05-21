export const PROGRESS = [
    {
        id: "bbi2epoor36",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}
.loader::after {
  content: '';
  width: 96px;
  height: 4.8px;
  background: #FFF;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: hitZak 1s linear infinite alternate;
}

@keyframes hitZak {
  0% {
    left: 0;
    transform: translateX(-1%);
  }
  100% {
    left: 100%;
    transform: translateX(-99%);
  }
}
    `,
    }, {
        id: "5pxufwt6k9",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}
.loader::after {
  content: '';
  width: 192px;
  height: 4.8px;
  background: #FFF;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}

@keyframes animloader {
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
}
    `,
    }, {
        id: "n1vy1hfmljq",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  width: 0;
  height: 4.8px;
  background: #FFF;
  position: absolute;
  top: 0;
  left: 0;
  animation: animFw 10s linear infinite;
}

@keyframes animFw {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}`,
    }, {
        id: "4e806z44erh",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 0;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background: #FFF;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  animation: animFw 8s linear infinite;
}
  .loader::after,
  .loader::before {
    content: '';
    width: 10px;
    height: 1px;
    background: #FFF;
    position: absolute;
    top: 9px;
    right: -2px;
    opacity: 0;
    transform: rotate(-45deg) translateX(0px);
    box-sizing: border-box;
    animation: coli1 0.3s linear infinite;
  }
  .loader::before {
    top: -4px;
    transform: rotate(45deg);
    animation: coli2 0.3s linear infinite;
  }

@keyframes animFw {
    0% {
  width: 0;
}
    100% {
  width: 100%;
}
  }

@keyframes coli1 {
    0% {
  transform: rotate(-45deg) translateX(0px);
  opacity: 0.7;
}
    100% {
  transform: rotate(-45deg) translateX(-45px);
  opacity: 0;
}
  }

@keyframes coli2 {
    0% {
  transform: rotate(45deg) translateX(0px);
  opacity: 1;
}
    100% {
  transform: rotate(45deg) translateX(-45px);
  opacity: 0.7;
}
  }
  `,
    }, {
        id: "25fy52yspad",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.loader::after {
  content: '';  
  width: 96px;
  height: 4.8px;
  background: #FFF;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: hitZak 0.6s ease-in-out infinite alternate;
}

@keyframes hitZak {
  0% {
    left: 0;
    transform: translateX(-1%);
  }
  100% {
    left: 100%;
    transform: translateX(-99%);
  }
}
    `,
    }, {
        id: "4tf5qf1n26l",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
}
.loader::after {
  content: '';  
  width: 0%;
  height: 4.8px;
  background-color: #FFF;
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
  background-size: 15px 15px;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: animFw 6s ease-in infinite;
}

@keyframes animFw {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
    `,
    }, {
        id: "66tdwbfi0l4",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
}
.loader::after {
  content: '';  
  width: 0%;
  height: 4.8px;
  background-color: #FFF;
  font-size: 15px;
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
  background-size: 1em 1em;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: animFw 10s ease-in infinite,  barStripe 1s linear infinite;
}

@keyframes barStripe {
  0% {
    background-position: 1em 0;
  }
  100% {
    background-position: 0 0;
  }
}

@keyframes animFw {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
    `,
    }, {
        id: "9r801t4h2hk",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 100%;
  height: 8px;
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.15);
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
  background-size: 15px 15px;
  z-index: 10;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  width: 0%;
  height: 100%;
  background-color: #FFF;
  position: absolute;
  border-radius: 0 4px 4px 0;
  top: 0;
  left: 0;
  animation: animFw 10s ease-in infinite;
}


@keyframes animFw {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
    `,
    }, {
        id: "xnc4clnb6t",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 100%;
  height: 12px;
  display: inline-block;
  background-color: #FFF;
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
  font-size: 30px;
  background-size: 1em 1em;
  box-sizing: border-box;
  animation: barStripe 1s linear infinite;
}

@keyframes barStripe {
  0% {
    background-position: 1em 0;
  }
  100% {
    background-position: 0 0;
  }
}`,
    }, {
        id: "s9l644spxrp",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 96px;
  height: 16px;
  display: inline-block;
  background-color: #FFF;
  border: 1px solid #FFF;
  border-radius: 4px;
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
  font-size: 30px;
  background-size: 1em 1em;
  box-sizing: border-box;
  animation: barStripe 1s linear infinite;
}

@keyframes barStripe {
  0% {
    background-position: 1em 0;
  }
  100% {
    background-position: 0 0;
  }
}`,
    }, {
        id: "6vqh50z2ump",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 96px;
  height: 24px;
  display: inline-block;
  background-color: #FFF;
  border: 1px solid #FFF;
  border-radius: 4px;
  background: linear-gradient(45deg, transparent 49%, #FFF 50%, #FFF 50%, transparent 51%, transparent), linear-gradient(-45deg, transparent 49%, #FFF 50%, #FFF 50%, transparent 51%, transparent);
  font-size: 15px;
  background-size: 1em 1em;
  box-sizing: border-box;
  animation: barStripe 0.6s linear infinite;
}

@keyframes barStripe {
  0% {
    background-position: 1em 0;
  }
  100% {
    background-position: 0 0;
  }
}`,
    }, {
        id: "tly5d040gdj",
        html: `<span class="loader"></span>`,
        css: `.loader {
  width: 130px;
  height: 48px;
  display: inline-block;
  background: linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000 100%), linear-gradient(45deg, #000 25%, white 25%, white 75%, #000 75%, #000 100%);
  font-size: 10px;
  background-size: 32px 32px;
  box-sizing: border-box;
  animation: raceBoard 0.6s linear infinite;
  background-position: 0 0, 16px 16px;
}

@keyframes raceBoard {
  0% {
    background-position: 0 0, 16px 16px;
  }
  100% {
    background-position: 32px 0px, 48px 16px;
  }
}`,
    }

]