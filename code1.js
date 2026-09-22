gdjs.The_32BeginningCode = {};
gdjs.The_32BeginningCode.localVariables = [];
gdjs.The_32BeginningCode.idToCallbackMap = new Map();
gdjs.The_32BeginningCode.GD_951053_951072_951079_951086_951074_951080_9595_951082_951072_951082_9595_951085_951080_951073_951091_951076_951100_9595_951082_951085_951086_951087_951086_951095_951082_951091Objects1= [];
gdjs.The_32BeginningCode.GD_951053_951072_951079_951086_951074_951080_9595_951082_951072_951082_9595_951085_951080_951073_951091_951076_951100_9595_951082_951085_951086_951087_951086_951095_951082_951091Objects2= [];
gdjs.The_32BeginningCode.GDNewSpriteObjects1= [];
gdjs.The_32BeginningCode.GDNewSpriteObjects2= [];
gdjs.The_32BeginningCode.GDNewSprite2Objects1= [];
gdjs.The_32BeginningCode.GDNewSprite2Objects2= [];
gdjs.The_32BeginningCode.GDNewSprite3Objects1= [];
gdjs.The_32BeginningCode.GDNewSprite3Objects2= [];
gdjs.The_32BeginningCode.GDNewSprite4Objects1= [];
gdjs.The_32BeginningCode.GDNewSprite4Objects2= [];
gdjs.The_32BeginningCode.GDNewSprite5Objects1= [];
gdjs.The_32BeginningCode.GDNewSprite5Objects2= [];
gdjs.The_32BeginningCode.GDNewTextObjects1= [];
gdjs.The_32BeginningCode.GDNewTextObjects2= [];


gdjs.The_32BeginningCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "menu.mp3", true, 27, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Назови_как_нибудь_кнопочку"), gdjs.The_32BeginningCode.GD_951053_951072_951079_951086_951074_951080_9595_951082_951072_951082_9595_951085_951080_951073_951091_951076_951100_9595_951082_951085_951086_951087_951086_951095_951082_951091Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.The_32BeginningCode.GD_951053_951072_951079_951086_951074_951080_9595_951082_951072_951082_9595_951085_951080_951073_951091_951076_951100_9595_951082_951085_951086_951087_951086_951095_951082_951091Objects1.length;i<l;++i) {
    if ( gdjs.The_32BeginningCode.GD_951053_951072_951079_951086_951074_951080_9595_951082_951072_951082_9595_951085_951080_951073_951091_951076_951100_9595_951082_951085_951086_951087_951086_951095_951082_951091Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.The_32BeginningCode.GD_951053_951072_951079_951086_951074_951080_9595_951082_951072_951082_9595_951085_951080_951073_951091_951076_951100_9595_951082_951085_951086_951087_951086_951095_951082_951091Objects1[k] = gdjs.The_32BeginningCode.GD_951053_951072_951079_951086_951074_951080_9595_951082_951072_951082_9595_951085_951080_951073_951091_951076_951100_9595_951082_951085_951086_951087_951086_951095_951082_951091Objects1[i];
        ++k;
    }
}
gdjs.The_32BeginningCode.GD_951053_951072_951079_951086_951074_951080_9595_951082_951072_951082_9595_951085_951080_951073_951091_951076_951100_9595_951082_951085_951086_951087_951086_951095_951082_951091Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Игра", false);
}
}

}


};

gdjs.The_32BeginningCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.The_32BeginningCode.GD_951053_951072_951079_951086_951074_951080_9595_951082_951072_951082_9595_951085_951080_951073_951091_951076_951100_9595_951082_951085_951086_951087_951086_951095_951082_951091Objects1.length = 0;
gdjs.The_32BeginningCode.GD_951053_951072_951079_951086_951074_951080_9595_951082_951072_951082_9595_951085_951080_951073_951091_951076_951100_9595_951082_951085_951086_951087_951086_951095_951082_951091Objects2.length = 0;
gdjs.The_32BeginningCode.GDNewSpriteObjects1.length = 0;
gdjs.The_32BeginningCode.GDNewSpriteObjects2.length = 0;
gdjs.The_32BeginningCode.GDNewSprite2Objects1.length = 0;
gdjs.The_32BeginningCode.GDNewSprite2Objects2.length = 0;
gdjs.The_32BeginningCode.GDNewSprite3Objects1.length = 0;
gdjs.The_32BeginningCode.GDNewSprite3Objects2.length = 0;
gdjs.The_32BeginningCode.GDNewSprite4Objects1.length = 0;
gdjs.The_32BeginningCode.GDNewSprite4Objects2.length = 0;
gdjs.The_32BeginningCode.GDNewSprite5Objects1.length = 0;
gdjs.The_32BeginningCode.GDNewSprite5Objects2.length = 0;
gdjs.The_32BeginningCode.GDNewTextObjects1.length = 0;
gdjs.The_32BeginningCode.GDNewTextObjects2.length = 0;

gdjs.The_32BeginningCode.eventsList0(runtimeScene);
gdjs.The_32BeginningCode.GD_951053_951072_951079_951086_951074_951080_9595_951082_951072_951082_9595_951085_951080_951073_951091_951076_951100_9595_951082_951085_951086_951087_951086_951095_951082_951091Objects1.length = 0;
gdjs.The_32BeginningCode.GD_951053_951072_951079_951086_951074_951080_9595_951082_951072_951082_9595_951085_951080_951073_951091_951076_951100_9595_951082_951085_951086_951087_951086_951095_951082_951091Objects2.length = 0;
gdjs.The_32BeginningCode.GDNewSpriteObjects1.length = 0;
gdjs.The_32BeginningCode.GDNewSpriteObjects2.length = 0;
gdjs.The_32BeginningCode.GDNewSprite2Objects1.length = 0;
gdjs.The_32BeginningCode.GDNewSprite2Objects2.length = 0;
gdjs.The_32BeginningCode.GDNewSprite3Objects1.length = 0;
gdjs.The_32BeginningCode.GDNewSprite3Objects2.length = 0;
gdjs.The_32BeginningCode.GDNewSprite4Objects1.length = 0;
gdjs.The_32BeginningCode.GDNewSprite4Objects2.length = 0;
gdjs.The_32BeginningCode.GDNewSprite5Objects1.length = 0;
gdjs.The_32BeginningCode.GDNewSprite5Objects2.length = 0;
gdjs.The_32BeginningCode.GDNewTextObjects1.length = 0;
gdjs.The_32BeginningCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['The_32BeginningCode'] = gdjs.The_32BeginningCode;
