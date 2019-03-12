const state = {
  domToSig: new Map(),
  pages: [
    [
      'No script, no closing tags',
      create({
        "c": "<body><script>l=addEventListener;d=document;f=(i)=>Math.abs(i);C=d.body.appendChild(d.createElement`canvas`).getContext`2d`;Z=[];onhashchange=_=>{g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})};l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))});</script></body>",
        "b": [
          [0,6,0],
          [6,14,1],
          [14,457,0],
          [457,474,1],
        ],
      }),
      create({
        "c": "<body onload='l=addEventListener;d=document;f=(i)=>Math.abs(i);C=d.body.appendChild(d.createElement`canvas`).getContext`2d`;Z=[];onhashchange=_=>{g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})};l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))})'>",
        "b": [
          [0,6,0],
          [6,14,1],
          [14,457,0],
          [457,458,1],
          [458,459,0],
        ],
      }),
    ],
    [
      'Create static elements in HTML, not JS',
      create({
        "c": "<body onload='l=addEventListener;d=document;f=(i)=>Math.abs(i);C=d.body.appendChild(d.createElement`canvas`).getContext`2d`;Z=[];onhashchange=_=>{g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})};l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))})'>",
        "b": [
          [0,33,0],
          [33,44,1],
          [44,65,0],
          [65,108,1],
          [108,474,0],
        ]
      }),
      create({
        "c": "<body onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];onhashchange=_=>{g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})};l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))})'><canvas id=`X`>",
        "b": [
          [0,54,0],
          [54,55,1],
          [55,406,0],
          [406,421,1],
        ],
      }),
    ],
    [
      'onhashchange → inlined onfocus',
      create({
        "c": "<body onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];onhashchange=_=>{g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})};l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))})'><canvas id=`X`>",
        "b": [
          [0,76,0],
          [76,93,1],
          [93,177,3],
          [177,179,1],
          [179,421,0],
        ],
      }),
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})' onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))})'><canvas id=`X`>",
        "b": [
          [0,6,0],
          [6,15,1],
          [15,99,3],
          [99,100,1],
          [100,413,0],
        ],
      }),
    ],
    [
      'object → array + destructure',
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push({D:g[2]?((i=new Image).src=g[2],i):g[1],x:30,y:30,})' onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v.x-e.x)<30&&f(v.y-e.y)<30));l(`mouseup`,e=>[S.x,S.y]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(m=>typeof(m.D)==`object`?C.drawImage(m.D,m.x,m.y,99,99):C.fillText(m.D,m.x,m.y))})'><canvas id=`X`>",
        "b": [
          [0,40,0],
          [40,46,3],
          [46,47,0],
          [47,50,1],
          [50,87,0],
          [87,89,1],
          [89,92,0],
          [92,94,1],
          [94,96,0],
          [96,98,1],
          [98,190,0],
          [190,196,3],
          [196,202,0],
          [202,205,1],
          [205,217,0],
          [217,220,1],
          [220,247,0],
          [247,250,1],
          [250,251,0],
          [251,254,1],
          [254,308,0],
          [308,313,3],
          [313,314,0],
          [314,315,1],
          [315,324,0],
          [324,327,1],
          [327,351,0],
          [351,362,1],
          [362,381,0],
          [381,392,1],
          [392,413,0],
        ],
      }),
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],30,30])' onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[0]-e.x)<30&&f(v[1]-e.y)<30));l(`mouseup`,e=>[S[0],S[1]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>typeof(D)==`object`?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})'><canvas id=`X`>",
        "b": [
          [0,40,0],
          [40,46,3],
          [46,47,0],
          [47,48,1],
          [48,90,0],
          [90,91,1],
          [91,183,0],
          [183,189,3],
          [189,195,0],
          [195,199,1],
          [199,211,0],
          [211,215,1],
          [215,242,0],
          [242,246,1],
          [246,247,0],
          [247,251,1],
          [251,305,0],
          [305,310,3],
          [310,311,0],
          [311,320,1],
          [320,329,0],
          [329,330,1],
          [330,354,0],
          [354,359,1],
          [359,378,0],
          [378,383,1],
          [383,404,0],
        ],
      }),
    ],
    [
      'numbers → max digits',
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],30,30])' onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[0]-e.x)<30&&f(v[1]-e.y)<30));l(`mouseup`,e=>[S[0],S[1]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>typeof(D)==`object`?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})'><canvas id=`X`>",
        "b": [
          [0,85,0],
          [85,87,1],
          [87,88,0],
          [88,90,1],
          [90,205,0],
          [205,207,1],
          [207,221,0],
          [221,223,1],
          [223,404,0],
        ],
      }),
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])' onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[0]-e.x)<9&&f(v[1]-e.y)<9));l(`mouseup`,e=>[S[0],S[1]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>typeof(D)==`object`?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})'><canvas id=`X`>",
        "b": [
          [0,85,0],
          [85,86,1],
          [86,87,0],
          [87,88,1],
          [88,203,0],
          [203,204,1],
          [204,218,0],
          [218,219,1],
          [219,400,0],
        ],
      }),
    ],
    [
      'Simple Math.abs',
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])' onload='l=addEventListener;f=(i)=>Math.abs(i);C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[0]-e.x)<9&&f(v[1]-e.y)<9));l(`mouseup`,e=>[S[0],S[1]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>typeof(D)==`object`?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})'><canvas id=`X`>",
        "b": [
          [0,126,0],
          [126,137,1],
          [137,400,0],
        ]
      }),
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])' onload='l=addEventListener;f=(i)=>i<0?-i:i;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[0]-e.x)<9&&f(v[1]-e.y)<9));l(`mouseup`,e=>[S[0],S[1]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>typeof(D)==`object`?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})'><canvas id=`X`>",
        "b": [
          [0,126,0],
          [126,134,1],
          [134,397,0],
        ],
      }),
    ],
    [
      'Check if Image',
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])' onload='l=addEventListener;f=(i)=>i<0?-i:i;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[0]-e.x)<9&&f(v[1]-e.y)<9));l(`mouseup`,e=>[S[0],S[1]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>typeof(D)==`object`?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})'><canvas id=`X`>",
        "b": [
          [0,315,0],
          [315,334,1],
          [334,397,0],
        ],
      }),
      create({
        "c": "<body onfocus='g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])' onload='l=addEventListener;f=(i)=>i<0?-i:i;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[0]-e.x)<9&&f(v[1]-e.y)<9));l(`mouseup`,e=>[S[0],S[1]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})'><canvas id=`X`>",
        "b": [
          [0,315,0],
          [315,320,1],
          [320,383,0],
        ],
      }),
    ],
    [
      'Declan 1',
      create({
        "c": '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9])" onload="l=addEventListener;f=(i)=>i<0?-i:i;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>f(v[1]-e.x)<9&&f(v[2]-e.y)<9));l(`mouseup`,e=>[S[1],S[2]]=[e.x,e.y]);setInterval(_=>{C.clearRect(0,0,300,300),Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))})"><canvas id=`X`>'
        }),
      create({c: '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};l=addEventListener;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9));l(`mouseup`,e=>{[S[1],S[2]]=[e.x,e.y];r()});"><canvas id=`X`>'}),
    ],
    [
      'mousedown+mouseup → mousemove',
      create({c: '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};l=addEventListener;C=X.getContext`2d`;Z=[];l(`mousedown`,e=>S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9));l(`mouseup`,e=>{[S[1],S[2]]=[e.x,e.y];r()})"><canvas id=`X`>'}),
      create({c: '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[];addEventListener(`mousemove`,e=>e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y)&&r())"><canvas id=`X`>'}),
    ],
    [
      'Inline mousemove',
      create({c: '<body onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[];addEventListener(`mousemove`,e=>e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y)&&r())"><canvas id=`X`>'}),
      create({c: '<body onmousemove="(e=event)&&e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y)&&r()" onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[]"><canvas id=`X`>'}),
    ],
    [
      'Fix <9 select anywhere',
      create({c: '<body onmousemove="(e=event)&&e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y)&&r()" onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[]"><canvas id=`X`>'}),
      create({c: '<body onmousemove="(e=event)&&e.which&&(S=Z.find(v=>v[1]*v[2]-e.x*e.y<81))&&(S[1]=e.x,S[2]=e.y)&&r()" onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[]"><canvas id=`X`>'}),
    ],
    [
      'UX: use max 2 digit number',
      create({c: '<body onmousemove="(e=event)&&e.which&&(S=Z.find(v=>v[1]*v[2]-e.x*e.y<81))&&(S[1]=e.x,S[2]=e.y)&&r()" onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[]"><canvas id=`X`>'}),
      create({c: '<body onmousemove="(e=event)&&e.which&&(S=Z.find(v=>v[1]*v[2]-e.x*e.y<99))&&(S[1]=e.x,S[2]=e.y)&&r()" onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[]"><canvas id=`X`>'}),
    ],
    [
      'Kill the body, the soul is immortal',
      create({c: '<body onmousemove="(e=event)&&e.which&&(S=Z.find(v=>v[1]*v[2]-e.x*e.y<99))&&(S[1]=e.x,S[2]=e.y)&&r()" onfocus="g=location.hash.split`#`,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]),r()" onload="r=_=>{X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))};C=X.getContext`2d`;Z=[]"><canvas id=`X`>'}),
      create({c: '<canvas id=`X` onmousemove="!window.Z&&(C=X.getContext`2d`,Z=G=[]);(e=event)&&e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))">'}),
    ],
    [
      'Spread props in render',
      create({c: '<canvas id=`X` onmousemove="!window.Z&&(C=X.getContext`2d`,Z=G=[]);(e=event)&&e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));X.height=999,Z.map(([D,x,y])=>D.src?C.drawImage(D,x,y,99,99):C.fillText(D,x,y))">'}),
      create({c: '<canvas id=`X` onmousemove="!window.Z&&(C=X.getContext`2d`,Z=G=[]);(e=event)&&e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));X.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))">'}),
    ],
    [
      'With 🎉',
      create({c: '<canvas id=`X` onmousemove="!window.Z&&(C=X.getContext`2d`,Z=G=[]);(e=event)&&e.which&&(S=Z.find(v=>v[1]-e.x<9&&v[2]-e.y<9))&&(S[1]=e.x,S[2]=e.y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));X.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))">'}),
      create({c: '<canvas id=`X` onmousemove="!self.Z&&(C=X.getContext`2d`,Z=G=[]);with(event)which&&(S=Z.find(v=>v[1]-x<9&&v[2]-y<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));X.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))">'}),
    ],
    [
      'id → this',
      create({c: '<canvas id=`X` onmousemove="!self.Z&&(C=X.getContext`2d`,Z=G=[]);with(event)which&&(S=Z.find(v=>v[1]-x<9&&v[2]-y<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));X.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))">'}),
      create({c: '<canvas onmousemove="!self.Z&&(C=this.getContext`2d`,Z=G=[]);with(event)which&&(S=Z.find(v=>v[1]-x<9&&v[2]-y<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));this.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))">'}),
    ],
    [
      'Fix dragging :(',
      create({c: '<canvas onmousemove="!self.Z&&(C=this.getContext`2d`,Z=G=[]);with(event)which&&(S=Z.find(v=>v[1]-x<9&&v[2]-y<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));this.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))">'}),
      create({c: '<canvas onmousemove="!self.Z&&(C=this.getContext`2d`,Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));this.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))"> '}),
    ],
    [
      'With: round 2',
      create({c: '<canvas onmousemove="!self.Z&&(C=this.getContext`2d`,Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));this.height=999,Z.map(a=>a[0].src?C.drawImage(...a,99,99):C.fillText(...a))"> '}),
      create({c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));this.height=999,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">'}),
    ],
    [
      'Destructure location hash',
      create({c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);g=location.hash.split`#`;g>G|G>g&&(G=g,Z.push([g[2]?((i=new Image).src=g[2],i):g[1],9,9]));this.height=999,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">'}),
      create({c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));this.height=999,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">'}),
    ],
    [
      'Height -1',
      create({c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));this.height=999,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">'}),
      create({c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));this.height=-1,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">'}),
    ],
    [
      'Remove null check on drag',
      create({c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9))&&(S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));this.height=-1,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">'}),
      create({c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9),S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));this.height=-1,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">'}),
    ],
    [
      'Pull out ctx into outer scope',
      create({c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9),S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));this.height=-1,Z.map(a=>{with(this.getContext`2d`)arc=a[0].src?drawImage:fillText,arc(...a)})">'}),
      create({c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9),S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));with(this.getContext`2d`)this.height=-1,Z.map(z=>z[0].src?drawImage(...z):fillText(...z))">'}),
    ],
    [
      'Hash UX is dead, long live the Prompt!',
      create({c: '<canvas onmousemove="!self.Z&&(Z=G=[]);with(event)which&&(S=Z.find(v=>Math.hypot(v[1]-x,v[2]-y)<9),S[1]=x,S[2]=y);[,g,h]=location.hash.split`#`;j=g+h;G!=j&&(G=j,Z.push([h?((i=new Image).src=h,i):g,9,9]));with(this.getContext`2d`)this.height=-1,Z.map(z=>z[0].src?drawImage(...z):fillText(...z))">'}),
      create({c: '<canvas onclick="e=prompt();Z.push([event.x<99?((i=new Image).src=e,i):e,9,9])"onmousemove="with(event)with(getContext`2d`)height=-1,Z=self.Z?Z.map(t=>([j,k,l]=t)&&(j.src?drawImage(...t):fillText(...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[]">'}),
    ],
    [
      'With: round 3',
      create({c: '<canvas onclick="e=prompt();Z.push([event.x<99?((i=new Image).src=e,i):e,9,9])"onmousemove="with(event)with(getContext`2d`)height=-1,Z=self.Z?Z.map(t=>([j,k,l]=t)&&(j.src?drawImage(...t):fillText(...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[]">'}),
      create({c: 'canvas onmousemove="with(event)with(getContext`2d`)height=-1,E=self.E?E.map(t=>([j,k,l]=t)&&(j.src?drawImage(...t):fillText(...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],altKey&&((e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9]))"> '}),
    ],
    [
      'AltKey → mouse position',
      create({c: 'canvas onmousemove="with(event)with(getContext`2d`)height=-1,E=self.E?E.map(t=>([j,k,l]=t)&&(j.src?drawImage(...t):fillText(...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],altKey&&((e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9]))"> '}),
      create({c: '<canvas onmousemove="with(event)with(getContext`2d`)width=-1,E=self.E?E.map(t=>([j,k,l]=t)&&(j.src?drawImage(...t):fillText(...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],y<9&&((e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9]))">'}),
    ],
    [
      'Ternary for draw',
      create({c: '<canvas onmousemove="with(event)with(getContext`2d`)width=-1,E=self.E?E.map(t=>([j,k,l]=t)&&(j.src?drawImage(...t):fillText(...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],y<9&&((e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9]))">'}),
      create({c: '<canvas onmousemove="with(event)width=-1,E=self.E?E.map(t=>([j,k,l]=t)&&(getContext`2d`[j.src?`drawImage`:`fillText`](...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],y<9&&((e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9]))">'}),
    ],
    [
      'Get rid of some brackets',
      create({c: '<canvas onmousemove="with(event)width=-1,E=self.E?E.map(t=>([j,k,l]=t)&&(getContext`2d`[j.src?`drawImage`:`fillText`](...t))||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],y<9&&((e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9]))">'}),
      create({c: '<canvas onmousemove="with(event)width=-1,E=self.E?E.map(t=>([j,k,l]=t)&&getContext`2d`[j.src?`drawImage`:`fillText`](...t)||Math.hypot(k-x,l-y)<9?[j,x,y]:t):[],y<9&&(e=prompt())&&E.push([x<99?((i=new Image).src=e,i):e,9,9])">'}),
    ],
  ],
};
function create({c, b}) {
  return {
    c: c || '',
    b: b || [[0, c.length, 0]], // [start<number>, end<number>, highlightType<0|1|2|3>]
  };
}
function highlight(hl) {
  /**
   * To be able to understand what means selection.start === 0,
   * we need to understand the node's parent's index, take the
   * buckets[index - 1] and add it's `end` to selection.start
   *
   * We need to store both highlights and buckets. And buckets
   * are totally recalculated after the new highlight is pushed.
   *
   * Buckets – to be able to understand how many we need to add
   * to selection start (we can get the prev bucket by index).
   *
   * Highlights – to recalc the buckets, because usual (unhighlighted)
   * text could be split by new highlight and it seems to be painful
   * to resolve.
   */
  const selection = window.getSelection();
  const domNode = selection.focusNode.parentNode;
  const sig = state.domToSig.get(domNode);
  if (!sig) {
    debugger;
    throw new Error(`Couldn't find signature by domNode`, domNode);
  }
  let start = Math.min(selection.anchorOffset, selection.focusOffset);
  let end = Math.max(selection.anchorOffset, selection.focusOffset);
  // There could be are some buckets (spans) before the selection,
  // we need to add them to track the selection of the whole text.
  const index = Array
      .from(selection.focusNode.parentNode.childNodes)
      .indexOf(selection.focusNode);
  const prevBucket = sig.b[index - 1];
  if (prevBucket && prevBucket[1] - prevBucket[0] !== sig.c.length) {
    start += prevBucket[1];
    end += prevBucket[1];
  }
  const highlights = sig.b.filter(([start, end, hl]) => hl > 0);
  highlights.push([start, end, hl]);
  highlights.sort((a,b) => a[0] - b[0]);

  sig.b = fillGapsBetweenHighlights(sig.c, highlights);

  domNode.parentNode.replaceChild(render(state.domToSig, sig), domNode);
}
function fillGapsBetweenHighlights(content, highlights) {
  const buckets = [];
  let lastEnd = 0;
  for (let i = 0; i < highlights.length; i++) {
    const [start, end, hl] = highlights[i];
    if (lastEnd < start) {
      // Take the text between buckets
      buckets.push([lastEnd, start, 0]);
    }
    buckets.push(highlights[i]);
    lastEnd = end;
  }
  if (lastEnd < content.length) {
    // Take the text after last bucket
    buckets.push([lastEnd, content.length, 0]);
  }
  return buckets;
}
function highlightedCount(sig) {
  return sig.b
      .filter(([start, end, hl]) => hl === 1 || hl === 2)
      .reduce((sum, [start, end, hl]) => sum + end - start, 0);
}
function render(domToSig, element) {
  const {t, c, b} = element;
  const children = b.map(([start,end,hl]) => hl === 0
      ? c.slice(start, end)
      : {
        type: 'span',
        attr: {className: `highlight${hl}`},
        children: [c.slice(start, end)],
      });
  const domElement = DOM.element({
    type: 'div',
    attr: {className: 'code'},
    children,
  });
  domToSig.set(domElement, element);
  return domElement;
}
function renderHighlightedCount(sig) {
  return {
      type: 'span',
      attr: {className: 'hlCount'},
      children: [],
  };
}
function renderPage(title, a, b) {
  const row = DOM.element({type: 'div', attr: {className: 'row'}});
  const hlCountA = highlightedCount(a);
  const hlCountB = highlightedCount(b);
  const before = DOM.element({type: 'div', attr: {className: 'before'}, children: [
    {
      type: 'div',
      attr: {className: 'hlCount'},
      children: [
        hlCountA,
        {type: 'span', attr: {className: 'size'}, children: [ ` (${a.c.length}B)` ]},
      ],
    },
    render(state.domToSig, a),
  ]});
  const after = DOM.element({type: 'div', attr: {className: 'after'}, children: [
    {
      type: 'div',
      attr: {className: 'hlCount'},
      children: [
        hlCountB,
        {type: 'span', attr: {className: 'size'}, children: [ ` (${b.c.length}B)` ]},
      ],
    },
    render(state.domToSig, b),
  ]});
  row.appendChild(before);
  row.appendChild(DOM.element({type: 'div', children: [ -(hlCountA - hlCountB) ]}));
  row.appendChild(after);

  const page = DOM.element({type: 'div', attr: {className: 'page'}, children: [
    {type: 'div', attr: {className: 'title'}, children: [title]},
    row,
  ]});
  document.body.appendChild(page);
}

document.body.addEventListener('keydown', e => {
  if (e.key === '1' || e.key === '2' || e.key === '3') {
    highlight(+e.key);
  }
});

state.pages.forEach(([title, a, b]) => renderPage(title, a, b));
