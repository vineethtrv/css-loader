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
        id: "prog-crak-erh",
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
    },
    
    {
      id: "prog-fill",
      html: `<span class="loader"></span>`,
      css: `.loader{
        display: block;
        position: relative;
        height: 12px;
        width: 80%;
        border: 1px solid #fff;
        border-radius: 10px;
        overflow: hidden;
      }
      .loader:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 0;
        background: #FF3D00;
        animation: 6s prog ease-in infinite;
      }
      
      @keyframes prog {
        to  {   width: 100%;}
      }
      `,
  }, 
  {
    id: "prog-go-line",
    html: `<span class="loader"></span>`,
    css: `.loader{
      display: block;
      position: relative;
      height: 12px;
      width: 80%;
      border: 1px solid #fff;
      border-radius: 10px;
      overflow: hidden;
    }
    .loader::after {
      content: '';
      width: 40%;
      height: 100%;
      background: #FF3D00;
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
}, 
{
  id: "prog-plain-fill",
  html: `<span class="loader"></span>`,
  css: `.loader{
    display: block;
    position: relative;
    height: 25px;
    width: 200px;
    background: #fff;
    overflow: hidden;
  }
  .loader:after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: #FF3D00;
    animation: 6s prog ease-in infinite;
  }
  @keyframes prog {
    to  {   width: 100%;}
  }
  `,
}, 
{
  id: "prog-fill-text",
  html: `<span class="loader"></span>`,
  css: `.loader{
    display: block;
    position: relative;
    height: 32px;
    width: 200px;
    background: #fff;
    border:2px solid #fff;
    color: red;
    overflow: hidden;
  }
  .loader::before{
    content: '';
    background: red;
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    animation: loading 10s linear infinite;
  }
  .loader:after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 24px;
    line-height: 32px;
    color: rgb(0,255,255);
    mix-blend-mode: difference;
    animation: percentage 10s linear infinite;
  }
  
  @keyframes loading {
    0% { width: 0 }
    100% { width: 100% }
  }
  @keyframes percentage {
    0% { content: "0%"}
    5% { content: "5%"}
    10% { content: "10%"}
    20% { content: "20%"}
    30% { content: "30%"}
    40% { content: "40%"}
    50% { content: "50%"}
    60% { content: "60%"}
    70% { content: "70%"}
    80% { content: "80%"}
    90% { content: "90%"}
    95% { content: "95%"}
    96% { content: "96%"}
    97% { content: "97%"}
    98% { content: "98%"}
    99% { content: "99%"}
    100% { content: "100%"}
  }
  
  `,
},

{
  id: "pro-bx-ball-rp",
  html: `<span class="loader"></span>`,
  css: `.loader{
    display: block;
    position: relative;
    height: 32px;
    width: 140px;
    border: 3px solid #fff;
    border-radius: 20px;
    box-sizing: border-box;
  }
  .loader:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #FF3D00;
    animation: ballbns 2s ease-in-out infinite alternate;
  }
  @keyframes ballbns {
    0% {  left: 0; transform: translateX(0%); }
    100% {  left: 100%; transform: translateX(-100%); }
  }
  `,
},

{
  id: "pro-fir-ball",
  html: `<span class="loader"></span>`,
  css: `
  .loader{
    display: block;
    position: relative;
    height: 32px;
    width: 150px;
    box-sizing: border-box;
    overflow: hidden;
    border: 2px solid #FFF;
    border-radius: 20px;
  }
  .loader:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #FF3D00;
    animation: ballbns 3s ease-in-out infinite;
  }
  
  @keyframes ballbns {
    0% {  
        left: 0; 
        transform: translateX(0%); 
        box-shadow: 
        -5px 0 0 -1px rgba(255, 61, 0, 0.9),
        -10px 0 0 -2px rgba(255, 61, 0, 0.8),
        -15px 0 0 -4px rgba(255, 61, 0, 0.6),
        -20px 0 0 -6px rgba(255, 61, 0, 0.4),
        -25px 0 0 -8px rgba(255, 61, 0, 0.2);
    }
    49% {  
        left: 100%; 
        transform: translateX(-100%); 
        box-shadow: 
        -5px 0 0 -1px rgba(255, 61, 0, 0.9),
        -10px 0 0 -2px rgba(255, 61, 0, 0.8),
        -15px 0 0 -4px rgba(255, 61, 0, 0.6),
        -20px 0 0 -6px rgba(255, 61, 0, 0.4),
        -25px 0 0 -8px rgba(255, 61, 0, 0.2);
    }
    51% {  
        left: 100%; 
        transform: translateX(-100%); 
        box-shadow: 
        5px 0 0 -1px rgba(255, 61, 0, 0.9),
        10px 0 0 -2px rgba(255, 61, 0, 0.8),
        15px 0 0 -4px rgba(255, 61, 0, 0.6),
        20px 0 0 -6px rgba(255, 61, 0, 0.4),
        25px 0 0 -8px rgba(255, 61, 0, 0.2);
    }
    100% {  
        left: 0; 
        transform: translateX(0%); 
        box-shadow: 
        5px 0 0 -1px rgba(255, 61, 0, 0.9),
        10px 0 0 -2px rgba(255, 61, 0, 0.8),
        15px 0 0 -4px rgba(255, 61, 0, 0.6),
        20px 0 0 -6px rgba(255, 61, 0, 0.4),
        25px 0 0 -8px rgba(255, 61, 0, 0.2);
    }
  }  
  `,
},

{
  id: "pro-ball-grb",
  html: `<span class="loader"></span>`,
  css: `.loader{
    display: block;
    position: relative;
    height: 32px;
    width: 140px;
    border: 3px solid #fff;
    border-radius: 20px;
    box-sizing: border-box;
    animation: balancing 2s linear infinite alternate;
    transform-origin: center center;
  }
  .loader:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 52px;
    height: 26px;
    border-radius: 20px;
    background: #FF3D00;
    animation: ballbns 2s linear infinite alternate;
  }
  @keyframes ballbns {
    0% {  left: 0; transform: translateX(0%); }
    100% {  left: 100%; transform: translateX(-100%); }
  }
  @keyframes balancing {
    0% {  transform: rotate(-25deg); }
    50% {  transform: rotate(0deg); }
    100% {  transform: rotate(25deg); }
  }
  `,
},
{
  id: "pro-bal-ln-rp",
  html: `<span class="loader"></span>`,
  css: `.loader{
    display: block;
    position: relative;
    height: 32px;
    width: 120px;
    background: linear-gradient(#FFF 4px, transparent 0) no-repeat;
    background-position: 0 16px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .loader:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #FF3D00;
    border:6px solid #FFF;
    box-sizing: border-box;
    animation: ballbns 1.5s linear infinite;
  }
  
  @keyframes ballbns {
    0% {  left: 0; transform: translateX(-100%); }
    100% {  left: 100%; transform: translateX(0%); }
  }
  `,
},
{
  id: "pro-dmnd-tgl",
  html: `<span class="loader"></span>`,
  css: `.loader{
    display: block;
    position: relative;
    height: 32px;
    width: 100px;
    background: linear-gradient(#FFF 4px, transparent 0) no-repeat;
    background-position: 0 14px;
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
    background: #FF3D00;
    animation: ballbns 1s linear infinite alternate ;
  }
  
  @keyframes ballbns {
    0% {  left: 0; transform: translateX(0%) rotate(45deg); }
    100% {  left: 100%; transform: translateX(-100%) rotate(45deg); }
  }
  `,
},
{
  id: "pro-srl-rp",
  html: `<span class="loader"></span>`,
  css: `.loader{
    display: block;
    position: relative;
    height: 32px;
    border: 2px solid #fff;
    width: 120px;
    background: #fff;
    box-sizing: border-box;
  }
  .loader:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 28px;
    height: 28px;
    background: #FF3D00;
    animation: ballbns 1s ease-in-out infinite alternate;
  }
  
  @keyframes ballbns {
    0% {  left: 0; transform: translateX(0%); }
    100% {  left: 100%; transform: translateX(-100%); }
  }
  `,
},
  {
    id: "toBlrSpn",
    html: `<span class="loader"></span>`,
    css: `.loader{
  width: 200px;
  height: 40px;
  background-color: #0004;
  position: relative;
  border-radius: 50px;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.05);
}
.loader:after {
  border-radius: 50px;
  content: "";
  position: absolute;
  background-color: #fff;
  left: 2px;
  top: 2px;
  bottom: 2px;
  right: 360px;
  animation: slide 2s linear infinite;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

@keyframes slide {
  0% {
    right: 150px;
    left: 2px;
  }
  5% {
    left: 2px;
  }
  50% {
    right: 2px;
    left: 150px;
  }
  55% {
    right: 2px;
  }
  100% {
    right: 150px;
    left: 2px;
  }
}
  `,
},
{
    id: "toggleBallSlider2Xqr",
    html: `<span class="loader"></span>`,
    css: `.loader{
      width: 100px;
      height: 46px;
      position: relative;
      border-bottom: 5px solid #FFF;
      border-top: 5px solid #FFF;
      box-sizing: border-box;
    }
    .loader:before , .loader:after {
      content: "";
      position: absolute;
      left: 0;
      top: -20px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #FF3D00;
      border: 5px solid #FFF;
      box-sizing: border-box;
      animation: slide 1s infinite ease-in-out alternate;

    }
    .loader:after {
      top: 20px;
      animation-direction: alternate-reverse;
    }
    @keyframes slide {
      0% , 20% {  transform: translateX(70px)  }
      80% , 100% { transform: translateX(-1px) }
    }
  `,
},




{
  id: "pro-fil-gp-sqr",
  html: `<span class="loader"></span>`,
  css: `.loader{
    display: block;
    position: relative;
    height: 20px;
    width: 140px;
    background-image: 
    linear-gradient(#FFF 20px, transparent 0), 
    linear-gradient(#FFF 20px, transparent 0), 
    linear-gradient(#FFF 20px, transparent 0), 
    linear-gradient(#FFF 20px, transparent 0);
    background-repeat: no-repeat;
    background-size: 20px auto;
    background-position: 0 0, 40px 0, 80px 0, 120px 0;
    animation: pgfill 1s linear infinite;
  }
  
  @keyframes pgfill {
    0% {   background-image: linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0); }
    25% {   background-image: linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0); }
    50% {   background-image: linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0); }
    75% {   background-image: linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0); }
    100% {   background-image: linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0); }
  }
  `,
},
{
  id: "pro-sqr-run",
  html: `<span class="loader"></span>`,
  css: `.loader{
    display: block;
    position: relative;
    height: 20px;
    width: 140px;
    background-image: 
    linear-gradient(#FFF 20px, transparent 0), 
    linear-gradient(#FFF 20px, transparent 0), 
    linear-gradient(#FFF 20px, transparent 0), 
    linear-gradient(#FFF 20px, transparent 0);
    background-repeat: no-repeat;
    background-size: 20px auto;
    background-position: 0 0, 40px 0, 80px 0, 120px 0;
    animation: pgfill 1s linear infinite;
  }
  @keyframes pgfill {
    0% {   background-image: linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0); }
    25% {   background-image: linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0); }
    50% {   background-image: linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0); }
    75% {   background-image: linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0); }
    100% {   background-image: linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0); }
  }
  `,
},
{
  id: "pro-bb-ln-fl",
  html: `<span class="loader"></span>`,
  css: `.loader{
    width:120px;
    height:24px;
    -webkit-mask:
      radial-gradient(circle closest-side,#fff 94%,#0000) 0 0/25% 100%,
      linear-gradient(#fff 0 0) center/calc(100% - 12px) calc(100% - 12px) no-repeat;
    mask:
      radial-gradient(circle closest-side,#fff 94%,#0000) 0 0/25% 100%,
      linear-gradient(#fff 0 0) center/calc(100% - 12px) calc(100% - 12px) no-repeat;
    background: linear-gradient(#FF3D00 0 0) left/0% 100% no-repeat #fff;
    animation:bblprg 2s infinite linear;
  }
  @keyframes bblprg {
      100% {background-size:100% 100%}
  }
  `,
},
    {
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