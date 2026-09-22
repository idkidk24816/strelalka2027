gdjs.The_32bad_32endingCode = {};
gdjs.The_32bad_32endingCode.localVariables = [];
gdjs.The_32bad_32endingCode.idToCallbackMap = new Map();
gdjs.The_32bad_32endingCode.GDNewSpriteObjects1= [];
gdjs.The_32bad_32endingCode.GDNewSpriteObjects2= [];
gdjs.The_32bad_32endingCode.GDNewSprite2Objects1= [];
gdjs.The_32bad_32endingCode.GDNewSprite2Objects2= [];
gdjs.The_32bad_32endingCode.GDNewSprite3Objects1= [];
gdjs.The_32bad_32endingCode.GDNewSprite3Objects2= [];
gdjs.The_32bad_32endingCode.GDNewSprite4Objects1= [];
gdjs.The_32bad_32endingCode.GDNewSprite4Objects2= [];
gdjs.The_32bad_32endingCode.GDNewTexObjects1= [];
gdjs.The_32bad_32endingCode.GDNewTexObjects2= [];
gdjs.The_32bad_32endingCode.GDFiNaLsCoR2Objects1= [];
gdjs.The_32bad_32endingCode.GDFiNaLsCoR2Objects2= [];


gdjs.The_32bad_32endingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FiNaLsCoR2"), gdjs.The_32bad_32endingCode.GDFiNaLsCoR2Objects1);
{for(var i = 0, len = gdjs.The_32bad_32endingCode.GDFiNaLsCoR2Objects1.length ;i < len;++i) {
    gdjs.The_32bad_32endingCode.GDFiNaLsCoR2Objects1[i].getBehavior("Text").setText("Final Score: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "GameOver.mp3", false, 27, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.The_32bad_32endingCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.The_32bad_32endingCode.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs.The_32bad_32endingCode.GDNewSprite4Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.The_32bad_32endingCode.GDNewSprite4Objects1[k] = gdjs.The_32bad_32endingCode.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs.The_32bad_32endingCode.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Игра", false);
}
}

}


};

gdjs.The_32bad_32endingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.The_32bad_32endingCode.GDNewSpriteObjects1.length = 0;
gdjs.The_32bad_32endingCode.GDNewSpriteObjects2.length = 0;
gdjs.The_32bad_32endingCode.GDNewSprite2Objects1.length = 0;
gdjs.The_32bad_32endingCode.GDNewSprite2Objects2.length = 0;
gdjs.The_32bad_32endingCode.GDNewSprite3Objects1.length = 0;
gdjs.The_32bad_32endingCode.GDNewSprite3Objects2.length = 0;
gdjs.The_32bad_32endingCode.GDNewSprite4Objects1.length = 0;
gdjs.The_32bad_32endingCode.GDNewSprite4Objects2.length = 0;
gdjs.The_32bad_32endingCode.GDNewTexObjects1.length = 0;
gdjs.The_32bad_32endingCode.GDNewTexObjects2.length = 0;
gdjs.The_32bad_32endingCode.GDFiNaLsCoR2Objects1.length = 0;
gdjs.The_32bad_32endingCode.GDFiNaLsCoR2Objects2.length = 0;

gdjs.The_32bad_32endingCode.eventsList0(runtimeScene);
gdjs.The_32bad_32endingCode.GDNewSpriteObjects1.length = 0;
gdjs.The_32bad_32endingCode.GDNewSpriteObjects2.length = 0;
gdjs.The_32bad_32endingCode.GDNewSprite2Objects1.length = 0;
gdjs.The_32bad_32endingCode.GDNewSprite2Objects2.length = 0;
gdjs.The_32bad_32endingCode.GDNewSprite3Objects1.length = 0;
gdjs.The_32bad_32endingCode.GDNewSprite3Objects2.length = 0;
gdjs.The_32bad_32endingCode.GDNewSprite4Objects1.length = 0;
gdjs.The_32bad_32endingCode.GDNewSprite4Objects2.length = 0;
gdjs.The_32bad_32endingCode.GDNewTexObjects1.length = 0;
gdjs.The_32bad_32endingCode.GDNewTexObjects2.length = 0;
gdjs.The_32bad_32endingCode.GDFiNaLsCoR2Objects1.length = 0;
gdjs.The_32bad_32endingCode.GDFiNaLsCoR2Objects2.length = 0;


return;

}

gdjs['The_32bad_32endingCode'] = gdjs.The_32bad_32endingCode;
