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
    id: "ball@2Xsn-1",
    html: `<span class="loader"></span>`,
    css: `.loader {
  box-sizing: border-box;
  position: relative;
  width: 48px;
  height: 48px;
  animation: flip 1s linear infinite;
}
.loader:after, .loader:before {
  content: "";
  width: 24px;
  height: 24px;
  position: absolute;
  border-radius: 50%;
  background: #FF3D00;
  animation: spin 1s linear infinite;
  transform-origin: 12px 100%;
}
.loader:before {
  transform-origin: 0 50%;
  background: #fff;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes flip {
  0%, 50% {
    transform: rotateY(0deg);
  }
  50%, 100% {
    transform: rotateY(180deg);
  }
}
    `
    },


  {
    id: "ball@2Xsn-2",
    html: `<span class="loader"></span>`,
    css: `.loader {
  box-sizing: border-box;
  position: relative;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;
}
.loader:after, .loader:before {
  content: "";
  width: 24px;
  height: 24px;
  position: absolute;
  border-radius: 50%;
  background: #FF3D00;
  animation: spin 1s linear infinite;
  transform-origin: 0px 100%;
}
.loader:before {
  transform-origin: 0 50%;
  background: #fff;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
    `
    },
  {
    id: "ball@2Xsn-3",
    html: `<span class="loader"></span>`,
    css: `.loader {
  box-sizing: border-box;
  position: relative;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;
}
.loader:after, .loader:before {
  content: "";
  width: 24px;
  height: 24px;
  position: absolute;
  border-radius: 50%;
  background: #FF3D00;
  animation: flipY 1s linear infinite;
  transform-origin: 50% 50%;
}
.loader:before {
  transform-origin: 0% 100%;
  background: #fff;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes flipY {
  0%, 50% {
    transform: rotateY(0deg);
  }
  50%, 100% {
    transform: rotateY(180deg);
  }
}
    `
    },


  {
    id: "ball@2Xsn-4",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: calc(100px - 14px);
  height: 50px;
  position: relative;
  animation: flippx 1s infinite linear;
}
.loader:before {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #FF3D00;
  transform-origin: -14px 50%;
  animation: spin 0.5s infinite linear;
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
    `
    },
  {
    id: "msgerBblFdxbl",
    html: `<span class="loader"></span>`,
    css: `.loader, .loader:before, .loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: bblFadInOut 1.8s infinite ease-in-out;
}
.loader {
  color: #FFF;
  font-size: 7px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}

@keyframes bblFadInOut {
  0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em }
  40% { box-shadow: 0 2.5em 0 0 }
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
    background-color: #FFF2;
    box-shadow: 32px 0 #FFF2, -32px 0 #FFF;
  }
  50% {
    background-color: #FFF;
    box-shadow: 32px 0 #FFF2, -32px 0 #FFF2;
  }
  100% {
    background-color: #FFF2;
    box-shadow: 32px 0 #FFF, -32px 0 #FFF2;
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
  width: 16px;
  height: 16px;
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
    id: "bbl2xcrlrot",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #FF3D00;
  position: relative;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  inset: 0;
  background: #fff;
  transform: rotate(0deg) translate(30px);
  animation: rotate 1s ease infinite;
}
.loader:after {
  animation-delay: 0.5s
}
@keyframes rotate {
  100% {transform: rotate(360deg) translate(30px)
}
    `,
    },
    

  {
    id: "brb1xbeeMv",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 64px;
  height: 12px;
  background:
    radial-gradient(circle 6px, #FFF 100%, transparent 0),
    radial-gradient(circle 6px, #FFF 100%, transparent 0);
  background-size:12px 12px;
  background-position: left center , right center ;
  background-repeat: no-repeat;
  position: relative;
}
.loader:before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #FF3D00;
  inset:0;
  margin: auto;
  animation: mvX 0.6s, mvY 0.3s;
  animation-timing-function:cubic-bezier(.5,-300,.5, 300);
  animation-iteration-count:infinite;
}

@keyframes mvX {
    100% { left: 0.85px}
}
@keyframes mvY {
    100% { top : 0.5px }
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
    }, 
  {
    id: "bbl3xrnhit",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 108px;
  height: 16px;
  background:
    radial-gradient(circle 8px at 8px center, #FFF 100%, transparent 0),
    radial-gradient(circle 8px at 8px center, #FFF 100%, transparent 0);
  background-size: 16px 16px;
  background-repeat: no-repeat;
  position: relative;
  animation: ballX 1s linear infinite;
}
.loader:before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background:#FFF;
  inset:0;
  margin:auto;
  animation: moveX 1s cubic-bezier(0.5,300,0.5,-300) infinite;
}
@keyframes ballX {
  0%,25%,50%,75%, 100%  {background-position: 25% 0,75% 0}
  40%     {background-position: 25% 0,85% 0}
  90%     {background-position: 15% 0,75% 0}
}
@keyframes moveX {
  100% {transform:translate(0.15px)}
}
  `,
    }, 
  {
    id: "ball#flRbc",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width: 100px;
    height: 16px;
  }
  .loader:before , .loader:after{
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 32px 0 #fff;
    left: 0;
    top: 0;
    animation: ballMoveX 1s linear infinite;
  }
  .loader:after {
    box-shadow: none;
    transform-origin: 40px 0;
    transform: rotate(-153deg);
    animation: rotateLoader 1s linear infinite;
  }

  @keyframes rotateLoader {
    0% , 10%{ transform: rotate(-153deg); }
    90%, 100% { transform: rotate(0deg); }
  }
  @keyframes ballMoveX {
    0% , 10%{  transform: translateX(0) }
    90%, 100% { transform: translateX(32px) }
  }
      `,
    },
  {
    id: "ballCrdLd",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
  width: 100px;
  height: 16px;
}
.loader:before , .loader:after{
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 32px 0 #fff;
  left: 0;
  top: 0;
  animation: ballMoveX 2s linear infinite;
}
.loader:after {
  box-shadow: none;
  transform: translateX(64px) scale(1);
  z-index: 2;
  animation: none;
  animation: trfLoader 2s linear infinite;
}

@keyframes trfLoader {
  0% , 5%{
    transform: translateX(64px) scale(1);
    background: #FFF;
  }
  10%{
    transform: translateX(64px) scale(1);
    background: #ff3d00;
  }
  40%{
      transform: translateX(32px) scale(1.5);
      background: #ff3d00;
    }
  90%, 95% {
    transform: translateX(0px) scale(1);
    background: #ff3d00;
  }
  100% {
    transform: translateX(0px) scale(1);
    background: #FFF;
  }
}
@keyframes ballMoveX {
  0% , 10%{  transform: translateX(0) }
  90%, 100% { transform: translateX(32px) }
}
      `,
    },

  {
    id: "ball4puncUp",
    html: `<span class="loader"></span>`,
    css: `.loader {
    animation: rotate 1s infinite;
    height: 50px;
    width: 50px;
  }

  .loader:before,
  .loader:after {
    border-radius: 50%;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
  }
  .loader:before {
    animation: ball1 1s infinite;
    background-color: #fff;
    box-shadow: 30px 0 0 #ff3d00;
    margin-bottom: 10px;
  }
  .loader:after {
    animation: ball2 1s infinite;
    background-color: #ff3d00;
    box-shadow: 30px 0 0 #fff;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg) scale(0.8) }
    50% { transform: rotate(360deg) scale(1.2) }
    100% { transform: rotate(720deg) scale(0.8) }
  }

  @keyframes ball1 {
    0% {
      box-shadow: 30px 0 0 #ff3d00;
    }
    50% {
      box-shadow: 0 0 0 #ff3d00;
      margin-bottom: 0;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #ff3d00;
      margin-bottom: 10px;
    }
  }

  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 #fff;
    }
    50% {
      box-shadow: 0 0 0 #fff;
      margin-top: -20px;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #fff;
      margin-top: 0;
    }
  }
  `,
    }, 



    
    {
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
]