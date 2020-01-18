$("ul").on("click","li",function(){
$(this).toggleClass("completed")
//<------------other way to do instead of adding the class completed:------------->
// if(	$(this).css("color") === "rgb(128, 128, 128)")
// {
// 	$(this).css({
// 		color:"black",
// 		textDecoration:"none"});
// }
// else 
// {
// 	$(this).css({
// 		color:"gray",
// 		textDecoration:"line-through"});
// }
//<------------------------------------------------>


// click on X to delete TODO
//when clicked on the li inside ul - if there are actions coordinated with clicks on ul and farther - this will also work - event bubble
//to prevent this: adding event object inside the function and add event.stopPropagation()
//this.parent() allows to select a parent element to operate;
//fadeOut isn't deleting but hides it on the page; in this case adding 500ms pause + removing the elemet. second this refers to the parent element - li
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function () {
		$(this).remove();
	});
	event.stopPropagation();
})

});


//adding an event listener that fires when I press enter key
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//saving the input data to a var
		var todoText = $(this).val();

		//cleaning out an input field
		$(this).val("");
		//create a new li and add to ul
		//append - first selecting an element to appending to
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>")
		// here there was a problem that I used .click() instead of on() and in this case X didn't delete tasks when new tasks were added
		//that's why .on() should be used - it applies for future events as well
		// ALSO INSTEAD OF APPLYING EVENT LISTENER TO THE LI I APPLIED IT To THE UL BECAUSE AT FIRST WE HAVE ONLY 3 LIs and UL ALWAYS EXISTS;
//		("ul").on("click","li",function() - this means WHEN AN LI IS CLICKED INSIDE OF THE UL, run the code;
	}
});

$("#todo1").hide();

$(".fa-plus").click(function (){
	$("input[type='text']").fadeToggle();
})
