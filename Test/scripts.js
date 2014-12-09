function addListItem(){
	var text = $("#new-text").val();
	$("#tasklist").append('<li><input type="checkbox" class = "done" /> '+text+' <button class ="delete">Delete</button></li>');
	$("#textbox").val('');
}
function deleteItem(){
	$(this).parent().remove();
}
function finishItem(){
	if( $(this).parent().css('textDecoration') == 'line-through') {
		$(this).parent().css('textDecoration', 'none');
	}
	else{
		$(this).parent().css('textDecoration', 'line-through');
	}

}
$(function() {
	$("#add").on('click',addListItem);
	$(document).on('click', '.delete', deleteItem);
	$(document).on('click', '.done', finishItem);
});
