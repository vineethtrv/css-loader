export const GRAPH = [
  
  {
    id: "clipBrdFill",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width: 100px;
    height: 130px;
    background: #fff;
    border-radius: 4px;
  }
  .loader:before{
    content: '';
    position: absolute;
    width: 54px;
    height: 25px;
    left: 50%;
    top: 0;
    background-image:
    radial-gradient(ellipse at center, #0000 24%,#de3500 25%,#de3500 64%,#0000 65%),
    linear-gradient(to bottom, #0000 34%,#de3500 35%);
    background-size: 12px 12px , 100% auto;
    background-repeat: no-repeat;
    background-position: center top;
    transform: translate(-50% , -65%);
    box-shadow: 0 -3px rgba(0, 0, 0, 0.25) inset;
  }
 .loader:after{
    content: '';
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    width: 66%;
    height: 60%;
    background: linear-gradient(to bottom, #f79577 30%, #0000 31%);
    background-size: 100% 16px;
    animation: writeDown 2s ease-out infinite;
 }

 @keyframes writeDown {
    0% { height: 0%; opacity: 0;}
    20%{ height: 0%; opacity: 1;}
    80% { height: 65%; opacity: 1;}
    100% { height: 65%; opacity: 0;}
 }
      `,
  },

  {
    id: "bookPagging",
    html: `<span class="loader"></span>`,
    css: `.loader {
          width: 200px;
          height: 140px;
          background: #979794;
          box-sizing: border-box;
          position: relative;
          border-radius:8px;
          perspective: 1000px;
        }

        .loader:before{
          content: '';
          position: absolute;
          left: 10px;
          right: 10px;
          top: 10px;
          bottom: 10px;
          border-radius:8px;
          background: #f5f5f5  no-repeat;
          background-size: 60px 10px;
          background-image: 	linear-gradient(#ddd 100px, transparent 0) ,
                    linear-gradient(#ddd 100px, transparent 0), 
                    linear-gradient(#ddd 100px, transparent 0), 
                    linear-gradient(#ddd 100px, transparent 0), 
                    linear-gradient(#ddd 100px, transparent 0), 
                    linear-gradient(#ddd 100px, transparent 0);
          
          background-position: 15px 30px , 15px 60px , 15px 90px, 
                    105px 30px , 105px 60px , 105px 90px;
          box-shadow: 0 0 10px rgba(0,0,0,0.25);
        }
        .loader:after {
          content: '';
            position: absolute;
            width: calc(50% - 10px);
            right: 10px;
            top: 10px;
            bottom: 10px;
            border-radius: 8px;
            background: #fff no-repeat;
            background-size: 60px 10px;
            background-image: linear-gradient(#ddd 100px, transparent 0), 
                    linear-gradient(#ddd 100px, transparent 0), 
                    linear-gradient(#ddd 100px, transparent 0);
            background-position: 50% 30px ,50% 60px , 50%  90px;
            transform: rotateY(0deg );
            transform-origin: left center;
          animation: paging 1s linear infinite;
        }


        @keyframes paging {
          to {
            transform: rotateY( -180deg );
          }
        }
`,
  },
  {
    id: "pencilWrt",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
  height: 200px;
  width: 200px;
  border-bottom: 3px solid #ff3d00;
  box-sizing: border-box;
  animation: drawLine 4s linear infinite;
}
.loader:before {
  content: "";
  position: absolute;
  left: calc(100% + 14px);
  bottom: -6px;
  width: 16px;
  height: 100px;
  border-radius: 20px 20px 50px 50px;
  background-repeat: no-repeat;
  background-image: linear-gradient(#ff3d00 6px, transparent 0),
    linear-gradient(45deg, rgba(0, 0, 0, 0.02) 49%, white 51%),
    linear-gradient(315deg, rgba(0, 0, 0, 0.02) 49%, white 51%),
    linear-gradient( to bottom, #ffffff 10%, #ff3d00 10%, #ff3d00 90%, #ffffff 90% );
  background-size: 3px 3px, 8px 8px, 8px 8px, 16px 88px;
  background-position: center bottom, left 88px, right 88px, left top;
  transform: rotate(25deg);
  animation: pencilRot 4s linear infinite;
}

@keyframes drawLine {
  0%, 100% { width: 0px }
  45%, 55% { width: 200px }
}

@keyframes pencilRot {
  0%, 45% {
    bottom: -6px;
    left: calc(100% + 14px);
    transform: rotate(25deg);
  }
  55%,
  100% {
    bottom: -12px;
    left: calc(100% + 16px);
    transform: rotate(220deg);
  }
}
`,
  },
  
  
  {
    id: "gHomeChrgLdingFlash",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 148px;
  height: 148px;
  border-radius: 50%;
  margin: -64px auto 0;
  background-color: #ccc;
  background-image: radial-gradient(#fff 4px, #0000  0),
                    radial-gradient(#fff 4px, #0000  0),
                    radial-gradient(#fff 4px, #0000  0),
                    radial-gradient(#fff 4px, #0000  0);
  background-position: 24px center, 8px center, -8px center, -24px center;
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15) inset;
  animation: flash 1s linear infinite;
}
.loader::before , .loader::after {
  content: '';
  position: absolute;
  border: 1px solid #ccc;
  border-top-color:#0000;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  width: 16px;
  height: 18px;
  background: #fff;
}

.loader::before {
  width: 0px;
  height: 64px;
  transform: translate(-50% , 18px);
}

@keyframes flash {
 0%{
      background-image:
        radial-gradient(#DDD 4px, #0000  0),
        radial-gradient(#DDD 4px, #0000  0),
        radial-gradient(#DDD 4px, #0000  0),
        radial-gradient(#DDD 4px, #0000  0);
  }
 25%{
      background-image:
      radial-gradient(#DDD 4px, #0000  0),
      radial-gradient(#DDD 4px, #0000  0),
      radial-gradient(#DDD 4px, #0000  0),
      radial-gradient(#fff 4px, #0000  0);
  }
 50%{
      background-image:
      radial-gradient(#DDD 4px, #0000  0),
      radial-gradient(#DDD 4px, #0000  0),
      radial-gradient(#fff 4px, #0000  0),
      radial-gradient(#fff 4px, #0000  0);
  }
 75%{
      background-image:
        radial-gradient(#DDD 4px, #0000  0),
        radial-gradient(#fff 4px, #0000  0),
        radial-gradient(#fff 4px, #0000  0),
        radial-gradient(#fff 4px, #0000  0);
  }
 100%{
      background-image:
        radial-gradient(#fff 4px, #0000  0),
        radial-gradient(#fff 4px, #0000  0),
        radial-gradient(#fff 4px, #0000  0),
        radial-gradient(#fff 4px, #0000  0);
  }
  `,
  },
  
  {
    id: "phoneChrgingLda",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
  width: 92px;
  height: 180px;
  border-radius: 8px;
  transform: translateY(-30px);
  background-color: #000;
  background-image:
    radial-gradient(ellipse at center, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 4%,rgba(81,81,81,1) 14%,rgba(44,44,44,1) 26%,rgba(2,2,2,1) 53%,rgba(2,2,2,1) 65%,rgba(2,2,2,0) 66%),
    linear-gradient(#111, #111);
    background-repeat: no-repeat;
    background-size: 10px 10px , 84px 162px;
    background-position: center 2px, 4px 8px;
  animation: lightUp 6s linear infinite alternate;
}
.loader:before {
  content: '';
  position: absolute;
  left: 50%;
  top: 190px;
  transform: translateX(-50%);
  width: 32px;
  height: 75px;
  background-image:
  linear-gradient(#fff, #fff),
  linear-gradient(#bbb, #bbb),
  linear-gradient(#fff, #fff);
  background-repeat: no-repeat;
  background-position: center 4px , center top, center 5px;
  background-size: 11px 11px , 7px 4px ,  2px 100%;
  animation: plugin 6s linear infinite alternate;
}

.loader:after {
  content: '';
  width: 30px;
  height: 60px;
  background-image:
  linear-gradient(#888, #888),
  linear-gradient(to right, rgba(255,255,255,0.1) 0%,rgba(255,255,255,0.5) 40%,rgba(255,255,255,0.3) 50%,rgba(255,255,255,0.1) 100%),
  linear-gradient(#15ff00, #15ff00),
  linear-gradient(#888, #888);
  background-size: 12px 4px, 30px 52px , 30px 0px , 30px 56px;
  background-position: center 0 , center 6px , center bottom , center 4px;
  background-repeat: no-repeat;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50% , -50%);
  animation: charging 6s linear infinite alternate;
}

@keyframes charging {
   0%  , 25%{
      opacity: 0;
      background-size: 12px 4px, 30px 52px , 30px 0px , 30px 56px;
    }
   26% ,  75%{
      opacity: 1;
      background-size: 12px 4px, 30px 52px , 30px 0px , 30px 56px;
    }
   50% , 100%{
      opacity: 1;
      background-size: 12px 4px, 30px 52px , 30px 56px , 30px 56px
   }
}

@keyframes lightUp {
  0%  , 25%{
    background-image:
      radial-gradient(ellipse at center, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 4%,rgba(81,81,81,1) 14%,rgba(44,44,44,1) 26%,rgba(2,2,2,1) 53%,rgba(2,2,2,1) 65%,rgba(2,2,2,0) 66%),
      linear-gradient(#111, #111);
  }
  26% , 100%{
    background-image:
      radial-gradient(ellipse at center, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 4%,rgba(81,81,81,1) 14%,rgba(44,44,44,1) 26%,rgba(2,2,2,1) 53%,rgba(2,2,2,1) 65%,rgba(2,2,2,0) 66%),
      linear-gradient(#DDD, #DDD);
  }
}


@keyframes plugin {
  0% , 25% {
    top: 190px;
    background-position: center 4px , center top, center 5px;
  }
  26%  , 100% {
    background-position: center 0 , center top, center 5px;
    top: 180px;
  }
}
  `,
  },
  {
    id: "phoneplzSldingswp",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 112px;
  height: 218px;
  border-radius: 8px;
  background: #fff;
  background-image:
  linear-gradient(#c70000 30px, transparent 0),
  linear-gradient(#e4c200 30px, transparent 0),
  linear-gradient(#00a136 30px, transparent 0),
  linear-gradient(#0026ff 30px, transparent 0),
  linear-gradient(#7e0069 30px, transparent 0);
  background-repeat: no-repeat;
  background-position: 5px 5px, 5px 40px, 5px 75px, 5px 110px , 5px 145px;
  background-size: 90px 30px;
  border: 6px solid #222;
  border-width: 18px 6px 20px;
  box-sizing: border-box;
  position: relative;
  animation: clpszp 4s linear infinite;
}
.loader:before{
  content: '';
  position: absolute;
  left: -6px;
  top: -18px;
  width: 112px;
  height: 218px;
  border-radius: 8px;
  background: linear-gradient(80deg, rgba(0,0,0,0.05) 45%,rgba(0,0,0,0) 46%);
}
.loader:after{
  content: '';
  position: absolute;
  box-sizing: border-box;
  left: 60px;
  top: 8px;
  width: 24px;
  height: 24px;
  z-index: 2;
  backdrop-filter: blur(5px);
  border-radius: 50%;
  background: rgba(0,0,0,0.12);
  border: 2px solid rgba(255,255,255,0.2);
  animation: thumbMove 4s linear infinite ;
}

@keyframes thumbMove {
  0% {
    left: 60px;
    top: 8px;
  }
  10% {
    left: 20px;
    top: 8px;
  }
  20% {
    left: 10px;
    top: 40px;
  }
  30% {
    left: 50px;
    top: 40px;
  }
  40% {
    left: 50px;
    top: 80px;
  }
  50% {
    left: 20px;
    top: 80px;
  }
  60% {
    left: 10px;
    top: 110px;
  }
  70% {
    left: 60px;
    top: 110px;
  }
  80% {
    left: 75px;
    top: 135px;
  }
  90% {
    left: 45px;
    top: 155px;
  }
  100% {
    left: 25px;
    top: 8px;
  }

}

@keyframes clpszp {
  0% {
    background-position: 5px 5px, 5px 40px, 5px 75px, 5px 110px , 5px 145px;
  }
  20% {
    background-position: -100px 5px, 5px 40px, 5px 75px, 5px 110px , 5px 145px;
  }
  40% {
    background-position: -100px 5px, 100px 40px, 5px 75px, 5px 110px , 5px 145px;
  }
  60% {
    background-position: -100px 5px, 100px 40px, -100px 75px, 5px 110px , 5px 145px;
  }
  80% {
    background-position: -100px 5px, 100px 40px, -100px 75px, 100px 110px , 5px 145px;
  }
  100% {
    background-position: -100px 5px, 100px 40px, -100px 75px, 100px 110px , -100px 145px;
  }
}
      `,
  },
  {
    id: "envMsLd",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
  border-style: solid;
  box-sizing: border-box;
  border-width: 40px 60px 30px 60px;
  border-color: #3760C9 #96DDFC #96DDFC #36BBF7;
  animation: envFloating 1s ease-in infinite alternate;
}

.loader:after{
  content:"";
  position: absolute;
  right: 62px;
  top: -40px;
  height: 70px;
  width: 50px;
  background-image:
            linear-gradient(#fff 45px, transparent 0),
            linear-gradient(#fff 45px, transparent 0),
            linear-gradient(#fff 45px, transparent 0);
  background-repeat: no-repeat;
  background-size: 30px 4px;
  background-position: 0px 11px , 8px 35px, 0px 60px;
  animation: envDropping 0.75s linear infinite;
}

@keyframes envFloating {
  0% { transform: translate(-2px, -5px)}
  100% { transform: translate(0, 5px)}
}

@keyframes envDropping {
  0% {background-position: 100px 11px , 115px 35px, 105px 60px; opacity: 1;}
  50% {background-position: 0px 11px , 20px 35px, 5px 60px; }
  60% {background-position: -30px 11px , 0px 35px, -10px 60px; }
  75%, 100% {background-position: -30px 11px , -30px 35px, -30px 60px; opacity: 0;}
}
      `,
  },

  {
    id: "pprDltFlp",
    html: `<span class="loader">Deleting</span>`,
    content: 'Deleting',
    css: `.loader {
  position: relative;
  background: #ff3d00;
  width: 80px;
  height: 30px;
  line-height: 18px;
  text-align: center;
  color: #931010;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 14px;
  box-sizing: border-box;
  border: 5px groove #de3500;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 5px 7px #0002;
}
.loader:before {
  content: "";
  width: 70px;
  height: 80px;
  background: #fff;
  box-shadow: 0 0 10px #0003;
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  bottom: calc(100% + 6px);
  animation: loadPaper 4s ease-in infinite;
}
.loader:after {
  content: "";
  width: 70px;
  height: 80px;
  background: linear-gradient(to right, #fff 50%, #0000 51%);
  background-size: 9px 80px;
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  top: calc(100% + 6px);
  animation: disposePaper 4s ease-in infinite;
}

@keyframes loadPaper {
  0%,
  10% {
    height: 80px;
    bottom: calc(100% + 40px);
  }
  50% {
    height: 80px;
    bottom: calc(100% + 6px);
  }
  75%,
  100% {
    height: 0px;
    bottom: calc(100% + 6px);
  }
}

@keyframes disposePaper {
  0%,
  50% {
    height: 0px;
    top: calc(100% + 6px);
  }
  75% {
    height: 80px;
    top: calc(100% + 6px);
    opacity: 1;
  }
  100% {
    height: 80px;
    top: calc(100% + 40px);
    opacity: 0;
  }
}
      `,
  },

  {
    id: "pprDltmch",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
  width: 120px;
  height: 55px;
  background-repeat: no-repeat;
  background-image:
  radial-gradient(circle 2.5px , #ff3d00 100%, transparent 0),
  radial-gradient(circle 2.5px , #ff3d00 100%, transparent 0),
  linear-gradient(#f0fda3 20px, transparent 0),
  linear-gradient(#333 90px, transparent 0),
  linear-gradient(#049b87 120px, transparent 0),
  linear-gradient(to right, #017a6a 10%,#333 10%,#333 90%,#017a6a 90%)
  ;

  background-size: 5px 5px, 5px 5px, 30px 5px, 90px 10px, 120px 45px , 100px 15px;
  background-position: 48px 20px , 60px 20px,  10px 20px, center bottom , center bottom , center 0 ;

}
.loader:before {
  content: "";
  width: 70px;
  height: 80px;
  background-color: #fff;
  background-image:   linear-gradient(to bottom, #FFF 50%, #f86133 51%),
                      linear-gradient(to bottom, #bbb 50%, #0000 51%);
  background-size: 60px 20px,  60px 10px;
  background-repeat: no-repeat, repeat-y;
  background-position: center -5px , center 0;
  box-shadow: 0 0 10px #0003;
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  bottom: calc(100% + 30px);
  animation: loadPaper 2s ease-in infinite;
}
.loader:after {
  content: "";
  width: 70px;
  height: 90px;
  background-image:
      linear-gradient(to right, #fff 50%, #0000 51%),
      linear-gradient(to right, #fff 50%, #0000 51%),
      linear-gradient(to right, #fff 50%, #0000 51%),
      linear-gradient(to right, #fff 50%, #0000 51%),
      linear-gradient(to right, #fff 50%, #0000 51%),
      linear-gradient(to right, #fff 50%, #0000 51%),
      linear-gradient(to right, #fff 50%, #0000 51%),
      linear-gradient(to right, #fff 50%, #0000 51%);
  background-size: 10px 80px;
  background-position: 0 0px , 9px 5px, 18px 0px, 27px 7px,
                      36px 10px, 45px 5px, 55px 0px, 64px 8px;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  top: calc(100% + 6px);
  animation: disposePaper 2s ease-in infinite;
}

@keyframes loadPaper {
  0% {
    opacity: 0;
    height: 80px;
    bottom: calc(100% + 30px);
  }
  2% {
    opacity: 0;
    height: 80px;
    bottom: calc(100% + 15px);
  }
  50% {
    height: 80px;
    bottom: calc(100% - 10px);
  }
  75%,
  100% {
    height: 0px;
    bottom: calc(100% - 10px);
  }
}

@keyframes disposePaper {
  0%,
  60% {
    height: 0px;
    top: calc(100% - 9px);
    background-position: 0 0px , 9px 0, 18px 0, 27px 0,
                      36px 0, 45px 0, 55px 0, 64px 0;
  }
  80% {
    height: 90px;
    top: calc(100% - 9px);
    opacity: 1;
  }
  100% {
    height: 90px;
    top: calc(100% + 25px);
    background-position: 0 0px , 9px 5px, 18px 0px, 27px 7px,
                      36px 10px, 45px 5px, 55px 0px, 64px 8px;
    opacity: 0;
  }
}
      `,
  },
  {
    id: "audCst",
    html: `<span class="loader"></span>`,
    css: `.loader {
  margin: auto;
  width: 100px;
  height: 30px;
  overflow: hidden;
  position: relative;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  box-shadow: 0px 35px 0 -5px #aaa, 0 -5px 0 0px #ddd, 0 -25px 0 -5px #fff,
    -25px -30px 0 0px #ddd, -25px 30px 0 0px #ddd, 25px -30px 0 0px #ddd,
    25px 30px 0 0px #ddd, 20px 10px 0 5px #ddd, 20px -10px 0 5px #ddd,
    -20px -10px 0 5px #ddd, -20px 10px 0 5px #ddd;
}
.loader:after,
.loader:before {
  content: "";
  border-radius: 100%;
  width: 35px;
  height: 35px;
  display: block;
  position: absolute;
  border: 4px dashed #fff;
  bottom: -4px;
  transform: rotate(0deg);
  box-sizing: border-box;
  animation: tape 4s linear infinite;
}
.loader:before {
  right: 0;
  box-shadow: 0 0 0 4px #fff, 0 0 0 34px #000;
}
.loader:after {
  left: 0;
  box-shadow: 0 0 0 4px #fff, 0 0 0 65px #000;
}

@keyframes tape {
  0% {
    transform: rotate(0deg) scale(0.4);
  }
  100% {
    transform: rotate(-360deg) scale(0.4);
  }
}
      `,
  },
  {
    id: "audRolSp",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 120px;
  height: 80px;
  position: relative;
  transform: rotate(-90deg);
  background: linear-gradient(174deg, #0000 49%,#000 50%, #0000 51%);
}
.loader:after,
.loader:before {
  content: "";
  border-radius: 100%;
  width: 35px;
  height: 35px;
  display: block;
  position: absolute;
  border: 4px dashed #fff;
  bottom: 49px;
  transform: rotate(0deg);
  box-sizing: border-box;
  animation: tape 4s linear infinite;

}
.loader:before {
  right: -14px;
  box-shadow: 0 0 0 4px #fff, 0 0 0 34px #000 , 0 0 5px 34px #0005;
}
.loader:after {
  left: -13px;
  box-shadow: 0 0 0 4px #fff, 0 0 0 65px #000, 0 0 5px 65px #0005;
}

@keyframes tape {
  0% { transform: rotate(0deg) scale(0.4) }
  100% { transform: rotate(-360deg) scale(0.4) }
}
      `,
  },
  {
    id: "printerLd",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width: 120px;
    height: 55px;
    background-repeat: no-repeat;
    background-image:
    radial-gradient(circle 2.5px , #ff3d00  100%, transparent 0),
    linear-gradient(#525252 90px, transparent 0),
    linear-gradient(#ececec 120px, transparent 0),
    linear-gradient(to right, #eee 10%,#333 10%,#333 90%,#eee 90%)
    ;

    background-size: 5px 5px, 90px 10px, 120px 45px , 100px 15px;
    background-position: 110px 15px,center bottom , center bottom , center 0 ;

  }
  .loader:before {
    content: "";
    width: 70px;
    background-color: #fff;
    box-shadow: 0 0 10px #0003;
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    bottom: calc(100% - 10px);
    animation: printerPaper 4s ease-in infinite;
  }
  .loader:after {
    content: "";
    width: 70px;
    height: 80px;
    background-color: #fff;
    background-image:   linear-gradient(to bottom, #FFF 50%, #ff3d00  51%),
                        linear-gradient(to bottom, #bbb 50%, #0000 51%);
    background-size: 60px 20px,  60px 10px;
    background-repeat: no-repeat, repeat-y;
    background-position: center 55px , center 0;
    position: absolute;
    left: 50%;
    transform: translatex(-50%) rotate(180deg);
    box-shadow: 0 10px #fff inset;
    top: calc(100% - 8px);
    animation: PrintedPaper 4s ease-in infinite;
  }

  @keyframes printerPaper {
    0% , 25% { height: 50px}
    75%, 100% { height: 0}
  }

  @keyframes PrintedPaper {
    0%, 30% {
      height: 0px;
      top: calc(100% - 8px);
    }

    80% {
      height: 80px;
      top: calc(100% - 8px);
      opacity: 1;
    }
    100% {
      height: 80px;
      top: calc(100% + 10px);
      opacity: 0;
    }
  }
      `,
  },
  {
    id: "washingMachine",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 120px;
  height: 150px;
  background-color: #fff;
  background-repeat: no-repeat;
  background-image: linear-gradient(#ddd 50%, #bbb 51%),
    linear-gradient(#ddd, #ddd), linear-gradient(#ddd, #ddd),
    radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%),
    radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%),
    radial-gradient(ellipse at center, #aaa 25%, #eee 26%, #eee 50%, #0000 55%);
  background-position: 0 20px, 45px 0, 8px 6px, 55px 3px, 75px 3px, 95px 3px;
  background-size: 100% 4px, 1px 23px, 30px 8px, 15px 15px, 15px 15px, 15px 15px;
  position: relative;
  border-radius: 6%;
  animation: shake 3s ease-in-out infinite;
  transform-origin: 60px 180px;
}
.loader:before {
  content: "";
  position: absolute;
  left: 5px;
  top: 100%;
  width: 7px;
  height: 5px;
  background: #aaa;
  border-radius: 0 0 4px 4px;
  box-shadow: 102px 0 #aaa;
}

.loader:after {
  content: "";
  position: absolute;
  width: 95px;
  height: 95px;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 20px;
  background-color: #bbdefb;
  background-image: 
    linear-gradient( to right, #0004 0%, #0004 49%, #0000 50%, #0000 100% ),
    linear-gradient(135deg, #64b5f6 50%, #607d8b 51%);
  background-size: 30px 100%, 90px 80px;
  border-radius: 50%;
  background-repeat: repeat, no-repeat;
  background-position: 0 0;
  box-sizing: border-box;
  border: 10px solid #DDD;
  box-shadow: 0 0 0 4px #999 inset, 0 0 6px 6px #0004 inset;
  animation: spin 3s ease-in-out infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg) }
  50% { transform: rotate(360deg) }
  75% { transform: rotate(750deg) }
  100% { transform: rotate(1800deg) }
}
@keyframes shake {
  65%, 80%, 88%, 96% { transform: rotate(0.5deg) }
  50%, 75%, 84%, 92% { transform: rotate(-0.5deg) }
  0%, 50%, 100%  { transform: rotate(0) }
}`,
  },

  {
    id: "kolIcereamClrShift",
    html: `<span class="loader"></span>`,
    css: `.loader {
      	height: 150px;
	width: 100px;
	border-radius: 55px 55px 10px 10px;
	position: relative;
  background: #FF3D00;

background-image: linear-gradient(0deg,
    #f63a99 25%,
    #30dcf6 25%,
    #30dcf6 25%,
    #30dcf6 50%,
    #f2d200 50%,
    #f2d200 50%,
    #f2d200 75%,
    #70ca5c 75%);
	background-position: 0px 0px;
  background-size: auto 175px;
	background-repeat: repeat-y;
  animation: colorShift 6s linear infinite;

}
.loader:before {
    content: '';
    position: absolute;
    left: 10px;
    bottom: 15px;
    width: 15px;
    height: 100px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.5);

  }

.loader:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50% , 0);
  box-shadow: 0 15px 2px rgba(0, 0, 0, 0.25) inset;
	width: 32px;
  height: 45px;
  background: #E09C5F;
  border-radius: 0 0 12px 12px;
}

@keyframes colorShift {
  to {    background-position: 0 175px}
}

  `,
  },
  {
    id: "bearWatch",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 160px;
  height: 185px;
  position: relative;
  background: #fff;
  border-radius: 100px 100px 0 0;
}
.loader:after {
  content: "";
  position: absolute;
  width: 100px;
  height: 125px;
  left: 50%;
  top: 25px;
  transform: translateX(-50%);
  background-image: radial-gradient(circle, #000 48%, transparent 55%),
    radial-gradient(circle, #000 48%, transparent 55%),
    radial-gradient(circle, #fff 30%, transparent 45%),
    radial-gradient(circle, #000 48%, transparent 51%),
    linear-gradient(#000 20px, transparent 0),
    linear-gradient(#cfecf9 60px, transparent 0),
    radial-gradient(circle, #cfecf9 50%, transparent 51%),
    radial-gradient(circle, #cfecf9 50%, transparent 51%);
  background-repeat: no-repeat;
  background-size: 16px 16px, 16px 16px, 10px 10px, 42px 42px, 12px 3px,
    50px 25px, 70px 70px, 70px 70px;
  background-position: 25px 10px, 55px 10px, 36px 44px, 50% 30px, 50% 85px,
    50% 50px, 50% 22px, 50% 45px;
  animation: faceLift 3s linear infinite alternate;
}
.loader:before {
  content: "";
  position: absolute;
  width: 140%;
  height: 125px;
  left: -20%;
  top: 0;
  background-image: radial-gradient(circle, #fff 48%, transparent 50%),
    radial-gradient(circle, #fff 48%, transparent 50%);
  background-repeat: no-repeat;
  background-size: 65px 65px;
  background-position: 0px 12px, 145px 12px;
  animation: earLift 3s linear infinite alternate;
}

@keyframes faceLift {
  0% {
    transform: translateX(-60%);
  }
  100% {
    transform: translateX(-30%);
  }
}
@keyframes earLift {
  0% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0px);
  }
}
  `,
  },




  {
    id: "dnsEgg",
    html: `<span class="loader"></span>`,
    css: `.loader {
  display: block;
  position: relative;
  width: 118px;
  height: 160px;
  background-color: #FFF;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  transform-origin: 50% 100%;
  animation: 2s eggRot linear infinite alternate;
}
.loader:after{
  content:"";
  position: absolute;
  left: 50%;
  bottom: 15%;
  width: 80px;
  height: 86px;
  transform: translateX(-50%);
  background-color: #ffd900;
  border-radius: 50% ;
}

@keyframes eggRot {
  0%{    transform: rotate(-25deg)}
  100%{    transform: rotate(25deg)}
}
      `,
  },




  {
    id: "grpCookPanEgg",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 100px;
  height: 100px;
  display: block;
  margin: auto;
  position: relative;
  background: #222;
  border-radius: 50%;
  box-sizing: border-box;
  transform-origin: 170px 50px;
  border: 4px solid #333;
  box-shadow: 3px 4px #0003 inset, 0 0 6px #0002 inset;
  animation: panmov 0.4s ease-in-out infinite alternate;
}
.loader::before {
  content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) skew(-15deg, 15deg) rotate(-15deg);
    width: 55px;
    height: 53px;
    background: #fff;
    background-image: 
    radial-gradient(circle 3px , #fff6 90%, transparent 10%),
    radial-gradient(circle 12px , #ffc400 90%, transparent 10%),
    radial-gradient(circle 12px , #ffae00 100%, transparent 0);
    background-repeat: no-repeat;
    background-position: -4px -6px , -2px -2px , -1px -1px;
    box-shadow: -2px -3px #0002 inset, 0 0 4px #0003 inset;
    border-radius: 47% 36% 50% 50% / 49% 45% 42% 44%;
    animation: ylmov 0.6s ease-in-out infinite alternate;
}
.loader::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 48px;
  height: 15px;
  width: 70px;
  background: #222222;
  border-radius: 0 8px 8px 0;
  box-shadow: 3px 0 3px #eee2 inset;
  transform: rotate(5deg) translateX(3px);
}

@keyframes panmov {
  0% , 10% { transform: rotate(5deg) }
  90% , 100% { transform: rotate(-5deg) }
}
@keyframes ylmov {
  to { 
      border-radius: 50% 36% 50% 50% / 49% 50% 45% 45%;
      background-position: -2px -4px , 2px 2px , 1px 1px;
   }
}
  `,
  },

  {
    id: "grpPanFlyEgg",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width: 120px;
    height: 14px;
    border-radius: 0 0 15px 15px;
    background-color: #3e494d;
    box-shadow: 0 -1px 4px #5d6063 inset;
    animation: panex 0.5s linear alternate infinite;
    transform-origin: 170px 0;
    z-index: 10;
    perspective: 300px;

}
.loader::before {
  content: '';
  position: absolute;
  left: calc( 100% - 2px);
  top: 0;
  z-index: -2;
  height: 10px;
  width: 70px;
  border-radius: 0 4px 4px 0;
  background-repeat: no-repeat;
  background-image: linear-gradient(#6c4924, #4b2d21), linear-gradient(#4d5457 24px, transparent 0), linear-gradient(#9f9e9e 24px, transparent 0);
  background-size: 50px 10px , 4px 8px , 24px 4px;
  background-position: right center , 17px center , 0px center;
}
  .loader::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    z-index: -2;
    transform: translate(-50% , -20px) rotate3d(75, -2, 3, 78deg);
    width: 55px;
    height: 53px;
    background: #fff;
    background-image:
    radial-gradient(circle 3px , #fff6 90%, transparent 10%),
    radial-gradient(circle 12px , #ffc400 90%, transparent 10%),
    radial-gradient(circle 12px , #ffae00 100%, transparent 0);
    background-repeat: no-repeat;
    background-position: -4px -6px , -2px -2px , -1px -1px;
    box-shadow: -2px -3px #0002 inset, 0 0 4px #0003 inset;
    border-radius: 47% 36% 50% 50% / 49% 45% 42% 44%;
    animation: eggRst 1s ease-out infinite;
  }

@keyframes eggRst {
  0% ,  100%{  transform: translate(-50%, -20px) rotate3d(90, 0, 0, 90deg); opacity: 0; }
  10% , 90% {  transform: translate(-50%, -30px) rotate3d(90, 0, 0, 90deg); opacity: 1; }
  25%  {transform:  translate(-50% , -40px) rotate3d(85, 17, 2, 70deg) }
  75% {transform:  translate(-50% , -40px) rotate3d(75, -3, 2, 70deg) }
  50% {transform:  translate(-55% , -50px) rotate3d(75, -8, 3, 50deg) }
}
@keyframes panex {
  0%{  transform: rotate(-5deg)  }
  100%{  transform: rotate(10deg)  }
}
  `,
  },
      



]