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
  } `,
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
  }, {
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
  }, {
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