var content = document.getElementById('content');
var count = prompt("Count: ");
var texts = [];
var seq = [];
var i;
var j;
var choice;
for (i = 0; i < count; i++)
{
    texts[i] = prompt('Text ' + (i + 1));
    seq[i] = prompt('Phase: '); 
}
for (i = 0; i < count; i++)
{
    for (j = 0; j < count; j++)
{
    if (i + 1 == seq[j])
    {
        choice = j;
    }
}
var button = document.createElement('button');
button.innerHTML = 'Section ' + (choice + 1); 
button.classList.add('accordion');
content.appendChild(button);
var div = document.createElement('div');
div.innerHTML = texts[choice];
div.classList.add('panel');
content.appendChild(div);
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++)
{
acc[i].addEventListener("click", function(){
this.classList.toggle("active");

var panel = this.nextElementSibling;
if (panel.style.display === "block")
{
    panel.style.display = "none";
}
else
{
    panel.style.display = "block";
}
});
}