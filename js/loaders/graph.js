export const GRAPH = [

  {
    id: "starLord-andro6e",
    html: `<span class="loader"></span>`,
    css: `.loader {
            position: relative;
            animation: flix 3s ease-in infinite alternate;
          }
          .loader:before {
            content: '';
            display: block;
            font-size: 0;
            width: 48px;
            height: 48px;
            background-color: #fff ;
            background-image:
              radial-gradient(circle 12px at 22px 22px, #FF3D00 100%, transparent 0),
              radial-gradient(circle 10px at 6px 40px, #FF3D00 100%, transparent 0),
              radial-gradient(circle 14px at 31px -6px, #FF3D00 100%, transparent 0),
              radial-gradient(circle 5px at 40px 30px, #FF3D00 100%, transparent 0);
            border-radius: 50%;
            animation: rotate 1s linear infinite;
          }
          .loader:after {
              content: '';
              position: absolute;
              top: 0%;
              transform: translate(-50% , -100%);
              left: 50%;
              width: 24px;
              height: 12px;
              background: #fff;
              border-radius: 50px 50px 0 0;
            }

          @keyframes flix {
            0%  , 60% { transform: rotate(-10deg)}
            100%  , 30% , 80% { transform: rotate(5deg)}
          }
          @keyframes rotate {
            100%   { transform: rotate(360deg)}
          }
`,
  },

  {
    id: "navigator2SpinLding",
    html: `<span class="loader"></span>`,
    css: `.loader {
      width: 64px;
      height: 64px;
      position: relative;
      background: #FFF;
      border-radius: 50%;
      transform: rotate(45deg);
      animation: rotate 2s linear infinite;
    }
    .loader:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 15px;
      height: 30px;
      background: #FF3D00;
      transform: skew(5deg , 60deg) translate(-50%, -5%);
    }

    .loader:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #FFF;
      transform:translate(-50% , -50%);
    }

    @keyframes rotate {
      0% { transform: rotate(45deg)}
      30% , 50% , 70%  { transform: rotate(230deg)}
      40% , 60% , 80% { transform: rotate(240deg)}
      100% {  transform: rotate(245deg)}
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
    id: "rockets-luncRd",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 32px;
  height: 90px;
  display: block;
  margin: 20px auto;
  position: relative;
  border-radius: 50% 50% 0 0;
  border-bottom: 10px solid #FF3D00;
  background-color: #FFF;
  background-image: radial-gradient(ellipse at center, #FFF 34%, #FF3D00 35%, #FF3D00 54%, #FFF 55%), linear-gradient(#FF3D00 10px, transparent 0);
  background-size: 28px 28px;
  background-position: center 20px , center 2px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: animloaderBack 1s linear infinite alternate;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 44px;
  border-radius: 50%;
  box-shadow: 0px 15px #FF3D00 inset;
  top: 67px;
}
.loader::after {
  content: '';  
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 34px;
  height: 34px;
  top: 112%;
  background: radial-gradient(ellipse at center, #ffdf00 8%, rgba(249, 62, 0, 0.6) 24%, rgba(0, 0, 0, 0) 100%);
  border-radius: 50% 50% 0;
  background-repeat: no-repeat;
  background-position: -44px -44px;
  background-size: 100px 100px;
  box-shadow: 4px 4px 12px 0px rgba(255, 61, 0, 0.5);
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloaderBack {
  0%, 30%, 70% {
    transform: translateY(0px);
  }
  20%, 40%, 100% {
    transform: translateY(-5px);
  }
}

@keyframes animloader {
  0% {
    box-shadow: 4px 4px 12px 2px rgba(255, 61, 0, 0.75);
    width: 34px;
    height: 34px;
    background-position: -44px -44px;
    background-size: 100px 100px;
  }
  100% {
    box-shadow: 2px 2px 8px 0px rgba(255, 61, 0, 0.5);
    width: 30px;
    height: 28px;
    background-position: -36px -36px;
    background-size: 80px 80px;
  }
}
`,
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
      



]