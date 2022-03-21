var adWidth = 300, adHeight = 250;

var variables;
var images = [];

function ftInit() {
    myFT.on("instantads", function (e) {
        preload();
    });
}

function preload() {

  variables = myFT.instantAds;

  setMetaData(
    headline1, 
    variables.F1headlineTxt_size_hex_xy
  );

  setMetaData(
    headline2, 
    variables.F2headlineTxt_size_hex_xy
  );

  setMetaData(
    headline3, 
    variables.F3headlineTxt_size_hex_xy
  );

  setMetaData(
    headline4, 
    variables.F4headlineTxt_size_hex_xy
  );

  setMetaData(
    legal, 
    variables.F4_legal_Txt_size_hex_xy
  );

  setMetaData(
    cta, 
    variables.cta_txt_size_hex_xy
  );


    var imageCount = 2, imageLoaded = 0;

    bg.src = variables.background_img;
    bg.addEventListener("load", iLoad, false);

    logo.src = variables.logo_img;
    logo.addEventListener("load", iLoad, false);

    
    function iLoad() {
        imageLoaded++;
        if(imageLoaded == imageCount) {
            init();
        }
    }


    ISIText.innerHTML = myFT.instantAds.ISI_txt;



}



//  Feedback updated code...........

function init() {
  ssb.scrollbar('ISIContainer'); // scrollbar initialization  
  

  var tl = new TimelineMax();
  tl.set('.main', {opacity: 1});

  tl.to('#bg', 0.5, { autoAlpha: 1 }, "+=0.2");
  tl.to('#headline1', 0.5, { autoAlpha: 1 });
  tl.to('#bg', 5, { scale: 2.65, x:77, y:104 });
  tl.to('#headline1', 0.5, { autoAlpha: 0 }, "-=3");
  tl.to('#headline2', 0.5, { autoAlpha: 1 }, "-=2");
  tl.to('#headline2', 0.5, { autoAlpha: 0 }, "+=0");
  tl.to('#logo', 0.5, { autoAlpha: 1 }, "+=0");
  tl.to('#bg', 5, { scale: 1, x:0, y:0 });
  tl.to(['#legal','#indication','#ISIWrapper', '#ISIFooter'], 0.5, { autoAlpha: 1});
  tl.to('#headline3', 0.5, { autoAlpha: 1 }, "+=0");
  tl.to('#headline3', 0.5, { autoAlpha: 0 }, "+=2");
  tl.to('#headline4', 0.5, { autoAlpha: 1 }, "+=0");
  tl.to('#cta', 0.5, { autoAlpha: 1, onComplete: function(){
    frame4();
  } }, "+=0");


}

function setClicktags() {
  myFT.applyClickTag(banner, 1, variables.clickTag1_url);
  myFT.applyClickTag(prescribe, 2, variables.clickTag2_url);
  myFT.applyClickTag(patientInfo, 3, variables.clickTag3_ISI_url);
  myFT.applyClickTag(document.getElementById('prescribeisi'), 2, variables.clickTag4_FPI);
  myFT.applyClickTag(document.getElementById('pi'), 3, variables.clickTag5_PI);
  myFT.applyClickTag(document.getElementById('here'), 4, variables.clickTag3_ISI_url);
}


function setMetaData(element, txt_fontsize_copycolor_XY) {

  if (txt_fontsize_copycolor_XY && 
      txt_fontsize_copycolor_XY.trim() &&
      txt_fontsize_copycolor_XY.trim().split("|").length !== 0 &&
      txt_fontsize_copycolor_XY.trim().split("|")[0]
  ) {
    element.innerHTML = txt_fontsize_copycolor_XY.trim().split("|")[0];
    console.log(element, txt_fontsize_copycolor_XY);
  }

  if (txt_fontsize_copycolor_XY && 
      txt_fontsize_copycolor_XY.trim() &&
      txt_fontsize_copycolor_XY.trim().split("|").length !== 0 &&
      txt_fontsize_copycolor_XY.trim().split("|")[1]
  ) {
      element.style.setProperty('font-size',  txt_fontsize_copycolor_XY.trim().split("|")[1]+ 'px');
  }

  if (txt_fontsize_copycolor_XY && 
      txt_fontsize_copycolor_XY.trim() &&
      txt_fontsize_copycolor_XY.trim().split("|").length !== 0 &&
      txt_fontsize_copycolor_XY.trim().split("|")[0]
  ) {
      element.style.setProperty('color', txt_fontsize_copycolor_XY.trim().split("|")[2]);
  }

  if (txt_fontsize_copycolor_XY && 
      txt_fontsize_copycolor_XY.trim() &&
      txt_fontsize_copycolor_XY.trim().split("|").length !== 0 &&
      txt_fontsize_copycolor_XY.trim().split("|")[3] &&
      txt_fontsize_copycolor_XY.trim().split("|")[3].split(",").length !== 0 &&
      txt_fontsize_copycolor_XY.trim().split("|")[3].split(",")[0]
  ) {
      element.style.setProperty('left', txt_fontsize_copycolor_XY.trim().split("|")[3].split(",")[0] + 'px');
  }
  if (txt_fontsize_copycolor_XY && 
      txt_fontsize_copycolor_XY.trim() &&
      txt_fontsize_copycolor_XY.trim().split("|").length !== 0 &&
      txt_fontsize_copycolor_XY.trim().split("|")[3] &&
      txt_fontsize_copycolor_XY.trim().split("|")[3].split(",").length !== 0 &&
      txt_fontsize_copycolor_XY.trim().split("|")[3].split(",")[1]
  ) {
      element.style.setProperty('top', txt_fontsize_copycolor_XY.trim().split("|")[3].split(",")[1] + 'px');
  }

}

