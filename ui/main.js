console.log('Loaded!');
var img=document.getElementById('modi');
var moveLeft=0;
function moveRight()
{
    moveLeft=moveLeft+10;
    img.style.marginLeft=moveLeft+ 'px';
}
img.onclick= function()
{
    var internal=SetInternal(moveRight,100);
};